requirejs.config({
	baseUrl: "js/",
	paths: {
		'backbone': 'lib/backbone',
		'backbone.marionette': 'lib/backbone.marionette',
		'jquery': 'lib/jquery-1.9.1.min',
    'json2': 'lib/json2',
    'text': 'lib/text',
		'underscore': 'lib/underscore'
  },
  shim: {
		'backbone': {
			deps: ['underscore', 'jquery', 'json2'],
			exports: 'Backbone'
		},
		'backbone.marionette': {
			deps: ['backbone'],
    }
  }
});

require(['timber'], function(Timber) {
  new Timber();
});

