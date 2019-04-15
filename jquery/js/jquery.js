// JQUERY



// And more!

// let listitems = document.querySelectorAll('li');
// let i;
// for (i = 0; i < listitems.length; i++) {
//     listitems[i].className = "starred";
// }

// JQUERY

// $('li').addClass('starred');



$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });

//   $(document).ready(function(){
//     $("div").click(function(){
//       $(this).hide();
//     });
//   });

//   $(document).ready(function(){
//     $("button").click(function(){
//       $(".red").fadeIn(1500);
//       $(".blue").fadeIn(2500);
//       $(".green").fadeIn(3500);
//       $(".yellow").fadeIn(4500);
//       $(".purple").fadeIn(5500);
//     });
//   });
// transform: translate(85vh,-32vh);
  
  $(document).ready(function(){
    $(".animate").click(function(){
      $("div").animate({left: '950px'}, 500);
      $(".red").animate({left: '250px'}, 1000);
      $(".blue").animate({left: '350px'}, 1500);
      $(".green").animate({left: '450px'}, 2000);
      $(".yellow").animate({left: '550px'}, 2500);
      $(".purple").animate({left: '650px'}, 3000);
    });
  });
