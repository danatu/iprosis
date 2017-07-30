jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 vehicle_tree in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"iprosistest/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"iprosistest/test/integration/pages/App",
	"iprosistest/test/integration/pages/Browser",
	"iprosistest/test/integration/pages/Master",
	"iprosistest/test/integration/pages/Detail",
	"iprosistest/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "iprosistest.view."
	});

	sap.ui.require([
		"iprosistest/test/integration/MasterJourney",
		"iprosistest/test/integration/NavigationJourney",
		"iprosistest/test/integration/NotFoundJourney",
		"iprosistest/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});