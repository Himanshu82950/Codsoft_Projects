// JavaScript code for any interactivity

// Example: Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // You can add code here to handle form submission, e.g., sending data to a server
    // For now, we'll just display an alert
    alert('Form submitted!');
});
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Smooth scrolling for menu items
    $('.navbar .menu li a').click(function (e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        var offset = $(targetId).offset().top;

        $('html, body').animate({
            scrollTop: offset
        }, 1000); // You can adjust the animation duration (in milliseconds) as needed

        // Adding a class to the clicked menu item for active styling
        $('.navbar .menu li a').removeClass('active');
        $(this).addClass('active');
    });
});
const fetchdata = require("fetch");
async function getText(file) {
    let myObject = await fetch(resume.pdf);
    let myText = await myObject.text();
    myDisplay(myText);
  }
  const hireme = document.getElementsByClassName("btn");
  hireme.addEventListener("click",getText);