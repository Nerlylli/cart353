// SABINE'S HELP 
// to drag the window
window.onload = function () {
    // const popup = document.querySelector("#popup_dragger");

    const popups = document.querySelectorAll(
        "#popup1, #popup2, #popup3, #popup4"
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

// working calendar
// code from: https://www.javascriptfreecode.com/36.htm
monthnames = new Array(
    "January",
    "Februrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber");
var linkcount = 0;
function addlink(month, day, href) {
    var entry = new Array(3);
    entry[0] = month;
    entry[1] = day;
    entry[2] = href;
    this[linkcount++] = entry;
}
Array.prototype.addlink = addlink;
linkdays = new Array();
monthdays = new Array(12);
monthdays[0] = 31;
monthdays[1] = 28;
monthdays[2] = 31;
monthdays[3] = 30;
monthdays[4] = 31;
monthdays[5] = 30;
monthdays[6] = 31;
monthdays[7] = 31;
monthdays[8] = 30;
monthdays[9] = 31;
monthdays[10] = 30;
monthdays[11] = 31;
todayDate = new Date();
thisday = todayDate.getDay();
thismonth = todayDate.getMonth();
thisdate = todayDate.getDate();
thisyear = todayDate.getYear();
thisyear = thisyear % 100;
thisyear = ((thisyear < 50) ? (2000 + thisyear) : (1900 + thisyear));
if (((thisyear % 4 == 0)
    && !(thisyear % 100 == 0))
    || (thisyear % 400 == 0)) monthdays[1]++;
startspaces = thisdate;
while (startspaces > 7) startspaces -= 7;
startspaces = thisday - startspaces + 1;
if (startspaces < 0) startspaces += 7;
document.write("<table border=2 bgcolor=white width=285 height=285 style='font-family: hearts; font-size: 20px; position: relative; left: -0.5em; background-image: url(\"https://i4.glitter-graphics.org/pub/966/966814i8pz6zikwc.gif\"); background-attachment: fixed; background-repeat: repeat; border: none;'");
document.write("bordercolor=black><font color=black>");
document.write("<tr><td colspan=7><center><strong style='font-family:chick; background: #8CB360; background: linear-gradient(360deg, #8CB360 45%, rgba(42, 123, 155, 0) 0%); -webkit-text-stroke: 1px black; color: white; font-size: 30px; line-height: 20px;'>"
    + monthnames[thismonth] + " " + thisyear
    + "</strong></center></font></td></tr>");
document.write("<tr>");
document.write("<td align=center>Su</td>");
document.write("<td align=center>M</td>");
document.write("<td align=center>Tu</td>");
document.write("<td align=center>W</td>");
document.write("<td align=center>Th</td>");
document.write("<td align=center>F</td>");
document.write("<td align=center>Sa</td>");
document.write("</tr>");
document.write("<tr>");
for (s = 0; s < startspaces; s++) {
    document.write("<td> </td>");
}
count = 1;
while (count <= monthdays[thismonth]) {
    for (b = startspaces; b < 7; b++) {
        linktrue = false;
        document.write("<td align='center' valign='middle'>");
        for (c = 0; c < linkdays.length; c++) {
            if (linkdays[c] != null) {
                if ((linkdays[c][0] == thismonth + 1) && (linkdays[c][1] == count)) {
                    document.write("<a href=\"" + linkdays[c][2] + "\">");
                    linktrue = true;
                }
            }
        }
        if (count == thisdate) {
            document.write("<font color='ffffff'><strong style='-webkit-text-stroke: 1px black; font-family:chick; background: #8CB360; background: linear-gradient(360deg, #8CB360 45%, rgba(42, 123, 155, 0) 0%);'>");
        }
        if (count <= monthdays[thismonth]) {
            document.write(count);
        }
        else {
            document.write(" ");
        }
        if (count == thisdate) {
            document.write("</strong></font>");
        }
        if (linktrue)
            document.write("</a>");
        document.write("</td>");
        count++;
    }
    document.write("</tr>");
    document.write("<tr>");
    startspaces = 0;
}
document.write("</table></p>");

// CLOCK ON PHONE WORKING
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