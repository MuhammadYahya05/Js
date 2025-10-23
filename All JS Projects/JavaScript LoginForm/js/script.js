// login form start

document.getElementById('loginform').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (username === 'test' && password === 'test') {
        messageElement.textContent = 'Login successful';
        messageElement.style.color = 'green';

        setTimeout(function () {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        messageElement.textContent = 'Invalid username or password';
        messageElement.style.color = 'red';
    }
});

// login form end