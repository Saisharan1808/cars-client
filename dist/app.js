// Lyte.Router.configureDefaults({baseURL:'',history : "html5"});

Lyte.Router.configureRoutes(function(){
	this.route('index',{path:'cars'});
		this.route("carsDetails",{ path :"cars/:name"});
});

Lyte.Router.beforeRouteTransition = function() {
	//console.log('before Route Change');
}

Lyte.Router.afterRouteTransition = function() {
	//console.log('after Route Change');
}


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

Lyte.Router.registerRoute("carsDetails",{
	model : function(){
		var id  = this.getDynamicParam();
		var data=store.peekRecord ("cars",id); 
		if(data==undefined){
			return store.findRecord ("cars",id)
		}else{
			return data
		}
	},
	afterModel : function(model){
		// console.log(model);
		this.currentModel = {
            'details' : model
   		};
		//this.currentModel.cars = store.peekAll("cars");
	},
	renderTemplate : function()	{
		return {outlet : "#outlet",component : "cardetails-api"}
	}
});

Lyte.Router.registerRoute('index',{
	model : function(){
		return{cars:store.findAll("cars")}
	},
	afterModel : function(){
		this.currentModel.cars = store.peekAll("cars");
	},
	renderTemplate : function()	{
		return {outlet : "#outlet",component : "welcome-comp"}
	}
});

      
Lyte.Component.register("cardetails-api", {
_template:"<template tag-name=\"cardetails-api\"> <h1 align=\"center\">Car Information</h1> <lyte-table id=\"detailsHeading\" lt-prop-yield=\"true\" lt-prop-border=\"true\" lt-prop-dual-resize=\"true\"> <lyte-table-structure> <lyte-tr> <lyte-th resize=\"enable\">car-no</lyte-th> <lyte-th resize=\"enable\">Model-name</lyte-th> <lyte-th resize=\"enable\">Passenger-Airbag</lyte-th> <lyte-th resize=\"enable\">EngineType</lyte-th> <lyte-th resize=\"enable\">TransmissionType</lyte-th> <lyte-th resize=\"enable\">Rupees</lyte-th> <lyte-th resize=\"enable\">Change</lyte-th> </lyte-tr> <lyte-tr> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\">{{details.id}}</lyte-td> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\">{{details.Model}}</lyte-td> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\">{{details.PassengerAirbag}}</lyte-td> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\">{{details.EngineType}}</lyte-td> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\">{{details.TransmissionType}}</lyte-td> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\">{{details.rupee}}</lyte-td> <lyte-td class=\"{{if(expHandlers(details.EngineType,'==','petrol'),'black','white')}}\" onclick=\"{{action(&quot;callingModal&quot;,this,item.id)}}\">Edit</lyte-td> </lyte-tr> </lyte-table-structure> </lyte-table> <lyte-button class=\"btn1\" lt-prop-appearance=\"primary\" onclick=\"{{action(&quot;backPage&quot;)}}\"> <template is=\"registerYield\" yield-name=\"text\"> Back </template> </lyte-button> <template is=\"if\" value=\"{{editcomp}}\"><template case=\"true\"> <edit-comp cars=\"{{details}}\" ncars=\"{{ncars}}\" indexvalueforedit=\"{{details.id}}\"></edit-comp> </template></template> </template>\n<style>.black{\n\tbackground-color: black;\n\tcolor:white;\n\t\n}\n.white{\n\tbackground-color: white;\n\tcolor:black;\n}</style>",
_dynamicNodes: [{"type":"componentDynamic","position":[3,1,1,1]},{"type":"componentDynamic","position":[3,1,1,3]},{"type":"componentDynamic","position":[3,1,1,5]},{"type":"componentDynamic","position":[3,1,1,7]},{"type":"componentDynamic","position":[3,1,1,9]},{"type":"componentDynamic","position":[3,1,1,11]},{"type":"componentDynamic","position":[3,1,1,13]},{"type":"componentDynamic","position":[3,1,1]},{"type":"attr","position":[3,1,3,1]},{"type":"text","position":[3,1,3,1,0]},{"type":"componentDynamic","position":[3,1,3,1]},{"type":"attr","position":[3,1,3,3]},{"type":"text","position":[3,1,3,3,0]},{"type":"componentDynamic","position":[3,1,3,3]},{"type":"attr","position":[3,1,3,5]},{"type":"text","position":[3,1,3,5,0]},{"type":"componentDynamic","position":[3,1,3,5]},{"type":"attr","position":[3,1,3,7]},{"type":"text","position":[3,1,3,7,0]},{"type":"componentDynamic","position":[3,1,3,7]},{"type":"attr","position":[3,1,3,9]},{"type":"text","position":[3,1,3,9,0]},{"type":"componentDynamic","position":[3,1,3,9]},{"type":"attr","position":[3,1,3,11]},{"type":"text","position":[3,1,3,11,0]},{"type":"componentDynamic","position":[3,1,3,11]},{"type":"attr","position":[3,1,3,13]},{"type":"componentDynamic","position":[3,1,3,13]},{"type":"componentDynamic","position":[3,1,3]},{"type":"componentDynamic","position":[3,1]},{"type":"componentDynamic","position":[3]},{"type":"attr","position":[5]},{"type":"registerYield","position":[5,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[5]},{"type":"attr","position":[7]},{"type":"if","position":[7],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}],
_observedAttributes :["details","editcomp","ncars"],
	data : function(){
		return {
			details : Lyte.attr("object"),
			editcomp:Lyte.attr("boolean",{default:false}),
			ncars:Lyte.attr("object")
		}		
	},
	init  : function (){ 
		var ncars=this.getData('details');
		this.setData('ncars',{"Model":ncars.Model,"PassengerAirbag":ncars.PassengerAirbag,"rupee":ncars.rupee});
		// console.log(this.getData('ncars'));
	},
	actions:{
		backPage:function(){
			Lyte.Router.transitionTo('index');
		},
		callingModal:function(){
			this.setData('editcomp',true);
				var modalElement = document.getElementById("modalElem"); 
				modalElement.ltProp("show",true);
				var EditdatA=this.getData('details');
					document.getElementsByClassName('title')[0].innerText='EditCar';
					document.getElementsByClassName('right')[0].innerText='Save';
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
			},

		
	}
	
});

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

Lyte.Component.register("sai-comp", {
_template:"<template tag-name=\"sai-comp\"> <h1 align=\"center\">Availabe product</h1> <lyte-table lt-prop-yield=\"true\" lt-prop-border=\"true\" lt-prop-dual-resize=\"true\"> <lyte-table-structure> <lyte-tr> <lyte-th resize=\"enable\">car-no</lyte-th> <lyte-th resize=\"enable\">Model-name</lyte-th> <lyte-th resize=\"enable\">Passenger-Airbag</lyte-th> <lyte-th resize=\"enable\">EngineType</lyte-th> <lyte-th resize=\"enable\">TransmissionType</lyte-th> <lyte-th resize=\"enable\">Rupees</lyte-th> <lyte-th resize=\"enable\">Change</lyte-th> <lyte-th resize=\"enable\">Delete</lyte-th> </lyte-tr> <template is=\"for\" items=\"{{cars}}\" item=\"item\" index=\"index\"> <lyte-tr> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}}\" onclick=\"{{action(&quot;nextpage&quot;,item)}}\">{{item.id}}</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}} cursorPoint\" onclick=\"{{action(&quot;nextpage&quot;,item)}}\">{{item.Model}}</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}}\" onclick=\"{{action(&quot;nextpage&quot;,item)}}\">{{item.PassengerAirbag}}</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}}\" onclick=\"{{action(&quot;nextpage&quot;,item)}}\">{{item.EngineType}}</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}}\" onclick=\"{{action(&quot;nextpage&quot;,item)}}\">{{item.TransmissionType}}</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}}\" onclick=\"{{action(&quot;nextpage&quot;,item)}}\">{{item.rupee}}</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}} btn2\" onclick=\"{{action(&quot;callingModal&quot;,this,item.id)}}\">Edit</lyte-td> <lyte-td class=\"{{if(expHandlers(item.EngineType,'==','petrol'),'black','white')}} btn2\"><div class=\"D_{{index}}\" onclick=\"{{action('delete',item.id)}}\">​❌</div></lyte-td> </lyte-tr> </template> </lyte-table-structure> </lyte-table> <lyte-button class=\"btn1\" onclick=\"{{action(&quot;callingModal&quot;,this)}}\" lt-prop-appearance=\"primary\"> <template is=\"registerYield\" yield-name=\"text\"> AddCar </template> </lyte-button> <template is=\"if\" value=\"{{editcomp}}\"><template case=\"true\"> <edit-comp cars=\"{{cars}}\" ncars=\"{{ncars}}\" indexvalueforedit=\"{{indexValueForEdit}}\"></edit-comp> </template></template> <lyte-alert lt-prop=\"{&quot;buttons&quot; : [{&quot;type&quot;:&quot;accept&quot;,&quot;text&quot;:&quot;Ok&quot;,&quot;appearance&quot;:&quot;success&quot;},{&quot;type&quot;:&quot;reject&quot;,&quot;text&quot;:&quot;Cancel&quot;,&quot;appearance&quot;:&quot;failure&quot;}]}\" lt-prop-show-close-button=\"false\" lt-prop-close-on-escape=\"false\" id=\"confirmToDelete\" lt-prop-yield=\"true\" lt-prop-top=\"40px\" lt-prop-animation=\"zoomIn\"> <template is=\"registerYield\" yield-name=\"alert\"> <lyte-alert-header> Are you sure? </lyte-alert-header> <lyte-alert-content>You want to delete this content.</lyte-alert-content> </template> </lyte-alert> </template>\n<style>lyte-table{\n\ttext-align: center;\n\tmargin-left:25%;\n\twidth:25%;\n\n}\nlyte-th{\n\ttext-align: center;\n}\n.black{\n\tbackground-color: black;\n\tcolor:white;\n\t\n}\n.white{\n\tbackground-color: white;\n\tcolor:black;\n}\n.btn1{\n\tmargin-left:25%;\n\tmargin-top:1.5%;\n}\nlyte-button:hover{\n\tcursor: pointer;\n}\n.cursorPoint:hover{\n\tcursor: pointer;\n}\n.btn2:hover{\n\tcursor: pointer;\n}\n\n</style>",
_dynamicNodes: [{"type":"componentDynamic","position":[3,1,1,1]},{"type":"componentDynamic","position":[3,1,1,3]},{"type":"componentDynamic","position":[3,1,1,5]},{"type":"componentDynamic","position":[3,1,1,7]},{"type":"componentDynamic","position":[3,1,1,9]},{"type":"componentDynamic","position":[3,1,1,11]},{"type":"componentDynamic","position":[3,1,1,13]},{"type":"componentDynamic","position":[3,1,1,15]},{"type":"componentDynamic","position":[3,1,1]},{"type":"attr","position":[3,1,3]},{"type":"for","position":[3,1,3],"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"text","position":[1,3,0]},{"type":"componentDynamic","position":[1,3]},{"type":"attr","position":[1,5]},{"type":"text","position":[1,5,0]},{"type":"componentDynamic","position":[1,5]},{"type":"attr","position":[1,7]},{"type":"text","position":[1,7,0]},{"type":"componentDynamic","position":[1,7]},{"type":"attr","position":[1,9]},{"type":"text","position":[1,9,0]},{"type":"componentDynamic","position":[1,9]},{"type":"attr","position":[1,11]},{"type":"text","position":[1,11,0]},{"type":"componentDynamic","position":[1,11]},{"type":"attr","position":[1,13]},{"type":"componentDynamic","position":[1,13]},{"type":"attr","position":[1,15]},{"type":"attr","position":[1,15,0]},{"type":"componentDynamic","position":[1,15]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[3,1]},{"type":"componentDynamic","position":[3]},{"type":"attr","position":[5]},{"type":"registerYield","position":[5,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[5]},{"type":"attr","position":[7]},{"type":"if","position":[7],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"registerYield","position":[9,1],"dynamicNodes":[{"type":"componentDynamic","position":[1]},{"type":"componentDynamic","position":[3]}]},{"type":"componentDynamic","position":[9]}],
_observedAttributes :["cars","ncars","indexValueForEdit","editcomp"],
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

Lyte.Component.register("welcome-comp",{
_template:"<template tag-name=\"welcome-comp\"> <sai-comp cars=\"{{lbind(cars)}}\"> </sai-comp> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}],
_observedAttributes :["cars"],
	data : function(){
		return {
			cars : Lyte.attr("array"),
		}
	}
});

store.registerModel("cars",{
	Model:Lyte.attr ("string"),
	PassengerAirbag:Lyte.attr ("string"),
	EngineType:Lyte.attr ("string"),
	rupee:Lyte.attr ("string"),
	TransmissionType:Lyte.attr ("string")
});

store.registerAdapter("cars", {//No I18n
	
});

