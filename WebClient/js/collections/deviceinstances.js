/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Device Instance Collection
	// ---------------

	// The collection of device instances is backed by *localStorage* instead of a remote
	// server.
	var DeviceInstanceList = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.DeviceInstance,

		// Save all of the items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		// Device instances are sorted by their names.
		comparator: function (deviceInstance) {
			return deviceInstance.get('name');
		}
	});

	// Create our global collection of device instances.
	app.deviceInstances = new DeviceInstanceList();
})();
