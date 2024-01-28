function showqv(idqv) {
  document.getElementById("quickview" + idqv).classList.remove("hidden");
  document.getElementById("quickview" + idqv).classList.add("absolute");

  document.getElementById("love" + idqv).classList.remove("hidden");
  document.getElementById("love" + idqv).classList.add("absolute");
}

function hideqv(idqv) {
  document.getElementById("quickview" + idqv).classList.add("hidden");
  document.getElementById("quickview" + idqv).classList.remove("absolute");

  document.getElementById("love" + idqv).classList.add("hidden");
  document.getElementById("love" + idqv).classList.remove("absolute");
}

function showlove(idl) {
  document.getElementById("imglove" + idl).src = "src/img/love-badge2.png";
}
function hidelove(idl) {
  document.getElementById("imglove" + idl).src = "src/img/love-badge.png";
}

function krjover(idk) {
  document.getElementById("krj" + idk).classList.remove("-mb-[6px]");
  document.getElementById("krj" + idk).classList.add("-mb-[4px]");
}
function krjout(idk) {
  document.getElementById("krj" + idk).classList.add("-mb-[6px]");
  document.getElementById("krj" + idk).classList.remove("-mb-[4px]");
}
