// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {});

// Your jQuery code goes here
$(function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("menu");
  const body = document.querySelector('body');


  hamburger.addEventListener("click", function () {
    this.classList.toggle("active"); 
    menu.classList.toggle("show"); 
    if(this.classList.contains("active")) {
      body.classList.add("over-hidden");
    } else {
      body.classList.remove("over-hidden");
    }
  });
});
