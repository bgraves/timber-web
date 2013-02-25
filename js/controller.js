define([
  'views/content-view'], function(
  ContentView) {
  var Controller = function(options) {
    this.app = options.app;
  };

  Controller.prototype = {
    root: function() {
      var contentView = new ContentView();
      this.app.contentRegion.show(contentView);
    }
  };

  return Controller;
});
