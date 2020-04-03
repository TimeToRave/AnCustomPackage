define("AnNoCaptionGrid", [], function () {

	Ext.define("Terrasoft.controls.AnNoCaptionGrid", {
		extend: "Terrasoft.Grid",
		alternateClassName: "Terrasoft.AnNoCaptionGrid",
			
		renderCaptionsRow: Ext.emptyFn
		
	});
	return Terrasoft.AnNoCaptionGrid;
});
