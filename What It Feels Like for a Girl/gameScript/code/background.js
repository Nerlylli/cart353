const game = document.getElementById("game-container");
const room = document.getElementById("room");
const background = document.getElementById("background");
// individual objects
const door = document.getElementById("door");
const livingDoor = document.getElementById("livingDoor")

// ROOM NAVIGATION
const rooms = [
    {
        name: "bedroom",
        image: "../assets/images/rooms/HOME/bedroom/Pro_Bedroom.png",
        door: true
    },

    {
        name: "living Area",
        image: "../assets/images/rooms/HOME/livingspace/LivingSpace_Morning.png",
        door: false
    }
];

let currentRoom = 0;
let cameraX = 0;
const speed = 20;


// camera
function getMaxScroll() {
    return Math.max(
        0,
        room.offsetWidth - game.clientWidth
    );
}

function updateCamera() {
    const maxScroll = getMaxScroll();

    cameraX = Math.max(
        0,
        Math.min(cameraX, maxScroll)
    );

    room.style.left = -cameraX + "px";
}

function changeRoom(roomIndex) {
    currentRoom = roomIndex

    // it will change the background
    background.src = rooms[currentRoom].image;

    cameraX = 0;
    updateCamera();

    // door.style.display = rooms[currentRoom].door ? "block" : "none";
    // respective doors will display when in respective rooms
    door.style.display = currentRoom === 0 ? "block" : "none";
    livingDoor.style.display = currentRoom === 1 ? "block" : "none";
}

door.addEventListener("click", function () {
    if (currentRoom === 0) {
        changeRoom(1);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.target.matches("input, textarea, select")) {
        return;
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        cameraX += speed;
        updateCamera();
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        cameraX -= speed;
        updateCamera();
    }

});

// GAME
background.onload = function () {
    cameraX = 0;
    updateCamera();
};

// background.src = rooms[currentRoom].image;
window.addEventListener("resize", updateCamera);

// bedroom door leads to the living area
function openLivingArea() {
    window.location.href = "#livingArea"
}
