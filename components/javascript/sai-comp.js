Lyte.Component.register("sai-comp", {
	data : function(){
		return {
			cars : Lyte.attr("array"),
			ncars:Lyte.attr("object",{ default:{"Model":"" ,"PassengerAirbag":"", "rupee":"" }}),
			indexValueForEdit:Lyte.attr("number"),
			editcomp:Lyte.attr("boolean",{default:false}),
		}
	},
	actions :{
		delete:function(id_value){
			var modalElement = document.getElementById("confirmToDelete"); 
			modalElement.ltProp("show",true);  
			document.getElementById ("confirmToDelete").setMethods ({ 
				onAccept  : function (){ 
					var pInt=parseInt(id_value);
					var record;
					record=store.peekRecord("cars",pInt);
						record.$.deleteRecord();
						record.$.save();
				 }
 			});
 			document.getElementById ("confirmToDelete").setMethods ({ 
				onReject  : function (){ 
						var modalElement = document.getElementById("confirmToDelete"); 
						modalElement.ltProp("show",false);  
				 }
 			});
		},
		callingModal:function(evenc,index_value){
			this.setData('indexValueForEdit',index_value);
			this.setData('editcomp',true);
			 var modalElement = document.getElementById("modalElem"); 
			 modalElement.ltProp("show",true); 
				if(evenc.className=='btn1'){
					document.getElementsByClassName('title')[0].innerText='AddCar';
					document.getElementsByClassName('right')[0].innerText='Add';
	
					this.setData('ncars',{});
					
					document.querySelector('.rb1').ltProp('checked','true');
					document.querySelector('.rb3').ltProp('checked','true');
				}else{
					document.getElementsByClassName('title')[0].innerText='EditCar';
					document.getElementsByClassName('right')[0].innerText='Save';
					
					var EditdatA;
					//console.log(this.getData('cars')[1].id)
					var i;
		            for (i = 0; i <this.getData('cars').length; i++) { 
		                    if(this.getData('cars')[i].id==index_value){
		                    EditdatA=this.getData('cars')[i];
		                }
		            }
		            // console.log(EditdatA);
		          	// console.log('-1',this.data.cars[index_value-1],'no-1',this.data.cars[index_value]);
					
					this.setData('ncars',{"Model":EditdatA.Model,"PassengerAirbag":EditdatA.PassengerAirbag,"rupee":EditdatA.rupee});
					if(EditdatA.TransmissionType=="Automatic" || EditdatA.TransmissionType=="Auto"){
						document.getElementsByClassName('rb3')[0].ltProp('checked','true');

					}
					else{
						document.getElementsByClassName('rb3')[0].ltProp('checked','false');
					}
					if(EditdatA.TransmissionType=="Manual"){
						document.getElementsByClassName('rb4')[0].ltProp('checked','true');

					}
					else{
						document.getElementsByClassName('rb4')[0].ltProp('checked','false');
					}


					if(EditdatA.EngineType=="petrol"){
						document.getElementsByClassName('rb1')[0].ltProp('checked','true');

					}
					else{
						document.getElementsByClassName('rb1')[0].ltProp('checked','false');
					}
					if(EditdatA.EngineType=="Diesel" || EditdatA.EngineType=="diesel"){
						document.getElementsByClassName('rb2')[0].ltProp('checked','true');

					}
					else{
						document.getElementsByClassName('rb2')[0].ltProp('checked','false');
					}
					
					
				}
			
		},
		// callingCancleModal:function(){
		// 	var modalElement = document.getElementById("modalElem"); 
		// 	 modalElement.ltProp("show",false); 
		// },
		// decisionCallingForEditOrAdd:function(){
		// 	//this.EDITareADD();
		// 	var test1=document.querySelector('.right').innerText;
		// 	if(test1=='Add'){
		// 		if( this.getData('ncars').Model==undefined || this.getData('ncars').PassengerAirbag==undefined ||  this.getData('ncars').rupee==undefined){
		// 		var modalcolorchange = document.getElementsByClassName("inp1")[0]; 
		// 		modalcolorchange.ltProp("style",'red');
		// 		var modalElement = document.getElementById("modalElem"); 
		// 		 modalElement.ltProp("show",true); 	
		// 		}
		// 		else{
		// 		var EType="";
		// 		if(document.querySelector('.rb1').ltProp('checked')==true){
		// 			EType=document.querySelector('.rb1').ltProp('value');
		// 		}
		// 		else{
		// 			EType=document.querySelector('.rb2').ltProp('value');
		// 		}	
				

		// 		var Ttype="";
		// 		if(document.querySelector('.rb3').ltProp('checked')==true){
		// 			Ttype=document.querySelector('.rb3').ltProp('value');
		// 		}
		// 		else{
		// 			Ttype=document.querySelector('.rb4').ltProp('value');
		// 		}	
				
		// 		var copy=this.getData('ncars');
		// 		var arrCopy=Object.assign({"EngineType":EType,"TransmissionType":Ttype},copy)
		// 		console.log(typeof(arrCopy));
				
		// 		var record;
		// 		record=store.createRecord("cars",{'Model':arrCopy.Model,'PassengerAirbag':arrCopy.PassengerAirbag,'EngineType':arrCopy.EngineType,'TransmissionType':arrCopy.TransmissionType,'rupee':arrCopy.rupee});
		// 		record.$.save ();
				
		// 		 var modalElement = document.getElementById("modalElem"); 
		// 		 modalElement.ltProp("show",false); 
		// 		}
		// 	}else{
				
		// 		if( this.getData('ncars').Model=="" || this.getData('ncars').PassengerAirbag=="" || this.getData('ncars').rupee=="" ){
		// 		var modalElement = document.getElementById("modalElem"); 
		// 		 modalElement.ltProp("show",true); 
		// 	}
		// 	else{
		// 	//radioBtn1
		// 	var EEType="";
			
		// 		if(document.getElementsByClassName('rb1')[0].ltProp('checked')==true){
		// 			EEType=document.getElementsByClassName('rb1')[0].ltProp('value');
		// 		}
		// 		else if(document.getElementsByClassName('rb2')[0].ltProp('checked')==true){
		// 			EEType=document.getElementsByClassName('rb2')[0].ltProp('value');
		// 		}	
		// 		console.log(EEType);
		// 	//radioBtn2
		// 	var TTtype="";
		// 		if(document.getElementsByClassName('rb3')[0].ltProp('checked')==true){
		// 			TTtype=document.getElementsByClassName('rb3')[0].ltProp('value');
		// 		}
		// 		else if(document.getElementsByClassName('rb4')[0].ltProp('checked')==true){
		// 			TTtype=document.getElementsByClassName('rb4')[0].ltProp('value');
		// 		}	
			
		// 		var copy=this.getData('ncars');
		// 		console.log(copy);
		// 		var arrCopy=Object.assign({"EngineType":EEType,"TransmissionType":TTtype},copy);
		// 		console.log(arrCopy.Model);
		// 		var record  = store.peekRecord ("cars",this.getData('indexValueForEdit'));
		// 		record.$.set ({'Model':arrCopy.Model,'PassengerAirbag':arrCopy.PassengerAirbag,'EngineType':arrCopy.EngineType,'TransmissionType':arrCopy.TransmissionType,'rupee':arrCopy.rupee});
		// 		record.$.save ();

		// 			var modalElement = document.getElementById("modalElem"); 
		// 			modalElement.ltProp("show",false); 
		// 		// 	console.log(this.Data.editcomp)
		// 		// this.setData(editcomp,true);
		// 		// 	console.log(this.Data.editcomp)
		// 	}		
		// 		}

		// 	},
			nextpage:function(data){
				Lyte.Router.transitionTo('carsDetails',data.id);

			}
	}
});
