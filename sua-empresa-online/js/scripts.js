var toggleMenu = document.querySelector('.toggle__mobile');
var menuMobile = document.querySelector('.menu__nav--mobile');
toggleMenu.addEventListener('click', function(){
menuMobile.style.display = menuMobile.style.display=="none" ?"block":"none";  
});


function bntMobile(){
  var toggleMenu = document.querySelector('.toggle__mobile');
var menuMobile = document.querySelector('.menu__nav--mobile');
menuMobile.style.display = menuMobile.style.display=="none" ? "block":"none";  
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  var btnMissao = document.querySelector('.btnMissao');
  var btnVisao = document.querySelector('.btnVisao');
  var btnValores = document.querySelector('.btnValores');

  btnClick = btnMissao.addEventListener ('click', function(){
    var textMissao = document.querySelector('.missao');
    var textVisao = document.querySelector('.visao');
    var textValores = document.querySelector('.valores');
    textMissao.style.display = 'block';
    textVisao.style.display = 'none';
    textValores.style.display = 'none';

  });

  btnClick = btnVisao.addEventListener ('click', function(){
    var textMissao = document.querySelector('.missao');
    var textVisao = document.querySelector('.visao');
    var textValores = document.querySelector('.valores');
    textMissao.style.display = 'none';
    textVisao.style.display = 'block';
    textValores.style.display = 'none';

  });

  btnClick = btnValores.addEventListener ('click', function(){
    var textMissao = document.querySelector('.missao');
    var textVisao = document.querySelector('.visao');
    var textValores = document.querySelector('.valores');
    textMissao.style.display = 'none';
    textVisao.style.display = 'none';
    textValores.style.display = 'block';

  });


var header = document.querySelector(".box__about--text");
var btns = header.getElementsByClassName("btn__about");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

const menuItems = document.querySelectorAll('nav a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
	// window.scroll({
	// top: to,
	// behavior: "smooth",
	// })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 0;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


