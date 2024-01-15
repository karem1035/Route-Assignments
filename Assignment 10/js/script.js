// Login vars
const loginMail = document.getElementById('loginMail');
const loginPass = document.getElementById('loginPass');

// SignUpVars
const signUpName = document.getElementById('signUpName');
const signUpMail = document.getElementById('signUpMail');
const signUpPassword = document.getElementById('signUpPassword');
const signUpPasswordConfirm = document.getElementById('signUpPasswordConfirm');
const note = document.getElementById('note');

// Buttons
const signUpButton = document.getElementById('signUpButton');
const logInButton = document.getElementById('logInButton');

const loggedIn = document.getElementById('loggedIn');

const users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users);

const emailAlert = document.getElementById('emailAlert');
const tbody = document.getElementById('tbody');
const passwordAlert = document.getElementById('passwordAlert');

// Regular Expressions
const nameRegex = /^[a-zA-Z]{3,5}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^[0-9]{6,18}$/;

/**
 * Handles user registration by validating input fields and storing user information.
 */
function signUP() {
  // Get the selected gender value
  const gender = document.querySelector('input[name=gender]:checked').value;

  // Create a user object with input values
  const user = {
    name: signUpName.value,
    email: signUpMail.value,
    password: signUpPassword.value,
    confirmPassword: signUpPasswordConfirm.value,
    note: note.value,
    gender: gender,
  };

  // Log the value of the signUpPassword input for testing/debugging purposes
  console.log(signUpPassword.value);

  // Validate the 'name' input field
  if (!valid(nameRegex, signUpName)) {
    // Handle invalid name
    return;
  }

  // Validate the 'email' input field
  if (!valid(emailRegex, signUpMail)) {
    // Handle invalid email
    return;
  }

  // Check if email already exists in the users array
  if (emailCheck(signUpMail.value)) {
    signUpMail.classList.add('is-invalid');
    emailAlert.classList.remove('d-none');
    return;
  } else {
    // If email is unique, hide the error message and remove 'is-invalid' class
    emailAlert.classList.add('d-none');
    signUpMail.classList.remove('is-invalid');
  }

  // Validate the 'password' input field and the password confirmation
  if (!valid(passRegex, signUpPassword) || !passwordConfirm()) {
    // Handle invalid password or password confirmation
    return;
  }

  // All validations passed, proceed with user registration
  users.push(user);

  // Clear input fields after successful registration
  clearSignUp();
  clearLogIn();

  // Save updated user data to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Now you can use the 'user' object as needed or perform any additional actions
}

/**
 * Attempts to log in a user based on provided email and password.
 * @returns {boolean} - True if the login is successful, false otherwise.
 */
function login() {
  let foundUser = false;

  // Validate the email format
  if (!emailRegex.test(loginMail.value)) {
    loginMail.classList.add('is-invalid');
    return false; // Exit the function if the email format is invalid
  }

  // Hide the password alert
  passwordAlert.classList.add('d-none');

  // Remove 'is-invalid' class if the email format is valid
  loginMail.classList.remove('is-invalid');

  // Iterate through the users array to find a matching email
  for (let i = 0; i < users.length; i++) {
    if (loginMail.value === users[i].email) {
      foundUser = true;
      loginMail.classList.add('is-valid');

      // Check if the provided password matches the stored password
      if (loginPass.value === users[i].password) {
        // Successful login
        display(i); // You might want to define and implement the 'display' function
        loginPass.classList.remove('is-invalid');
        loginMail.classList.remove('is-valid');

        clearLogIn(); // Clear input fields after successful login
        return true; // Exit the function after successful login
      } else {
        // Incorrect password
        loginPass.classList.add('is-invalid');
        passwordAlert.classList.remove('d-none');
        return false; // Exit the function if the password is wrong
      }
    }

    // Reset classes if the current user is not a match
    loginMail.classList.remove('is-valid');
    loginMail.classList.add('is-invalid');
  }

  // If no user with the provided email is found
  if (!foundUser) {
    // You can handle this case or add additional logic if needed
  }

  return false; // Exit the function if no user with the provided email is found
}

/**
 * Display user info after login.
 * @param {number} index - The index of the user in the 'users' array.
 */
function display(index) {
  // Update the HTML content of the 'tbody' element with user information
  tbody.innerHTML = `<tr>
    <th class="text-secondary fw-bold" scope="row">Name:</th>
    <td class="text-dark fw-medium">${users[index].name}</td>
  </tr>
  <tr>
    <th class="text-secondary fw-bold" scope="row">Email:</th>
    <td class="text-dark fw-medium">${users[index].email}</td>
  </tr>
  <tr>
    <th class="text-secondary fw-bold" scope="row">Gender:</th>
    <td class="text-dark fw-medium">${users[index].gender}</td>
  </tr>
  <tr>
    <th class="text-secondary fw-bold" scope="row">Note:</th>
    <td class="text-dark fw-medium">${users[index].note}</td>
  </tr>`;

  // Show the 'loggedIn' element by removing the 'd-none' class
  loggedIn.classList.remove('d-none');
}

