define("AnNoCaptionGrid", [], function () {

	Ext.define("Terrasoft.controls.AnNoCaptionGrid", {
		extend: "Terrasoft.Grid",
		alternateClassName: "Terrasoft.AnNoCaptionGrid",
		
		init: function() {
		    this.callParent(arguments);
		    console.log("Init component");
		}, 
		
		renderCaptionsRow: Ext.emptyFn,	
	});
	return Terrasoft.AnNoCaptionGrid;
});
