if(!LytePopup){var LytePopup={components:[],bodywrapperCount:0,onEscape:function(t){("key"in(t=t||window.event)?"Escape"==t.key||"Esc"==t.key:27==t.keyCode)&&LytePopup.closePopup(void 0,!0)},bindDocumentKeydown:function(){document.addEventListener("keydown",LytePopup.onEscape,!0)},hideOrShowFreeze:function(t){var e="";if("open"==t&&LytePopup.components.length>1)for(var o=LytePopup.components.length-2;o>=0;o--){if(e="LYTE-MODAL"==LytePopup.components[o].$node.tagName?"lyte-modal-freeze":"LYTE-POPOVER"==LytePopup.components[o].$node.tagName?"lyte-popover-freeze":".alertFreezeLayer",l=LytePopup.components[o].childComp.querySelector(e)){l.style.opacity="0";break}}else if("close"==t&&LytePopup.components.length>1)for(o=LytePopup.components.length-2;o>=0;o--){var l;if("LYTE-MODAL"==LytePopup.components[o].$node.tagName?(e="lyte-modal-freeze",val=LytePopup.components[o].getData("ltPropDimmer").opacity):"LYTE-POPOVER"==LytePopup.components[o].$node.tagName?(e="lyte-popover-freeze",val=LytePopup.components[o].getData("ltPropDimmer").opacity):(e=".alertFreezeLayer",val="0.4"),l=LytePopup.components[o].childComp.querySelector(e)){l.style.opacity=val;break}}},addPopup:function(t){LytePopup.closePopup();var e=LytePopup.components.length;if(e>0){var o,l="",r="";l="LYTE-MODAL"==LytePopup.components[e-1].$node.tagName?".modalWrapper":"LYTE-POPOVER"==LytePopup.components[e-1].$node.tagName?".popoverWrapper":".alertWrapper",r="LYTE-MODAL"==t.$node.tagName?".modalWrapper":"LYTE-POPOVER"==t.$node.tagName?".popoverWrapper":".alertWrapper";var i=t.childComp.querySelector(r);o=Number(document.defaultView.getComputedStyle(LytePopup.components[LytePopup.components.length-1].childComp.querySelector(l),null).getPropertyValue("z-index")),i.style.zIndex=o+2}LytePopup.components[e]=t,(t.getData("ltPropFreeze")||"LYTE-ALERT"==t.$node.tagName)&&LytePopup.hideOrShowFreeze("open")},closePopup:function(t,e){if(e){var o=LytePopup.components[LytePopup.components.length-1];o&&o.$node.ltProp("closeOnEscape")&&o.$node.ltProp("show",!1)}else if(t){var l=LytePopup.components.indexOf(t);l>-1&&LytePopup.components.splice(l,1)}else for(var r=LytePopup.components.length-1;r>=0;r--)LytePopup.components[r].$node&&!LytePopup.components[r].$node.ltProp("allowMultiple")&&(LytePopup.components[r].$node.ltProp("show",!1),"LYTE-MODAL"==LytePopup.components[r].$node.tagName&&LytePopup.components.splice(r,1))}};LytePopup.bindDocumentKeydown()}function addPopoverEvent(t){document.addEventListener("click",function(t){for(var e=t.target;!$L(e).hasClass("popoverWrapper")&&"LYTE-POPOVER-FREEZE"!=e.tagName&&"LYTE-DROP-BOX"!=e.tagName&&"HTML"!=e.tagName;)if(!(e=e.parentElement))return;if("HTML"==e.tagName||"LYTE-POPOVER-FREEZE"==e.tagName)for(var o=LytePopup.components.length-1;o>=0;o--)if("LYTE-POPOVER"==LytePopup.components[o].$node.tagName&&"visible"==LytePopup.components[o].childComp.style.visibility){var l=LytePopup.components[o].$node;l&&l.component.getData("visible")&&l.component.getData("ltPropCloseOnBodyClick")&&(l.component.setData("visible",!1),l.ltProp("show",!1))}},!0),document.body.addEventListener("scroll",function(t){if(LytePopup.makingVisible)LytePopup.makingVisible=!1;else for(var e,o=LytePopup.components.length-1;o>=0;o--)if(LytePopup.components[o].$node&&"LYTE-POPOVER"==LytePopup.components[o].$node.nodeName&&"visible"==LytePopup.components[o].childComp.style.visibility&&(e=LytePopup.components[o].childComp)&&e._callee.component.$node.ltProp("scrollable")&&LytePopup.components[o].callOnScroll(t)){var l=e.querySelector(".lytePopover");if(!l)return;for(;"LYTE-WORMHOLE"!=l.tagName;)l=l.parentElement;var r=t.target;if("#document"==r.nodeName)return;for(;"LYTE-WORMHOLE"!=r.tagName&&"HTML"!=r.tagName;)r=r.parentElement;if("LYTE-WORMHOLE"==r.tagName&&r.isEqualNode(l))return;l._callee.component.computeOffsetImpl();var i=document.querySelector(l._callee.ltProp("originElem")),p=t.target,n=i.getBoundingClientRect(),a=p.getBoundingClientRect(),s=l._callee.ltProp("boundary"),d=l.querySelector(".lytePopover");0===Object.keys(s).length&&s.constructor===Object||(s.top&&d.getBoundingClientRect().top<parseFloat(s.top)?l._callee.ltProp("show",!1):s.bottom&&d.getBoundingClientRect().bottom>parseFloat(s.bottom)?l._callee.ltProp("show",!1):s.left&&d.getBoundingClientRect().left<parseFloat(s.left)?l._callee.ltProp("show",!1):s.right&&d.getBoundingClientRect().right>parseFloat(s.right)&&l._callee.ltProp("show",!1)),p.contains(i)&&(l.querySelector("#lytePopoverArrow")&&l.querySelector("#lytePopoverArrow").classList.contains("lytePopoverArrowBottom")&&n.top+n.height/2>window.innerHeight&&l._callee.ltProp("show",!1),(a.top>n.top||a.top+a.height<n.top+n.height||l.querySelector("#lytePopoverArrow")&&(l.querySelector("#lytePopoverArrow").classList.contains("lytePopoverArrowLeft")||l.querySelector("#lytePopoverArrow").classList.contains("lytePopoverArrowRight"))&&l.querySelector("#lytePopoverArrow").getBoundingClientRect().bottom>=l.querySelector(".lytePopover").getBoundingClientRect().bottom)&&l._callee.ltProp("show",!1),(a.left>n.left||a.left+a.width<n.left+n.width)&&l._callee.ltProp("show",!1))}},!0),window.addEventListener("resize",function(t){LytePopup._lytePopoverRTId&&(clearTimeout(LytePopup._lytePopoverRTId),LytePopup._lytePopoverRTId=!1),LytePopup._lytePopoverRTId=setTimeout(function(){for(var e=LytePopup.components.length-1;e>=0;e--)LytePopup.components[e].$node&&"LYTE-POPOVER"==LytePopup.components[e].$node.nodeName&&"visible"==LytePopup.components[e].childComp.style.visibility&&LytePopup.components[e].childComp.querySelector(".lytePopover")&&(LytePopup.components[e].$node.component.updateScrollHandling(),LytePopup.components[e].$node.component.computeOffsetImpl(),LytePopup.components[e].$node.component.callOnResize(t));LytePopup._lytePopoverRTId=!1},100)},!0)}Lyte.Component.register("lyte-popover",{_template:'<template tag-name="lyte-popover">\n\t<template is="if" value="{{ltPropBindToBody}}"><template case="true"> \n\t<lyte-wormhole case="true" style="{{if(ltPropShowCopy,\'visibility:visible\',\'visibility:hidden\')}}" on-before-append="{{method(&quot;beforeWormholeAppend&quot;)}}">\n\t\t<template is="registerYield" yield-name="lyte-content">\n\t\t\t<div class="popoverWrapper {{ltPropWrapperClass}}">\n\t\t\t\t<div class="lytePopover">\n\t\t\t\t\t<template is="if" value="{{ifEquals(ltPropType,&quot;callout&quot;)}}"><template case="true">\n\t\t\t\t\t\t<span id="lytePopoverArrow" class="lytePopoverArrowIcon"></span>\n\t\t\t\t\t</template></template>\n\t\t\t\t\t<template is="if" value="{{ltPropShowCloseButton}}">\n\t\t\t\t\t\t<template case="true"><span class="lytePopoverClose" onclick="{{action(\'close\')}}"></span></template>\n\t\t\t\t\t</template>\n\t\t\t\t\t<lyte-yield yield-name="popover"></lyte-yield>\n\t\t\t\t</div>\n\t\t\t\t<template is="if" value="{{ltPropFreeze}}">\n\t\t\t\t\t<template case="true"><lyte-popover-freeze></lyte-popover-freeze></template>\n\t\t\t\t</template>\n\t\t\t</div>\n\t\t</template>\n\t</lyte-wormhole>\n\t</template></template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[1],attr:{style:{name:"style",helperInfo:{name:"if",args:["ltPropShowCopy","'visibility:visible'","'visibility:hidden'"]}}}},{type:"registerYield",position:[1,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[1,1,3]},{type:"if",position:[1,1,3],cases:{true:{dynamicNodes:[{type:"attr",position:[0]}]}},default:{}},{type:"insertYield",position:[1,1,5]},{type:"attr",position:[1,3]},{type:"if",position:[1,3],cases:{true:{dynamicNodes:[{type:"componentDynamic",position:[0]}]}},default:{}}]},{type:"componentDynamic",position:[1]}]}},default:{}}],_observedAttributes:["ltPropShow","ltPropType","ltPropFreeze","ltPropShowCloseButton","ltPropCloseOnEscape","ltPropOriginElem","ltPropPosition","ltPropPlacement","ltPropDimmer","ltPropDraggable","ltPropAllowMultiple","ltPropScrollable","ltPropMaxHeight","ltPropMaxWidth","ltPropWidth","ltPropHeight","ltPropWrapperClass","ltPropBoundary","ltPropCloseOnBodyClick","ltPropDuration","ltPropOffset","ltPropBindToBody","ltPropHeaderPadding","ltPropContentPadding","ltPropFooterPadding","buttons","ltPropShowCopy","visible","timeOutId","classTobeAdded","keys","first","arrowHidden","arrowEle","returnedFalse"],data:function(){return{ltPropShow:Lyte.attr("boolean",{default:!1}),ltPropType:Lyte.attr("string",{default:"callout"}),ltPropFreeze:Lyte.attr("boolean",{default:!0}),ltPropShowCloseButton:Lyte.attr("boolean",{default:!0}),ltPropCloseOnEscape:Lyte.attr("boolean",{default:!0}),ltPropOriginElem:Lyte.attr("string",{default:""}),ltPropPosition:Lyte.attr("string",{default:"bottom"}),ltPropPlacement:Lyte.attr("string",{default:""}),ltPropDimmer:Lyte.attr("object",{default:{color:"black",opacity:"0.4"}}),ltPropDraggable:Lyte.attr("boolean",{default:!1}),ltPropAllowMultiple:Lyte.attr("boolean",{default:!1}),ltPropScrollable:Lyte.attr("boolean",{default:!1}),ltPropMaxHeight:Lyte.attr("string",{default:""}),ltPropMaxWidth:Lyte.attr("string",{default:""}),ltPropWidth:Lyte.attr("string",{default:""}),ltPropHeight:Lyte.attr("string",{default:"auto"}),ltPropWrapperClass:Lyte.attr("string",{default:""}),ltPropBoundary:Lyte.attr("object",{default:{}}),ltPropCloseOnBodyClick:Lyte.attr("boolean",{default:!0}),ltPropDuration:Lyte.attr("number",{default:800}),ltPropOffset:Lyte.attr("object",{default:{}}),ltPropBindToBody:Lyte.attr("boolean",{default:!1}),ltPropHeaderPadding:Lyte.attr("string",{default:"15px 30px"}),ltPropContentPadding:Lyte.attr("string",{default:"15px 30px"}),ltPropFooterPadding:Lyte.attr("string",{default:"15px 30px"}),buttons:Lyte.attr("array",{default:[{type:"accept",text:"Ok"}]}),ltPropShowCopy:Lyte.attr("boolean",{default:!1}),visible:Lyte.attr("boolean",{default:!0}),timeOutId:Lyte.attr("number"),classTobeAdded:Lyte.attr("string"),keys:Lyte.attr("object",{default:{37:1,38:1,39:1,40:1}}),first:Lyte.attr("boolean",{default:!0}),arrowHidden:Lyte.attr("boolean",{default:!1}),arrowEle:Lyte.attr("object"),returnedFalse:Lyte.attr("boolean",{default:!1})}},addDragHandler:function(){var t=this.actualModalDiv.querySelector("lyte-popover-header");t?(t.parentEle=this,this.$node.ltProp("draggable")?(t.addEventListener("mousedown",this.handleMove,!0),t.addEventListener("touchstart",this.handleMove,!0),t.classList.add("draggable")):(t.removeEventListener("mousedown",this.handleMove,!0),t.removeEventListener("touchstart",this.handleMove,!0),t.classList.remove("draggable"))):(console.warn("This popover is not draggable because it has no header"),this.$node.ltProp("draggable",!1))},handleMove:function(t){var e=t.currentTarget.parentEle.actualModalDiv;LytePopup.node=e,"mousedown"==t.type?(LytePopup.xPos=t.clientX-this.getBoundingClientRect().left,LytePopup.yPos=t.clientY-this.getBoundingClientRect().top):"touchstart"==t.type&&(LytePopup.xPos=t.touches[0].clientX-this.getBoundingClientRect().left,LytePopup.yPos=t.touches[0].clientY-this.getBoundingClientRect().top);e.getBoundingClientRect();e.style.transitionDuration="0s";var o=e.parentElement.querySelector("#lytePopoverArrow");o&&(this.parentEle.setData("arrowHidden",!0),this.parentEle.setData("arrowEle",o),o.style.display="none"),"mousedown"==t.type?(document.body.addEventListener("mousemove",t.currentTarget.parentEle.handleDrag,!0),document.body.addEventListener("mouseup",t.currentTarget.parentEle.stopDrag,!0)):"touchstart"==t.type&&(document.body.addEventListener("touchmove",t.currentTarget.parentEle.handleDrag,!0),document.body.addEventListener("touchend",t.currentTarget.parentEle.stopDrag,!0))},handleDrag:function(t){var e=LytePopup.node;"mousemove"==t.type?(e.style.left=t.clientX-e.offsetParent.getBoundingClientRect().left-LytePopup.xPos+"px",e.style.top=t.clientY-e.offsetParent.getBoundingClientRect().top-LytePopup.yPos+"px"):"touchmove"==t.type&&(e.style.left=t.touches[0].clientX-e.offsetParent.getBoundingClientRect().left-LytePopup.xPos+"px",e.style.top=t.touches[0].clientY-e.offsetParent.getBoundingClientRect().top-LytePopup.yPos+"px"),window.getSelection().removeAllRanges()},stopDrag:function(t){for(var e=t.target;e&&e!==document;){if(e.parentEle){"mouseup"==t.type?(this.removeEventListener("mousemove",e.parentEle.handleDrag,!0),this.removeEventListener("mouseup",e.parentEle.stopDrag,!0)):"touchend"==t.type&&(this.removeEventListener("touchmove",e.parentEle.handleDrag,!0),this.removeEventListener("touchend",e.parentEle.stopDrag,!0));break}e=e.parentElement?e.parentElement:document}},showToggled:function(){var t=t||window.event;if(this.getData("returnedFalse"))this.setData("returnedFalse",!1);else if(this.$node.ltProp("show")&&!this.$node.ltProp("showCopy"))if(_lyteUiUtils.getRTL()&&("bottomLeft"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","bottomRight"):"bottomRight"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","bottomLeft"):"topLeft"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","topRight"):"topRight"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","topLeft"):"left"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","right"):"right"==this.getData("ltPropPlacement")&&this.setData("ltPropPlacement","left")),this.$node.ltProp("bindToBody",!0),void 0==this.getData("ltPropDuration"))this.onBeforeShowHandling(t);else{var e=this;setTimeout(function(){e.onBeforeShowHandling(t)},0)}else if(this.$node.ltProp("showCopy"))if(void 0==this.getData("ltPropDuration"))this.onBeforeCloseHandling(t);else{e=this;setTimeout(function(){e.onBeforeCloseHandling(t)},0)}}.observes("ltPropShow").on("didConnect"),changeShow:function(){this.getData("ltPropBindToBody")||this.getData("ltPropShow")&&this.setData("ltPropShow",!1)}.observes("ltPropBindToBody"),callOnResize:function(t){this.getMethods("onResize")&&this.executeMethod("onResize",t,this)},callOnScroll:function(t){var e;return this.getMethods("onScroll")&&(e=this.executeMethod("onScroll",t,this)),void 0==e||e},updateScrollHandling:function(){!this.$node.ltProp("freeze")&&this.$node.ltProp("scrollable")&&this.$node.ltProp("scrollable",!0);var t,e,o,l=this.actualModalDiv,r=l.querySelector("lyte-popover-content");r=r||l,l.style.maxWidth="",l.style.maxHeight="",l.style.height=this.$node.ltProp("height")?this.$node.ltProp("height"):"auto",l.style.width=this.$node.ltProp("width")?this.$node.ltProp("width"):"auto",$L.fastdom.measure(function(){var i=l.getBoundingClientRect(),p=l.parentElement.getBoundingClientRect(),n=(l.querySelector("lyte-popover-header")?l.querySelector("lyte-popover-header").getBoundingClientRect().height:0)+(l.querySelector("lyte-popover-content")?l.querySelector("lyte-popover-content").getBoundingClientRect().height:0)+(l.querySelector("lyte-popover-footer")?l.querySelector("lyte-popover-footer").getBoundingClientRect().height:0),a=window.getComputedStyle(l),s=(a.borderTop?parseFloat(a.borderTop):0)+(a.borderBottom?parseFloat(a.borderBottom):0),d=Math.max(document.documentElement.clientHeight,window.innerHeight||0);$L.fastdom.mutate(function(){if(this.$node.ltProp("maxWidth")?(this.$node.ltProp("scrollable",!0),t=i.width,l.style.width=this.$node.ltProp("maxWidth"),o=-1!=this.$node.ltProp("maxWidth").indexOf("%")?parseFloat(this.$node.ltProp("maxWidth"))/100*p.width:parseFloat(this.$node.ltProp("maxWidth")),t<o&&(l.style.width=t+"px",o=t),r.style.overflowX="auto"):o=i.width,this.$node.ltProp("maxHeight")&&n>=parseInt(this.$node.ltProp("maxHeight"))){this.childComp.querySelector(".popoverWrapper").classList.add("scrollable"),this.$node.ltProp("scrollable",!0),i.height-s;var a=-1!=this.$node.ltProp("maxHeight").indexOf("%")?parseFloat(this.$node.ltProp("maxHeight"))/100*p.height:parseFloat(this.$node.ltProp("maxHeight"));l.style.height=this.$node.ltProp("maxHeight"),e=a-s}else i.height-s,e=d-20;if(this.$node.ltProp("scrollable")){var h=this.actualModalDiv.querySelector("lyte-popover-header"),c=this.actualModalDiv.querySelector("lyte-popover-footer"),u=0,y=0;$L.fastdom.measure(function(){h&&(this.$node.ltProp("maxWidth")&&(h.style.overflowX="auto"),u=h.getBoundingClientRect().height),c&&(this.$node.ltProp("maxWidth")&&(c.style.overflowX="auto"),y=c.getBoundingClientRect().height),$L.fastdom.mutate(function(){var t=e-(u+y);r.style.maxHeight=(t>0?t:50)+"px",r.style.overflowY="auto",l.style.width=this.$node.ltProp("width")?this.$node.ltProp("width"):"auto",this.actualModalDiv.style.maxWidth=o>0?o+"px":"70%",l=null,r=null,h=null,c=null},this)},this)}else this.childComp.querySelector(".popoverWrapper").classList.remove("scrollable"),l=null,r=null;this.$node.ltProp("freeze")||this.childComp.querySelector(".popoverWrapper").classList.add("noFreeze")},this)},this)},scrollHandling:function(){this.getData("ltPropShow")&&this.updateScrollHandling()}.observes("ltPropWidth","ltPropMaxWidth","ltPropHeight","ltPropMaxHeight"),computeOffsetImpl:function(){var t="",e="",o=this.actualModalDiv;o.classList.remove("lytePopoverCenter","lytePopoverBottomCenter","lytePopoverBottomLeft","lytePopoverBottomRight","lytePopoverTopCenter","lytePopoverTopLeft","lytePopoverTopRight","lytePopoverLeft","lytePopoverRight"),$L.fastdom.measure(function(){if(this.$node.ltProp("showCopy")){if(""!=this.$node.ltProp("originElem")||!Lyte.Component.registeredHelpers.lyteUiIsEmptyObject(this.$node.ltProp("offset"))){var l=document.querySelector(this.$node.ltProp("originElem"));if(!l&&Lyte.Component.registeredHelpers.lyteUiIsEmptyObject(this.$node.ltProp("offset")))return console.error("The origin element is either not present or may be removed. Kindly check."),LytePopup.closePopup(this),this.setData("visible",!1),this.$node.ltProp("freeze")&&(LytePopup.bodywrapperCount+=1,0==LytePopup.bodywrapperCount&&document.body.classList.remove("bodyWrapper")),void(!this.getData("ltPropFreeze")&&document.body.classList.contains("lyteStopBodyScrolling")&&document.body.classList.remove("lyteStopBodyScrolling"));var r,i=o.getBoundingClientRect(),p=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop,a=Math.max(document.documentElement.clientHeight,window.innerHeight||0)+n,s=Math.max(document.documentElement.clientWidth,window.innerWidth||0)+p;if(Lyte.Component.registeredHelpers.lyteUiIsEmptyObject(this.$node.ltProp("offset"))){var d=l.getBoundingClientRect();r={top:d.top,right:d.right,bottom:d.bottom,left:d.left,width:d.width,height:d.height}}else r={width:parseInt(this.$node.ltProp("offset").width)||0,height:parseInt(this.$node.ltProp("offset").height)||0,top:parseInt(this.$node.ltProp("offset").top),left:parseInt(this.$node.ltProp("offset").left),bottom:parseInt(this.$node.ltProp("offset").top)+(parseInt(this.$node.ltProp("offset").height)||0),right:parseInt(this.$node.ltProp("offset").left)+(parseInt(this.$node.ltProp("offset").width)||0)};this.getData("ltPropFreeze")||(r.top=r.top+n,r.left=r.left+p);var h=r,c={},u={},y=this.$node.ltProp("positionNew"),f=!0,P=0;do{if(this.$node.ltProp("placement"))f=!0,c=this.positionPopover(this.$node.ltProp("placement"),h,i),y=this.$node.ltProp("placement");else switch(P++,f=!0,c=this.positionPopover(y,h,i),this.$node.ltProp("freeze")?u=c:(u.offsetTop=r.top+r.height,u.offsetLeft=r.left+r.width),y){case"bottom":if(a<u.offsetTop+i.height){y="top",f=!1;break}u.offsetLeft-i.width<0&&(c.offsetLeft=h.left,f=!0),s<c.offsetLeft+i.width&&(c.offsetLeft=s-i.width-10,f=!0);break;case"bottomLeft":case"bottomRight":if(a<u.offsetTop+i.height){y="top",f=!1;break}u.offsetLeft-i.width<0&&(c.offsetLeft=h.left,f=!0),s<u.offsetLeft+i.width&&(c.offsetLeft=s-i.width-10,f=!0);break;case"top":if(u.offsetTop-i.height<0){y=_lyteUiUtils.getRTL()?"left":"right",f=!1;break}u.offsetLeft-i.width<0&&(c.offsetLeft=h.left,f=!0),s<c.offsetLeft+i.width&&(c.offsetLeft=s-i.width-10,f=!0);break;case"topLeft":if(u.offsetTop-i.height<0){y="right",f=!1;break}u.offsetLeft-i.width<0&&(c.offsetLeft=h.left,f=!0),s<u.offsetLeft+i.width&&(c.offsetLeft=s-i.width-10,f=!0);break;case"topRight":if(u.offsetTop-i.height<0){y="left",f=!1;break}u.offsetLeft-i.width<0&&(c.offsetLeft=h.left,f=!0),s<u.offsetLeft+i.width&&(c.offsetLeft=s-i.width-10,f=!0);break;case"left":u.offsetLeft<0&&(y="right",t=h.left+h.width+9,e=h.top),u.offsetTop-i.height<0&&(c.offsetTop=h.top),a<c.offsetTop+i.height&&(c.offsetTop=a-i.height);break;case"right":s<u.offsetLeft+i.width&&(y="left",c.offsetLeft=h.left-i.width-9,c.offsetTop=h.top),u.offsetTop-i.height<0&&(c.offsetTop=h.top),a<c.offsetTop+i.height&&(c.offsetTop=a-i.height)}}while(!f&&P<=8);if(t=c.offsetLeft,e=c.offsetTop,"callout"===this.$node.ltProp("type")){y.indexOf("bottom")>-1?c.classTobeAdded="lytePopoverArrowTop":y.indexOf("top")>-1?c.classTobeAdded="lytePopoverArrowBottom":"left"===y?c.classTobeAdded="lytePopoverArrowRight":"right"===y&&(c.classTobeAdded="lytePopoverArrowLeft");var m,g=o.querySelector("#lytePopoverArrow");g.classList.remove("lytePopoverArrowTop","lytePopoverArrowBottom","lytePopoverArrowRight","lytePopoverArrowLeft"),g.classList.add(c.classTobeAdded),$L.fastdom.measure(function(){m=g.getBoundingClientRect()}),$L.fastdom.mutate(function(){if("lytePopoverArrowTop"===c.classTobeAdded||"lytePopoverArrowBottom"===c.classTobeAdded){if(g.style.left=Math.abs(t-(h.left+(h.width-g.offsetWidth)/2))+"px",g.style.top="",m.left<12&&r.width<=16){var o=12-m.left;r.left==t&&t-o>=0&&(g.style.left=m.left+o+"px",t-=o)}else if(i.width-m.right<12&&r.width<=16){o=12-(i.width-g.getBoundingClientRect().right);r.left+r.width==i.width+t&&(g.style.left=m.left-o+"px",t+=o)}}else if(g.style.left="",g.style.top=Math.abs(e-(h.top+(h.height-g.offsetHeight)/2))+"px",m.top<12&&r.height<=16){o=12-m.top;r.top==e&&e-o>=0&&(g.style.top=m.top+o+"px",e-=o)}else if(i.height-m.bottom<12&&r.height<=16){o=12-(i.height-m.bottom);r.top+r.height==i.height+e&&(g.style.top=m.top-o+"px",e+=o)}})}this.setData("classTobeAdded",c.classTobeAdded)}this.$node.ltProp("positionNew",y),$L.fastdom.mutate(function(){o.style.left=t+"px",o.style.top=e+"px",this.getData("first")&&(this.callOnShow(),this.setOpacityAndVisibility(),this.setData("first",!1))},this)}},this),this.$node.ltProp("freeze")&&(document.body.classList.add("bodyWrapper"),LytePopup.bodywrapperCount+=1)},positionPopover:function(t,e,o){var l=0,r=0;switch(t){case"bottom":l=e.left-(o.width-e.width)/2,r=e.top+e.height+("box"==this.getData("ltPropType")?0:9),classTobeAdded="lytePopoverArrowTop";break;case"bottomLeft":l=e.left,r=e.top+e.height+("box"==this.getData("ltPropType")?0:9),classTobeAdded="lytePopoverArrowTop";break;case"bottomRight":l=e.left+e.width-o.width,r=e.top+e.height+("box"==this.getData("ltPropType")?0:9),classTobeAdded="lytePopoverArrowTop";break;case"top":l=e.left-(o.width-e.width)/2,r=e.top-(o.height+("box"==this.getData("ltPropType")?0:9)),classTobeAdded="lytePopoverArrowBottom";break;case"topLeft":l=e.left,r=e.top-(o.height+("box"==this.getData("ltPropType")?0:9)),classTobeAdded="lytePopoverArrowBottom";break;case"topRight":l=e.left+e.width-o.width,r=e.top-(o.height+("box"==this.getData("ltPropType")?0:9)),classTobeAdded="lytePopoverArrowBottom";break;case"left":l=e.left-o.width-("box"==this.getData("ltPropType")?0:9),r=e.top,classTobeAdded="lytePopoverArrowRight";break;case"right":l=e.left+e.width+("box"==this.getData("ltPropType")?0:9),r=e.top,classTobeAdded="lytePopoverArrowLeft"}return{offsetLeft:l,offsetTop:r,classTobeAdded:classTobeAdded}},callOnShow:function(){this.getMethods("onShow")&&this.executeMethod("onShow",this)},setOpacityAndVisibility:function(){if(this.actualModalDiv.style.transitionDuration=parseFloat(this.getData("ltPropDuration"))/1e3+"s",LytePopup.makingVisible=!0,this.actualModalDiv.style.opacity="1",this.$node.ltProp("freeze")){var t=this.childComp.querySelector("lyte-popover-freeze").style;t.transitionDuration=parseFloat(this.getData("ltPropDuration"))/1e3+"s",t.opacity=this.getData("ltPropDimmer").opacity,t.background=this.getData("ltPropDimmer").color}},onBeforeCloseHandling:function(t){var e=!0;if(this.getMethods("onBeforeClose")&&(e=this.executeMethod("onBeforeClose",t,this)),void 0===e||e){if(this.getData("ltPropFreeze")&&LytePopup.hideOrShowFreeze("close"),this.getData("arrowHidden")&&(this.getData("arrowEle").style.display="",this.setData("arrowHidden",!1),this.setData("arrowEle",null)),_lyteUiUtils.getRTL()&&("bottomLeft"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","bottomRight"):"bottomRight"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","bottomLeft"):"topLeft"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","topRight"):"topRight"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","topLeft"):"left"==this.getData("ltPropPlacement")?this.setData("ltPropPlacement","right"):"right"==this.getData("ltPropPlacement")&&this.setData("ltPropPlacement","left")),void 0==this.getData("ltPropDuration"))this.$node.ltProp({showCopy:!1,show:!1}),this.getMethods("onClose")&&this.executeMethod("onClose",t,this),this.$node.ltProp("freeze")&&(LytePopup.bodywrapperCount-=1,0!=LytePopup.bodywrapperCount&&0!=LytePopup.components.length||document.body.classList.remove("bodyWrapper"));else{var o=parseInt(this.getData("ltPropDuration")),l=this;this.timeOutId=setTimeout(function(){l.timeOutId=!1,l.$node.ltProp({showCopy:!1,show:!1}),l.getMethods("onClose")&&l.executeMethod("onClose",t,l),l.$node.ltProp("freeze")&&(LytePopup.bodywrapperCount-=1,0!=LytePopup.bodywrapperCount&&0!=LytePopup.components.length||document.body.classList.remove("bodyWrapper"))},o),this.actualModalDiv.style.transitionDuration=(o>300?o-200:100)/1e3+"s"}this.actualModalDiv.style.opacity=0,LytePopup.closePopup(this),this.setData("visible",!1),this.$node.ltProp("freeze")&&this.childComp.querySelector("lyte-popover-freeze")&&(this.childComp.querySelector("lyte-popover-freeze").style.opacity=0),!this.getData("ltPropFreeze")&&document.body.classList.contains("lyteStopBodyScrolling")&&document.body.classList.remove("lyteStopBodyScrolling")}else this.setData("returnedFalse",!0),this.getData("visible")||this.setData("visible",!0),this.$node.ltProp("show",!0)},onBeforeShowHandling:function(){var t=!0;if(this.getMethods("onBeforeShow")&&(t=this.executeMethod("onBeforeShow",this)),void 0===t||t){if(this.getData("ltPropDraggable")&&this.addDragHandler(),this.updateScrollHandling(),this.$node.ltProp("freeze")||this.childComp.querySelector(".popoverWrapper").classList.add("noFreeze"),this.$node.ltProp("positionNew",this.$node.ltProp("position")),void 0==this.getData("ltPropDuration"))this.$node.ltProp("showCopy",!0),$L.fastdom.mutate(function(){$L.fastdom.measure(function(){$L.fastdom.mutate(function(){this.computeOffsetImpl()},this)},this)},this);else{var e=this;setTimeout(function(){e.$node.ltProp("showCopy",!0),$L.fastdom.mutate(function(){$L.fastdom.measure(function(){$L.fastdom.mutate(function(){e.computeOffsetImpl()},e)},e)},e)},0)}this.getData("first")||this.setData("first",!0),this.getData("ltPropFreeze")||document.body.classList.add("lyteStopBodyScrolling"),this.getData("visible")||this.setData("visible",!0),LytePopup.addPopup(this)}else this.$node.ltProp({showCopy:!1,show:!1})},didDestroy:function(){this.childComp&&(this.timeOutId&&(clearInterval(this.timeOutId),this.timeOutId=!1),LytePopup.closePopup(this),this.childComp.remove(),delete this.childComp,delete this.actualModalDiv,this.$node.ltProp("freeze")&&(LytePopup.bodywrapperCount-=1,0!=LytePopup.bodywrapperCount&&0!=LytePopup.components.length||document.body.classList.remove("bodyWrapper")),!this.getData("ltPropFreeze")&&document.body.classList.contains("lyteStopBodyScrolling")&&document.body.classList.remove("lyteStopBodyScrolling"))},actions:{close:function(){this.$node.ltProp("show",!1)}},methods:{beforeWormholeAppend:function(t){if(this.childComp=t,this.$node.parentElement&&"LYTE-COLORPICKER"==this.$node.parentElement.tagName&&(this.$node.parentElement.component.childComp=this.childComp),this.childComp.querySelector("lyte-popover-header")&&(this.childComp.querySelector("lyte-popover-header").style.padding=this.getData("ltPropHeaderPadding")),this.childComp.querySelector("lyte-popover-content")&&(this.childComp.querySelector("lyte-popover-content").style.padding=this.getData("ltPropContentPadding")),this.childComp.querySelector("lyte-popover-footer")&&(this.childComp.querySelector("lyte-popover-footer").style.padding=this.getData("ltPropFooterPadding")),this.actualModalDiv=this.childComp.querySelector(".lytePopover"),this.childComp.querySelector("lyte-popover-header")&&this.getData("ltPropShowCloseButton")){var e=0,o=0;$L.fastdom.measure(function(){e=this.childComp.querySelector("lyte-popover-header").getBoundingClientRect().height,o=this.childComp.querySelector(".lytePopoverClose").getBoundingClientRect().height},this),$L.fastdom.mutate(function(){this.childComp.querySelector(".lytePopoverClose").style.top=(e-o)/2+"px"},this)}}}}),"complete"===document.readyState||"interactive"===document.readyState?addPopoverEvent():document.addEventListener("DOMContentLoaded",function(t){addPopoverEvent(t)});