define(['backbone.marionette'], function() {
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: { '': 'root' }
  });
});
