console.log('app.js connected');

$(window).on('load', function(){
  var counter = 0;

  var source = [
    './test/test.html',
    './test/page1.html',
    './test/page2.html'
  ];

  $('.disabled').click(function(){
    console.log('start over fired');
    counter = 0;
    console.log(counter);
    $('#hearthpwn').attr('src', source[0]);
  });

  $('.primary').click(function(){
    console.log('backwards fired');
    counter--;
    console.log(counter);
    $('#hearthpwn').attr('src', source[counter]);
  });

  $('.secondary').click(function(){
    console.log('forwards fired');
    counter++;
    console.log(counter);
    $('#hearthpwn').attr('src', source[counter]);
  });

});
