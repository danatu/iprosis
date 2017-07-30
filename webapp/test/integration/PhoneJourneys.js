jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"iprosistest/test/integration/NavigationJourneyPhone",
		"iprosistest/test/integration/NotFoundJourneyPhone",
		"iprosistest/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});