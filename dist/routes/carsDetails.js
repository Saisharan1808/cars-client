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
