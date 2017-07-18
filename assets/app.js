console.log('app.js connected');

$(window).on('load', function(){

  var source = [
    './test/page1.html',
    './test/page2.html'
  ];


  $('.primary').click(function(){
    console.log('primary fired');
    console.log(source[0]);
    $('#hearthpwn').attr('src', source[0]);
  });

  $('.secondary').click(function(){
    console.log('secondary fired');
    $('#hearthpwn').attr('src', source[1]);
  });

});
