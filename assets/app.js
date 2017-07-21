console.log('app.js connected');

var android_ = {
  'step1':'./android/step1.html',
  'step2':'./step2.html',
  'step3':'./step3.html',
  'step4':'./step4.html',
  'step5':'./step5.html'
};

var ios_pc = {
  'step1':'./ios_pc/step1.html',
  'step2':'./step2.html',
  'step3':'./step3.html',
  'step4':'./step4.html',
  'step5':'./step5.html'
};


//    ANDROID ENTRY FROM PLATFORM    //
var androidstep1 = function(){
  location.href = android_.step1;
}

var androidstep2 = function() {
  location.href = android_.step2;
}

var androidstep3 = function() {
  location.href = android_.step3;
}

var androidstep4 = function(){
  location.href = android_.step4;
}

var androidstep5 = function(){
  location.href = android_.step5;
}

//    IOS ENTRY FROM PLATFORM    //
var pc_ios1 = function() {
  // console.log('ios_pc');
  location.href = ios_pc.step1;
}

var pc_ios2 = function(){
  location.href = ios_pc.step2;
}

var pc_ios3 = function(){
  location.href = ios_pc.step3;
}
var pc_ios4 = function(){
  location.href = ios_pc.step4;
}

var pc_ios5 = function(){
  location.href = ios_pc.step5;
}

// REMOVE IF I DONT NEED JQUERY AT ALL
// $(window).on('load', function(){
//   //!!!!!!!! ENABLE FOR FINAL, DISABLED BC FIXED HEIGHT IS EASIER TO SEE !!!!!!!!//
//   // $('#hearthpwn').css('height', $(window).height()+'px');
//
//   //MOVE DISBALED BUTTON FUNCTIONALITY TO A NEW "START OVER" A TAG//
//
//
//   //NEED TO CHANGE THIS SO THIS BUTTON APPEARS BEFORE PLATFORM IS CHOSEN//
//   $('.disabled').click(function(){
//     // console.log('start over fired');
//     // counter = 0;
//     // console.log(counter);
//     // $('#hearthpwn').attr('src', source[0]);
//   });
//
//   $('.primary').click(function(){
//     // console.log('next fired');
//     // counter++;
//     // console.log(counter);
//     // location.href = source[counter];
//   });
//
//   $('.secondary').click(function(){
//     // console.log('previous fired');
//     // counter--;
//     // console.log(counter);
//     // $('#hearthpwn').attr('src', source[counter]);
//   });
//
//
//
// });
