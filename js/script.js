$(document).ready(function() {
  var navLinks = $('.navbar-nav .nav-link'); // Get all navigation links
  var logo = $('#logo'); // Get the logo element
  var navDropdown =  $('.navbar-toggler'); // get dropwdown
  var socialIcons = $('.social-icons ul li a'); // get social icons color
  var copyRight = $('.copy-right p');

  $(window).scroll(function() {
    var currentPosition = $(window).scrollTop(); // Get the current scroll position
    
    // Check if current scroll position is on an odd-numbered page
    if ((Math.floor(currentPosition / $(window).height()) + 1) % 2 !== 1) {
      // Add the 'nav-scroll' class to navigation links and the 'logo-scroll' class to the logo
      navLinks.addClass('nav-scroll');
      logo.addClass('logo-scroll');
      navDropdown.addClass('navDropDown-scroll');
      socialIcons.addClass('social-icons-scroll');
      copyRight.addClass('copy-right-scroll');
    } else {
      // Remove the 'nav-scroll' class from navigation links and the 'logo-scroll' class from the logo
      navLinks.removeClass('nav-scroll');
      logo.removeClass('logo-scroll');
      navDropdown.removeClass('navDropDown-scroll');
      socialIcons.removeClass('social-icons-scroll');
      copyRight.removeClass('copy-right-scroll');
    }
  });
});


$('.carousel').carousel();

$(document).ready(function() {
  var text = "Hi, I'm\nAdryan Sucipto";
  var textMobile = "Hi,\nI'm\nAdryan\nSucipto";
  var intervalId;

  function typeText() {
    var width = $(window).width();
    var animatedText = $('.animated-text');

    if (width <= 700) {
      animatedText.html(textMobile.replace(/\n/g, '<br>'));
    } else if (width > 700 && width < 1000) {
      animatedText.html(textMobile.replace(/\n/g, '<br>'));
    } else {
      animatedText.html(text.replace(/\n/g, '<br>'));
    }

    clearInterval(intervalId); // Clear the previous interval
    intervalId = setInterval(typeText, 1000); // Start a new interval for continuous animation
  }

  // Start the typing animation after a delay
  setTimeout(typeText, 1000);

  // Re-run the animation when the window is resized
  $(window).on('resize', typeText);
});

