Lyte.Component.register("lyte-rating",{_template:'<template tag-name="lyte-rating" class="{{lyteUiAddClassRating(ltPropWrapperClass,ltPropReadOnly)}}">\n\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t<lyte-yield yield-name="rateIcon"></lyte-yield>\n\t</template><template case="false">\n\t\t<template is="for" items="{{countArray}}" item="item" index="index">\n\t\t<lyte-rate-icon class="{{ltPropEmptyIcon}}" data-lrc="{{item}}"></lyte-rate-icon>\n\t\t</template>\n\t</template></template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"for",position:[1],dynamicNodes:[{type:"attr",position:[1]},{type:"componentDynamic",position:[1]}]}]}},default:{}}],_templateAttributes:{type:"attr",position:[]},_observedAttributes:["ltPropValue","ltPropCount","ltPropWrapperClass","ltPropType","ltPropReadOnly","ltPropClearable","ltPropHalfIncrement","ltPropEmptyIcon","ltPropFullIcon","ltPropHalfIcon","ltPropHoverFullIcon","ltPropHoverHalfIcon","ltPropYield","countArray","currentHover"],data:function(){return{ltPropValue:Lyte.attr("number",{default:0}),ltPropCount:Lyte.attr("number",{default:5}),ltPropWrapperClass:Lyte.attr("string"),ltPropType:Lyte.attr("string",{default:"star"}),ltPropReadOnly:Lyte.attr("boolean",{default:!1}),ltPropClearable:Lyte.attr("boolean",{default:!1}),ltPropHalfIncrement:Lyte.attr("boolean",{default:!1}),ltPropEmptyIcon:Lyte.attr("string",{default:""}),ltPropFullIcon:Lyte.attr("string",{default:""}),ltPropHalfIcon:Lyte.attr("string",{default:""}),ltPropHoverFullIcon:Lyte.attr("string",{default:""}),ltPropHoverHalfIcon:Lyte.attr("string",{default:""}),ltPropYield:Lyte.attr("boolean",{default:!1}),countArray:Lyte.attr("array",{default:[]}),currentHover:Lyte.attr("number",{default:0})}},initFn:function(){if(this.getData("ltPropCount")!=this.getData("countArray").length){for(var t=[],e=1;e<=this.getData("ltPropCount");e++)t.push(e);this.setData("countArray",t)}"star"===this.getData("ltPropType")&&(this.getData("ltPropEmptyIcon")||this.setData("ltPropEmptyIcon","lyteRatingEmptyStar"),this.getData("ltPropFullIcon")||this.setData("ltPropFullIcon","lyteRatingFullStar"),this.getData("ltPropHoverFullIcon")||this.setData("ltPropHoverFullIcon","lyteRatingHoverFullStar"),this.getData("ltPropHalfIncrement")&&(this.getData("ltPropHalfIcon")||this.setData("ltPropHalfIcon","lyteRatingHalfStar"),this.getData("ltPropHoverHalfIcon")||this.setData("ltPropHoverHalfIcon","lyteRatingHoverHalfStar"))),"heart"===this.getData("ltPropType")&&(this.getData("ltPropEmptyIcon")||this.setData("ltPropEmptyIcon","lyteRatingEmptyHeart"),this.getData("ltPropFullIcon")||this.setData("ltPropFullIcon","lyteRatingFullHeart"),this.getData("ltPropHoverFullIcon")||this.setData("ltPropHoverFullIcon","lyteRatingHoverFullHeart"),this.getData("ltPropHalfIncrement")&&(this.getData("ltPropHalfIcon")||this.setData("ltPropHalfIcon","lyteRatingHalfHeart"),this.getData("ltPropHoverHalfIcon")||this.setData("ltPropHoverHalfIcon","lyteRatingHoverHalfHeart"))),"toggle"===this.getData("ltPropType")&&(this.getData("ltPropEmptyIcon")||this.setData("ltPropEmptyIcon","lyteRatingEmptyHeart"),this.getData("ltPropFullIcon")||this.setData("ltPropFullIcon","lyteRatingFullHeart"),this.getData("ltPropHoverFullIcon")||this.setData("ltPropHoverFullIcon","lyteRatingHoverFullHeart"),this.setData("ltPropCount",1),this.setData("ltPropClearable",!0))}.observes("ltPropType","ltPropCount","ltPropHalfIncrement").on("init"),didConnectFn:function(){this.setRating(),this.rendered||(this.getMethods("onRender")&&this.executeMethod("onRender",this),this.getData("ltPropValue")>0&&(this.rated=!0),this.rendered=!0)}.observes("ltPropValue").on("didConnect"),setRating:function(){var t=this.getData("ltPropValue"),e=this.$node.querySelectorAll(".lyteRated"),a=this.$node.querySelectorAll("lyte-rate-icon");if(t%1!=0){for(var l=0;l<Math.floor(t);l++)a[l].classList.add(this.getData("ltPropFullIcon"),"lyteRated");for(l=Math.floor(t);l<a.length;l++)a[l].classList.remove(this.getData("ltPropFullIcon"),this.getData("ltPropHalfIcon"),"lyteRated");a[Math.ceil(t)-1].classList.add(this.getData("ltPropHalfIcon"),"lyteRated")}else if(e.length>0&&this.getData("ltPropHalfIcon")&&e[e.length-1].classList.contains(this.getData("ltPropHalfIcon"))&&(e[e.length-1].classList.remove(this.getData("ltPropHalfIcon")),e[e.length-1].classList.add(this.getData("ltPropFullIcon"))),t<e.length)for(l=t;l<e.length;l++)e[l].classList.remove(this.getData("ltPropFullIcon"),"lyteRated"),this.getData("ltPropHalfIcon")&&e[l].classList.remove(this.getData("ltPropHalfIcon"));else if(t>e.length)for(l=e.length;l<t&&l<a.length;l++)a[l].classList.add(this.getData("ltPropFullIcon"),"lyteRated");this.getMethods("onClick")&&this.executeMethod("onClick",this.getData("ltPropValue"),this)},onClick:function(t){this.getData("ltPropClearable")?this.rated&&this.getData("currentHover")==this.getData("ltPropValue")?(this.setData("ltPropValue",0),this.rated=!1):(this.setData("ltPropValue",this.getData("currentHover")),this.rated=!0):this.setData("ltPropValue",this.getData("currentHover"))},onOver:function(t){var e=t.target,a=parseInt(e.getAttribute("data-lrc")),l=this.getData("currentHover"),o=this.$node.querySelectorAll("lyte-rate-icon"),r=l;if(this.getData("ltPropHalfIncrement")){l=Math.round(l);var n=e.getBoundingClientRect();if(a-1<l)for(var i=a-1;i<l;i++)o[i].classList.remove(this.getData("ltPropHoverFullIcon"),this.getData("ltPropHoverHalfIcon"),"lyteRatingHover");else if(a-1>l)for(i=l;i<a-1;i++)o[i].classList.add(this.getData("ltPropHoverFullIcon"),"lyteRatingHover");e.classList.remove(this.getData("ltPropHoverFullIcon"),this.getData("ltPropHoverHalfIcon"),"lyteRatingHover"),t.clientX>n.left+n.width/2?(e.classList.add(this.getData("ltPropHoverFullIcon"),"lyteRatingHover"),this.setData("currentHover",a)):(e.classList.add(this.getData("ltPropHoverHalfIcon"),"lyteRatingHover"),this.setData("currentHover",a-1+.5))}else{if(a>l)for(i=l;i<a;i++)o[i].classList.add(this.getData("ltPropHoverFullIcon"),"lyteRatingHover");else if(a<l)for(i=a;i<l;i++)o[i].classList.remove(this.getData("ltPropHoverFullIcon"),"lyteRatingHover");this.setData("currentHover",a)}r!=this.getData("currentHover")&&this.getMethods("onHover")&&this.executeMethod("onHover",this.getData("currentHover"),this)},onOut:function(t){var e=t.target,a=this.$node.getBoundingClientRect();if(t.clientX<=a.left||t.clientX>=a.right||t.clientY<=a.top||t.clientY>=a.bottom){for(var l=this.$node.querySelectorAll(".lyteRatingHover"),o=0;o<l.length;o++)l[o].classList.remove(this.getData("ltPropHoverFullIcon"),"lyteRatingHover"),this.getData("ltPropHoverHalfIcon")&&l[o].classList.remove(this.getData("ltPropHoverHalfIcon"));this.setData("currentHover",0)}this.getMethods("onOut")&&this.executeMethod("onOut",parseInt(e.getAttribute("data-lrc")),this)}}),Lyte.createCustomElement("lyte-rate-icon",{static:{},connectedCallback:function(){var t=this.closest("lyte-rating").component;this.addEventListener("click",t.onClick.bind(t)),this.addEventListener("mousemove",t.onOver.bind(t)),this.addEventListener("mouseout",t.onOut.bind(t)),t.getData("ltPropYield")&&(t.timeoutId&&(clearTimeout(t.timeoutId),t.timeoutId=!1),t.timeoutId=setTimeout(function(){for(var t=this.closest("lyte-rating").querySelectorAll("lyte-rate-icon"),e=0;e<t.length;e++)t[e].setAttribute("data-lrc",e+1)}.bind(this),100))},disconnectedCallback:function(){}});