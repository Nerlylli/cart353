// const player = new Audio();
// const dot = document.querySelector('.dot');

document.addEventListener('DOMContentLoaded', () => {
    const entries = document.querySelectorAll('.entry');
    const diaryEntries = document.querySelector('.diaryEntries');
    // const player = new Audio();
    // const dot = document.querySelector('.dot');

    entries.forEach((button, index) => {
        button.addEventListener('click', () => {
            const entry = document.querySelector(`#entry${index + 1}`);

            if (!entry) return;

            const message = entry.getAttribute('data-message');
            const title = entry.getAttribute('alt-title');

            // entryContent.innerHTML = `
            //     <p>${message}</p>
            // `;

            entryContent.innerHTML = `
                    <p class="diary-message">${message}</p>
`;
        });
    });
});

//Initial message, before music plays
// paper.innerHTML = `<p>CLICK ON A SONG!</p>`;

