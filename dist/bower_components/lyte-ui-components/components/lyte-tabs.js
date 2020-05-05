Lyte.Component.register("lyte-tabs",{_template:'<template tag-name="lyte-tabs">\n\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t<lyte-yield yield-name="tabYield"></lyte-yield>\n\t</template></template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]}},default:{}}],_observedAttributes:["ltPropYield","ltPropHover","ltPropActiveClass","ltPropPosition","ltPropCloseIcon","prevTarget","ltPropHeight","ltPropType","ltPropMaxWidth","menuLabels"],init:function(){this.$node.addTab=function(e){this.component.constructTabs(this,e)},this.$node.deleteTab=function(e){this.component.deleteTabContent(e)},this.$node.openTab=function(e){this.component.openTabContent(e)}},data:function(){return{ltPropYield:Lyte.attr("boolean",{default:!0}),ltPropHover:Lyte.attr("string",{default:"lyteTabHover"}),ltPropActiveClass:Lyte.attr("string",{default:"lyteTabActive"}),ltPropPosition:Lyte.attr("object",{default:{pos:"top",align:"left"}}),ltPropCloseIcon:Lyte.attr("boolean",{default:!1}),prevTarget:Lyte.attr("object",{default:null}),ltPropHeight:Lyte.attr("string",{default:"400px"}),ltPropType:Lyte.attr("string"),ltPropMaxWidth:Lyte.attr("string",{default:"90%"}),menuLabels:Lyte.attr("array",{default:[]})}},didConnect:function(){this.initialFunc()},initialFunc:function(){if(this.$node.childElementCount>1||"LYTE-TAB"===this.$node.children[0].tagName){this.$node.style.height=this.getData("ltPropHeight");var e=this.$node.querySelector("lyte-tab-head");e.classList.add("lyteTabNav"),"collapse"==this.getData("ltPropType")&&e.classList.add("lyteTabOverflowV");var t,o=this.getData("ltPropPosition"),a=this.getHeader(e.children),n=this.getContent(this.$node.querySelector("lyte-tab-body").children),i=this.getData("ltPropActiveClass");this.setPosition(o),this.getData("ltPropCloseIcon")&&this.createCloseIcon(this.$node.querySelector("lyte-tab-head").querySelectorAll("lyte-tab-title"));e.addEventListener("click",function(e){this.showTab(e)}.bind(this),!0),e.addEventListener("mouseover",function(e){this.mouseOver(e)}.bind(this),!0),e.addEventListener("mouseout",function(e){this.mouseOut(e)}.bind(this),!0);for(var l=0;l<a.length;l++)a[l].classList.contains(i)&&(t=l);for(l=0;l<n.length;l++)t&&t===l?(this.executeOnBeforeOpen(a[t],a[t].getAttribute("lt-prop-id"),null),n[l].classList.add("lyteTabShow"),this.executeOnOpen(a[t],a[t].getAttribute("lt-prop-id"))):n[l].classList.add("lyteTabHide");t||(t=0,this.executeOnBeforeOpen(a[0],a[0].getAttribute("lt-prop-id"),null),a[0].classList.add(i),n[0].classList.remove("lyteTabHide"),n[0].classList.add("lyteTabShow"),this.executeOnOpen(a[0],a[0].getAttribute("lt-prop-id"))),this.setData("prevTarget",a[t]),$L.fastdom.measure(function(){if("auto"==this.getData("ltPropHeight"))"left"!==o.pos&&"right"!==o.pos||(this.$node.querySelector(".lyteTabNav").style.height="auto",this.$node.querySelector("lyte-tab-body").style.height="auto"),"top"!==o.pos&&"bottom"!==o.pos||(this.$node.querySelector("lyte-tab-body").style.height="auto"),this.makeAlignment(this.getData("ltPropPosition"));else{var e=window.getComputedStyle(this.$node),t=(e.borderTop?parseFloat(e.borderTop):0)+(e.borderBottom?parseFloat(e.borderBottom):0),a=this.$node.querySelector(".lyteTabNav").getBoundingClientRect().height,n=parseInt(e.height)-t;$L.fastdom.mutate(function(){"left"!==o.pos&&"right"!==o.pos||(this.$node.querySelector(".lyteTabNav").style.height=n+"px",this.$node.querySelector("lyte-tab-body").style.height=n+"px"),"top"!==o.pos&&"bottom"!==o.pos||(this.$node.querySelector("lyte-tab-body").style.height=n-a+"px"),this.makeAlignment(this.getData("ltPropPosition"))},this)}},this)}else console.error("No content detected")},onPositionChange:function(){var e=this.$node;e.className="";var t=e.querySelector("lyte-tab-head"),o=e.querySelector("lyte-tab-body"),a=e.querySelectorAll("lyte-tab-title");t.classList.remove("lyteTabAlignStart","lyteTabAlignEnd","lyteTabAlignCenter"),t.removeAttribute("style"),o.removeAttribute("style"),a[0].style.marginLeft="",a[0].style.marginTop="";for(var n=0;n<a.length;n++)a[n].style.float="";e=null,t=null,a=null,o=null,this.initialFunc()}.observes("ltPropPosition"),onHeightChange:function(){this.$node.style.height=this.getData("ltPropHeight"),this.setHeight(this.getData("ltPropPosition"))}.observes("ltPropHeight"),showTab:function(e){for(var t=e.target.correspondingElement||e.target;t&&t.parentNode&&"LYTE-TAB-TITLE"!=t.tagName;)t=t.parentNode;if(t&&"HTML"!=t.tagName&&!t.isEqualNode(document)){var o=t.getAttribute("lt-prop-id");if(e.target.classList.contains("lyteTabCloseIcon")){if(this.deleteTabContent(o),this.makeAlignment(this.getData("ltPropPosition")),!(t=this.$node.querySelector("lyte-tab-head").querySelectorAll("lyte-tab-title").length>0?this.$node.querySelector("lyte-tab-head").querySelectorAll("lyte-tab-title")[0]:null))return void this.setData("prevTarget",null);o=t.getAttribute("lt-prop-id")}this.openTabContent(t)}},mouseOver:function(e){for(var t=e.target.correspondingElement||e.target;t&&t.parentNode&&"LYTE-TAB-TITLE"!=t.tagName;)t=t.parentNode;if(t&&"HTML"!=t.tagName&&!t.isEqualNode(document)){var o=this.getData("ltPropHover");$L(t).addClass(o)}},mouseOut:function(e){for(var t=e.target.correspondingElement||e.target;t&&t.parentNode&&"LYTE-TAB-TITLE"!=t.tagName;)t=t.parentNode;if(t&&"HTML"!=t.tagName&&!t.isEqualNode(document)){var o=this.getData("ltPropHover");$L(t).removeClass(o)}},getContent:function(e){for(var t=[],o=0;o<e.length;o++)"LYTE-TAB-CONTENT"==e[o].tagName&&t.push(e[o]);return t},getHeader:function(e){for(var t=[],o=0;o<e.length;o++)"LYTE-TAB-TITLE"==e[o].tagName&&t.push(e[o]);return t},constructTabs:function(e,t){var o,a="",n="",i=!1,l=document.createElement("lyte-tab-title"),s=document.createElement("lyte-tab-content");"object"==typeof t&&"LYTE-TAB"===t.tagName?(a=t.getAttribute("lt-prop-title"),n=t.innerHTML,o=t.getAttribute("lt-prop-id")):(a=t.title,n=t.content,o=t.id,i=!0),o||(o=this.generateId(a)),l.innerHTML=a,s.innerHTML=n,l.setAttribute("lt-prop-id",o),s.id=o,s.classList.add("lyteTabHide"),e.querySelector("lyte-tab-head").append(l),e.querySelector("lyte-tab-body").append(s),i&&(this.getData("ltPropCloseIcon")&&this.createCloseIcon(new Array(l)),this.makeAlignment(this.getData("ltPropPosition")))},deleteTabContent:function(e){if(e)for(var t=this.$node.querySelector("#"+e),o=this.$node.querySelector("lyte-tab-head").querySelectorAll("lyte-tab-title"),a=0;a<o.length;a++)if(o[a].getAttribute("lt-prop-id")===e){o[a].classList.contains("lyteTabCustomTitleWidth")&&!0,this.$node.querySelector("lyte-tab-head").removeChild(o[a]),t&&this.$node.querySelector("lyte-tab-body").removeChild(t);break}},openTabContent:function(e){if(e){if("string"==typeof e)for(var t=this.$node.querySelector("lyte-tab-head").querySelectorAll("lyte-tab-title"),o=this.$node.querySelector("#"+e),a=0;a<t.length;a++)if(t[a].getAttribute("lt-prop-id")===e){if(!this.executeOnBeforeOpen(t[a],e,this.getData("prevTarget")?this.getData("prevTarget").getAttribute("lt-prop-id"):null))return;this.hideAll(),t[a].classList.add(this.getData("ltPropActiveClass")),o&&(o.classList.remove("lyteTabHide"),o.classList.add("lyteTabShow")),this.executeOnOpen(t[a],e),this.setData("prevTarget",t[a]);break}if("object"==typeof e){var n=e.getAttribute("lt-prop-id");o=this.$node.querySelector("#"+n);if(!this.executeOnBeforeOpen(e,n,this.getData("prevTarget")?this.getData("prevTarget").getAttribute("lt-prop-id"):null))return;this.hideAll(),e.classList.add(this.getData("ltPropActiveClass")),o&&(o.classList.remove("lyteTabHide"),o.classList.add("lyteTabShow")),this.executeOnOpen(e,n),this.setData("prevTarget",e)}}},createCloseIcon:function(e){for(var t=0;t<e.length;t++){var o=document.createElement("span");o.innerHTML=e[t].innerHTML,e[t].innerHTML="",e[t].appendChild(o);var a=document.createElement("span");a.classList.add("lyteTabCloseIcon"),e[t].appendChild(a)}},setPosition:function(e){switch(e.pos){case"left":this.$node.classList.add("lyteTabDefaultLeft");break;case"right":this.$node.classList.add("lyteTabDefaultRight");break;case"top":this.$node.classList.add("lyteTabDefaultTop");break;case"bottom":this.$node.classList.add("lyteTabDefaultBottom")}},setHeight:function(e){"auto"==this.getData("ltPropHeight")?("left"!==e.pos&&"right"!==e.pos||(this.$node.querySelector(".lyteTabNav").style.height="auto",this.$node.querySelector("lyte-tab-body").style.height="auto"),"top"!==e.pos&&"bottom"!==e.pos||(this.$node.querySelector("lyte-tab-body").style.height="auto"),this.makeAlignment(this.getData("ltPropPosition"))):$L.fastdom.measure(function(){var t=window.getComputedStyle(this.$node),o=(t.borderTop?parseFloat(t.borderTop):0)+(t.borderBottom?parseFloat(t.borderBottom):0),a=this.$node.querySelector(".lyteTabNav").getBoundingClientRect().height,n=parseInt(t.height)-o;$L.fastdom.mutate(function(){"left"!==e.pos&&"right"!==e.pos||(this.$node.querySelector(".lyteTabNav").style.height=n+"px",this.$node.querySelector("lyte-tab-body").style.height=n+"px"),"top"!==e.pos&&"bottom"!==e.pos||(this.$node.querySelector("lyte-tab-body").style.height=n-a+"px"),this.makeAlignment(this.getData("ltPropPosition"))},this)},this)},hideAll:function(){for(var e=this.getHeader(this.$node.querySelector("lyte-tab-head").children),t=this.getContent(this.$node.querySelector("lyte-tab-body").children),o=this.getData("ltPropActiveClass"),a=0;a<e.length;a++)e[a].classList.contains(o)&&e[a].classList.remove(o);for(var n=0;n<t.length;n++)t[n].classList.contains("lyteTabShow")&&(t[n].classList.remove("lyteTabShow"),t[n].classList.add("lyteTabHide")),t[n].classList.contains("lyteTabHide")||t[n].classList.add("lyteTabHide"),$L(t[n]).hasClass("lyteTabHide")||$L(t[n]).addClass("lyteTabHide")},customizeTitleTab:function(e){$L.fastdom.measure(function(){var t=this.$node.querySelector("lyte-tab-head"),o=this.getWidth(t,!1);if("top"===e||"bottom"===e){var a=0,n=0,i=t.querySelectorAll("lyte-tab-title");"collapse"==this.getData("ltPropType")&&$L.fastdom.measure(function(){for(var e=0;e<i.length;e++)a+=this.getWidth(i[e],!0,!0);a>o&&this.collapseHeader()},this)}if("afterDelete"===e){i=this.$node.querySelector("lyte-tab-head").querySelectorAll("lyte-tab-title"),n=o/i.length;$L.fastdom.mutate(function(){for(var e=0;e<i.length;e++)i[e].style.width=n+"px"})}},this)},collapseHeader:function(e){var t=this.$node.querySelector(".lyteTabNav"),o=this.getWidth(t,!1),a=t.offsetHeight,n=-1!=this.getData("ltPropMaxWidth").indexOf("%")?parseInt(this.getData("ltPropMaxWidth"))*o/100:parseFloat(this.getData("ltPropMaxWidth")),i=t.querySelectorAll("lyte-tab-title"),l=0,s=-1,r=Array.from(i).findIndex(function(e){return e.classList.contains("lyteTabActive")}),d=[];if(e)for(var c=0;c<i.length;c++)i[c].classList.contains("lyteTabForceHide")&&i[c].classList.remove("lyteTabForceHide");l+=this.getWidth(i[r],!0,!0);for(c=0;c<i.length;c++)if(c!=r&&(l+=this.getWidth(i[c],!0,!0))>n){s=c;break}if(s>-1&&s<i.length){for(c=s;c<i.length;c++)c==r?r>0&&!i[c-1].classList.contains("lyteTabForceHide")&&($L(i[c-1]).addClass("lyteTabForceHide"),d.push(i[c-1].textContent)):($L(i[c]).addClass("lyteTabForceHide"),d.push(i[c].textContent));if(this.$node.querySelector("#lyteTabMenu"))Lyte.arrayUtils(this.getData("menuLabels"),"removeAt",0,this.getData("menuLabels").length),Lyte.arrayUtils(this.getData("menuLabels"),"push",d);else{var h=document.createElement("span");h.id="moreMenu";var u=this.createUniqueSlector();h.classList.add(u),h.appendChild(document.createElement("span")),this.$node.querySelector("lyte-tab-head").appendChild(h),this.createMenu(d,u,"init"),e||"bottom"===this.getData("ltPropPosition").pos&&(t.style.top=t.offsetTop+(Math.ceil(a/2)-1)+"px")}}else-1==s&&this.removeMenu()},createUniqueSlector:function(){for(var e=document.querySelectorAll("lyte-tabs"),t=0;t<e.length;t++)if(e[t].isEqualNode(this.$node))return"menuSel_"+t},createMenu:function(e,t,o){if("init"==o){var a=document.createElement("lyte-menu");a.id="lyteTabMenu",this.setData("menuLabels",e),a.ltProp({content:this.getData("menuLabels"),query:"."+t,event:"click",callout:!0}),a.setMethods({onMenuClick:function(e,t,o,a,n){for(var i,l=arguments[0],s=arguments[2].parentElement.component,r=arguments[3].parentElement.querySelectorAll("lyte-tab-title"),d=0;d<r.length;d++)if(r[d].textContent==l&&r[d].classList.contains("lyteTabForceHide")){i=r[d];break}i&&(i.classList.remove("lyteTabForceHide"),s.openTabContent(i),LyteComponent.insertBefore(r[0],i),s.collapseHeader(!0)),s.getMethods("onMenuClick")&&s.executeMethod("onMenuClick",e,t,o,a,n,s,i)},onBeforeOpen:function(e,t,o){var a=e.parentElement.component;a.getMethods("onBeforeMenuOpen")&&a.executeMethod("onBeforeMenuOpen",e,t,o,a)},onOpen:function(e,t,o){var a=e.parentElement.component;a.getMethods("onMenuOpen")&&a.executeMethod("onMenuOpen",e,t,o,a)},onBeforeClose:function(e,t){var o=e.parentElement.component;o.getMethods("onBeforeMenuClose")&&o.executeMethod("onBeforeMenuClose",e,t,o)},onClose:function(e,t){var o=e.parentElement.component;o.getMethods("onMenuClose")&&o.executeMethod("onMenuClose",e,t,o)},beforeRender:function(e){var t=e.parentElement.component;t.getMethods("onBeforeMenuRender")&&t.executeMethod("onBeforeMenuRender",e,t)},afterRender:function(e){var t=e.parentElement.component;t.getMethods("onAfterMenuRender")&&t.executeMethod("onAfterMenuRender",e,t)}}),this.$node.appendChild(a)}},removeMenu:function(){var e=this.$node.querySelector("#lyteTabMenu");e&&(e.remove(),this.$node.querySelector("#moreMenu").remove()),this.setData("menuLabels",[])},onMenuLabelChange:function(){this.$node.querySelector("lyte-menu").ltProp({content:this.getData("menuLabels")})},makeAlignment:function(e){var t=this.$node.querySelector("lyte-tab-head");"left"!=e.align&&"top"!=e.align||t.classList.add("lyteTabAlignStart"),"right"!=e.align&&"bottom"!=e.align||("collapse"!=this.getData("ltPropType")||"top"!=e.pos&&"bottom"!=e.pos?t.classList.add("lyteTabAlignEnd"):t.classList.add("lyteTabRightCollapse")),"center"==e.align&&t.classList.add("lyteTabAlignCenter")},executeOnBeforeOpen:function(e,t,o){var a;return this.getMethods("onBeforeOpen")&&(a=this.executeMethod("onBeforeOpen",this.$node.querySelector("#"+t),this.$node.querySelector("#"+o),this,e,this.getData("prevTarget")?this.getData("prevTarget"):null)),void 0===a||a},executeOnOpen:function(e,t){this.getMethods("onOpen")&&this.executeMethod("onOpen",this.$node.querySelector("#"+t),this,e)},generateId:function(e){for(;-1!==e.indexOf(" ");)e=e.replace(" ","_");return e},getWidth:function(e,t,o){t=void 0==t||t;var a=getComputedStyle(e),n=parseInt(a.paddingLeft)+parseInt(a.paddingRight),i=0;return o&&(i=parseInt(a.marginLeft)+parseInt(a.marginRight)),parseFloat(a.width)+(t?0:-n)+i}}),Lyte.createCustomElement("lyte-tab-title",{static:{},connectedCallback:function(){var e=this.closest("lyte-tabs");e.checkTabsType?(clearTimeout(e.checkTabsType),e.checkTabsType=!1):this.closest("lyte-tab-head").classList.add("lyteTabVH"),e.checkTabsType=setTimeout(function(){e.checkTabsType=!1;for(var t=this.closest("lyte-tabs").component,o=this.parentElement,a=t.getWidth(o,!1),n=0,i=o.querySelectorAll("lyte-tab-title"),l=-1,s=0;s<i.length;s++)n+=t.getWidth(i[s],!0,!0),i[s].classList.contains(t.getData("ltPropActiveClass"))&&(l=s);-1==l&&t.openTabContent(i[0]),n>a&&"collapse"==t.$node.ltProp("type")&&t.collapseHeader(),this.closest("lyte-tab-head").classList.remove("lyteTabVH")}.bind(this),100)},disconnectedCallback:function(){var e=this.closest("lyte-tabs");e&&e.checkTabsType&&(clearTimeout(e.checkTabsType),e.checkTabsType=!1,this.closest("lyte-tab-head").classList.remove("lyteTabVH"))}}),window.addEventListener("resize",function(){window._lyteUiUtils.tabResizeTriggered&&(clearTimeout(window._lyteUiUtils.tabResizeTriggered),window._lyteUiUtils.tabResizeTriggered=!1),window._lyteUiUtils.tabResizeTriggered=setTimeout(function(){for(var e=document.querySelectorAll("lyte-tabs"),t=0;t<e.length;t++)"collapse"==e[t].component.getData("ltPropType")&&e[t].component.collapseHeader(!0);window._lyteUiUtils.tabResizeTriggered=!1},50)});