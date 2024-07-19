window.onscroll = function () {myFunction()};
var navbar = document.getElementById("navbar-search");

var mainhtm = document.getElementById("main");
var sticky = navbar.offsetTop;

function myFunction() {

if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    mainhtm.classList.add("magin");
    } 
    else {
    navbar.classList.remove("sticky");
    mainhtm.classList.remove("magin");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const autocompleteList = document.getElementById('autocompleteList');

  const data = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Strawberry', 'Watermelon', 'Blueberry'];

  searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      autocompleteList.innerHTML = '';

      if (!query) {
          return false;
      }

      const filteredData = data.filter(item => item.toLowerCase().includes(query));

      filteredData.forEach(item => {
          const div = document.createElement('div');
          div.textContent = item;

          div.addEventListener('click', () => {
              searchInput.value = item;
              autocompleteList.innerHTML = '';
          });

          autocompleteList.appendChild(div);
      });
  });

  document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !autocompleteList.contains(e.target)) {
          autocompleteList.innerHTML = '';
      }
  });
});

//detail
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}