function initProgressBar() {
	document.getElementById("rp-bar").innerHTML = '<div id="rp-read"></div><div id="rp-unread"></div>';
	barHeight = 5;
	animArea = 30;
	barInc = animArea / barHeight;
	doc = document.documentElement;
	bar = document.getElementById("rp-bar");
	start = document.getElementById("rp-start");
	start = start == undefined ? 0 : start.offsetTop;
	end = document.getElementById("rp-end");
	end = end == undefined ? (document.height !== undefined ? document.height : document.body.offsetHeight) : end.offsetTop;
	end -= window.innerHeight;
	range = end - start;
	read = document.getElementById("rp-read");
	unread = document.getElementById("rp-unread");
	updateProgressBar();
}
function updateProgressBar() {
	scroll = (window.pageYOffset || doc.scrollTop);
	offset = scroll - start;
	actual = offset/range;
	actual = actual > 1 ? 100 : (actual < 0 ? 0 : actual*100);
	read.style.width = actual + "%";
	unread.style.width = (100-actual) + "%";
	if (actual == 0 || actual == 100)
		bar.style.display = 'none';
	else {
		bar.style.display = 'block';
		if (offset < animArea)
		bar.style.height =  offset/barInc + "px";
		else {
			ending = end - scroll;
			if (ending < animArea)
				bar.style.height =  (ending/barInc) + "px";
			else 
				bar.style.height =  barHeight + "px";
		}
	}
	setTimeout(updateProgressBar,20);
}
document.addEventListener("DOMContentLoaded", function(event) { 
  initProgressBar();
});
