"use strict";

// Selectors
const btnFeatures = document.querySelector("#btn-features");
const btnApi = document.querySelector("#btn-api");
const btnAboutUs = document.querySelector("#btn-us");
const btnPrice = document.querySelector("#btn-price");

const artFeatures = document.querySelector("#art-features");
const artPrice = document.querySelector("#art-price");
const artApi = document.querySelector("#art-api");
const artAboutUs = document.querySelector("#art-us");

const square = document.querySelector(".square");
const wrap = document.querySelector(".wrap");
const body = document.querySelector("body");

const positions = ["pos-features", "pos-api", "pos-us", "pos-price"];

// Clear the position of square (remove all classes)
function clearPosition() {
  positions.forEach(function (pos) {
    wrap.classList.remove(pos);
    square.classList.remove(pos);
    const articles = document.querySelectorAll("article");
    articles.forEach(function (article) {
      article.classList.add("hidden");
      article.classList.remove("show");
    });
  });
}

// Move everything to specified position
function moveToPos(posClass, article) {
  clearPosition();
  article.classList.remove("hidden");
  article.classList.add("show");
  wrap.classList.add(posClass);
  square.classList.add(posClass);
}

// Handlers
btnFeatures.addEventListener("click", function (e) {
  moveToPos("pos-features", artFeatures);
});

btnApi.addEventListener("click", function (e) {
  moveToPos("pos-api", artApi);
});

btnAboutUs.addEventListener("click", function (e) {
  moveToPos("pos-us", artAboutUs);
});

btnPrice.addEventListener("click", function (e) {
  moveToPos("pos-price", artPrice);
});

body.addEventListener("click", function (e) {
  if (e.target === body || e.target === square) {
    clearPosition();
  }
});
