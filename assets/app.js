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

var copy = function(string) {
  var url = string;
  var aux = document.createElement("input");
  aux.setAttribute("value", url);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
};
