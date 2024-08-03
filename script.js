// script.js
document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const result = document.getElementById('result');
    if(username.toLowerCase() === 'nimmerland') {
        result.textContent = `Welcome back, ${username}! Check the console for a surprise.`;
        console.log("Congratulations! Here's your flag: FLAG-1234-ABCD");
    } else if (username.trim() === '') {
        result.textContent = "Please enter your name.";
    } else {
        result.textContent = `Hello, ${username}! Try to find the hidden secret.`;
    }
});

