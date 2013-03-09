define([
  'text!/html/book.html',
  'backbone.marionette',
  'turn'], function(
  BookHtml) {
  return Backbone.Marionette.ItemView.extend({
    events: {
    },
    initialize: function(options) {
      this.template = _.template(BookHtml);
    },
    onShow: function() {
      $('#flipbook', this.el).turn({
        width: 1002,
        height: 675 
        //autoCenter: true
        //gradients: true,
        //acceleration: true
      });
    }
  });
});
  
