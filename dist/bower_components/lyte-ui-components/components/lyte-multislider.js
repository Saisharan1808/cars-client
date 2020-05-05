Lyte.Component.register("lyte-multislider",{_template:'<template tag-name="lyte-multislider">\n\t<div class="lyteSlide{{if(ltPropDisabled, \' lyteSliderDisabled\', \'\')}}" onkeydown="{{action(\'keydown\', event)}}" tabindex="0" style="width: {{ltPropWidth}}; height: {{ltPropHeight}}">\n\t\t<div class="lyteRangeSlider {{ltPropDirection}}" onclick="{{action(\'click\',event)}}" style="background-color: {{ltPropNonFillColor}}">\n\t\t\t<template is="for" items="{{ltPropValue}}" item="item" index="index">\n\t\t\t\t<div class="lyteSliderFill {{ltPropValue[index].class}}" id="{{{{ltPropValue[index].id}}}}" data-order="{{index}}" style="background-color: {{if(ltPropColor[index], ltPropColor[index], ltPropFillColor)}};left: 0; top: 0;right: 0"></div>\n\t\t\t\t<div data-order="{{index}}" class="lyteSliderHandler {{ltPropHandler}} lyteHandler{{index}} {{item.class}}" lt-prop-title="{{if(ltPropTooltip, item.value, \'\')}}" onmousedown="{{action(\'mousedown\', event, this, index)}}" lt-prop-tooltip-config="{{ltPropTooltipConfig}}" lt-prop-tooltip-style="{{ltPropTooltipStyle}}" lt-prop-tooltip-class="{{ltPropTooltipClass}}"></div>\n\t\t\t</template>\n\t\t\t<div class="lyteSliderFill endFill" id="endFill" style="right: 0;bottom: 0;left: 0;background-color: {{ltPropFillColor}}"></div>\n\t\t\t<template is="if" value="{{ltPropYield}}"><template case="true">\n\t\t\t\t<lyte-yield yield-name="lyteMultiSlider"></lyte-yield>\n\t\t\t</template><template case="false">\n\t\t\t\t<div class="lyteScaleOption {{ltPropHandler}}">\n\t\t\t\t\t<template is="for" items="{{divLength}}" index="indexVal">\n\t\t\t\t\t\t<span class="lyteScaleLine" style="{{item}}">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t<span class="lyteScalLable">{{scaleVal[indexVal]}}</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</template>\n\t\t\t\t</div>\n\t\t\t</template></template>\n\t\t</div>\n\t</div>\t\n</template>',_dynamicNodes:[{type:"attr",position:[1],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'width: '","ltPropWidth","'; height: '","ltPropHeight"]}}}},{type:"attr",position:[1,1],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'background-color: '","ltPropNonFillColor"]}}}},{type:"attr",position:[1,1,1]},{type:"for",position:[1,1,1],dynamicNodes:[{type:"attr",position:[1],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'background-color: '",{type:"helper",value:{name:"if",args:["ltPropColor[index]","ltPropColor[index]","ltPropFillColor"]}},"';left: 0; top: 0;right: 0'"]}}}},{type:"attr",position:[3]}]},{type:"attr",position:[1,1,3],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'right: 0;bottom: 0;left: 0;background-color: '","ltPropFillColor"]}}}},{type:"attr",position:[1,1,5]},{type:"if",position:[1,1,5],cases:{true:{dynamicNodes:[{type:"insertYield",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[1],attr:{style:{name:"style",dynamicValue:"item"}}},{type:"text",position:[1,3,0]}]}]}},default:{}}],_observedAttributes:["ltPropMin","ltPropMax","ltPropValue","ltPropDirection","ltPropHandler","ltPropWidth","ltPropFillColor","ltPropNonFillColor","ltPropHeight","ltPropContent","ltPropScaleInterval","ltPropDiscrete","ltPropScaleAppend","ltPropScalePrepend","ltPropColor","ltPropTooltipStyle","ltPropTooltipConfig","ltPropTooltip","ltPropDigits","ltPropMinDiff","ltPropYield","divLength","scaleVal","secArr"],init:function(){this._dir=_lyteUiUtils.getRTL(),this._mv=this.mousemove.bind(this),this._mp=this.mouseup.bind(this),this.getMethods("beforeRender")&&this.executeMethod("beforeRender",this.$node)},dcnt:function(){this._prevent||(clearTimeout(this._time),this._time=setTimeout(this.dctWrk.bind(this),30),this.$node.reRender=function(){this.initObs.call(this),this.dctWrk.call(this)}.bind(this))}.observes("ltPropValue.[]","ltPropDirection","ltPropWidth","ltPropHeight","ltPropMin","ltPropMax","ltPropContent.[]").on("didConnect"),didDestroy:function(){clearTimeout(this._time),clearTimeout(this._time2)},rtlfunc:function(t,e,l){if(this._dir&&"top"!=t&&"clientY"!=t){if(e)return"right"==t?l-e.left:"clientX"==t?l-e.clientX:l-e.right;if("left"==t)return"right"}return e?e[t]:t},hgtObs:function(){var t=this.data,e="lyteHorizontal"==t.ltPropDirection;this._prevent=!0,this.$node.ltProp("width",t.ltPropWidth||(e?"200px":"30px")),this.$node.ltProp("height",t.ltPropHeight||(e?"30px":"200px")),delete this._prevent}.on("init"),initWrk:function(t){this._prevent||(clearTimeout(this._time2),this._time2=setTimeout(this.initObs.bind(this),0,t))}.observes("ltPropContent.[]","ltPropDiscrete","ltPropScaleInterval","ltPropValue.[]").on("init"),initObs:function(t){var e=this.data,l="lyteHorizontal"==e.ltPropDirection,i=e.ltPropContent,r=i.length,o=r,n=e.ltPropDiscrete,a=e.ltPropScaleInterval,s=[],d=[],h=this.rtlfunc("left"),p=e.ltPropScalePrepend,c=e.ltPropScaleAppend,u=[],f=e.ltPropValue,y=e.ltPropYield;if(l||(h="top"),this._prevent=!0,r?(e.ltPropMax=100,e.ltPropMin=0,e.ltPropScaleInterval=e.ltPropDiscrete=100/(r-1),r--):(n?a=e.ltPropScaleInterval=n:a||(a=e.ltPropScaleInterval=.1*Math.abs(parseFloat(e.ltPropMax)-parseFloat(e.ltPropMin))),r=Math.abs(parseFloat(e.ltPropMax)-parseFloat(e.ltPropMin))/e.ltPropScaleInterval),!y){d.push(h+": 0"),s.push(p+(o?i[0]:e.ltPropMin)+c);for(var P=1;P<r;P++)d.push(h+":"+100*P/r+"%"),s.push(p+(o?i[P]:e.ltPropMin+a*P*(e.ltPropMin>e.ltPropMax?-1:1))+c);if(o){var m=e.ltPropDiscrete;for(P=0;P<f.length;P++){var v=i.indexOf(f[P].max);u.push({id:P-1,value:i.indexOf(f[P].value)*m,min:Math.max(0,i.indexOf(f[P].min)*m),max:Math.min(100,(-1!=v?v:100)*m)})}}d.push(h+": 100%"),s.push(p+(o?i[o-1]:e.ltPropMax)+c),this.setData("divLength",d),this.setData("scaleVal",s)}this.setData("secArr",o?u:f.slice()),delete this._prevent},dctWrk:function(t,e,l,i){var r=this.data,o=r.secArr.slice().sort(function(t,e){return t.value<e.value?-1:1}),n=(t=t||[],"lyteHorizontal"==r.ltPropDirection),a=r.ltPropContent,s=(a.length,[]),d="width",h=this.rtlfunc("left"),p=(e=e||this.$node.querySelector(".lyteSlide").getBoundingClientRect(),parseFloat(r.ltPropMax)),c=parseFloat(r.ltPropMin),u=this.$node.querySelectorAll(".lyteSliderHandler[ data-order ]"),f=(s=[],this.$node.querySelectorAll(".lyteSliderFill"));n||(d="height",h="top");for(var y=p<c?e[d]:0,P=0;P<o.length;P++){var m=r.secArr.indexOf(o[P]);t.length&&-1==t.indexOf(m)?s.push(void 0):(s.push({node:u[m],id:o.indexOf(o[P])}),s[P].bcr=l||u[m].getBoundingClientRect(),s[P].style=this.getLeft(e[d],s[P].bcr[d],o[P].value,p,c),v=this.findPrevmin.call(this,m,o[P].value))}for(P=0;P<s.length;P++)if(s[P]){var v=f[s[P].id-1];y?(s[P].style=y-s[P].style-s[P].bcr[d],s[P].node.style[h]=s[P].style+"px",f[s[P].id].style[h]=s[P].style+s[P].bcr[d]/2+"px",f[s[P].id].style[d]=Math.max(0,(v?parseFloat(v.style[h]):y)-s[P].bcr[d]/2-s[P].style)+"px",s[P].id+2==f.length&&(f[s[P].id+1].style[h]="0",f[s[P].id+1].style[d]=Math.max(0,s[P].style+s[P].bcr[d]/2)+"px",f[s[P].id+1].setAttribute("range-max",this.convert(a,c))),0==s[P].id&&f[s[P].id].setAttribute("range-min",this.convert(a,p))):(s[P].node.style[h]=s[P].style+"px",f[s[P].id+1].style[h]=s[P].style+s[P].bcr[d]/2+"px",f[s[P].id].style[d]=Math.max(0,s[P].style+s[P].bcr[d]/2-(v?parseFloat(v.style[h])+parseFloat(v.style[d]):0))+"px",s[P].id+2==f.length&&(f[s[P].id+1].style[d]=Math.abs(y-Math.max(e[d]-s[P].style-s[P].bcr[d]/2,0))+"px",f[s[P].id+1].setAttribute("range-max",this.convert(a,p))),0==s[P].id&&f[s[P].id].setAttribute("range-min",this.convert(a,c))),f[s[P].id].setAttribute("range-max",this.convert(a,o[s[P].id].value)),f[s[P].id+1].setAttribute("range-min",this.convert(a,o[s[P].id].value))}!i&&this.getMethods("afterRender")&&this.executeMethod("afterRender",this.$node)},setValues:function(t,e,l){var i={};return void 0==l?(i.left=0,i.width=e+t):(i.left=parseFloat(l.style)+t,i.width=e-i.left+t),i},findPrevmin:function(t,e,l,i,r){var o,n,a=this.data.secArr.slice();if(void 0!=e){for(var s=0;s<a.length;s++)-1==[t,r,i].indexOf(s)&&(a[s].value<=e&&!l?o&&a[s].value>o?(o=a[s].value,n=s):o||(o=a[s].value,n=s):a[s].value>=e&&l&&(o&&a[s].value<o?(o=a[s].value,n=s):o||(o=a[s].value,n=s)));return[n,o]}return a.sort(function(t,e){return t.value<e.value?-1:1}),[n=this.data.secArr.indexOf(a[a.length-1]),this.data.secArr[n].value]},findPrevmin1:function(t,e,l){for(var i,r,o=this.data.secArr.slice(),n=0;n<o.length;n++)n!=t&&(l?e<o[n].value&&(r&&o[n].value<r?(r=o[n].value,i=n):r||(r=o[n].value,i=n)):e>o[n].value&&(r&&o[n].value>r?(r=o[n].value,i=n):r||(r=o[n].value,i=n)));return[i,r]},getLeft:function(t,e,l,i,r){var o=(l-Math.min(r,i))*t/(Math.max(r,i)-Math.min(r,i));return Math.round(100*Math.min(Math.max(o-.5*e,-.5*e),t-.5*e))/100},getValue:function(t,e,l,i,r,o){var n=Math.pow(10,this.data.ltPropDigits);return l>i?Math.min(Math.max(r||i,Math.round((i+(l-i)*e/t)*n)/n),o||l):Math.min(Math.max(r||l,Math.round((l+(i-l)*(t-e)/t)*n)/n),o||i)},convert:function(t,e){if(t.length)return t[Math.round(e/this.data.ltPropDiscrete)];var l=Math.pow(10,this.data.ltPropDigits);return parseInt(e*l)/l},data:function(){return{ltPropMin:Lyte.attr("number",{default:0}),ltPropMax:Lyte.attr("number",{default:void 0}),ltPropValue:Lyte.attr("array",{default:[]}),ltPropDirection:Lyte.attr("string",{default:"lyteHorizontal"}),ltPropHandler:Lyte.attr("string",{default:"lyteArrow"}),ltPropWidth:Lyte.attr("string",{default:""}),ltPropFillColor:Lyte.attr("string",{default:""}),ltPropNonFillColor:Lyte.attr("string",{default:""}),ltPropHeight:Lyte.attr("string",{default:""}),ltPropContent:Lyte.attr("array",{default:[]}),ltPropScaleInterval:Lyte.attr("number"),ltPropDiscrete:Lyte.attr("number"),ltPropScaleAppend:Lyte.attr("string",{default:""}),ltPropScalePrepend:Lyte.attr("string",{default:""}),ltPropColor:Lyte.attr("array",{default:[]}),ltPropTooltipStyle:Lyte.attr("string",{default:""}),ltPropTooltipConfig:Lyte.attr("object",{default:{margin:5,position:"top"}}),ltPropTooltip:Lyte.attr("boolean",{default:!1}),ltPropDigits:Lyte.attr("number",{default:2}),ltPropMinDiff:Lyte.attr("number",{default:0}),ltPropYield:Lyte.attr("boolean",{default:!1}),divLength:Lyte.attr("array",{default:[]}),scaleVal:Lyte.attr("array",{default:[]}),secArr:Lyte.attr("array",{default:[]})}},mousemove:function(t,e){var l,i,r=this._sel,o=this.$node.querySelector(".lyteSlide").getBoundingClientRect(),n=this.data,a="lyteHorizontal"==n.ltPropDirection,s="clientX",d=this.rtlfunc("left"),h="width",p=this._idx,c=n.secArr,u=(this.$node.querySelectorAll(".lyteSliderFill"),n.ltPropDiscrete),f=n.ltPropContent,y=window.innerWidth,P=parseFloat(n.ltPropMax),m=parseFloat(n.ltPropMin),v=[],g=[],M=this.data.ltPropMinDiff;if(a||(s="clientY",d="top",h="height"),i=parseFloat(r.style[d]),"mousemove"==t.type&&(e=parseInt(100*(this.rtlfunc(s,t,y)-this.rtlfunc("right"==d?"left":d,o,y)-this._xoff-parseFloat(r.style[d])))/100),this._prevent=!0,u){var x=this.getValue(o[h],i+e,P,m),b=Math.min(Math.max(Math.round(x/u)*u,0));if(b==n.secArr[p].value&&x!=P&&x!=m||x==n.secArr[p].value)return void delete this._prevent;x!=P&&x!=m||(b=x),e=!f.length&&P<m?this.getLeft(o[h],this._bcr[h],n.secArr[p].value,P,m)-this.getLeft(o[h],this._bcr[h],b,P,m):this.getLeft(o[h],this._bcr[h],b,P,m)-i}f.length&&(M*=u),!isNaN(M)&&(void 0!=(v=this.findPrevmin1(p,c[p].value))[0]?v[1]+=1*M:v[1]=Math.min(P,m),void 0!=(g=this.findPrevmin1(p,c[p].value,!0))[0]?g[1]-=1*M:g[1]=Math.max(P,m),e<0&&c[p].frmMax||e>0&&c[p].frmMin)||(l=c[p].value,Lyte.objectUtils(c[p],"add","value",this.getValue(o[h],i+e+this._bcr[h]/2,P,m,Math.max(c[p].min||v[1],v[1]||c[p].min),Math.min(c[p].max||g[1],g[1]||c[p].max))),Lyte.Component.set(n.ltPropValue[p],"value",this.convert(f,c[p].value)),v=this.findPrevmin(p,c[p].value),void 0!=M&&(v[1]==c[p].value?e>0&&!c[p].frmMax?c[p].frmMin=!0:c[p].frmMin||(c[p].frmMax=!0):(delete c[p].frmMax,delete c[p].frmMin)),this.dctWrk.call(this,[],o,this._bcr,!0),delete this._prevent,t.preventDefault(),"mousemove"==t.type&&this.getMethods("onChange")&&l!=c[p].value&&this.executeMethod("onChange",p,n.ltPropValue[p],t,this.$node))},mouseup:function(t){var e;document.removeEventListener("mousemove",this._mv,!0),document.removeEventListener("mouseup",this._mp,!0),this.getMethods("onSelect")&&(e=this.executeMethod("onSelect",this._idx,this.data.ltPropValue[this._idx],t,this.$node)),delete this._sel,delete this._xoff,delete this._idx,delete this._bcr,delete this._prevent,0!=e&&t.preventDefault()},callBack:function(t,e){this.getMethods("onSelect")&&this.executeMethod("onSelect",t,this.data.ltPropValue[t],e,this.$node),this.getMethods("onChange")&&this.executeMethod("onChange",t,this.data.ltPropValue[t],e,this.$node)},actions:{mousedown:function(t,e,l){if(!this.getMethods("onBeforeSelect")||0!=this.executeMethod("onBeforeSelect",e,t,l,this.$node)){$L.fastdom.mutate(function(){var t=this.$node.querySelector(".lyteMultiSliderSelected");t&&t!=e&&t.classList.remove("lyteMultiSliderSelected"),e.classList.add("lyteMultiSliderSelected")}.bind(this));var i=e.getBoundingClientRect(),r="lyteHorizontal"==this.data.ltPropDirection,o="clientX",n=this.rtlfunc("left"),a=window.innerWidth;r||(o="clientY",n="top","height"),this._xoff=this.rtlfunc(o,t,a)-this.rtlfunc("right"==n?"left":n,i,a),this._sel=e,this._idx=l,this._bcr=i,document.addEventListener("mousemove",this._mv,!0),document.addEventListener("mouseup",this._mp,!0),t.preventDefault()}},click:function(t){var e=t.target,l="width",i="clientX",r=this.rtlfunc("left"),o=this.data,n=!!o.ltPropContent.length;if(!e.classList.contains("lyteSliderHandler")&&e.classList.contains("lyteSliderFill")){"lyteHorizontal"!=this.data.ltPropDirection&&(l="height",i="clientY",r="top");var a,s,d,h=this.$node.querySelector(".lyteSlide").getBoundingClientRect(),p=this.$node.querySelectorAll(".lyteSliderHandler"),c=1,u=window.innerWidth;p.length&&(a=this.getValue(h[l],this.rtlfunc(i,t,u)-this.rtlfunc("right"==r?"left":r,h,u),o.ltPropMax,o.ltPropMin),d=this.findPrevmin1(null,a),((s=this.findPrevmin1(null,a,!0))[1]||Math.max(o.ltPropMax,o.ltPropMin))-a>a-(d[1]||Math.min(o.ltPropMax,o.ltPropMin))?(d[0]=void 0!=d[0]?d[0]:d[0]||s[0],this._sel=p[d[0]],this._idx=d[0]):(s[0]=void 0!=s[0]?s[0]:d[0],this._sel=p[s[0]],this._idx=s[0]),a-o.secArr[this._idx].value<0&&(c=-1),o.ltPropMin>o.ltPropMax&&(c*=-1),this._bcr=this._sel.getBoundingClientRect(),this.mousemove.call(this,t,c*this.getLeft(h[l],this._bcr[l]/2,Math.abs(a-o.secArr[this._idx].value)+(n?0:Math.min(o.ltPropMin,o.ltPropMax)),o.ltPropMax,o.ltPropMin)),this.callBack.call(this,this._idx,t),$L.fastdom.mutate(function(){var t=this.$node.querySelector(".lyteMultiSliderSelected");t&&t!=this._sel&&t.classList.remove("lyteMultiSliderSelected"),this._sel.classList.add("lyteMultiSliderSelected"),delete this._bcr,delete this._idx,delete this._sel}.bind(this)))}},keydown:function(t){if(-1!=[37,38,39,40].indexOf(t.keyCode)){var e=this.$node.querySelector(".lyteSliderHandler.lyteMultiSliderSelected");if(e){var l=this.data,i="lyteHorizontal"==l.ltPropDirection,r=i?"width":"height",o=1,n=!!l.ltPropContent.length;i?37==t.keyCode&&(o=-1):38==t.keyCode&&(o=-1),l.ltPropMin>l.ltPropMax&&(o*=-1),this._bcr=e.getBoundingClientRect(),this._idx=parseInt(e.getAttribute("data-order")),this._sel=e,this.mousemove.call(this,t,o*(this.getLeft(this.$node.querySelector(".lyteSlide").getBoundingClientRect()[r],this._bcr[r],l.ltPropScaleInterval+(n?0:Math.min(l.ltPropMin,l.ltPropMax)),l.ltPropMax,l.ltPropMin)+this._bcr[r]/2)),this.callBack.call(this,this._idx,t),delete this._bcr,delete this._idx,delete this._sel,t.preventDefault()}}}}});