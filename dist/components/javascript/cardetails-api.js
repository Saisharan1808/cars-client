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
