/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// An instance of a connection.  A simple connection would connect a switch
	// to a light.  Most connections will be more complicated than that.
	// ----------

	// Our basic Connection model has `inputDevice`, `inputConnector`, `output`, `outputConnector` attributes.
	app.Connection = Backbone.Model.extend({
		// Default attributes for the connection
		// and ensure that each instance created has reasonable default values
		defaults: {
			outputDevice: 0,
			outputConnector: 0,
			inputDevice: 0,
			inputConnector: 0
		},
	});
})();
