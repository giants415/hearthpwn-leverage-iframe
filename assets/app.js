console.log('app.js connected');

$(window).on('load', function(){

  $('#hearthpwn').css('height', $(window).height()+'px');


  var counter = 0;

  var source = [
    './pages/test.html',
    './pages/page1.html',
    './pages/page2.html'
  ];





//MOVE DISBALED BUTTON FUNCTIONALITY TO A NEW "START OVER" A TAG//


//NEED TO CHANGE THIS SO THIS BUTTON APPEARS BEFORE PLATFORM IS CHOSEN//
  $('.disabled').click(function(){
    console.log('start over fired');
    counter = 0;
    console.log(counter);
    $('#hearthpwn').attr('src', source[0]);
  });

  $('.primary').click(function(){
    console.log('backwards fired');
    counter++;
    console.log(counter);
    $('#hearthpwn').attr('src', source[counter]);
  });

  $('.secondary').click(function(){
    console.log('forwards fired');
    counter--;
    console.log(counter);
    $('#hearthpwn').attr('src', source[counter]);
  });

});
