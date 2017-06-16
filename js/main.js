
var $doc = $('html, body');
$('.scroll-suave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$(function(){
    $(".hideme").fadeIn(700);
  
});