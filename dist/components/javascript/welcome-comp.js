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
