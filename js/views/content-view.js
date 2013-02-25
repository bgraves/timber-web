define([
  'text!/html/content.html',
  'backbone.marionette'], function(
  ContentHtml) {
  return Backbone.Marionette.Layout.extend({
    events: {
      'mousemove .panels': '_handleMouse'  
    },
    _handleMouse: function(e) {
      console.log(e.pageX);
      if(e.pageX > 1000 && this.page < 2 && this.page >= 0 && this.pageTrigger) {
        this.pageTrigger = false; 
        ++this.page;
        $('.panels').animate({
          easing: 'swing',
          left: -1024 * this.page
        });
      } else if(e.pageX < 125 && this.page > 0 && this.pageTrigger) {
        this.pageTrigger = false; 
        --this.page;
        $('.panels').animate({
          easing: 'swing',
          left: -1024 * this.page
        });
      } else if(e.pageX < 1000 && e.pageX > 125) {
        this.pageTrigger = true;
      }
    },
    initialize: function(options) {
      this.template = _.template(ContentHtml);
      this.pageTrigger = true;
      this.page = 0;
    }  
  });
});

