// Slider Card 
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
// 

// Get Year 
var Elem = document.getElementById("Clock");
function Ano(){ 
  var Hoje = new Date(); 
  var pegarAno = Hoje.getFullYear(); 
  
  Elem.innerHTML = pegarAno; 
  } 
  window.setInterval("Ano()",1000);