/**
 * Log out the user by hiding the 'loggedIn' element.
 */
function logOut() {
  // Hide the 'loggedIn' dive by adding the 'd-none' class
  loggedIn.classList.add('d-none');
}

/**
 * Clears the values of the input fields used in the signup form and resets their styling.
 */
function clearSignUp() {
  // Clear the values of the input fields
  signUpName.value = '';
  signUpMail.value = '';
  signUpPassword.value = '';
  signUpPasswordConfirm.value = '';
  note.value = '';

  // Hide the email alert by adding the 'd-none' class
  emailAlert.classList.add('d-none');

  // Remove 'is-valid' and 'is-invalid' classes from the input fields
  signUpName.classList.remove('is-valid');
  signUpMail.classList.remove('is-valid');
  signUpName.classList.remove('is-invalid');
  signUpMail.classList.remove('is-invalid');
  signUpPassword.classList.remove('is-valid');
  signUpPasswordConfirm.classList.remove('is-valid');
}

/**
 * Clears the values of the input fields used in the login form.
 */
function clearLogIn() {
  // Clear the values of the login form input fields
  loginMail.value = '';
  loginPass.value = '';
}

/**
 * Validates an input element's value against a regular expression.
 * Adds or removes 'is-valid' and 'is-invalid' classes based on the validation result.
 *
 * @param {RegExp} regex - Regular expression for validation.
 * @param {HTMLInputElement} element - Input element to be validated.
 * @returns {boolean} - True if the input value passes the validation, false otherwise.
 */
function valid(regex, element) {
  // Check if the value of the element matches the provided regular expression
  if (regex.test(element.value)) {
    // Value matches, remove 'is-invalid' class and add 'is-valid' class
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');

    // Return true indicating a successful validation
    return true;
  } else {
    // Value does not match, add 'is-invalid' class and remove 'is-valid' class
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');

    // Return false indicating a failed validation
    return false;
  }
}

/**
 * Compares the values of the password and password confirmation input fields.
 * Adds validation classes to the password confirmation field based on the match result.
 * Logs the value of the password input field for testing/debugging purposes.
 *
 * @returns {boolean} - True if the password and password confirmation match, false otherwise.
 */
function passwordConfirm() {
  // Check if the values of the password and password confirmation fields match
  if (signUpPassword.value !== signUpPasswordConfirm.value) {
    // Values do not match, add 'is-invalid' class and remove 'is-valid' class
    signUpPasswordConfirm.classList.add('is-invalid');
    signUpPasswordConfirm.classList.remove('is-valid');

    // Return false indicating a mismatch
    return false;
  } else {
    // Values match, add 'is-valid' class and remove 'is-invalid' class
    signUpPasswordConfirm.classList.add('is-valid');
    signUpPasswordConfirm.classList.remove('is-invalid');

    // Log the value of the password input field for testing/debugging purposes
    console.log('Password confirmed:', signUpPassword.value);

    // Return true indicating a match
    return true;
  }
}

/**
 * Checks if the given email is present in the array of users.
 *
 * @param {string} mail - The email to be checked.
 * @returns {boolean} - True if the email is found, false otherwise.
 */
function emailCheck(mail) {
  // Loop through the array of users
  for (let i = 0; i < users.length; i++) {
    // Check if the given email matches any user's email
    if (mail === users[i].email) {
      // Return true if the email is found
      return true;
    }
  }

  // Return false if the email is not found in any user's email
  return false;
}

signUpMail.addEventListener('change', function () {
  if (emailRegex.test(signUpMail.value)) {
    signUpMail.classList.remove('is-invalid');
    signUpMail.classList.add('is-valid');
    return;
  }
  signUpMail.classList.remove('is-valid');

  signUpMail.classList.add('is-invalid');
});

signUpName.addEventListener('change', function () {
  if (nameRegex.test(signUpName.value)) {
    signUpName.classList.remove('is-invalid');
    signUpName.classList.add('is-valid');
    return;
  }
  signUpName.classList.remove('is-valid');

  signUpName.classList.add('is-invalid');
});

signUpPasswordConfirm.addEventListener('change', function () {
  if (signUpPasswordConfirm.value === signUpPassword.value) {
    signUpPasswordConfirm.classList.remove('is-invalid');
    signUpPasswordConfirm.classList.add('is-valid');
    return;
  }
  signUpPasswordConfirm.classList.remove('is-valid');

  signUpPasswordConfirm.classList.add('is-invalid');
});
