
const dialogueBox = document.querySelector(".dialogue");
const speakerBox = document.querySelector(".sName");

const dialogueText = document.getElementById("dialogueText");
const speakerName = document.getElementById("speakerName");

// visual novel animation
let typingSpeed = 35;
let typingInterval = null;
let charIndex = 0;
let isTyping = false;

// current
let dialogues = [];
let currentDialogue = 0;


// display
function showDialogue() {

    clearInterval(typingInterval);

    const dialogue = dialogues[currentDialogue];

    speakerName.textContent = dialogue.speaker;
    dialogueText.textContent = "";

    charIndex = 0;
    isTyping = true;

    typingInterval = setInterval(function () {

        dialogueText.textContent += dialogue.text.charAt(charIndex);

        charIndex++;

        if (charIndex >= dialogue.text.length) {
            clearInterval(typingInterval);
            isTyping = false;
        }

    }, typingSpeed);
}


// next
function nextDialogue() {

    if (isTyping) {

        clearInterval(typingInterval);

        dialogueText.textContent = dialogues[currentDialogue].text;

        isTyping = false;
        return;
    }

    if (currentDialogue < dialogues.length - 1) {

        currentDialogue++;
        showDialogue();

    } else {

        hideDialogue();

    }
}

// previous
function previousDialogue() {

    if (currentDialogue > 0) {

        currentDialogue--;
        showDialogue();

    }
}

// hide
function hideDialogue() {

    clearInterval(typingInterval);
    isTyping = false;

    dialogueBox.style.display = "none";
    speakerBox.style.display = "none";
}


// start
function startDialogue(newDialogues) {

    clearInterval(typingInterval);

    dialogues = newDialogues;
    currentDialogue = 0;

    dialogueBox.style.display = "block";
    speakerBox.style.display = "block";

    showDialogue();
}

// keyboard
document.addEventListener("keydown", function (event) {

    if (event.target.matches("input, textarea, select")) {
        return;
    }

    if (event.code === "Space") {

        event.preventDefault();

        if (!event.repeat) {
            nextDialogue();
        }

    }

    if (event.code === "ArrowLeft") {

        event.preventDefault();

        if (!event.repeat) {
            previousDialogue();
        }

    }

});

startDialogue(bedDialogues);
