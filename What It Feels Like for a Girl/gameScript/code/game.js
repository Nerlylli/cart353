const game = document.getElementById("game-container");
const room = document.getElementById("room");

// ROOM NAVIGATION
const rooms = [
    {  // 0 - BEDROOM
        name: "Bedroom",
        image: "../assets/images/rooms/HOME/bedroom/Pro_Bedroom.png",
        exits: [
            { to: 1, x: 84, y: 38, enterAt: "left" }
        ]
    },

    {   // 1 - LIVING SPACE
        name: "Living Space",
        image: "../assets/images/rooms/HOME/livingspace/LivingSpace_Morning.png",
        exits: [
            { to: 0, x: 10, y: 40, enterAt: "right" },
            { to: 2, x: 90, y: 40, enterAt: "left" }
        ]
    },

    {    // 2 - HOME ENTRANCE
        name: "Home Entrance",
        image: "../assets/images/rooms/HOME/entrance/entrance_home.png",
        exits: [
            { to: 1, x: 10, y: 40, enterAt: "right" },
            { to: 3, x: 90, y: 40, enterAt: "left" }
        ]
    },

    {    // 3 - SCHOOL ENTRANCE
        name: "School Entrance",
        image: "../assets/images/rooms/SCHOOL/entrance/entrance.png",
        exits: [
            { to: 2, x: 10, y: 40, enterAt: "right" },
            { to: 4, x: 90, y: 40, enterAt: "left" }
        ]
    },

    {   // 4 - HALLWAY
        name: "Hallway",
        image: "../assets/images/rooms/SCHOOL/hallway/hallway.png",
        exits: [
            // School entrance
            { to: 3, x: 38, y: 25, enterAt: "right" },

            // Bathroom
            { to: 5, x: 78, y: 38, enterAt: "right" },

            // Classroom
            { to: 6, x: 90, y: 38, enterAt: "left" }
        ]
    },

    {  // 5 - BATHROOM
        name: "Bathroom",
        image: "../assets/images/rooms/SCHOOL/bathroom/Bathroom.png",
        exits: [
            { to: 4, x: 97, y: 40, enterAt: "right" }
        ]
    },

    { // 6 - CLASSROOM
        name: "Classroom",
        image: "../assets/images/rooms/SCHOOL/classroom/Classroom.png",
        exits: [
            { to: 4, x: 97, y: 40, enterAt: "right" }
        ]
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

// CHANGE ROOM
function changeRoom(nextRoom, enterAt) {

    if (nextRoom < 0 || nextRoom >= rooms.length) {
        return;
    }

    currentRoom = nextRoom;

    background.onload = function () {
        requestAnimationFrame(function () {
            if (enterAt === "right") {
                cameraX = getMaxScroll();
            } else {
                cameraX = 0;
            }

            updateCamera();
        });

    };

    background.src = rooms[currentRoom].image;

    // Handle images already cached by browser
    if (background.complete && background.naturalWidth > 0) {
        background.onload();
    }

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
