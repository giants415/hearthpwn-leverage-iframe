console.log('app.js connected');

var android_ = {
  'step1':'./android/step1.html',
  'step2':'./step2.html',
  'step3':'./step3.html',
  'step4':'./step4.html',
  'step5':'./step5.html',
  'all':'./all_android.html'
};

var ios_pc = {
  'step1':'./ios_pc/step1.html',
  'step2':'./step2.html',
  'step3':'./step3.html',
  'step4':'./step4.html',
  'step5':'./step5.html',
  'all':'./all_ios_pc.html'
};


//    ANDROID ENTRY FROM PLATFORM    //
// function changePageTo(pageInfo) {
//     location.href = pageInfo.href;
//     // console.log(window.parent.document.getElementByID('hearthpwn').style.height);
//     // window.parent.document.getElementByID('hearthpwn').style.height = html.height;
//     // window.parent.doucment.getElementByID('container').height = '1000px';
// }
var androidstep1 = function(){
  location.href = android_.step1;
}

var androidstep2to1 = function(){
  location.href = './step1.html';
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

var all_a = function(){
  location.href = android_.all;
}




//    IOS ENTRY FROM PLATFORM    //
var pc_ios1 = function() {
  location.href = ios_pc.step1;
}

var pc_ios2to1 = function(){
  location.href = './step1.html';
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

var all_i_p = function(){
  location.href = ios_pc.all;
}

var start_over = function(){
  location.href = '../platform.html';
}

var copy = function(){
  document.execCommand("copy");
}


// $(window).on('load', function(){
  //!!!!!!!! ENABLE FOR FINAL, DISABLED BC FIXED HEIGHT IS EASIER TO SEE !!!!!!!!//
  // console.log('load function trigger')
  // $('#hearthpwn').css('height', $(window).height()+'px');
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
