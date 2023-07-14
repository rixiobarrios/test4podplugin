sap.ui.define([
	"sap/dm/dme/podfoundation/component/production/ProductionUIComponent",
	"sap/ui/Device"
], function (ProductionUIComponent, Device) {
	"use strict";

	return ProductionUIComponent.extend("sap.custom.plugin.testplugins.test4podplugin.test4podplugin.Component", {
		metadata: {
			manifest: "json"
		}
	});
});