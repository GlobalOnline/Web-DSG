$(function(){
  var nav = $('nav');
  nav.on('click', '.tier1 > li > a', function () {
    $('div.tier2 .container > div').removeClass('active');
    $(this).parent().find('div.tier2 .container > div').first().addClass('active');
  });

  nav.on('click','div.tier2 .container > div > a', function(e){
    if ($(this).attr('href') == '#') {
      e.preventDefault();
      $(this).parent().siblings().removeClass('active').end().addClass('active');
    }
  });

  nav.on('click','.close',function(e){
    e.preventDefault();
    $(this).parents('li').removeClass('open');
  });
});