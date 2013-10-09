/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Device Instance Collection
	// ---------------

	// The collection of device instances is backed by *localStorage* instead of a remote
	// server.
	var RuleList = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Rule,

		// Save all of the items under the `"todos"` namespace.
		localStorage: new Backbone.LocalStorage('todos-backbone'),

		// Filter down the list of all todo items that are finished.
		completed: function () {
			return this.filter(function (rule) {
				return rule.get('completed');
			});
		},

		// Filter down the list to only todo items that are still not finished.
		remaining: function () {
			return this.without.apply(this, this.completed());
		},

		// We keep the Todos in sequential order, despite being saved by unordered
		// GUID in the database. This generates the next order number for new items.
		nextOrder: function () {
			if (!this.length) {
				return 1;
			}
			return this.last().get('order') + 1;
		},

		// Device instances are sorted by their names.
		comparator: function (rule) {
			return rule.get('name');
		}
	});

	// Create our global collections.
	app.rules = new RuleList();
})();
