const player = new Audio();
const dot = document.querySelector('.dot');

document.addEventListener('DOMContentLoaded', () => {
    const vinyls = document.querySelectorAll('.vinyl');
    const paper = document.querySelector('.paper');
    const player = new Audio();
    const dot = document.querySelector('.dot');

    //Initial message, before music plays
    paper.innerHTML = `<p>CLICK ON A SONG!</p>`;

    vinyls.forEach(vinyl => {
        vinyl.addEventListener('click', () => {
            const audioFile = vinyl.getAttribute('data-audio');
            const message = vinyl.getAttribute('data-message');

            //When the person clicks on a song(vinyl), the message on the paper change depending on the song that was clicked
            paper.innerHTML = `<p>${message}</p>`;

            if (player.src !== audioFile) {
                player.src = audioFile;
                player.play();
            } else {
                player.paused ? player.play() : player.pause();
            }
        });
    });
});
