requirejs.config({
	baseUrl: "js/",
	paths: {
		'backbone': 'lib/backbone',
		'backbone.marionette': 'lib/backbone.marionette',
		'jquery': 'lib/jquery-1.9.1.min',
    'jquery-rotate': 'lib/jquery-animate-css-rotate-scale',
    'json2': 'lib/json2',
    'text': 'lib/text',
    'turn': 'lib/turn.min',
		'underscore': 'lib/underscore'
  },
  shim: {
		'backbone': {
			deps: ['underscore', 'jquery', 'json2'],
			exports: 'Backbone'
		},
		'backbone.marionette': {
			deps: ['backbone'],
			exports: 'Backbone'
    },
    'jquery-rotate': {
      deps: ['jquery'],
      exports: 'jquery-rotate'
    },
    'turn': {
      deps: ['jquery'],
      exports: 'turn'
    }
  }
});

require(['timber'], function(Timber) {
  new Timber();
});

