
var count = 1;

$(".itBtn").click(function(){
  myFunction();
})

$(".popuptext").click(function(){
  $(this).fadeOut();
});

function myFunction() {
  $(".popuptext").show();
}

$(".itBtn2").click(function(){
  myFunction2();
})

$(".popuptext2").click(function(){
  $(this).fadeOut();
  
});

function myFunction2() {
  $(".popuptext2").show();
}

var home = document.getElementById('home');
home.addEventListener("click", function(){
  
})

var wm = document.getElementById('worldMap');
wm.addEventListener("click", function(){
  
})

var pg = document.getElementById('photoGallery');
pg.addEventListener("click", function(){
  
})

var au = document.getElementById('aboutUs');
au.addEventListener("click", function(){
  
})

