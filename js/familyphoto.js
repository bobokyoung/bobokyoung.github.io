$(document).ready(function(){
  $(document).on("click",".front",function(){
    var border = $(".back").outerWidth()-$(".back").innerWidth();
    if ($(".front").position().left != 0){
      $(".front").css("left",0);   
      $(".back").css("background-color","lightgreen");
    }else{
      $(".front").css("left",($(".back").outerWidth()-$(".front").outerWidth()) + "px");  
      $(".back").css("background-color","lightcoral");
    }

  });
  
})

function byId(e){return document.getElementById(e);}

window.addEventListener('load', mInit, false);

function mInit()
{
    var tgt = byId('ImageButton1');
    tgt.secondSource = 'images/image2.png';
}

function byId(e){return document.getElementById(e);}



function action2()
{
    var tgt = byId('imgBtn1');
    var tmp = tgt.src;
    tgt.src = tgt.getAttribute('src2');
    tgt.setAttribute('src2', tmp);
}