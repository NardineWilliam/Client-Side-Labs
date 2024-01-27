function Login() {
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();

  document.getElementById("login-message").innerHTML = "";

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(username)) {
    displayErrorMessage("Invalid email format");
    return;
  }

  // Validate password
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    displayErrorMessage(
      `Invalid password format. Password should: 1-contain at least: -one lowercase letter -one uppercase letter -one number 2-be at least 8 characters long.`
    );

    displayErrorMessage(passwordErrorMessage);
    return;
  }

  displayValidMessage();
}

function displayErrorMessage(message) {
  var messageElement = document.getElementById("login-message");
  messageElement.textContent = message;
  messageElement.style.color = "red";
}

function displayValidMessage(message) {
  var messageElement = document.getElementById("login-message");
  messageElement.textContent = "Correct email and password format!";
  messageElement.style.color = "green";
}
