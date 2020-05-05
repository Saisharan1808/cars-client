Lyte.Component.register("lyte-menu",{_template:'<template tag-name="lyte-menu">\n\t<lyte-menu-box class="{{ltPropWrapperClass}}" onmousemove="{{action( \'mousemove\', event, this )}}">\n\t<template is="if" value="{{expHandlers(ltPropYield,\'==\',false)}}"><template case="true">\n\t\t\t<lyte-menu-body id="{{ltPropId}}" class="{{ltPropClass}}" tabindex="1">\n\t\t\t\t<template is="for" items="{{ltPropContent}}" item="menu" index="indexVal"><template is="if" value="{{lyteUiOptGroupCheck(menu)}}"><template case="true">\n\t\t\t\t\t\t\t        <lyte-menu-group elemorder="{{indexVal}}">\n\n\t\t\t\t\t\t\t        \t<template is="if" value="{{lyteUiReturnOnlyKey(menu)}}"><template case="true">\n\t\t\t\t\t\t\t\t           <lyte-menu-header>\n\t\t\t\t\t\t\t\t           \t\t\t{{lyteUiReturnOnlyKey(menu)}}\n\t\t\t\t\t\t\t\t           </lyte-menu-header>\n\t\t\t\t\t\t\t           \t</template></template>\n\t\t\t\t\t\t\t              <template is="for" items="{{lyteUiReturnOnlyValue(menu)}}" item="menu1" index="indexVal1"><template is="if" value="{{expHandlers(lyteUiIsObject(menu1),\'==\',false)}}"><template case="true">\n\t\t\t\t\t\t                                   <lyte-menu-item grporder="{{indexVal}}" elemorder="{{indexVal1}}" data-value="{{menu1}}">\n\t\t\t\t\t\t                                          <lyte-menu-label>{{menu1}}</lyte-menu-label>\n\t\t\t\t\t\t                                    </lyte-menu-item>\n\t\t\t\t\t\t\t                          </template><template case="false">\n\t\t\t\t\t                                      <lyte-menu-item grporder="{{indexVal}}" elemorder="{{indexVal1}}" id="{{menu1.id}}" class="{{menu1.class}}" data-value="{{menu1[ltPropSystemValue]}}">\n\t\t\t\t\t                                          <lyte-menu-label>{{menu1[ltPropUserValue]}}</lyte-menu-label>\n\t\t\t\t\t                                              <template is="if" value="{{menu1[ltPropDescription]}}"><template case="true">\n\t\t\t\t\t                                                  <lyte-menu-description> {{menu1[ltPropDescription]}}</lyte-menu-description>\n\t\t\t\t\t                                              </template></template>\n\t\t\t\t\t                                      </lyte-menu-item>\n\t\t\t\t\t                                </template></template></template>\n\t\t\t\t\t\t\t      </lyte-menu-group>\n\t\t\t\t\t      </template><template case="false"><template is="if" value="{{expHandlers(lyteUiIsObject(menu),\'==\',false)}}"><template case="true">\n\t\t\t                         <lyte-menu-item elemorder="{{indexVal}}" data-value="{{menu}}">\n\t\t\t                                <lyte-menu-label>{{menu}}</lyte-menu-label>\n\t\t\t                          </lyte-menu-item>\n\t\t\t\t                  </template><template case="false">\n\t\t\t\t                        <lyte-menu-item elemorder="{{indexVal}}" id="{{menu.id}}" class="{{menu.class}}" data-value="{{menu[ltPropSystemValue]}}">\n\t\t\t\t                            <lyte-menu-label>{{menu[ltPropUserValue]}}</lyte-menu-label>\n\t\t\t\t                                <template is="if" value="{{menu[ltPropDescription]}}"><template case="true">\n\t\t\t\t                                    <lyte-menu-description> {{menu[ltPropDescription]}}</lyte-menu-description>\n\t\t\t\t                                </template></template>\n\t\t\t\t                        </lyte-menu-item>\n\t\t\t\t                  </template></template></template></template></template>\n\t\t    </lyte-menu-body>\n\t      </template><template case="false">\n\t   \t\t\t<lyte-yield yield-name="yield"></lyte-yield>\n\t   \t   </template></template>\n\t   </lyte-menu-box>\t   \t    \n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"attr",position:[1,3]},{type:"for",position:[1,3],dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0]},{type:"componentDynamic",position:[1,1]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"componentDynamic",position:[1]}]}},default:{}}]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,0]},{type:"componentDynamic",position:[1,1]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"text",position:[1,1]},{type:"componentDynamic",position:[1]}]}},default:{}},{type:"componentDynamic",position:[1]}]}},default:{}}]}},default:{}}]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"insertYield",position:[1]}]}},default:{}},{type:"componentDynamic",position:[1]}],_observedAttributes:["ltPropContent","ltPropId","ltPropClass","ltPropQuery","ltPropEvent","ltPropYield","ltPropUserValue","ltPropSystemValue","ltPropCallout","ltPropPosition","ltPropDescription","ltPropTabIndex","ltPropFreeze","ltPropShow","ltPropWidth","ltPropHeight","ltPropQueryClass","ltPropBoundary","ltPropScope","ltPropPreventInsideClick","ltPropAnimate","ltPropSetCss","ltPropWrapperClass","eventListeners","pos","parIndex"],init:function(){var t=this.getData("ltPropEvent"),e=this.checkElementForMenu.bind(this);this.setData("eventListeners.event",e),this._close=this.closing.bind(this),this._trsend=this.tranEnd.bind(this),this._hoverclose=this.hoverClose.bind(this),document.addEventListener("mouseenter"==t?"mousemove":t,e,!0),this.menuNodes=[],!document.querySelector(".lytemenufreezelayer")&&this.$node.ltProp("freeze")&&(this.appendFreeze.call(this,"lytemenufreezelayer left lyteMenuHidden"),this.appendFreeze.call(this,"lytemenufreezelayer top lyteMenuHidden"),this.appendFreeze.call(this,"lytemenufreezelayer bottom lyteMenuHidden"),this.appendFreeze.call(this,"lytemenufreezelayer right lyteMenuHidden"),this.appendFreeze.call(this,"lytemenufreezelayer nogroup lyteMenuHidden"),document.body.querySelector("div.nogroup.lytemenufreezelayer").addEventListener("wheel",this.preventEvent)),document.hasOwnProperty("_lyteMenu")||(document.documentElement.addEventListener("click",lyteCloseMenu,!0),document.documentElement.addEventListener("keydown",this.keydownCheck,!0),document.documentElement.addEventListener("keypress",menukeypress,!0),window.addEventListener("resize",this.resizeFunc,!0),document._lyteMenu={},document._lyteMenu.eventFlag=!0),this.getMethods("beforeRender")&&this.executeMethod("beforeRender",this.$node)},rtlfunc:function(t,e,o){if(this._dir){if(e)return"right"==t?o-e.left:o-e.right;if("left"==t)return"right"}return e?e[t]:"left"},actions:{mousemove:function(t,e){for(var o=t.target;o&&"BODY"!=o.tagName&&"LYTE-MENU-ITEM"!=o.tagName;)o=o.parentNode;if(o&&"LYTE-MENU-ITEM"==o.tagName){var i=e.querySelector(".lyteMenuSelection");if(i==o)return;i?(i.classList.remove("lyteMenuSelection"),o.classList.add("lyteMenuSelection")):i||o.classList.add("lyteMenuSelection")}}},arrayFrom:function(t){for(var e=[],o=0;o<t.length;o++)e.push(t[o]);return e.slice()},heightObs:function(){this.menuBody.style.height=this.getData("ltPropHeight")}.observes("ltPropHeight").on("didConnect"),appendFreeze:function(t){var e;(e=document.createElement("div")).setAttribute("class",t),document.body.appendChild(e)},resizeFunc:function(t){clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(function(){for(var t=document.querySelectorAll("lyte-menu:not(.lyteMenuClosed)"),e=0;e<t.length;e++)if(!t[e].component.hasOwnProperty("parentMenu")){"contextmenu"==t[e].component.data.ltPropEvent?t[e].component.setContextCss.call(t[e].component):t[e].component.setCss.call(t[e].component);var o=t[e].component.childMenu;o&&o.setCss.call(o);var i=t[e].component;i.getData("ltPropFreeze")&&!i.parentMenu&&setTimeout(i.setZIndex.bind(i),100),setTimeout(i.heightCheck.bind(i,i.childComp),100)}}.bind(this),16)},keydownCheck:function(t){var e=t.which||t.keyCode;if(27==e)lyteCloseMenu(t,void 0,!0);else if(/^(38|40|13)$/.test(e)){var o=document.querySelectorAll("lyte-menu:not(.lyteMenuClosed)[lyte-rendered]");if(o.length){for(var i=0;i<o.length;i++){var n=o[i].component;if(!n.childMenu){n.traverseList.call(n,t);break}}/^(38|40)$/.test(e)&&t.preventDefault()}}},searchFilter:function(t){if(this._typed="",t){for(var e=this.childComp.querySelectorAll("lyte-menu-item"),o={},i=0;i<e.length;i++){var n=e[i].textContent.trim().toLowerCase().indexOf(t);-1!=n&&(n<o.index||void 0==o.index)&&(o.item=e[i],o.index=n)}if(o.item){var s=this.childComp.querySelector("lyte-menu-item.lyteMenuSelection");if(o.item==s)return;s&&s.classList.remove("lyteMenuSelection"),o.item.classList.add("lyteMenuSelection"),this.scrIntoView.call(this,o.item)}}},scrIntoView:function(t){$L.fastdom.measure(function(){var e=t.getBoundingClientRect(),o=this.findscrElem.call(this,t),i=o.getBoundingClientRect();$L.fastdom.mutate(function(){e.bottom>i.bottom?o.scrollTop+=parseInt(e.bottom-i.bottom):e.top<i.top&&(o.scrollTop+=parseInt(e.top-i.top))}.bind(this))}.bind(this))},findscrElem:function(t){for(var e=t.parentNode;e&&"LYTE-MENU-BODY"!=e.nodeName;){var o=window.getComputedStyle(e).getPropertyValue("overflow-y");if(e.scrollHeight>e.offsetHeight&&("auto"==o||"scroll"==o))break;e=e.parentNode}return e},didDestroy:function(){for(var t=this.childComp.querySelectorAll("lyte-menu-item"),e=0;e<t.length;e++){t[e].getAttribute("lyte-shortcut")&&t[e].setAttribute("lyte-shortcut",JSON.stringify({}))}var o=this.getData("eventListeners"),i=this.getData("ltPropEvent");if(this.childComp&&this.childComp.parentElement.removeChild(this.childComp),0==document.body.querySelectorAll("lyte-menu").length){var n=document.body.querySelectorAll("div.lytemenufreezelayer");for(e=0;e<n.length;e++)document.body.removeChild(n[e]);document._lyteMenu&&(delete document._lyteMenu,document.documentElement.removeEventListener("keydown",this.keydownCheck,!0),document.documentElement.removeEventListener("keypress",menukeypress,!0),document.documentElement.removeEventListener("click",lyteCloseMenu,!0),window.removeEventListener("resize",this.resizeFunc,!0))}else this.data.ltPropShow&&this.data.ltPropFreeze&&this.removeFreeze();var s,l=this.getData("ltPropQuery"),r=this.getData("parIndex");if((l||void 0!=r)&&(l&&(s=document.querySelectorAll(l)),document.removeEventListener("mouseenter"==i?"mousemove":i,o.event,!0),l))for(e=0;e<s.length;e++)delete s[e].menu;void 0!=this._bodyoverflow&&(document.body.style.overflow=this._bodyoverflow),clearTimeout(this._typetime),delete this.menuNodes,delete this.menuBody,delete this.childComp},closestFind:function(t,e){for(var o=this.getData("parIndex"),i=this.arrayFrom.call(this,void 0!=o?this.$node.parentNode.parentNode.querySelectorAll("lyte-menu-item:nth-of-type("+ ++o+")"):document.querySelectorAll(e.trim())),n=0;n<t.length;n++)if(-1!=Array.prototype.indexOf.call(i,t[n]))return t[n];return null},checkElementForMenu:function(t){if(!t.menuFlag){var e=this.getData("ltPropQuery"),o=this.closestFind.call(this,t.path?t.path:this.composePath.call(this,t),e);if(null!=o){if(this._evtadded)return void(this.data.ltPropAnimate&&0==parseInt(this.menuBody.style.height)&&this.setData("ltPropShow",!1));if(!this.childComp.classList.contains("lyteMenuHidden")&&this.$node.element!=o){this.childComp.classList.remove("lyteAnimate"),this._hideStarts=!0,this._closest=o,this._event=t;var i=new Promise(function(e,o){this._promResolve=e,this._promReject=o,this.hideMenu.call(this,!0,t)}.bind(this));return void Promise.resolve(i).then(function(){this.openingMenu(this._closest,this._event),delete this._closest,delete this._event,delete this._promReject,delete this._promResolve}.bind(this),function(){delete this._closest,delete this._event,delete this._promReject,delete this._promResolve}.bind(this))}this.openingMenu(o,t)}}},openingMenu:function(t,e){"LYTE-MENU-ITEM"==t.tagName&&"click"==e.type&&e.stopPropagation(),"contextmenu"==e.type&&e.preventDefault(),e.menuFlag=!0,$L.fastdom.mutate(function(){this.$node.element=t,t.menu=this.$node,this.parentMenu||this.$node.toggle(e||{})}.bind(this))},didConnect:function(){var t=this.$node.querySelector("lyte-menu-box"),e=this.$node.querySelector("lyte-menu-body");this.$node.toggle=function(t,e){this.childComp.classList.contains("lyteMenuHidden")||e?(["mousedown","mouseup"].indexOf(t.type)>-1&&(document._lyteMenu.preventClick=!1),this.openMenu.call(this,t)):this.childMenu||-1!=t.type.indexOf("mouse")||this._hideStarts||this.hideMenu.call(this,!0,t)}.bind(this),e.addEventListener("click",this.optionSelect.bind(this)),e.parent=this.$node,t.parent=this.$node,this.childComp=t,this.menuBody=e,t.classList.add("lyteMenuHidden"),this.$node.classList.add("lyteMenuClosed");var o=document.createElement("span");o.setAttribute("class","lyteArrow"+(this.data.ltPropCallout?"":" lyteMenuHidden")),e.insertBefore(o,e.children[0]),t.style.width=this.getData("ltPropWidth"),LyteComponent.appendChild(document.body,t),this.getMethods("afterRender")&&this.executeMethod("afterRender",this.$node),$L.fastdom.measure(function(){this._dir=_lyteUiUtils.getRTL(),this._dir&&$L.fastdom.mutate(function(){this.menuBody.classList.add("lyteRTL")}.bind(this))}.bind(this))},calloutObs:function(t){var e=this.childComp.querySelector("span.lyteArrow");t.newValue?e.classList.remove("lyteMenuHidden"):e.classList.add("lyteMenuHidden")}.observes("ltPropCallout"),data:function(){return{ltPropContent:Lyte.attr("array",{default:[]}),ltPropId:Lyte.attr("string",{default:""}),ltPropClass:Lyte.attr("string",{default:""}),ltPropQuery:Lyte.attr("string",{default:""}),ltPropEvent:Lyte.attr("string",{default:"click"}),ltPropYield:Lyte.attr("boolean",{default:!1}),ltPropUserValue:Lyte.attr("string",{default:""}),ltPropSystemValue:Lyte.attr("string",{default:""}),ltPropCallout:Lyte.attr("boolean",{default:!1}),ltPropPosition:Lyte.attr("string",{default:"down"}),ltPropDescription:Lyte.attr("string",{default:""}),ltPropTabIndex:Lyte.attr("number",{default:0}),ltPropFreeze:Lyte.attr("boolean",{default:!0}),ltPropShow:Lyte.attr("boolean",{default:!1}),ltPropWidth:Lyte.attr("string",{default:"auto"}),ltPropHeight:Lyte.attr("string",{default:"auto"}),ltPropQueryClass:Lyte.attr("string",{default:"lyteMenuSelected"}),ltPropBoundary:Lyte.attr("object",{default:{}}),ltPropScope:Lyte.attr("string",{default:""}),ltPropPreventInsideClick:Lyte.attr("boolean",{default:!1}),ltPropAnimate:Lyte.attr("boolean",{default:!1}),ltPropSetCss:Lyte.attr("boolean",{default:!0}),ltPropWrapperClass:Lyte.attr("string",{default:""}),eventListeners:Lyte.attr("object",{default:{}}),pos:Lyte.attr("string",{default:""}),parIndex:Lyte.attr("number")}},firePosCallBack:function(){this.getMethods("onPositionChanged")&&this.executeMethod("onPositionChanged",this.getData("pos"),this.$node)}.observes("pos"),contentChangeObs:function(){this.contentChange.call(this)}.observes("ltPropContent"),contentChange:function(){this.childComp.classList.contains("lyteMenuHidden")||(this.setCss.call(this),this.menuBody.style.removeProperty("height"))},setContextCss:function(t,e){var o=this.$node.element,i=this.childComp;$L.fastdom.measure(function(){if(!t){var n=o.getBoundingClientRect();t={clientX:n.left+n.width/2,clientY:n.top+n.height/2}}var s=i.getBoundingClientRect(),l=window.innerHeight,r=window.innerWidth,a=(window.pageXOffset||document.documentElement.scrollLeft)*(this._dir?-1:1),h=window.pageYOffset||document.documentElement.scrollTop,d=this.rtlfunc.call(this,"left"),p=this._dir?r-t.clientX:t.clientX;$L.fastdom.mutate(function(){switch(e||(e=this.data.ltPropPosition),e){case"up":i.style[d]=p+a+"px",i.style.top=t.clientY-s.height+h+"px",s.top<0&&(i.style.top=t.clientY+h+"px"),parseInt(i.style.top)+s.height>l+h&&(i.style.top=t.clientY-s.height+h+"px"),this.setData("pos","up");break;default:i.style[d]=p+a+"px",i.style.top=t.clientY+h+"px",parseInt(i.style.top)+s.height>l+h&&(i.style.top=t.clientY-s.height+h+"px"),parseInt(i.style.top)<0&&(i.style.top=t.clientY+h+"px"),this.setData("pos","down")}s.left<0?i.style[d]=t.clientX+"px":this.rtlfunc.call(this,"right",s,r)>r&&(i.style[d]=t.clientX-s.width+"px"),this._hgt=this.heightCheck.call(this,this.menuBody,event,s)}.bind(this))}.bind(this))},openMenu:function(t,e){var o,i,n=this.getData("ltPropEvent");if(t=t||{},e||(i=this.targetElem.call(this,t.target))[0]&&(i[0].originMenu=i[1].component),e&&"contextmenu"!=n){if(!this.$node.element){var s=this.getData("ltPropQuery");this.$node.element=document.body.querySelector(s.trim())}"LYTE-MENU-ITEM"==this.$node.element.tagName?i=this.targetElem.call(this,this.$node.element):i||(i=[])}this.getMethods("onBeforeOpen")&&(o=this.executeMethod("onBeforeOpen",this.$node,t,this.$node.element)),0!=o?($L.fastdom.measure(function(){this.childComp.scrollTop=0}.bind(this)),$L.fastdom.mutate(function(){this.childComp.classList.remove("lyteMenuHidden"),this.$node.classList.remove("lyteMenuClosed"),this.childComp.style.display="block",this.parentMenu||this.$node.element.classList.add(this.getData("ltPropQueryClass")),this.getData("ltPropHeight")?this.menuBody.style.height=this.getData("ltPropHeight"):this.menuBody.style.removeProperty("height"),"contextmenu"==this.getData("ltPropEvent")?this.setContextCss.call(this,t):this.setCss.call(this),i[0]&&"LYTE-MENU"==i[1].tagName&&(i[1].component.childMenu=this,this.parentMenu=i[1].component,i[1].component.childComp.addEventListener("mousemove",this.mouseleave)),this.parentMenu||"LYTE-MENU-ITEM"==this.$node.element.tagName||lyteCloseMenu(t,this.$node),this.getData("ltPropFreeze")&&!this.parentMenu?this.setZIndex.call(this):document.menu||(window.addEventListener("scroll",this.addScrollPos,!0),document.menu=this),"mouseenter"!=n&&"mouseover"!=n&&"mousemove"!=n||this.childMenu||this.parentMenu||i[0]||(document.addEventListener("mousemove",this._hoverclose),this.$node.element.addEventListener("mousemove",this.preventEvent),this.menuBody.addEventListener("mousemove",this.preventEvent)),"contextmenu"!=t.type&&(this._hgt=this.heightCheck.call(this,this.menuBody,t),this.getData("ltPropAnimate")&&0!=this._hgt&&(this.menuBody.style.height=0,-1!=["up","upLeft","upRight"].indexOf(this.getData("pos"))&&(this.childComp.style.top=parseInt(this.childComp.style.top)+this._hgt+"px"),setTimeout(this.animeClassAdd.bind(this),20))),this.getMethods("onOpen")&&this.executeMethod("onOpen",this.$node,t,this.$node.element)}.bind(this)),"contextmenu"==t.type&&t.preventDefault()):(this._dontCall=!0,delete this.$node.element,this.setData("ltPropShow",!1),delete this._dontCall,this._promReject&&this._promReject())},animeClassAdd:function(){this.childComp.classList.add("lyteAnimate"),setTimeout(this.heightSet.bind(this),20)},heightSet:function(){this._evtadded=!0,this.childComp.addEventListener("transitionend",this._trsend),-1!=["up","upLeft","upRight"].indexOf(this.getData("pos"))&&(this.childComp.style.top=parseInt(this.childComp.style.top)-this._hgt+"px"),this.menuBody.style.height=this._hgt+"px"},tranEnd:function(t){this.childComp.removeEventListener("transitionend",this._trsend),this.childComp.classList.remove("lyteAnimate")},heightCheck:function(t,e){if(this.data.ltPropSetCss){var o,i=t.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop,s=window.innerHeight;return o=i.bottom-i.top,i.bottom>s&&(this.menuBody.style.height=s-i.top+"px",o=s-i.top),i.top<0&&(this.menuBody.style.height=i.bottom+"px",this.childComp.style.top=n+"px",o=i.bottom),this._dontCall=!0,this.$node.ltProp("show",!0),delete this._dontCall,o}},composePath:function(t){for(var e=[],o=t.target;o&&"HTML"!=o.tagName;)e.push(o),o=o.parentNode;return e},elementsFromPointCal:function(t,e){for(var o=[],i=document.elementFromPoint(t,e);i!=document&&i!=document.documentElement&&i!=document.body&&"LYTE-MENU-BODY"!=i.tagName&&(i._pe=i.style.pointerEvents,i.style.pointerEvents="none",o.push(i),i!=(i=document.elementFromPoint(t,e))););for(var n=0;n<o.length;n++)o[n].style.pointerEvents=o[n]._pe,delete o[n]._pe;return o},hoverClose:function(t){this.$node&&-1==(document.elementsFromPoint?document.elementsFromPoint(t.clientX,t.clientY):this.elementsFromPointCal.call(this,t.clientX,t.clientY)).indexOf(this.$node.element)&&this.hideMenu.call(this,!0,t)},mouseleave:function(t){var e=this.parent.component,o=e.targetElem.call(e,t.target);e.childMenu&&o[1]==e.$node&&o[0]!=e.childMenu.$node.element&&o[0]&&(this.removeEventListener("mousemove",e.childMenu.mouseleave),e.childMenu.hideMenu.call(e.childMenu,!0,t))},hideToggle:function(t){this._dontCall||(0==t.newValue?this.hideMenu.call(this,!0,{}):this.openMenu.call(this,{},!0))}.observes("ltPropShow"),hideMenu:function(t,e,o){var i;if(this.childMenu){if(this.childMenu.childComp.contains(e.target)&&!o)return;if(!this.childMenu.hideMenu.call(this.childMenu,t,e,o))return}if(this.getMethods("onBeforeClose")&&(i=this.executeMethod("onBeforeClose",this.$node,e)),0!=i)return this.parentMenu?(delete this.parentMenu.childMenu,delete this.parentMenu):(this.$node.element.classList.remove(this.getData("ltPropQueryClass")),delete document.menu,window.removeEventListener("scroll",this.addScrollPos,!0)),this._arguments=arguments,-1!=["mouseenter","mousemove","mouseover"].indexOf(this.getData("ltPropEvent"))&&(this.$node.element.removeEventListener("mousemove",this.preventEvent),this.menuBody.removeEventListener("mousemove",this.preventEvent),document.removeEventListener("mousemove",this._hoverclose)),$L.fastdom.mutate(function(){this.data.ltPropAnimate&&"contextmenu"!=this.data.ltPropEvent?(this.menuBody.style.height=this._hgt+"px",this.childComp.classList.add("lyteAnimate"),setTimeout(function(){this.menuBody.style.height=0,-1!=["up","upLeft","upRight"].indexOf(this.getData("pos"))&&(this.childComp.style.top=parseInt(this.childComp.style.top)+this._hgt+"px"),this.menuBody.removeEventListener("transitionend",this._close),this.menuBody.addEventListener("transitionend",this._close)}.bind(this),20)):(delete this._arguments,this.closing(t,e))}.bind(this)),!0;this._dontCall=!0,this.setData("ltPropShow",!0),delete this._dontCall,delete this._hideStarts,this._promReject&&this._promReject()},closing:function(){var t,e;this._arguments?(t=this._arguments[0],e=this._arguments[1],this.menuBody.style.height=this._hgt+"px",delete this._hgt,delete this._arguments):(t=arguments[0],e=arguments[1]),this.menuBody.removeEventListener("transitionend",this._close),this.childComp.classList.add("lyteMenuHidden"),delete this._hideStarts,this.$node.classList.add("lyteMenuClosed"),this.getData("ltPropFreeze")&&!this.parentMenu&&this.setZIndex.call(this,t),this._dontCall=!0,this.$node.ltProp("show",!1),delete this._dontCall,delete this.$node.element,delete this._evtadded,this.childComp.classList.remove("lyteAnimate");var o=this.childComp.querySelector(".lyteMenuSelection");o&&o.classList.remove("lyteMenuSelection"),$L.fastdom.measure(function(){this.getMethods("onClose")&&this.executeMethod("onClose",this.$node,e),this._promResolve&&$L.fastdom.mutate(this._promResolve.bind(this))}.bind(this))},targetElem:function(t){var e;for(t=t.correspondingElement||t;t&&"LYTE-MENU-BODY"!=t.tagName&&"BODY"!=t.tagName;)"LYTE-MENU-ITEM"==t.tagName&&(e=t),t=t.parentNode;return[e,t?t.parent:null]},optionSelect:function(t){var e,o=this.targetElem.call(this,t.target)[0];if((1==t.ctrlKey||1==t.metaKey||2==t.which)&&void 0!=t.target.href&&-1!=t.target.href.indexOf("javascript:")&&"_blank"==t.target.target)return!1;if(this.getMethods("onMenuClick")&&o){var i;if(this.getData("ltPropYield"))i=o.getAttribute("data-value");else{var n=this.getData("ltPropContent");if(o.hasAttribute("grporder")){var s=n[parseInt(o.getAttribute("grporder"))];i=s[Object.keys(s)[0]][parseInt(o.getAttribute("elemorder"))]}else i=n[parseInt(o.getAttribute("elemorder"))]}e=this.executeMethod("onMenuClick",i,t,this.$node,this.$node.element,{element:o,submenu:!!o.originMenu})}this.childMenu&&!e&&t.stopPropagation(),(o||!o&&this.getData("ltPropPreventInsideClick"))&&lyteCloseMenu(t,void 0,!0)},setLeftExceedForDown:function(t,e,o,i,n,s){var l=o;return n+this.rtlfunc.call(this,"left",l,s)+l.width-i.width},setLeftNotExceedForDown:function(t,e,o,i){var n=e;return o+this.rtlfunc.call(this,"left",n,i)},setTopAboveForDown:function(t,e,o,i,n){return n+o.top-i.height},setTopBelowForDown:function(t,e,o){var i=e;return o+i.top+i.height},setLeftForRight:function(t,e,o,i){var n=e;return o+this.rtlfunc.call(this,"left",n,i)+n.width},setRightForRight:function(t,e,o,i,n,s){var l=o,r=i;return n+this.rtlfunc.call(this,"left",l,s)-r.width},setTopForRight:function(t,e,o){return o+e.top},setTopForRightAbove:function(t,e,o,i,n){var s=o;return n+s.top+s.height-i.height},setCorrectClass:function(t){for(var e=this.childComp.querySelector(".lyteArrow"),o=e.classList,i=0;i<o.length;i++)"lyteArrow"!=o[i]&&o[i]!=t&&(e.classList.remove(o[i]),i--);e.classList.add(t)},setCss:function(t){var e=this.childComp;if(e&&!e.classList.contains("lyteMenuHidden")&&this.getData("ltPropSetCss")){var o,i,n,s=this.getData("ltPropCallout"),l=e,r=this.$node.element,a=window.innerWidth,h=this.getData("ltPropScope");if(h){var d={target:r},p=this.closestFind.call(this,this.composePath.call(this,d),h);if(p){var u=p.getBoundingClientRect();i=this.rtlfunc.call(this,"left",u,a)<0?0:this.rtlfunc.call(this,"left",u,a),o=a>this.rtlfunc.call(this,"right",u,a)?this.rtlfunc.call(this,"right",u,a):a,n=!0}}n||(o=a,i=0);var m,c,y,f,g,v,w,C,M,x,L=window.innerHeight,b=l.getBoundingClientRect(),P=(window.pageXOffset||document.documentElement.scrollLeft)*(this._dir?-1:1),E=window.pageYOffset||document.documentElement.scrollTop,_=l.offsetHeight,A=l.offsetWidth,D=e.querySelector(".lyteArrow"),S=this.getData("ltPropPosition"),F=r.getBoundingClientRect(),R=D?D.getBoundingClientRect():{width:0,height:0},T=R.height/2,B=R.width/2,$=this.rtlfunc.call(this,"left",F,a),N=this.rtlfunc.call(this,"left");if(D&&(D.style.removeProperty("left"),D.style.removeProperty("top"),D.style.removeProperty("bottom"),D.style.removeProperty("right")),"down"===S)m=!0,(v=F.top+F.height)+_>L&&(m=L-F.top>F.bottom-0),c=!0,(w=$)+A>o&&w>w+F.width-l.offsetWidth?c=!1:$+A<=o&&(c=!0),F.width>A&&(D.style[N]=(A/2-0)/A*100+"%"),m?(M="down",s?(this.setCorrectClass("lyteArrowTop"),g=this.setTopBelowForDown(r,F,E)+T+"px"):l.style.top=this.setTopBelowForDown(r,F,E)+"px"):(M="up",s?(this.setCorrectClass("lyteArrowBottom"),g=this.setTopAboveForDown(r,l,F,b,E)-T+"px"):l.style.top=this.setTopAboveForDown(r,l,F,b,E)+"px"),c?(s&&(x=Math.max(F.width/2-B,B/2)/(C=A/100),D.style[N]=x+"%"),l.style.top=g||l.style.top,l.style[N]=this.setLeftNotExceedForDown(r,F,P,a)+"px"):(s&&(C=A/100,x=(A-F.width/2-B)/C,D.style[N]=x+"%"),l.style.top=g||l.style.top,l.style[N]=this.setLeftExceedForDown(r,l,F,b,P,a)+"px");else if("right"===S)c=!0,c=!($+F.width+A>o&&$-b.width>i),m=!0,F.top+b.height>L&&(m=L-F.top>F.bottom-0),c?(M="right",s?(this.setCorrectClass("lyteArrowLeft"),g=this.setLeftForRight(r,F,P,a)+B+"px"):l.style[N]=this.setLeftForRight(r,F,P,a)+"px"):(M="left",s?(this.setCorrectClass("lyteArrowRight"),g=this.setRightForRight(r,l,F,b,P,a)-B+"px"):l.style[N]=this.setRightForRight(r,l,F,b,P,a)+"px"),m?(s&&(D.style.top=Math.max(F.height/2-T,T/2)+"px"),l.style[N]=g||l.style[N],l.style.top=this.setTopForRight(r,F,E,a)+"px"):(s&&(D.style.bottom=Math.max(F.height/2-T,T/2)+"px"),l.style[N]=g||l.style[N],l.style.top=this.setTopForRightAbove(r,l,F,b,E,a)+"px");else if("up"===S)y=!0,F.top-b.height<0&&(y=L-F.top<F.bottom-0),c=!0,$+A>o&&$>$+F.width-l.offsetWidth?c=!1:$+A<=o&&(c=!0),F.width>A&&D&&(D.style[N]=(A/2-0)/A*100+"%"),y?(M="up",s?(this.setCorrectClass("lyteArrowBottom"),g=this.setTopAboveForDown(r,l,F,b,E)-T+"px"):l.style.top=this.setTopAboveForDown(r,l,F,b,E)+"px"):(M="down",s?(this.setCorrectClass("lyteArrowTop"),g=this.setTopBelowForDown(r,F,E)+T+"px"):l.style.top=this.setTopBelowForDown(r,F,E,a)+"px"),c?(s&&(x=Math.max(F.width/2-B,B/2)/(C=A/100),D.style[N]=x+"%"),l.style.top=g||l.style.top,l.style[N]=this.setLeftNotExceedForDown(r,F,P,a)+"px"):(s&&(C=A/100,x=(A-F.width/2-B)/C,D.style[N]=x+"%"),l.style.top=g||l.style.top,l.style[N]=this.setLeftExceedForDown(r,l,F,b,P,a)+"px");else if("left"===S)f=!0,f=!($-b.width<i&&$+b.width<o),m=!0,F.top+b.height>L&&(m=L-F.top>F.bottom-0),f?(M="left",s?(this.setCorrectClass("lyteArrowRight"),g=this.setRightForRight(r,l,F,b,P,a)-B+"px"):l.style[N]=this.setRightForRight(r,l,F,b,P,a)+"px"):(M="right",s?(this.setCorrectClass("lyteArrowLeft"),g=this.setLeftForRight(r,F,P,a)+B+"px"):l.style[N]=this.setLeftForRight(r,F,P)+"px"),m?(s&&(D.style.top=Math.max(F.height/2-T,T/2)+"px"),l.style[N]=g||l.style[N],l.style.top=this.setTopForRight(r,F,E)+"px"):(s&&(D.style.bottom=Math.max(F.height/2-T,T/2)+"px"),l.style[N]=g||l.style[N],l.style.top=this.setTopForRightAbove(r,l,F,b,E)+"px");else if("downLeft"===S){if(m=!0,(v=F.top+F.height)+_>L&&(m=L-F.top>F.bottom-0),m||(v=F.top-_),c=!1,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.max($+F.width/2-A,$-A+2*T))<i?(w=i,c=!0):c=!1,l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?$+.25*F.width-w+"px":Math.min(A-.25*F.width,A-1.5*T-3)+"px",D.style[N]=k;M=m?"downLeft":"upLeft"}else if("downRight"===S){if(m=!0,(v=F.top+F.height)+_>L&&(m=L-F.top>F.bottom-0),m||(v=F.top-_),c=!0,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.min($+F.width/2,$+F.width-2*T))+A>o?(w=o-A,c=!1):c=!0,l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?Math.max(.25*F.width,B/2)+"px":$+.25*F.width-w+"px",D.style[N]=k;M=m?"downRight":"upRight"}else if("upLeft"===S){if(m=!1,(v=F.top-_)<0&&(m=L-F.top>F.bottom-0),m&&(v=F.top+F.height),c=!1,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.max($+F.width/2-A,$-A+2*T))<i?(w=i,c=!0):c=!1,l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?$+.25*F.width-w+"px":Math.min(A-.25*F.width,A-1.5*T-3)+"px",D.style[N]=k;M=m?"downLeft":"upLeft"}else if("upRight"===S){if(m=!1,(v=F.top-_)<0&&(m=L-F.top>F.bottom-0),m&&(v=F.top+F.height),c=!0,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.min($+F.width/2,$+F.width-2*T))+A>o?(w=o-A,c=!1):c=!0,l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?Math.max(.25*F.width,B/2)+"px":$+.25*F.width-w+"px",D.style[N]=k;M=m?"downRight":"upRight"}else if("downAlignLeft"===S){if(m=!0,(v=F.top+F.height)+_>L&&(m=L-F.top>F.bottom-0),m||(v=F.top-_),c=!1,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.max($+F.width-A,$-A+2*T))<i?(w=Math.max(Math.min($,$+F.width-2*T),i),c=!0):(w=Math.min(o-A,w),c=!1),l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?(F.right-w)/2+"px":Math.min(($-w+A)/2,A-1.5*T-3)+"px",D.style[N]=k;M=m?"downAlignLeft":"upAlignLeft"}else if("downAlignRight"===S){if(m=!0,(v=F.top+F.height)+_>L&&(m=L-F.top>F.bottom-0),m||(v=F.top-_),c=!0,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.min($,$+F.width-2*T))+A>o?(w=Math.min(Math.max($+F.width-A,$-A+2*T),o-A),c=!1):(w=Math.max(w,0),c=!0),l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?Math.max(.5*(this.rtlfunc.call(this,"right",F,a)-w-B),B/2)+"px":.5*(-w+A+$)+"px",D.style[N]=k;M=m?"downAlignRight":"upAlignRight"}else if("upAlignLeft"===S){if(m=!1,(v=F.top-_)<0&&(m=L-F.top>F.bottom-0),m&&(v=F.top+F.height),c=!1,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.max($+F.width-A,$-A+2*T))<i?(w=Math.max(Math.min($,$+F.width-2*T),i),c=!0):(w=Math.min(o-A,w),c=!1),l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?(F.right-w)/2+"px":Math.min(($-w+A)/2,A-1.5*T-3)+"px",D.style[N]=k;M=m?"downAlignLeft":"upAlignLeft"}else if("upAlignRight"===S){var k;if(m=!1,(v=F.top-_)<0&&(m=L-F.top>F.bottom-0),m&&(v=F.top+F.height),c=!0,s&&this.setCorrectClass(m?"lyteArrowTop":"lyteArrowBottom"),(w=Math.min($,$+F.width-2*T))+A>o?(w=Math.min(Math.max($+F.width-A,$-A+2*T),o-A),c=!1):(w=Math.max(w,0),c=!0),l.style.top=v+T*(m?1:-1)+E+"px",l.style[N]=w+P+"px",s)k=c?Math.max(.5*(this.rtlfunc.call(this,"right",F,a)-w-B),B/2)+"px":.5*(-w+A+$)+"px",D.style[N]=k;M=m?"downAlignRight":"upAlignRight"}this.setData("pos",M)}},checkForBoundary:function(t){var e=this.$node.element.getBoundingClientRect(),o=window.innerWidth,i=this.getData("ltPropBoundary");(i.hasOwnProperty("left")&&this.rtlfunc.call(this,"left",e,o)<this.rtlfunc.call(this,"left",i,o)||i.hasOwnProperty("right")&&this.rtlfunc.call(this,"right",e,o)>this.rtlfunc.call(this,"right",i,o)||i.hasOwnProperty("top")&&e.top<i.top||i.hasOwnProperty("bottom")&&e.bottom>i.bottom)&&this.hideMenu.call(this)},traverseList:function(t){var e=t.keyCode;if(!(this.childComp&&this.childComp.classList.contains("lyteMenuHidden")||13!=e&&40!=e&&38!=e)){var o=this.childComp.querySelector(".lyteMenuSelection");if(!o||!o.offsetParent){var i=this.childComp.querySelector("lyte-menu-item:not(.lyteSearchHidden)");if(i&&i.offsetParent)return void i.classList.add("lyteMenuSelection")}for(var n=this.childComp.querySelectorAll("lyte-menu-item:not(.lyteSearchHidden)"),s=0;s<n.length&&(!n[s].offsetParent||!n[s].classList.contains("lyteMenuSelection"));s++);if(13==e)n[s].dispatchEvent(new Event("click",{bubbles:!0})),t.preventDefault();else if(38==e&&0!=s){var l=s;for(s-=1;s>-1&&(n[s].classList.contains("lyteMenuActive")||n[s].classList.contains("lyteMenuFiltered")||!n[s].offsetParent);s--);-1!=s&&(n[l].classList.remove("lyteMenuSelection"),n[s].classList.add("lyteMenuSelection"),this.scrIntoView.call(this,n[s]))}else if(40==e&&s!=n.length-1){l=s;for(s+=1;s<n.length&&(n[s].classList.contains("lyteMenuActive")||n[s].classList.contains("lyteMenuFiltered")||!n[s].offsetParent);s++);s!=n.length&&(n[l].classList.remove("lyteMenuSelection"),n[s].classList.add("lyteMenuSelection"),this.scrIntoView.call(this,n[s]))}}},setFreeze:function(t){var e=document.body.querySelectorAll(".lytemenufreezelayer:not(.nogroup)");$L.fastdom.measure(function(){var o=document.body.querySelector(".lytemenufreezelayer.left"),i=t.getBoundingClientRect(),n=window.innerWidth;$L.fastdom.mutate(function(){o.style.height=i.height+"px",o.style.width=Math.max(i.left,0)+"px",o.style.top=i.top+"px",(o=document.body.querySelector(".lytemenufreezelayer.right")).style.height=i.height+"px",o.style.width=Math.max(n-i.right,0)+"px",o.style.top=i.top+"px",(o=document.body.querySelector(".lytemenufreezelayer.top")).style.height=i.top+"px",(o=document.body.querySelector(".lytemenufreezelayer.bottom")).style.height=window.innerHeight-i.bottom+"px";for(var t=0;t<e.length;t++)e[t].classList.remove("lyteMenuHidden"),e[t].addEventListener("wheel",this.preventEvent)}.bind(this))}.bind(this))},preventEvent:function(t){t.metaKey||t.shiftKey||t.ctrlKey||("wheel"==t.type&&t.stopImmediatePropagation(),t.preventDefault(),t.stopPropagation())},addScrollPos:function(t){if(document.menu&&(t.target==window||!document.menu.childComp.contains(t.target))){var e=document.menu;for(e.setCss.call(e);e.childMenu;)(e=e.childMenu).setCss.call(e);e.checkForBoundary.call(e,e.childComp)}},removeFreeze:function(){if(!document.menu||this.data.ltPropAnimate&&this.data.ltPropFreeze){for(var t=document.body.querySelectorAll(".lytemenufreezelayer"),e=0;e<t.length;e++)t[e].classList.add("lyteMenuHidden"),t[e].removeEventListener("wheel",this.preventEvent);document.body.style.overflow=this._bodyoverflow,delete this._bodyoverflow}},setZIndex:function(t){var e=this.$node.element;if(e){for(;e&&"HTML"!=e.tagName;){if(e.classList.contains("lyteMenuGroup")){t?this.removeFreeze.call(this):(this.setFreeze.call(this,e),this._bodyoverflow=document.body.style.overflow,document.body.style.overflow="hidden");break}e=e.parentNode}if(e&&"HTML"==e.tagName)if(t&&!document.menu)this.removeFreeze.call(this);else document.body.querySelector(".lytemenufreezelayer.nogroup").classList.remove("lyteMenuHidden"),this._bodyoverflow=document.body.style.overflow,document.body.style.overflow="hidden"}}});var lyteCloseMenu=function(t,e,o){if((0!=document._lyteMenu.preventClick||e)&&(t&&2!=t.button||e||o))for(var i=document.body.querySelectorAll("lyte-menu:not(.lyteMenuClosed)[lyte-rendered]"),n=0;n<i.length;n++){if(i[n]!=e&&!i[n].component.childComp.classList.contains("lyteMenuHidden"))if(o||!i[n].component.childComp.contains(t.target))if(!i[n].component._hideStarts)i[n].component.hideMenu.call(i[n].component,!e,t,o)&&(i[n].component._hideStarts=!0)}t&&"click"==t.type&&(document._lyteMenu.preventClick=!0)};function menukeypress(t){for(var e=document.querySelectorAll("lyte-menu:not(.lyteMenuClosed)[lyte-rendered]"),o=0;o<e.length;o++){var i=e[o].component;if(!i.childMenu){i._typed=i._typed||"",i._typed+=String.fromCharCode(t.which||t.keyCode),clearTimeout(i._typetime),i._typetime=setTimeout(i.searchFilter.bind(i,i._typed.trim().toLowerCase()),400);break}}}Lyte.createCustomElement("lyte-menu-item",{static:{observedAttributes:{get:function(){return["lyte-shortcut"]}}},attributeChangedCallback:function(t,e,o){if("function"==typeof shortcut){var i=(o=JSON.parse(o)).key,n=o.type,s=o.wait;e=e?JSON.parse(e):{},shortcut.push({newKey:i,type:n,wait:s,oldKey:e.key,value:this})}}});