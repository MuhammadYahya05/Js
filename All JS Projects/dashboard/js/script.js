// document.getElementById('loginform').addEventListener('submit',function (event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const messageElement = document.getElementById('message');

//     if (username === 'yahya' && password === 'password') {
//         messageElement.textContent = 'Login Successfull';
//         messageElement.style.color = 'green';

//         setTimeout(function () {
//             window.location.href = 'dashboard.html';
//         }, 2000);
//     } else{
//         messageElement.textContent = 'Login Unsuccessfull';
//         messageElement.style.color = 'red';
//     }
// });


document.getElementById('loginform').addEventListener('submit' ,function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (username === 'yahya' && password === 'password') {
        messageElement.textContent = 'Login Successfull';
        messageElement.style.color = 'green';

        setTimeout(function () {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        messageElement.textContent = 'Login Unsuccessfull';
        messageElement.style.color = 'red';
    }
    
});