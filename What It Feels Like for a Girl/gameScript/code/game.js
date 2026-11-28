
const dialogueBox = document.querySelector(".dialogue");
const speakerBox = document.querySelector(".sName");

// tutorial : https://www.youtube.com/watch?v=-v36WcbDs9k
// changed a bit
function getCurrentTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}.${minutes}${period}`;
}


const dialogues = [
    {
        speaker: "???",
        text: "*LOUD BOOM*"
    },
    {
        speaker: "???",
        text: "*INAUDIBLE SCREAMING*"
    },
    {
        speaker: "ME",
        text: "*I slowly open my eyes*"
    },
    {
        speaker: "ME",
        text: "What is going on..?"
    },
    {
        speaker: "ME",
        text: "Ugh!! Are mom and dad fighting again?"
    },
    {
        speaker: "ME",
        text: `It's ${getCurrentTime()}, gosh!`
    }

];

let currentDialogue = 0;

let typingSpeed = 35;
let typingInterval = null;
let charIndex = 0;
let isTyping = false;

// const dialogueText = document.getElementById("dialogueText");
// const speakerName = document.getElementById("speakerName");

function showDialogue() {
    dialogueText.textContent = dialogues[currentDialogue].text;
    speakerName.textContent = dialogues[currentDialogue].speaker;

    clearInterval(typingInterval);
    charIndex = 0;
    isTyping = true;
    const dialogue = dialogues[currentDialogue];
    // speakerName.textContent = dialogue.speaker;
    dialogueText.textContent = "";
    typingInterval = setInterval(function () {

        dialogueText.textContent += dialogue.text.charAt(charIndex);

        charIndex++;

        // Stop when finished
        if (charIndex >= dialogue.text.length) {
            clearInterval(typingInterval);
            isTyping = false;
        }

    }, typingSpeed);

}

// NEXT DIALOGUE
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
    }
    else {
        dialogueBox.style.display = "none";
        speakerBox.style.display = "none";
    }

}

function previousDialogue() {
    if (currentDialogue > 0) {
        currentDialogue--;
        showDialogue();
    }
}

document.addEventListener("keydown", function (event) {

    // space bar = next
    if (event.code === "Space") {

        event.preventDefault();

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }

        nextDialogue();
    }
    // left arrow = previous
    if (event.code === "ArrowLeft") {

        event.preventDefault();

        if (event.repeat) return;

        previousDialogue();
    }
});

showDialogue();
