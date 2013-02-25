define([
  'controller',
  'router',
  'backbone.marionette'], function(
  Controller,
  Router) {
  var Timber = function() {
    this.app = new Backbone.Marionette.Application();
    this.controller = new Controller(this);
    this.router = new Router({ controller: this.controller });

	  this.app.addInitializer(function(options) {
	    Backbone.history.start();
	  }.bind(this));

    this.app.addRegions({
      contentRegion: '.content',
    });

    this.app.start();
  };

  return Timber;
});
