document.addEventListener("DOMContentLoaded", function() {
    const hintElement = document.getElementById("hint");
    const encodedMessageElement = document.getElementById("encoded-message");
    const jsPuzzleElement = document.getElementById("js-puzzle");

    const secretCode = "hidden_code";
    const encodedText = "SGVsbG8gdGhlcmU="; // Base64 encoded "Hello there"
    const jsPuzzleSolution = 42; // Example solution for a JS-based puzzle

    function showHint(message) {
        hintElement.textContent = message;
    }

    function handleStage1() {
        const input1 = document.getElementById("input-1");
        const submit1 = document.getElementById("submit-1");
        
        submit1.addEventListener("click", () => {
            if (input1.value === secretCode) {
                document.getElementById("stage-1").style.display = 'none';
                document.getElementById("stage-2").style.display = 'block';
                showHint("Correct code! Proceed to the next stage.");
            } else {
                showHint("Incorrect code. Try inspecting the page source.");
            }
        });
    }

    function handleStage2() {
        const click2 = document.getElementById("click-2");
        const encodedTextElement = document.getElementById("encoded-text");
        const input2 = document.getElementById("input-2");
        const submit2 = document.getElementById("submit-2");

        click2.addEventListener("click", () => {
            encodedTextElement.textContent = encodedText;
            encodedMessageElement.style.display = 'block';
        });

        submit2.addEventListener("click", () => {
            const decodedMessage = atob(encodedText); // Decode Base64
            if (input2.value === decodedMessage) {
                document.getElementById("stage-2").style.display = 'none';
                document.getElementById("stage-3").style.display = 'block';
                showHint("Correct! Solve the JavaScript puzzle next.");
            } else {
                showHint("Incorrect decoding. Check the encoded message.");
            }
        });
    }

    function handleStage3() {
        const click3 = document.getElementById("click-3");
        const equationElement = document.getElementById("equation");
        const input3 = document.getElementById("input-3");
        const submit3 = document.getElementById("submit-3");

        click3.addEventListener("click", () => {
            const x = Math.floor(Math.random() * 10);
            const y = Math.floor(Math.random() * 10);
            equationElement.textContent = `${x} * ${y}`;
            jsPuzzleElement.style.display = 'block';
            window.puzzleAnswer = x * y; // Store solution in a global variable
        });

        submit3.addEventListener("click", () => {
            if (parseInt(input3.value) === window.puzzleAnswer) {
                // Show flag in alert popup
                alert("flag{follow_me_on_x.com/prplbully}");
                document.getElementById("stage-3").style.display = 'none';
                showHint("");
            } else {
                showHint("Incorrect answer. Solve the equation correctly.");
            }
        });
    }

    handleStage1();
    handleStage2();
    handleStage3();
});
