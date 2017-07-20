console.log('app.js connected');

var source = {
  'test':'./test.html',
  'page1':'./page1.html',
  'page2':'./page2.html'
};

var counter = 0;

//created var android below so these are commented out//
// var android = $("input[name='android']");
// var pc_ios = $("input[name='pc_ios']");

var android = function(){
  location.href = source.page1;
}

var pc_ios = function() {
  location.href = source.page2;
}

$(window).on('load', function(){

  // android.change(function(){
  //   if(this.checked){
  //     console.log('android');
  //     location.href = source.page1;
  //   }
  // });

  // pc_ios.change(function(){
  //   if(this.checked){
  //     console.log('pc_ios');
  //     location.href = source.page2;
  //   }
  // });

  //!!!!!!!! ENABLE FOR FINAL, DISABLED BC FIXED HEIGHT IS EASIER TO SEE !!!!!!!!//
  // $('#hearthpwn').css('height', $(window).height()+'px');




//MOVE DISBALED BUTTON FUNCTIONALITY TO A NEW "START OVER" A TAG//


//NEED TO CHANGE THIS SO THIS BUTTON APPEARS BEFORE PLATFORM IS CHOSEN//
  $('.disabled').click(function(){
    console.log('start over fired');
    counter = 0;
    console.log(counter);
    $('#hearthpwn').attr('src', source[0]);
  });

  $('.primary').click(function(){

  });

  $('.secondary').click(function(){
    console.log('previous fired');
    counter--;
    console.log(counter);
    // $('#hearthpwn').attr('src', source[counter]);
  });

  // foo = function() {
  //   console.log('yurp');
  //   /*
  //   var frame = $('#hearthpwn');
  //   //var frame = $('iframe[id="hearthpwn"]');
  //   var frame = document.getElementById('hearthpwn');
  //   console.log(frame);
  //   //frame.attr('src', source.page1);
  //   frame.setAttribute('src',source.page1);*/
  //   location.href = source.page1;
  // }

});
