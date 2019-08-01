function scrollBottom() {window.scrollTo(0, 99999);}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);











$(window).on('scroll' , function () {
  var sct = $(window).scrollTop();
  

function quickMenu(){
  var el= $('.fixedQuick') ,
      baseTop = 0;
  
  if ( sct > 0 ){
    el.css({
      position : 'fixed' ,
      top : 0 
    })
  } else {
    el.css ({
      position : 'absolute' ,
      top : 0
    })
  }
}
  quickMenu();  
})



$(window).on('scroll' , function () {
  var sct = $(window).scrollTop();
  

function quickMenu(){
  var el= $('.topbackground') ,
      baseTop = 0;
  
  if ( sct > 0 ){
    el.css({
      position : 'fixed' ,
      top : 0 
    })
  } else {
    el.css ({
      position : 'absolute' ,
      top : 0
    })
  }
}
  quickMenu();  
})



$(window).on('scroll' , function () {
  var sct = $(window).scrollTop();
  

function quickMenu(){
  var el= $('.back_chestopen') ,
      baseTop = 0;
  
  if ( sct > 0 ){
    el.css({
      position : 'fixed' ,
      top : 0 
    })
  } else {
    el.css ({
      position : 'absolute' ,
      top : 0
    })
  }
}
  quickMenu();  
})







$(window).on('scroll' , function () {
  var sct = $(window).scrollTop();
  

function quickMenu(){
  var el= $('.topchest_chestopen') ,
      baseBottom = 0;
  
  if ( sct > 14000 ){
    el.css({
      position : 'fixed' ,
      bottom : 0 
    })
  } else {
    el.css ({
      position : 'absolute' ,
      bottom : 1900
    })
  }
}
  quickMenu();  
})



$(window).on('scroll' , function () {
  var sct = $(window).scrollTop();
  

function quickMenu(){
  var el= $('.topstick') ,
      baseBottom = 0;
  
  if ( sct > 14000 ){
    el.css({
      position : 'fixed' ,
      bottom : 0 
    })
  } else {
    el.css ({
      position : 'absolute' ,
      bottom : 1900
    })
  }
}
  quickMenu();  
})


changeImage1 = function() {
    var image = document.getElementById('imageOne');

    if (image.getAttribute('src')=='sox/socks1.png') {
       image.setAttribute('src', "sox/soxballoon.png");
    } else {
       image.setAttribute('src', "sox/socks1.png");
    }
 }



changeImage2 = function() {
    var image = document.getElementById('imageTwo');

    if (image.getAttribute('src')=='sox/socks2.png') {
       image.setAttribute('src', "sox/soxgarland.png");
    } else {
       image.setAttribute('src', "sox/socks2.png");
    }
 }





changeImage3 = function() {
    var image = document.getElementById('imageThree');

    if (image.getAttribute('src')=='sox/socks3.png') {
       image.setAttribute('src', "sox/soxearring.png");
    } else {
       image.setAttribute('src', "sox/socks3.png");
    }
 }





changeImage4 = function() {
    var image = document.getElementById('imageFour');

    if (image.getAttribute('src')=='sox/socks4.png') {
       image.setAttribute('src', "sox/soxcandle.png");
    } else {
       image.setAttribute('src', "sox/socks4.png");
    }
 }






changeImage5 = function() {
    var image = document.getElementById('imageFive');

    if (image.getAttribute('src')=='sox/socks5.png') {
       image.setAttribute('src', "sox/soxbulb.png");
    } else {
       image.setAttribute('src', "sox/socks5.png");
    }
 }





changeImage6 = function() {
    var image = document.getElementById('imageSix');

    if (image.getAttribute('src')=='sox/socks6.png') {
       image.setAttribute('src', "sox/soxheadband.png");
    } else {
       image.setAttribute('src', "sox/socks6.png");
    }
 }




changeImage7 = function() {
    var image = document.getElementById('imageSeven');

    if (image.getAttribute('src')=='sox/socks7.png') {
       image.setAttribute('src', "sox/soxhat.png");
    } else {
       image.setAttribute('src', "sox/socks7.png");
    }
 }


changeImage8 = function() {
    var image = document.getElementById('imageEight');

    if (image.getAttribute('src')=='sox/socks8.png') {
       image.setAttribute('src', "sox/soxmoney.png");
    } else {
       image.setAttribute('src', "sox/socks8.png");
    }
 }





changeImage9 = function() {
    var image = document.getElementById('imageNine');

    if (image.getAttribute('src')=='sox/socks9.png') {
       image.setAttribute('src', "sox/soxsnowball.png");
    } else {
       image.setAttribute('src', "sox/socks9.png");
    }
 }



changeImage10 = function() {
    var image = document.getElementById('imageTen');

    if (image.getAttribute('src')=='sox/socks10.png') {
       image.setAttribute('src', "sox/soxcoaster.png");
    } else {
       image.setAttribute('src', "sox/socks10.png");
    }
 }
changeImage12 = function() {
    var image = document.getElementById('imageTwelve');

    if (image.getAttribute('src')=='sox/socks12.png') {
       image.setAttribute('src', "sox/soxdoll.png");
    } else {
       image.setAttribute('src', "sox/socks12.png");
    }
 }