Lyte.Mixin.register ("lyte-sibiling", (function(){ 
	var EDITareADD = function() {
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
				console.log(typeof(arrCopy));
				
				var record;
				record=store.createRecord("cars",{'Model':arrCopy.Model,'PassengerAirbag':arrCopy.PassengerAirbag,'EngineType':arrCopy.EngineType,'TransmissionType':arrCopy.TransmissionType,'rupee':arrCopy.rupee});
				record.$.save ();
				
				 var modalElement = document.getElementById("modalElem"); 
				 modalElement.ltProp("show",false); 
				}
			}else{
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
				console.log(EEType);
			//radioBtn2
			var TTtype="";
				if(document.getElementsByClassName('rb3')[0].ltProp('checked')==true){
					TTtype=document.getElementsByClassName('rb3')[0].ltProp('value');
				}
				else if(document.getElementsByClassName('rb4')[0].ltProp('checked')==true){
					TTtype=document.getElementsByClassName('rb4')[0].ltProp('value');
				}	
			
				var copy=this.getData('ncars');
				console.log(copy);
				var arrCopy=Object.assign({"EngineType":EEType,"TransmissionType":TTtype},copy);
				console.log(arrCopy.Model);
				var record  = store.peekRecord ("cars",this.getData('indexValueForEdit'));
				record.$.set ({'Model':arrCopy.Model,'PassengerAirbag':arrCopy.PassengerAirbag,'EngineType':arrCopy.EngineType,'TransmissionType':arrCopy.TransmissionType,'rupee':arrCopy.rupee});
				record.$.save ();

					var modalElement = document.getElementById("modalElem"); 
					modalElement.ltProp("show",false); 
		
			}		
				}
			}
			return {
				EDITareADD
			};
})());
