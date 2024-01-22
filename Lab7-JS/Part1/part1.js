function Login() {

    var login = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    };

    if (login.username === 'admin' && login.password === '123') {
      WelcomeMessage();
    } else {
      NotRegisteredMessage();
    }
  }

  function WelcomeMessage() {
    var messageElement = document.getElementById('login-message');
    messageElement.textContent = 'Welcome!';
    messageElement.style.color = 'green';
  }

  function NotRegisteredMessage() {
    var messageElement = document.getElementById('login-message');
    messageElement.textContent = 'Not registered!';
    messageElement.style.color = 'red';
  }