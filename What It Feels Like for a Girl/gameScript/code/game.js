const game = document.getElementById("game-container");
const room = document.getElementById("room");

// ROOM NAVIGATION
const rooms = [
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

background.src = rooms[currentRoom].image;
window.addEventListener("resize", updateCamera);
