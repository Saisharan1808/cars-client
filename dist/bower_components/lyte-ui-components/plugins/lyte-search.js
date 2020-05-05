;(function(){
    if( lyteDomObj ){
        lyteDomObj.prototype.search = function(data){
            data = data ? data : {};
            if(!data.scope)
                {
                    console.error('scope is not given');
                    return;
                }
            var scope = typeof data.scope == 'string' ? document.body.querySelector( data.scope.trim() ) : data.scope;    
            var element = this[ 0 ]
            var searchList = [], targetList = [], searchComp = [];
            element._searchPluginData = data;
            if( data.component == "accordion" ){
               data.related = "lyte-accordion-item";
            } else if( data.component == "tree" ){
               data.related = ".lyteTreeBodyDiv lyte-yield:not(.noChildClass) lyte-tree-icon";
            }

            element.setValue = function(value){
                var element = this
                value = value != undefined ? value : '';
                element.tagName == 'LYTE-INPUT' ? element.ltProp({'value' : value}) : element.value = value;
                var evt = new Event('keyup');
                evt.keyCode = 8;
                element.dispatchEvent(evt);
            }

            var arrayFrom = function(nodeList){
              var arrayList = [];
              for(var i = 0; i < nodeList.length; i++)
                {
                  arrayList.push(nodeList[i]);
                }
              return arrayList.slice(); 
             };

            var pressFunc = function(event){
                var element = this;
                event = event || {};
                var data = this._searchPluginData;
                var ret = findingList.call(this,event); 
                var searchList = ret[0]; 
                var targetList = ret[1];
                var searchComp = ret[2],
                related = ret[ 3 ];
                var minLength = data.minLength ? data.minLength : 0;
                var method = data.method ? data.method : 'contains';
                var val = (element.tagName == 'LYTE-INPUT' ? element.querySelector( 'input,textarea' ).value : element.value);
                var visibleList = [], flag; 
                if(val.length >= minLength || event.keyCode == 8)
                  { 
                    if(val.length)
                        {
                          for(var i = 0; i < searchList.length; i++)
                             { 
                              var check = false, str = searchList[i].trim().toLowerCase(), val = val.toLowerCase();
                               switch(method)
                                  {
                                    case 'contains' : {
                                      check = str.indexOf( val ) >= 0;
                                        break;    
                                     }
                                      case 'startsWith' : {
                                          check = str.indexOf( val ) == 0;
                                          break;
                                     }
                                     case 'endsWith' : {
                                          var ind = str.lastIndexOf( val );
                                          if( ind != -1 ) {
                                              check = ( ind + val.length ) == searchList[i].trim().length;
                                          } 
                                          break;
                                     }
                                  }
                                  if( check ) {
                                        visibleList.push(searchComp[i]);
                                   }   
                              }
                        }
                     else
                        {
                          visibleList = searchComp;
                        }   
                    if( data.onSearch && data.onSearch( visibleList, event , val ) == false ){
                      return;
                    }
                     for(var i = 0; i < searchList.length; i++)
                         {  
                             var check = false, str = searchList[i].trim().toLowerCase(), val = val.toLowerCase();
                            switch(method)
                              {
                                case 'contains' : {
                                    check = str.indexOf( val ) >= 0
                                    break;    
                                 }
                                 case 'startsWith' : {
                                     check = str.indexOf( val ) == 0; 
                                     break;
                                 }
                                 case 'endsWith' : {
                                      var ind = searchList[i].trim().toLowerCase().lastIndexOf(val.toLowerCase());
                                      if( ind != -1 ) {
                                          check = ( ind + val.length ) == searchList[i].trim().length;
                                      } 
                                      break;
                                 }
                              }  
                              additionalHand.call( this, targetList[i], check, val )   
                         } 
                    for( var i = 0; i < related.length; i++ ) {
                         if( data.component == "accordion" && related[ i ]._state == undefined ){
                             if( !related[ i ].querySelector( 'lyte-accordion-body' ) ){
                                if( !val ){
                                  related[ i ].classList.remove( 'lyteSearchHidden' );
                                } else{
                                  related[ i ].classList.add( 'lyteSearchHidden' );
                                }
                                continue;
                             }
                             related[ i ]._state = related[ i ].classList.contains( 'lyteAccordionActive' );
                          } else if( data.component == "tree" ){
                            if( related[ i ]._state == undefined ){
                               related[ i ]._state = related[ i ].classList.contains( 'lyteIconOpened' );
                            }
                            continue;
                          }
                        if( related[ i ].querySelectorAll( data.target || data.search ).length == related[ i ].querySelectorAll( '.lyteSearchHidden' ).length ){
                            related[ i ].classList.add( 'lyteSearchHidden' );
                        } else {
                            related[ i ].classList.remove( 'lyteSearchHidden' );
                        }
                    } 
                   if( !val && data.component == "tree" ){
                      hiderecurse( $L( data.scope + ' lyte-yield:not(.noChildClass) lyte-tree-icon'  ))
                   }
                }                 
            };
        function hiderecurse( elem ){
           for( var i = elem.length - 1; i >= 0; i-- ) {
              var icon = elem.eq( i );
              // if( icon[ 0 ]._state != undefined ){
              //   if( ( icon[ 0 ]._state && !icon.hasClass( 'lyteIconOpened' ) ) || ( !icon[ 0 ]._state && icon.hasClass( 'lyteIconOpened' ) ) ){
              //      setTimeout( icon.click.bind( icon ) , 20 );
              //   }
              //   continue;
              // }
              if( icon.hasClass( 'lyteIconOpened' ) ){
                  setTimeout( icon.click.bind( icon ) , 20 );
              }
              delete icon[ 0 ]._state;
           }
        }

        var searchListFind = function(nodeName){
              var searchList = [];
              var target = [];
              for(var i = 0; i < nodeName.childElementCount; i++)
                {
                  while(nodeName.children[i].childElementCount)
                     {
                        returnedVal = searchListFind(nodeName.children[i]);
                        searchList = searchList.concat(returnedVal[0]);
                        target = target.concat(returnedVal[1]);
                        break;
                     }
                  if(!nodeName.children[i].childElementCount) 
                      {
                        searchList.push(nodeName.children[i].textContent);
                        target.push(nodeName.children[i]);
                      }
                }
              return [searchList,target];
         };

      var findingList = function(){
            var data = this._searchPluginData;
            var scope = typeof data.scope == 'string' ? document.querySelector(data.scope) : data.scope;
            var searchList = [], targetList = [], searchComp = [], related = [];
            if(data.search)   
                {
                    searchComp = scope.querySelectorAll( data.search.trim() )
                    var target = data.target ? data.target : data.search;
                    for(var j = 0; j < searchComp.length; j++){
                        searchList.push(searchComp[j].textContent)
                    }
                    targetList = scope.querySelectorAll( target )
                }
            else
                {
                    var callSearchList = searchListFind(scope)
                    searchList = callSearchList[0];
                    targetList = callSearchList[1];
                    searchComp = targetList.slice();
                } 
              if( data.related && ( data.target || data.scope  ) ) {
                  related = scope.querySelectorAll( data.related );
              }
              return [searchList, targetList, searchComp, related];  
      };

      function removeClse( target, selector, scope ){
            var el = $L( target ).closest( selector, scope );
            if( el.length ){
               el.removeClass( 'lyteSearchHidden' );
               removeClse( target, selector, scope );
            }
        }

      function additionalHand( target, check, val ){
          var query = this._searchPluginData, comp = query.component, scp = query.scope.constructor == String ? document.querySelector( query.scope ) : query.scope;
          if( check ){
                if( comp ){
                    if( comp == "accordion" ){
                      var close = $L( target ).closest( 'lyte-accordion-item' ), body = $L( 'lyte-accordion-body', close )
                      clearTimeout( close[ 0 ]._comptime );
                      close[ 0 ]._comptime = setTimeout( function(){
                          val.length && !close.hasClass( 'lyteAccordionActive' ) && close.click();
                          if( !val ){
                              close.click(); delete close[ 0 ]._state;
                          }
                      }.bind( this ) , 20 )
                      !val && body.addClass( 'lyteSearchHidden' );
                      body.length && clearTimeout( body[ 0 ]._comptime );
                      if( body.length ){
                        body[ 0 ]._comptime =  setTimeout( function(){
                          body.removeClass( 'lyteSearchHidden' );
                        }, 20)
                      }
                    } else if( comp == 'dropdown' ){
                      var clo = $L( target ).closest( 'lyte-drop-box' )[ 0 ] 
                      if( clo ) {
                        clo.classList.contains( 'lyteDropdownHidden' ) && clo.origindd.toggle()
                      }
                    } else if( comp == 'tree' ){
                        removeClse( target, ( query.target || query.search ) + '.lyteSearchHidden', query.scope )
                        clearTimeout( target._comptime );
                        target._comptime = setTimeout( function(){
                          var to = $L( target.children[ 0 ] ).attr( 'data-value' )/*.replace( /.$/, '')*/;
                          document.body.contains( scp ) && to.length && scp.ltProp( 'stateAttr', to);
                        }, 20 )
                    }
                } 
                 target.classList.remove( 'lyteSearchHidden' );
            } else {
                clearTimeout( target._comptime );
                if( target.classList.contains( 'lyteSearchHidden' ) ){
                  return;
                }
               target.classList.add( 'lyteSearchHidden' );
            }
            if(comp=='accordion'){
                setTimeout(function(){
                    $L( target ).closest( 'lyte-accordion-body' ).css( 'height', 'auto' );
                }.bind(this),0)
              clearTimeout( this._acctime );
              this._acctime = setTimeout( scp.component.getAllHeights.bind( scp.component ), 0 )
            } else if( comp == 'tree' ){
              clearTimeout( target._comptime );
          }
      }

       element.addEventListener('keyup', function(event){
              if([37,13,38,39,40,91,27,16,18].indexOf(event.keyCode) > -1){ 
                return
              }
              var element = this;
              var data = element._searchPluginData;
              clearTimeout(this.timeout); 
              clearTimeout( this._iptime );
              this.timeout = setTimeout( pressFunc.bind( this ), 100, event );
        }); 

        element.addEventListener( 'input', function( event ){
            clearTimeout( this._iptime );
            this._iptime = setTimeout( pressFunc.bind( this ), 30, event )
        });
        element.reset = pressFunc.bind( element );                  

        }
    }
})();
