if(!LytePopup){var LytePopup={components:[],bodywrapperCount:0,onEscape:function(t){("key"in(t=t||window.event)?"Escape"==t.key||"Esc"==t.key:27==t.keyCode)&&LytePopup.closePopup(void 0,!0)},bindDocumentKeydown:function(){document.addEventListener("keydown",LytePopup.onEscape,!0)},hideOrShowFreeze:function(t){var e="";if("open"==t&&LytePopup.components.length>1)for(var o=LytePopup.components.length-2;o>=0;o--){if(e="LYTE-MODAL"==LytePopup.components[o].$node.tagName?"lyte-modal-freeze":"LYTE-POPOVER"==LytePopup.components[o].$node.tagName?"lyte-popover-freeze":".alertFreezeLayer",a=LytePopup.components[o].childComp.querySelector(e)){a.style.opacity="0";break}}else if("close"==t&&LytePopup.components.length>1)for(o=LytePopup.components.length-2;o>=0;o--){var a;if("LYTE-MODAL"==LytePopup.components[o].$node.tagName?(e="lyte-modal-freeze",val=LytePopup.components[o].getData("ltPropDimmer").opacity):"LYTE-POPOVER"==LytePopup.components[o].$node.tagName?(e="lyte-popover-freeze",val=LytePopup.components[o].getData("ltPropDimmer").opacity):(e=".alertFreezeLayer",val="0.4"),a=LytePopup.components[o].childComp.querySelector(e)){a.style.opacity=val;break}}},addPopup:function(t){LytePopup.closePopup();var e=LytePopup.components.length;if(e>0){var o,a="",p="";a="LYTE-MODAL"==LytePopup.components[e-1].$node.tagName?".modalWrapper":"LYTE-POPOVER"==LytePopup.components[e-1].$node.tagName?".popoverWrapper":".alertWrapper",p="LYTE-MODAL"==t.$node.tagName?".modalWrapper":"LYTE-POPOVER"==t.$node.tagName?".popoverWrapper":".alertWrapper";var l=t.childComp.querySelector(p);o=Number(document.defaultView.getComputedStyle(LytePopup.components[LytePopup.components.length-1].childComp.querySelector(a),null).getPropertyValue("z-index")),l.style.zIndex=o+2}LytePopup.components[e]=t,(t.getData("ltPropFreeze")||"LYTE-ALERT"==t.$node.tagName)&&LytePopup.hideOrShowFreeze("open")},closePopup:function(t,e){if(e){var o=LytePopup.components[LytePopup.components.length-1];o&&o.$node.ltProp("closeOnEscape")&&o.$node.ltProp("show",!1)}else if(t){var a=LytePopup.components.indexOf(t);a>-1&&LytePopup.components.splice(a,1)}else for(var p=LytePopup.components.length-1;p>=0;p--)LytePopup.components[p].$node&&!LytePopup.components[p].$node.ltProp("allowMultiple")&&(LytePopup.components[p].$node.ltProp("show",!1),"LYTE-MODAL"==LytePopup.components[p].$node.tagName&&LytePopup.components.splice(p,1))}};LytePopup.bindDocumentKeydown()}Lyte.Component.register("lyte-alert",{_template:'<template tag-name="lyte-alert">\n\t<template is="if" value="{{ltPropShowCopy}}">\n\t\t<template case="true"><lyte-wormhole on-before-append="{{method(&quot;beforeWormholeAppend&quot;)}}">\n\t\t\t<template is="registerYield" yield-name="lyte-content">\n\t\t\t\t<div class="alertWrapper {{ltPropWrapperClass}}">\t\n\t\t\t\t\t<div class="{{lyteUiConcatAlertClass(ltPropContentAlign,\'alertPopup\')}}">\n\t\t\t\t\t\t<template is="if" value="{{ltPropShowCloseButton}}">\n\t\t\t\t\t\t\t<template case="true"><span class="lyte-svg alertClose" onclick="{{action(\'closeAlert\')}}"></span></template>\n\t\t\t\t\t\t</template>\n\t\t\t\t\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t\t\t\t\t<lyte-yield yield-name="alert"></lyte-yield>\n\t\t\t\t\t\t</template><template case="false">\n\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIfEquals(ltPropHeading,\'\')}}">\n\t\t\t\t\t\t\t\t<template case="false"><div class="alertHeader">\n\t\t\t\t\t\t\t\t\t<span class="dBlock">{{ltPropHeading}}</span>\n\t\t\t\t\t\t\t\t</div></template>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t<div class="alertContent">\n\t\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIfEquals(ltPropType,\'\')}}">\n\t\t\t\t\t\t\t\t\t<template case="false"><div class="alertContentMiddle">\n\t\t\t\t\t\t\t\t\t\t<span class="{{lyteUiConcatTypeClass(ltPropType,\'AlertIcon\',\'lyteStatusIcon\')}}"></span>\n\t\t\t\t\t\t\t\t\t</div></template>\n\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t<div class="alertContentMiddle">\n\t\t\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIfEquals(ltPropPrimaryMessage,\'\')}}">\n\t\t\t\t\t\t\t\t\t\t<template case="false"><div>\n\t\t\t\t\t\t\t\t\t\t\t<span class="alertPrimaryMsg">{{ltPropPrimaryMessage}}</span>\n\t\t\t\t\t\t\t\t\t\t</div></template>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIfEquals(ltPropSecondaryMessage,\'\')}}">\n\t\t\t\t\t\t\t\t\t\t<template case="false"><div>\n\t\t\t\t\t\t\t\t\t\t\t<span class="alertSecondaryMsg">{{ltPropSecondaryMessage}}</span>\n\t\t\t\t\t\t\t\t\t\t</div></template>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="clearFloat"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</template></template>\n\t\t\t\t\t\t<template is="if" value="{{nonYieldFooter}}"><template case="true">\n\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIsEmptyArray(ltPropButtons)}}">\n\t\t\t\t\t\t\t\t<template case="false"><div class="{{lyteUiConcat(\'alertFooter \',ltPropButtonPosition)}}">\n\t\t\t\t\t\t\t\t\t<template is="for" items="{{ltPropButtons}}">\n\t\t\t\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIfEquals(item.type,\'accept\')}}">\n\t\t\t\t\t\t\t\t\t\t\t<template case="true"><lyte-button class="lyteAlertBtn" onclick="{{action(\'accept\',item.text)}}">\n\t\t\t\t\t\t\t\t\t\t\t\t<template is="registerYield" yield-name="text">{{item.text}}</template>\n\t\t\t\t\t\t\t\t\t\t\t</lyte-button></template>\n\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t<template is="if" value="{{lyteUiIfEquals(item.type,\'reject\')}}">\n\t\t\t\t\t\t\t\t\t\t\t<template case="true"><lyte-button class="lyteAlertBtn" onclick="{{action(\'reject\',item.text)}}">\n\t\t\t\t\t\t\t\t\t\t\t\t<template is="registerYield" yield-name="text">{{item.text}}</template>\n\t\t\t\t\t\t\t\t\t\t\t</lyte-button></template>\n\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</div></template>\n\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t</template></template>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="{{lyteUiAddShowClass(ltPropShowCopy,\'\',\'alertFreezeLayer\')}}" style="{{lyteUiConcat(\'background:\',ltPropDimmer.color,\';\',\'opacity:\',ltPropDimmer.opacity)}}"></div>\n\t\t\t\t</div>\n\t\t\t</template>\n\t\t</lyte-wormhole></template>\n\t</template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[0]},{type:"registerYield",position:[0,1],dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"attr",position:[1,1,1]},{type:"if",position:[1,1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[0]}]}},default:{}},{type:"attr",position:[1,1,3]},{type:"if",position:[1,1,3],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{false:{dynamicNodes:[{type:"text",position:[0,1,0]}]}},default:{}},{type:"attr",position:[3,1]},{type:"if",position:[3,1],cases:{false:{dynamicNodes:[{type:"attr",position:[0,1]}]}},default:{}},{type:"attr",position:[3,3,1]},{type:"if",position:[3,3,1],cases:{false:{dynamicNodes:[{type:"text",position:[0,1,0]}]}},default:{}},{type:"attr",position:[3,3,3]},{type:"if",position:[3,3,3],cases:{false:{dynamicNodes:[{type:"text",position:[0,1,0]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,1,5]},{type:"if",position:[1,1,5],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{false:{dynamicNodes:[{type:"attr",position:[0]},{type:"attr",position:[0,1]},{type:"for",position:[0,1],dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[0]},{type:"registerYield",position:[0,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[0]}]}},default:{}},{type:"attr",position:[3]},{type:"if",position:[3],cases:{true:{dynamicNodes:[{type:"attr",position:[0]},{type:"registerYield",position:[0,1],dynamicNodes:[{type:"text",position:[0]}]},{type:"componentDynamic",position:[0]}]}},default:{}}]}]}},default:{}}]}},default:{}},{type:"attr",position:[1,3],attr:{style:{name:"style",helperInfo:{name:"lyteUiConcat",args:["'background:'","ltPropDimmer.color","';'","'opacity:'","ltPropDimmer.opacity"]}}}}]},{type:"componentDynamic",position:[0]}]}},default:{}}],_observedAttributes:["ltPropType","ltPropShow","ltPropWrapperClass","ltPropAllowMultiple","ltPropHeading","ltPropPrimaryMessage","ltPropSecondaryMessage","ltPropTop","ltPropButtons","ltPropButtonPosition","ltPropShowCloseButton","ltPropCloseOnEscape","ltPropDimmer","ltPropYield","ltPropAnimation","ltPropContentAlign","nonYieldFooter"],data:function(){return{ltPropType:Lyte.attr("string",{default:""}),ltPropShow:Lyte.attr("boolean",{default:!1}),ltPropWrapperClass:Lyte.attr("string",{default:""}),ltPropAllowMultiple:Lyte.attr("boolean",{default:!1}),ltPropHeading:Lyte.attr("string",{default:""}),ltPropPrimaryMessage:Lyte.attr("string",{default:""}),ltPropSecondaryMessage:Lyte.attr("string",{default:""}),ltPropTop:Lyte.attr("string",{default:"40px"}),ltPropButtons:Lyte.attr("array",{default:[]}),ltPropButtonPosition:Lyte.attr("string",{default:"right"}),ltPropShowCloseButton:Lyte.attr("boolean",{default:!0}),ltPropCloseOnEscape:Lyte.attr("boolean",{default:!0}),ltPropDimmer:Lyte.attr("object",{default:{color:"black",opacity:"0.4"}}),ltPropYield:Lyte.attr("boolean",{default:!1}),ltPropAnimation:Lyte.attr("string",{default:"slideDown"}),ltPropContentAlign:Lyte.attr("string",{default:"left"}),nonYieldFooter:Lyte.attr("boolean",{default:!0})}},didConnect:function(){},showToggled:function(){this.$node.ltProp("show")?(this.getData("nonYieldFooter")&&0==this.getData("ltPropButtons").length&&("confirm"==this.getData("ltPropType")?this.setData("ltPropButtons",[{type:"accept",text:"Ok"},{type:"reject",text:"Cancel"}]):this.setData("ltPropButtons",[{type:"accept",text:"Ok"}])),document.body.classList.add("bodyWrapper"),LytePopup.bodywrapperCount+=1,this.showAlert()):(LytePopup.hideOrShowFreeze("close"),this.closeAlert())}.observes("ltPropShow"),closeAlertFn:function(){this.getMethods("onClose")&&this.executeMethod("onClose",this)},showAlert:function(){var t=this;if(setTimeout(function(){if("center"==t.getData("ltPropTop")){var e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);t.actualModalDiv.style.top=(e-t.actualModalDiv.getBoundingClientRect().height)/2+"px"}else t.actualModalDiv.style.top=t.getData("ltPropTop");"zoomIn"==t.getData("ltPropAnimation")&&t.actualModalDiv.classList.add("alertOpened")},100),this.setData("ltPropShowCopy",!0),"slideDown"==this.getData("ltPropAnimation")?this.actualModalDiv.classList.add("lyteAlertSlideDown"):"zoomIn"==this.getData("ltPropAnimation")&&this.actualModalDiv.classList.add("lyteAlertZoomIn"),this.getData("ltPropButtons")&&this.getData("nonYieldFooter")){for(var e,o=this.getData("ltPropButtons"),a=0;a<o.length;a++)e=this.actualModalDiv.querySelectorAll(".lyteAlertBtn")[a],o[a].appearance&&e.setData("ltPropAppearance",o[a].appearance),o[a].disabled&&e.setData("ltPropDisabled",o[a].disabled),o[a].style&&e.setData("ltPropStyle",o[a].style),o[a].color&&e.setData("ltPropColor",o[a].color),o[a].backgroundColor&&e.setData("ltPropBackgroundColor",o[a].backgroundColor),o[a].tabIndex&&e.setData("ltPropTabIndex",o[a].tabIndex),o[a].type&&e.setData("ltPropType",o[a].type),o[a].id&&e.setData("ltPropId",o[a].id),o[a].class&&e.setData("ltPropClass",o[a].class),o[a].autoFocus&&e.setData("ltPropAutoFocus",o[a].autoFocus),o[a].lyteShortcut&&e.setData("ltPropLyteShortcut",o[a].lyteShortcut),o[a].name&&e.setData("ltPropName",o[a].name),o[a].value&&e.setData("ltPropValue",o[a].value);e=null}LytePopup.addPopup(this)},closeAlert:function(){"slideDown"==this.getData("ltPropAnimation")&&(this.actualModalDiv.style.top="-"+(this.actualModalDiv.getBoundingClientRect().height+this.actualModalDiv.getBoundingClientRect().top+40)+"px");var t=1e3*parseFloat(document.defaultView.getComputedStyle(this.actualModalDiv).getPropertyValue("transition-duration"));"zoomIn"==this.getData("ltPropAnimation")&&this.actualModalDiv.classList.remove("alertOpened");var e=this;this.sId=setTimeout(function(){e.setData("ltPropShowCopy",!1),e.sId=!1,delete e.actualModalDiv,delete e.childComp,LytePopup.bodywrapperCount-=1,0!=LytePopup.bodywrapperCount&&0!=LytePopup.components.length||document.body.classList.remove("bodyWrapper")},t-100),this.closeAlertFn(),LytePopup.closePopup(this)},didDestroy:function(){this.childComp&&(this.sId&&(clearTimeout(this.sId),this.sId=!1),LytePopup.closePopup(this),this.childComp.remove(),delete this.actualModalDiv,delete this.childComp,LytePopup.bodywrapperCount-=1,0!=LytePopup.bodywrapperCount&&0!=LytePopup.components.length||document.body.classList.remove("bodyWrapper"))},actions:{closeAlert:function(){this.$node.ltProp("show",!1)},accept:function(t){this.getMethods("onAccept")&&this.executeMethod("onAccept",t,this),this.$node.ltProp("show",!1)},reject:function(t){this.getMethods("onReject")&&this.executeMethod("onReject",t,this),this.$node.ltProp("show",!1)}},methods:{beforeWormholeAppend:function(t){this.childComp=t,this.actualModalDiv=this.childComp.querySelector(".alertPopup"),this.getData("ltPropYield")&&t.querySelector("lyte-alert-footer")?this.setData("nonYieldFooter",!1):this.setData("nonYieldFooter",!0)}}});