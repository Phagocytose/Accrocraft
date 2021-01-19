
// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('html,body').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
});

// ===== Sticky header =====
window.onscroll = function() {
  stick();
  if (document.URL == "https://www.accrocraft.alwaysdata.net/merveilles.php") {
    modalheight();
  }

};

// Get the header
var header = document.getElementById("header");
var menu = document.getElementById("menu");
var topbar = document.getElementById("topbar");
var illu_index = document.getElementById("header-1");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Rendre le header sticky on top
function stick() {
  if (window.pageYOffset > sticky) {
    //changements
    menu.style.height = 0 + "px";
    topbar.style.height = 70 + "px";
    header.style.height = 96 + "px";
    header.style.padding = 0;
    header.style.marginTop = 0 + "px";
    header.classList.remove("top-anchor");
    header.classList.add("stick-header");
    illu_index.style.marginTop = 148 + "px";
  } else {
    //enlever les changements
    menu.style.height = 202 + "px";
    header.style.height = 96 + "px";
    header.classList.add("top-anchor");
    header.classList.remove("stick-header");
    header.style.padding = 2 + "rem";
    header.style.marginTop = 0 + "px";
    topbar.style.height = 150 + "px";
    illu_index.style.marginTop = 0 + "px";
  }
}

var modal = document.getElementById("myModal");

function modalheight() {
  var hheight = header.getAttribute("class");
  if (hheight == "sticky stick-header") {
    //changements
    // console.log(hheight);
    modal.style.top = 96 + "px";
  } else {
    //enlever les changements
    modal.style.top = 202 + "px";
  }
}

// Fix pour ancrage avec sticky header
var liste_liens = header.getElementsByClassName("ancre");
var i_anchor = ["section1", "section2"];

liste_liens[0].addEventListener('click', function() {
  check_height();
});

liste_liens[1].addEventListener('click', function() {
  check_height();
});

function check_height() {
  var hheight = header.getAttribute("class");
  var i;
  if (hheight == "sticky stick-header") {
    //changement hauteur ancre
    for (i = 0; i < i_anchor.length; i++) {
      document.getElementById(i_anchor[i]).style.height = 96 + "px";
      document.getElementById(i_anchor[i]).style.marginTop = "-96px";
    }
  } else {
    for (i = 0; i < i_anchor.length; i++) {
      document.getElementById(i_anchor[i]).style.height = 202 + "px";
      document.getElementById(i_anchor[i]).style.marginTop = "-202px";
    }
  }
}


// ===== Menu responsive =====

// Bouton sur header

var rmenu = document.getElementById("menu-responsive");
var mcont = document.getElementById("main");
var moverlay = document.getElementById("m-overlay");

function openNav() {
  if (rmenu.style.display === "block") {
    rmenu.style.display = "none";
    mcont.style.marginLeft = 0 + "px";
    moverlay.classList.remove("o-visible");
  } else {
    rmenu.style.display = "block";
    mcont.style.marginLeft = 250 + "px";
    moverlay.classList.add("o-visible");
  }
}

// Croix sur menu
function closeNav() {
  rmenu.style.display = "none";
  mcont.style.marginLeft= "0";
  moverlay.classList.remove("o-visible");
}
