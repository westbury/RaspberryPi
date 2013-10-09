/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// An instance of a device (switch, light etc)
	// ----------

	// Our basic DeviceInstance model has `type`, `name`, x, y, and state attributes.
	app.DeviceInstance = Backbone.Model.extend({
		// Default attributes for the device instance
		// and ensure that each instance created has reasonable default values
		defaults: {
			type: '',
			name: '',
			x: 50,
			y: 50,
			state: 'off'
		},

		// Toggle the `state` state of this switch.
		toggle: function () {
			this.save({
				state: (this.get('state') == 'on') ? 'off' : 'on'
			});
		}
	});
})();
