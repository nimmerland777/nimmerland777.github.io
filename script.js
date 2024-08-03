// script.js
document.getElementById('submitBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const result = document.getElementById('result');
    const hint = document.getElementById('hint');
    
    if(username.trim() === '') {
        result.textContent = "Please enter your name.";
    } else if(username.toLowerCase() === 'nimmerland') {
        result.textContent = `Welcome back, ${username}! Check the console for a surprise.`;
        hint.style.display = 'none';
        console.log("Congratulations! Here's your flag: flag{follow me on x.com/prplbully}");
    } else {
        result.textContent = `Hello, ${username}! Try to find the hidden secret.`;
        hint.style.display = 'block';
    }
});

document.getElementById('hintLink').addEventListener('click', function() {
    alert("Sometimes, the console holds more secrets than you can imagine.");
    document.getElementById('message').style.display = 'block';
    console.log("Keep looking, you're on the right track.");
});

