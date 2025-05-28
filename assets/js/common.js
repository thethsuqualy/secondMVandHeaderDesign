// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  // const hamburger = document.getElementById("hamburger");
  // const menu = document.getElementById("menu");
  // const body = document.querySelector("body");
  // hamburger.addEventListener("click", function () {
  //   this.classList.toggle("active");
  //   menu.classList.toggle("show");
  //   if (this.classList.contains("active")) {
  //     body.classList.add("over-hidden");
  //   } else {
  //     body.classList.remove("over-hidden");
  //   }
  // });
  // Header end


  // tab setart
  // const btns = document.querySelectorAll(".notice-button ");
  // btns.forEach(function(btn) {
  //   btn.addEventListener("click", function(e) {
  //     e.preventDefault();
  //     let filter = this.getAttribute("data-btn");
  //     btns.forEach(function(btn) {
  //       btn.classList.remove("active");
  //     });
  //     this.classList.add("active");
  //     document.querySelectorAll(".content-container").forEach(function(content) {
  //       content.classList.remove("show");
  //     })
  //     const matchBox = document.querySelector('.content-container[data-content="' + filter + '"]');
  //      matchBox.classList.add('show');
  //   })
  // });
  // tab end

  // const btns = document.querySelectorAll(".notice-button");
  // btns.forEach(function (btn) {
  //   btn.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     let filter = this.getAttribute("data-btn");
  //     btns.forEach(function (btn) {
  //       btn.classList.remove("active");
  //     });
  //     btn.classList.add("active");
  //     const contents = document.querySelectorAll(".content-container");
  //     contents.forEach(function (content) {
  //       content.classList.remove("show");
  //     });
  //     document.querySelector('.content-container[data-content="' + filter + '"]').classList.add("show");
  //   });
  // });
 
});

// Your jQuery code goes here
$(function () {
  $("#hamburger").click(function () {
    $(this).toggleClass("active");
    $("#menu").toggleClass("show");

    if ($(this).hasClass("active")) {
      $("body").addClass("over-hidden");
    } else {
      $("body").removeClass("over-hidden");
    }
  });

  $(".notice-button").click(function (event) {
    event.preventDefault();
    let filter = $(this).data("btn");

    $(".notice-button").removeClass("active");
    $(this).addClass("active");

    $(".content-container").removeClass("show");
    $('.content-container[data-content="' + filter + '"]').addClass("show");
  });
});
