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


const bedDialogues = [
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