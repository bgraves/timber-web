define([
  'text!/html/content.html',
  'views/book-view',
  'views/post-view',
  'backbone.marionette'], function(
  ContentHtml,
  BookView,
  PostView) {
  return Backbone.Marionette.Layout.extend({
    events: {
      'mousemove .panels': '_handleMouse'  
    },
    _handleMouse: function(e) {
      if(e.pageX > 1050 && this.page < 2 && this.page >= 0 && this.pageTrigger) {
        this.pageTrigger = false; 
        ++this.page;
        $('.panels').animate({
          easing: 'swing',
          left: -1024 * this.page
        });
      } else if(e.pageX < 100 && this.page > 0 && this.pageTrigger) {
        this.pageTrigger = false; 
        --this.page;
        $('.panels').animate({
          easing: 'swing',
          left: -1024 * this.page
        });
      } else if(e.pageX < 1050 && e.pageX > 100) {
        this.pageTrigger = true;
      }
    },
    initialize: function(options) {
      this.template = _.template(ContentHtml);
      this.pageTrigger = true;
      this.page = 0;
    },
    onRender: function() {
      this._showPost();
      this._showBook();
    },
    regions: {
      postRegion: '.post',
      bookRegion: '.book',
      cookiesRegion: '.cookies'
    },
    _showBook: function() {
      var bookView = new BookView();
      this.bookRegion.show(bookView);
    },
    _showPost: function() {
      var postView = new PostView();
      this.postRegion.show(postView);
    }
  });
});

