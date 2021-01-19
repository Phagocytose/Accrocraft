// ===== Copy to Clipboard =====
var toCopy = document.getElementById('txt-copier'),
    copie1 = document.getElementById('c1'),
    btnCopie = document.getElementById('copier');

btnCopie.addEventListener('click', function() {
  toCopy.textContent;
  setClipboard(toCopy.textContent);

});

function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    if (document.execCommand('copy')) {
        copie1.classList.add('copied');

        var temp = setInterval(function() {
          copie1.classList.remove('copied');
          clearInterval(temp);
        }, 750 );

    } else {
      console.info('document.execCommand a fail')
    }

    return false;
}

// ===== Slideshow =====
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
