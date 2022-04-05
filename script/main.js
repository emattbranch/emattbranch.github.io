
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-slide");
  if (n < 1) {slideIndex = slides.length};
  if (n > slides.length) {slideIndex = 1};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function enlarge(thisImg){

  let thisImgId = thisImg.id;
  thisImg.classList.add("hide");

  let lightbox = document.getElementsByClassName("lightbox")[0];
  let newId = thisImgId + "Big";
  let bigImg = document.getElementById(newId);

  lightbox.style.display = "flex";
  bigImg.classList.remove("hide");
  bigImg.classList.add("reveal");
  console.log(bigImg);
}

function closeLightbox(lightbox){
  lightbox.style.display = "none";

  let thisImg = document.getElementsByClassName("reveal")[0];
  thisImg.classList.remove("reveal");
  thisImg.classList.add("hide");
  let thisId = thisImg.id;
  console.log("thisId: " + thisId);

  let smallId = thisId.substring(0, thisId.length-3);
  let small = document.getElementById(smallId);

  small.classList.remove("hide");
}

function showNav(){
  let nav = document.getElementsByClassName("mainNav")[0];
  console.log(nav);
  if( nav.style.display == "block"){
    nav.style.display = "none";
  }
  else{
    nav.style.display = "block";
  }
}

function readMore(x){
  if( x.nextElementSibling.style.display == "none"){
    x.className = "toggle-down";
    x.nextElementSibling.style.display = "block";
  }
  else{
    x.className = "toggle-arrow";
    x.nextElementSibling.style.display = "none";
 }
}
