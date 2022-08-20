let halo = document.getElementById("greeting");
let yo = document.getElementById("name");
let fb = document.getElementById("facebook");
let gh = document.getElementById("github");
let ig = document.getElementById("instagram");
let share = document.getElementById("share");
let prof = document.getElementById("profile");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    halo.style.opacity = 1;
    prof.style.opacity = 1;
  }, 500);
  this.setTimeout(function () {
    yo.style.opacity = 1;
  }, 1500);
  this.setTimeout(function () {
    fb.style.opacity = 1;
  }, 2000);
  this.setTimeout(function () {
    gh.style.opacity = 1;
  }, 2500);
  this.setTimeout(function () {
    ig.style.opacity = 1;
  }, 3000);
  this.setTimeout(function () {
    share.style.opacity = 1;
  }, 3500);
});
