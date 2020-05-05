Lyte.Component.register("cardetails-api", {
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
