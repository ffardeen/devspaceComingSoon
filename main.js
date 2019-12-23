$(window).scroll(function() {
  
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
      $icon = $('.icon');
  
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      $icon.removeClass(function (index, css) {
        return (css.match (/(^|\s)icon-\S+/g) || []).join(' ');
      });
       
      $body.addClass('color-' + $(this).data('color'));
      $icon.addClass('icon-' + $(this).data('color'));
    }
  });    
  
}).scroll();