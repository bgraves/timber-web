define([
  'text!/html/post.html',
  'backbone.marionette',
  'jquery-rotate'], function(
  PostHtml) {
  return Backbone.Marionette.ItemView.extend({
    events: {
      'mouseenter .contact': function(e) {
        $(e.currentTarget).animate({
          left: '+=10',
          top: '-=10'
        });
      },
      'mouseleave .contact': function(e) {
        $(e.currentTarget).animate({
          left: '-=10',
          top: '+=10'
        });
      },
      'mouseenter .red-tab': function(e) {
        $(e.currentTarget).animate({
          rotate: '5deg'
        });
      },
      'mouseleave .red-tab': function(e) {
        $(e.currentTarget).animate({
          rotate: '-1deg'
        });
      },
      'click .red-tab': function(e) {
        $('.lined-paper').animate({
          top: this.linedPaper ? '-=200' : '+=200'
        });
        this.linedPaper = !this.linedPaper;
        if(!this.linedPaper) {
          $('.philo.text-1').show();
          $('.philo.text-2').hide();
          $('.philo.text-3').hide();
          $('.philo.text-4').hide();
        }
      },
      'mouseenter .lars': function(e) {
        if(this.lars) return;
        $(e.currentTarget).animate({
          top: '+=60'
        });
      },
      'mouseleave .lars': function(e) {
        if(this.lars) return;
        $(e.currentTarget).animate({
          top: '-=60'
        });
      },
      'click .lars': function(e) {
        $(e.currentTarget).animate({
          left: this.lars ? '-=150' : '+=150',
          top: this.lars ? '-=70' : '+=70'
        });
        this.lars = !this.lars;
      },
      'click .trees-icon': '_treesPhil',
      'click .timber-icon': '_timberPhil',
      'click .pile-icon': '_pilePhil',
      'click .contact': function(e) {
        $(e.currentTarget).fadeOut();
        $('.contact-card').fadeIn();
      },
      'click .contact-card': function(e) {
        $(e.currentTarget).fadeOut();
        $('.contact').fadeIn();
      },
      'click .contact-card input[type=text]': function(e) {
        return false;
      },
      'click .contact-card textarea': function(e) {
        return false;
      },
      'submit form': '_submitContact',
    },
    initialize: function(options) {
      this.template = _.template(PostHtml);
    },
    _treesPhil: function(e) {
      $('.philo.text-1').hide();
      $('.philo.text-2').show();
      $('.philo.text-3').hide();
      $('.philo.text-4').hide();
    },
    _timberPhil: function(e) {
      $('.philo.text-1').hide();
      $('.philo.text-2').hide();
      $('.philo.text-3').show();
      $('.philo.text-4').hide();
    },
    _pilePhil: function(e) {
      $('.philo.text-1').hide();
      $('.philo.text-2').hide();
      $('.philo.text-3').hide();
      $('.philo.text-4').show();
    },
    _submitContact: function(e) {
      e.preventDefault();
      $.post(
      'http://timberdesignco.com/php/email.php',
      $(e.currentTarget).serialize(),
      function(data) {
        console.log(data);
      });
      return false;
    }
  });
});
  
