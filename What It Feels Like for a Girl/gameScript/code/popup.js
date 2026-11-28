// SABINE'S HELP 
// to drag the window
window.onload = function () {
    // const popup = document.querySelector("#popup_dragger");

    const popups = document.querySelectorAll(
        "#popup1, #popup2, #popup3"
    );
    popups.forEach((popup) => {
        let relativeX = 0;
        let relativeY = 0;
        let isDragging = false;

        const overlay = popup.parentElement;
        popup.addEventListener("mousedown", dragstartHandler);
        document.addEventListener("mousemove", dragOverHandler);
        document.addEventListener("mouseup", dropHandler);

        function dragstartHandler(event) {
            if (!event.target.closest(".title-bar")) return;
            if (event.target.closest(".title-bar-controls")) return;

            isDragging = true;

            // Get popup position relative to the overlay
            const rect = popup.getBoundingClientRect();
            const parentRect = overlay.getBoundingClientRect();

            relativeX = event.clientX - rect.left;
            relativeY = event.clientY - rect.top;

            // Convert popup position to parent coordinates
            popup.style.left = (rect.left - parentRect.left) + "px";
            popup.style.top = (rect.top - parentRect.top) + "px";

            event.preventDefault();
        }

        function dragOverHandler(event) {
            if (!isDragging) return;

            const parentRect = overlay.getBoundingClientRect();

            popup.style.left =
                (event.clientX - parentRect.left - relativeX) + "px";
            popup.style.top =
                (event.clientY - parentRect.top - relativeY) + "px";
        }

        function dropHandler() {
            isDragging = false;
        }
    });
}

// tutorial : https://www.youtube.com/watch?v=-v36WcbDs9k
function updateTime() {
    const now = new Date();

    console.log(now);
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours % 24
    hours = hours ? hours : 24

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}

setInterval(updateTime, 1000);
// current date at the time we run the function
updateTime();