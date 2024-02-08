document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    noButton.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener('click', () => {
        const confettiElement = document.getElementById('confetti-canvas');
        const confettiSettings = {
            target: confettiElement,
            max: 729,
            size: 1,
            animate: true,
            props: ['circle', 'square', 'triangle', 'line'],
            colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
            clock: 25,
            rotate: true,
            start_from_edge: true,
            respawn: true
        };

        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        document.querySelector('.button-container').style.display = 'none';
        document.querySelector('.gif-container').style.display = 'none';

        // Create and display the congratulatory message
        let message = document.createElement('p');
        message.innerText = "Congrats! You've just said 'yes' to potentially the best date of our lives. \nDM me the time and venue 😉";
        message.style.textAlign = 'center';
        message.style.fontSize = '1.5rem';
        message.style.position = 'absolute';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(message);

        // Add a new GIF below the message
        let newGif = document.createElement('img');
        newGif.src = "chipi-chipi-chapa-chapa.gif"; // Make sure to use the correct path to your GIF
        newGif.alt = "Celebration";
        newGif.style.maxWidth = "100%";
        newGif.style.height = "auto";
        newGif.style.display = "block";
        newGif.style.marginTop = "20px";
        newGif.style.position = "absolute";
        newGif.style.left = "50%";
        newGif.style.transform = "translateX(-50%)";
        newGif.style.bottom = "20px";
        document.body.appendChild(newGif);
    });
});
