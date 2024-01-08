
// /                              ANIMATION

function addBeautifulAnimation() {
  const elements = document.querySelectorAll('.beautiful-animation');
  elements.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.animation = 'beautifulEffect 1s infinite alternate';
    });
    element.addEventListener('mouseout', () => {
      element.style.animation = 'none';
    });
  });
}




// Function to toggle transition effect on specific elements
function addTransitionEffect() {
  const elements = document.querySelectorAll('.transition-effect');
  elements.forEach(element => {
    element.addEventListener('mouseover', () => {
      element.style.transform = 'scale(1.1)';
    });
    element.addEventListener('mouseout', () => {
      element.style.transform = 'scale(1)';
    });
  });
}

// Invoke the functions when the window loads
window.onload = function () {
  addBeautifulAnimation();
  addTransitionEffect();
  // Initialize particle animation if using a particle library
};






//                                    COLLAPSEABLE BUTTONS
function toggleList(id) {
  var list = document.getElementById(id);
  if (list.style.display === 'none' || list.style.display === '') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}



//                                    ACCOUNT SECTION
function toggleAccountOptions() {
  var accountOptions = document.getElementById('accountOptions');
  if (accountOptions.style.display === 'none' || accountOptions.style.display === '') {
    accountOptions.style.display = 'block';
  } else {
    accountOptions.style.display = 'none';
  }
}




//                                      SIGN UP PAGE : 

// // Open the sign-up modal
// function openSignUp() {
//   document.getElementById('signupModal').style.display = 'block';
// }

// function closeSignUpModal() {
//   document.getElementById('signupModal').style.display = 'none';
// }


// // Sign-Up modal functions
// document.getElementById('signupForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get form values
//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const password2 = document.getElementById('password2').value;

//   // Validation checks
//   let isValid = true;
//   const validationMessage = [];

//   if (username.length <= 8) {
//       validationMessage.push('Username should be greater than 8 characters.');
//       isValid = false;
//   }

//   // Email validation using a simple regex
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//       validationMessage.push('Invalid email address.');
//       isValid = false;
//   }

//   if (password.length < 8) {
//       validationMessage.push('Password should be at least 8 characters.');
//       isValid = false;
//   }

//   if (password !== password2) {
//       validationMessage.push('Passwords do not match.');
//       isValid = false;
//   }

//   // Display validation messages or success message
//   const messageElement = document.getElementById('signupValidationMessage');
//   if (!isValid) {
//       // Show validation errors
//       messageElement.style.color = 'red';
//       messageElement.textContent = validationMessage.join('\n');
//   } else {
//       // Validation successful - proceed with account creation
//       messageElement.style.color = 'green';
//       messageElement.textContent = 'Your account has been created!';
//       // Add code here to submit the form or perform further actions
//       // Example: document.getElementById('signupForm').submit();
//   }
// });





// //                                      LOGIN PAGE

// function openLogin() {
//   document.getElementById('loginModal').style.display = 'block';
// }

// function closeLoginModal() {
//   document.getElementById('loginModal').style.display = 'none';
// }


// // Function to handle login form submission
// document.getElementById('loginForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   // Simulate login functionality (replace this with your actual login logic)
//   var username = document.getElementById('loginUsername').value;
//   var password = document.getElementById('loginPassword').value;

//   // Here, you can add your validation and authentication logic
//   if (username === 'example@mail.com' && password === 'password') {
//     document.getElementById('loginMessage').style.display = 'block';
//   } else {
//     alert('Invalid credentials. Please try again.'); // Replace with your preferred error handling (e.g., displaying an error message)
//   }
// });

// // LOGOUT PAGE
// function openLogout() {
//   document.getElementById('logoutForm').style.display = 'block';
// }

// function closeLogoutModal() {
//   document.getElementById('logoutForm').style.display = 'none';
// } 


// // Function to handle logout form submission
// document.getElementById('logoutFormContent').addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent the default form submission

//   var logoutEmail = document.getElementById('logoutEmail').value;
//   var confirmLogout = document.getElementById('confirmLogout').checked;

//   // Here, you can add your logout logic
//   // For this example, let's consider a simple check for demonstration purposes
//   if (logoutEmail === 'example@mail.com' && confirmLogout) {
//     alert('You have been logged out.'); // Replace with your logout functionality
//   } else {
//     alert('Invalid details for logging out.'); // Replace with your preferred error handling
//   }
// });





//                      COMMENT SECTION
function showCommentTextArea() {
  document.getElementById('emailBox').style.display = 'none';
  document.getElementById('commentBtn').style.display = 'none';
  document.getElementById('commentTextArea').style.display = 'block';
  document.getElementById('postBtn').style.display = 'block';
}

function postComment() {
  const email = document.getElementById('emailInput').value;
  const comment = document.getElementById('commentTextArea').value;

  // Here you might send the comment and email to your server using AJAX or fetch

  // For demonstration purposes, just showing the success message
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = 'We have received your comment. Thanks for the feedback!';
  responseMessage.style.opacity = '1';

  // Hide the textarea and post button slowly
  document.getElementById('commentTextArea').style.opacity = '0';
  document.getElementById('postBtn').style.opacity = '0';

  // Hide the message slowly
  setTimeout(function () {
    responseMessage.style.opacity = '0';
    document.getElementById('commentTextArea').style.display = 'none';
    document.getElementById('postBtn').style.display = 'none';
    document.getElementById('emailBox').style.display = 'block';
    document.getElementById('commentBtn').style.display = 'block';
  }, 2000);
}




// Function to accept cookies
function acceptCookies() {
  displayMessage("Thankyou For Sharing Your Cookie With Us!👍");
  hideCookiePopup();
}

// Function to decline cookies
function declineCookies() {
  displayMessage("Sharing Is Caring !🙂");
  hideCookiePopup();
}

// Function for eating the cookie without consent
function eatCookie() {
  displayMessage("How Was The Taste?🙂");
  hideCookiePopup();
}

// Function to display the message and fade it away
function displayMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "cookie-message";
  messageElement.textContent = message;
  document.body.appendChild(messageElement);

  setTimeout(function () {
    messageElement.style.opacity = "0";
    messageElement.style.transition = "opacity 1s ease-in-out";
    setTimeout(function () {
      messageElement.parentNode.removeChild(messageElement);
    }, 1000);
  }, 3000);
}

// Function to hide the cookie popup
function hideCookiePopup() {
  const cookiePopup = document.getElementById('cookiePopup');
  cookiePopup.style.display = 'none';
}

// Display the cookie popup when the page loads
window.onload = function () {
  displayCookiePopup();
};

// Function to display the cookie popup
function displayCookiePopup() {
  const cookiePopup = document.getElementById('cookiePopup');
  cookiePopup.style.display = 'block';
}


