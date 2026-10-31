// SABINE'S HELP 
window.onload = function () {
    let relativeX = 0;
    let relativeY = 0;
    let isDragging = false;

    const popup = document.querySelector("#popup_dragger");
    const overlay = document.querySelector("#popup1");

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
}
