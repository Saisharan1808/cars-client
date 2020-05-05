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

      