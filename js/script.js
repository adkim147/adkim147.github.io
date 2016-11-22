window.onload = function() {
	document.getElementById("emal").innerHTML = "adkim147&#64;pccsk12&#46;co&#109;";
	document.getElementById("emal").href = "mailto:adkim147@pccsk12.com";
};
window.setTimeout( function() {
	var sites = ["https://cdn.rawgit.com/adkim147/356d2a0066f1d51280d3b602a3a3a527/raw/def5c799fa4c4ba53a8b0120d987f544e5945c77/index.html", "https://ottersquad.github.io/", "https://pcep-html-club.github.io/"];
	var iframes = document.getElementsByTagName("iframe");
	for (i = 0; sites.length > i; i++) {
		iframes[i].src = sites[i];
	}
}, 1000);
