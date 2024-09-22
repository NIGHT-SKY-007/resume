//JavaScript to toggle menu visibility
document.getElementById("hamburger").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    var img = document.querySelector(".image");
    menu.classList.toggle("active");
    img.classList.toggle("hide-icons");
});

const links = document.querySelectorAll('.menu a');
links.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.menu').classList.remove('active');
    var img = document.querySelector(".image");
    img.classList.toggle("hide-icons");
  });
});

//theme
let theme = document.getElementById('theme');
theme.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  document.querySelector('nav').classList.toggle('dark');
  document.querySelectorAll('.container').forEach(container => {
    container.classList.toggle('dark');
  });
});

  // Define the media query
const mediaQuery = window.matchMedia("(max-width: 768px)");
let clickEventListener = null;
let isHamburgerClicked = false;

if (mediaQuery.matches) {
  const hamburger = document.getElementById("hamburger");
  hamburger.addEventListener("click", function() {
    isHamburgerClicked = true;
    clickEventListener = function(event) {
      if (isHamburgerClicked) {
        ClickOut(event);
      }
    };
    document.addEventListener("click", clickEventListener);
  });
}

mediaQuery.addEventListener("change", function() {
  if (mediaQuery.matches) {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", function() {
      isHamburgerClicked = true;
      clickEventListener = function(event) {
        if (isHamburgerClicked) {
          ClickOut(event);
        }
      };
      document.addEventListener("click", clickEventListener);
    });
  }
});

function ClickOut(event) {
  console.log("ClickOut function called");
  const menu = document.getElementById("menu");
  const hamburger = document.getElementById("hamburger");
  const img = document.querySelector(".image");

  if (!menu.contains(event.target) && !hamburger.contains(event.target) && menu.classList.contains("active")) {
    console.log("Click was outside the menu and hamburger elements");
    menu.classList.remove("active");
    img.classList.toggle("hide-icons");
    isHamburgerClicked = false;
    document.removeEventListener("click", clickEventListener);
  }
} // end of media query click out

// Get all input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const ageInput = document.getElementById('age');
const messageInput = document.getElementById('message');
const confirmInput = document.getElementById('confirm');

// Add event listeners to input fields
nameInput.addEventListener('keyup', validateName);
emailInput.addEventListener('keyup', validateEmail);
numberInput.addEventListener('keyup', validateNumber);
ageInput.addEventListener('keyup', validateAge);

// Validation functions
function validateName() {
    const name = nameInput.value.trim();
    const nameFeedback = document.getElementById('name-feedback');
    const nameSuccess = document.getElementById('name-success');
    const nameFailure = document.getElementById('name-failure');

    if (name.length < 3) {
        nameFeedback.innerText = 'Name should be at least 3 characters long';
        nameSuccess.style.display = 'none';
        nameFailure.style.display = 'inline-block';
    } else {
        nameFeedback.innerText = '';
        nameSuccess.style.display = 'inline-block';
        nameFailure.style.display = 'none';
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailFeedback = document.getElementById('email-feedback');
    const emailSuccess = document.getElementById('email-success');
    const emailFailure = document.getElementById('email-failure');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailFeedback.innerText = 'Invalid email format';
        emailSuccess.style.display = 'none';
        emailFailure.style.display = 'inline-block';
    } else {
        emailFeedback.innerText = '';
        emailSuccess.style.display = 'inline-block';
        emailFailure.style.display = 'none';
    }
}

function validateNumber() {
    const number = numberInput.value.trim();
    const numberFeedback = document.getElementById('number-feedback');
    const numberSuccess = document.getElementById('number-success');
    const numberFailure = document.getElementById('number-failure');

    if (number.length !== 10 || isNaN(number)) {
        numberFeedback.innerText = 'Invalid mobile number';
        numberSuccess.style.display = 'none';
        numberFailure.style.display = 'inline-block';
    } else {
        numberFeedback.innerText = '';
        numberSuccess.style.display = 'inline-block';
        numberFailure.style.display = 'none';
    }
}

function validateAge() {
    const age = ageInput.value.trim();
    const ageFeedback = document.getElementById('age-feedback');
    const ageSuccess = document.getElementById('age-success');
    const ageFailure = document.getElementById('age-failure');

    if (age !== '' && !isNaN(age) && (age<0 || age>120)) {
        ageFeedback.innerText = 'Invalid age';
        ageSuccess.style.display = 'none';
        ageFailure.style.display = 'inline-block';
    } else {
        ageFeedback.innerText = '';
        ageSuccess.style.display = 'inline-block';
        ageFailure.style.display = 'none';
    }
}

// Form submission validation
document.querySelector('form').addEventListener('submit', (e) => {
    if (!nameInput.value.trim() || !emailInput.value.trim() || !numberInput.value.trim() || !confirmInput.checked) {
        e.preventDefault();
        alert('Please fill in all required fields and agree to share your information');
    }
});


$(document).ready(function() {
  // JavaScript to toggle menu visibility
  // document.getElementById("hamburger").addEventListener("click", function() {
  //   var menu = document.getElementById("menu");
  //   var img = document.querySelector(".image");
  //   menu.toggleClass("active");
  //   img.toggleClass("hide-icons");
  // });



  // jQuery code to animate menu items
  $('#menu a').click(function(event) {
  var targetId = $(this).attr('href');
  if ($('body').hasClass('dark')) {
    $(targetId).animate({
      backgroundColor: 'rgba(255, 255, 255, 0.4)' 
    }, 1000, function() { 
      
      $(this).animate({
        backgroundColor: '#000000' 
      }, 1000);
    });
  } else {
    $(targetId).animate({
      backgroundColor: '#9c9c9c' 
    }, 1000, function() { 
      // fade out after 3 seconds
      $(this).animate({
        backgroundColor: 'rgb(245, 234, 234)' 
      }, 1000);
    });
  }
});

  // Add a toggle effect to the education list items
  $('#education li').click(function() {
    $(this).find('p').toggle();
    $(this).toggleClass('active')
  });

  // jQuery code to toggle project descriptions
  $('.proj').click(function(){
    var $this = $(this);
    $this.children('p:first').toggle('slow');
    $this.siblings().children('p:first').each(function(){
      if($(this).is(':visible')){
        $(this).hide('slow');
      }
    });
  });
});