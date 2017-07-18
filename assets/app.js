console.log('app.js connected');

$(window).on('load', function(){

  $('.primary').click(function(){
    console.log('primary fired');
    $('#hearthpwn').attr('src', './test/page1.html');
  });

  $('.secondary').click(function(){
    console.log('secondary fired');
    $('#hearthpwn').attr('src', './test/page2.html');
  });

});
