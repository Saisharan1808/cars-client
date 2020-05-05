Lyte.Component.register("edit-comp", {
_template:"<template tag-name=\"edit-comp\"> <lyte-modal id=\"modalElem\" lt-prop-height=\"auto\" lt-prop-dimmer=\"{&quot;opacity&quot;:&quot;.3&quot;,&quot;color&quot;:&quot;#000000&quot;}\" lt-prop-transition=\"{&quot;animation&quot;:&quot;fadeIn&quot;}\"> <template is=\"registerYield\" yield-name=\"modal\"> <lyte-modal-header class=\"title\"></lyte-modal-header> <lyte-modal-content> <lyte-input class=\"inp1\" lt-prop-value=\"{{lbind(ncars.Model)}}\" lt-prop-type=\"text\" lt-prop-label=\"Name:\" lt-prop-autocomplete=\"on\" lt-prop-autofocus=\"true\" lt-prop-placeholder=\"Enter car name\" lt-prop-direction=\"vertical\" lt-prop-appearance=\"box\"></lyte-input><br><br> <lyte-input class=\"inp2\" lt-prop-value=\"{{lbind(ncars.PassengerAirbag)}}\" lt-prop-type=\"text\" lt-prop-label=\"AirBag:\" lt-prop-autocomplete=\"on\" lt-prop-autofocus=\"true\" lt-prop-placeholder=\"Enter No-AirBag\" lt-prop-direction=\"vertical\" lt-prop-appearance=\"box\"></lyte-input><br><br> <div>EngineType:</div><br> <lyte-radiobutton class=\"rb1\" lt-prop-checked=\"true\" lt-prop-name=\"default1\" lt-prop-value=\"petrol\" lt-prop-label=\"Petrol\"> </lyte-radiobutton> <lyte-radiobutton class=\"rb2\" lt-prop-name=\"default1\" lt-prop-value=\"diesel\" lt-prop-label=\"Diesel\"> </lyte-radiobutton> <br><br> <div> TransmissionType:</div><br> <lyte-radiobutton lt-prop-checked=\"true\" class=\"rb3\" lt-prop-name=\"default2\" lt-prop-value=\"Auto\" lt-prop-label=\"Auto\"> </lyte-radiobutton> <lyte-radiobutton class=\"rb4\" lt-prop-name=\"default2\" lt-prop-value=\"Manual\" lt-prop-label=\"Manual\"> </lyte-radiobutton> <br><br> <lyte-input class=\"inp3\" lt-prop-value=\"{{lbind(ncars.rupee)}}\" lt-prop-type=\"text\" lt-prop-label=\"Price:\" lt-prop-autocomplete=\"on\" lt-prop-autofocus=\"true\" lt-prop-placeholder=\"Enter Price\" lt-prop-direction=\"vertical\" lt-prop-appearance=\"box\"></lyte-input><br><br> </lyte-modal-content> <lyte-modal-footer> <lyte-button lt-prop-appearance=\"primary\" class=\"right\" onclick=\"{{action(&quot;decisionCallingForEditOrAdd&quot;)}}\"> <template is=\"registerYield\" yield-name=\"text\"></template> </lyte-button> <lyte-button lt-prop-appearance=\"primary\" onclick=\"{{action(&quot;callingCancleModal&quot;)}}\"> <template is=\"registerYield\" yield-name=\"text\">Cancel</template> </lyte-button> </lyte-modal-footer> </template> </lyte-modal> </template>",
_dynamicNodes : [{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,1]},{"type":"componentDynamic","position":[3,1]},{"type":"attr","position":[3,5]},{"type":"componentDynamic","position":[3,5]},{"type":"componentDynamic","position":[3,12]},{"type":"componentDynamic","position":[3,14]},{"type":"componentDynamic","position":[3,22]},{"type":"componentDynamic","position":[3,24]},{"type":"attr","position":[3,29]},{"type":"componentDynamic","position":[3,29]},{"type":"componentDynamic","position":[3]},{"type":"attr","position":[5,1]},{"type":"registerYield","position":[5,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[5,1]},{"type":"attr","position":[5,3]},{"type":"registerYield","position":[5,3,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[5,3]},{"type":"componentDynamic","position":[5]}]},{"type":"componentDynamic","position":[1]}],
_observedAttributes :["cars","ncars","indexvalueforedit"],
	data : function(){
		return {
			cars : Lyte.attr("array"),
			ncars:Lyte.attr("object",{ default:{"Model":"" ,"PassengerAirbag":"", "rupee":"" }}),
			indexvalueforedit:Lyte.attr("number"),
		}		
	},
	actions:{
		callingCancleModal:function(){
			var modalElement = document.getElementById("modalElem"); 
			 modalElement.ltProp("show",false); 
		},
		decisionCallingForEditOrAdd:function(){
			var test1=document.querySelector('.right').innerText;
			if(test1=='Add'){
				if( this.getData('ncars').Model==undefined || this.getData('ncars').PassengerAirbag==undefined ||  this.getData('ncars').rupee==undefined){
				var modalcolorchange = document.getElementsByClassName("inp1")[0]; 
				modalcolorchange.ltProp("style",'red');
				var modalElement = document.getElementById("modalElem"); 
				 modalElement.ltProp("show",true); 	
				}
				else{
				var EType="";
				if(document.querySelector('.rb1').ltProp('checked')==true){
					EType=document.querySelector('.rb1').ltProp('value');
				}
				else{
					EType=document.querySelector('.rb2').ltProp('value');
				}	
				

				var Ttype="";
				if(document.querySelector('.rb3').ltProp('checked')==true){
					Ttype=document.querySelector('.rb3').ltProp('value');
				}
				else{
					Ttype=document.querySelector('.rb4').ltProp('value');
				}	
				
				var copy=this.getData('ncars');
				var arrCopy=Object.assign({"EngineType":EType,"TransmissionType":Ttype},copy)
				
				var record;
				record=store.createRecord("cars",{'Model':arrCopy.Model,'PassengerAirbag':arrCopy.PassengerAirbag,'EngineType':arrCopy.EngineType,'TransmissionType':arrCopy.TransmissionType,'rupee':arrCopy.rupee});
				record.$.save ();
				
				 var modalElement = document.getElementById("modalElem"); 
				 modalElement.ltProp("show",false); 
				}
			}else if(test1=='Save'){
				// console.log(this.getData('ncars').TransmissionType);
				if( this.getData('ncars').Model=="" || this.getData('ncars').PassengerAirbag=="" || this.getData('ncars').rupee=="" ){
				var modalElement = document.getElementById("modalElem"); 
				 modalElement.ltProp("show",true); 
			}
			else{
			//radioBtn1
			var EEType="";
			
				if(document.getElementsByClassName('rb1')[0].ltProp('checked')==true){
					EEType=document.getElementsByClassName('rb1')[0].ltProp('value');
				}
				else if(document.getElementsByClassName('rb2')[0].ltProp('checked')==true){
					EEType=document.getElementsByClassName('rb2')[0].ltProp('value');
				}	
				// console.log(EEType);
			//radioBtn2
			var TTtype="";
				if(document.getElementsByClassName('rb3')[0].ltProp('checked')==true){
					TTtype=document.getElementsByClassName('rb3')[0].ltProp('value');
				}
				else if(document.getElementsByClassName('rb4')[0].ltProp('checked')==true){
					TTtype=document.getElementsByClassName('rb4')[0].ltProp('value');
				}	
			
				var copy=this.getData('ncars');
					var arrCopy=Object.assign({"EngineType":EEType,"TransmissionType":TTtype},copy);
					// console.log(arrCopy);
					var record  = store.peekRecord ("cars",this.getData('indexvalueforedit'));
					// console.log(this.getData('indexvalueforedit'))
						record.$.set ({'Model':arrCopy.Model,'PassengerAirbag':arrCopy.PassengerAirbag,'EngineType':arrCopy.EngineType,'TransmissionType':arrCopy.TransmissionType,'rupee':arrCopy.rupee});
						record.$.save ();
							var modalElement = document.getElementById("modalElem"); 
							modalElement.ltProp("show",false); 	
			}			
				}

			},
	}
});
