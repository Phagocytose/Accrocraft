function castParallax() {
	$("#paxe").css('display','block');
	$("#altpaxe").css('opacity','0');
	$("#altpaxe").css('display','none');
	window.addEventListener("scroll", function(event){

		var top = this.pageYOffset;

		var layers = document.getElementsByClassName("layer");
		var layer, speed, yPos;
		for (var i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			var yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
		}
	});
}

function dispelParallax() {
	$("#altpaxe").css('display','block');
	$("#altpaxe").css('opacity','1');
	$("#paxe").css('display','none');
}

function castSmoothScroll() {
	$.srSmoothscroll({
		step: 80,
		speed: 300,
		ease: 'linear'
	});
}

var x = window.matchMedia("(max-width: 1900px)");
x.addListener(mquery); // Attach listener function on state changes

document.body.onload = mquery(x);

function mquery(x) {
  if (x.matches) { // If media query matches
    dispelParallax();
  } else {
    castParallax();
  }
}

var y = window.matchMedia("(min-width: 1901px)");
y.addListener(mquery2); // Attach listener function on state changes

function mquery2(y) {
  if (y.matches) { // If media query matches
    castParallax();
  } else {
    dispelParallax();
  }
}
