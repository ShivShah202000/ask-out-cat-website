// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a mouseover event listener to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    // Restrict the "No" button's movement within the bounds of the screen
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    const adjustedX = x < maxX ? x : maxX;
    const adjustedY = y < maxY ? y : maxY;

    // Apply the new position to the button
    noButton.style.position = "absolute";
    noButton.style.left = `${adjustedX}px`;
    noButton.style.top = `${adjustedY}px`;
});

// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to create confetti and display the congratulatory message with a new GIF
yesButton.addEventListener("click", () => {
    var confettiElement = document.getElementById('confetti-canvas');
    var confettiSettings = { target: confettiElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true, start_from_edge: true, respawn: true };

    yesButton.style.display = "none";
    noButton.style.display = "none";

    var gif = document.getElementById("gif");
    var header = document.getElementById("main");
    header.style.display = "none";
    gif.style.display = "none";


    confettiElement.style.position = "absolute";
    confettiElement.style.top = "0";
    confettiElement.style.left = "0";
    confettiElement.style.width = "100%";
    confettiElement.style.height = "100%";
    confettiElement.style.zIndex = "1000";

    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Create and display the congratulatory message
    let p = document.createElement("p");
    p.innerText = "Congrats ou've just said 'yes' to potentially the best date of our lives.  \nDM me the time and venue 😉";
    p.style.fontSize = "2rem";
    p.style.fontWeight = "bold";
    p.style.textAlign = "center";
    p.style.position = "absolute";
    p.style.top = "50%";
    p.style.left = "50%";
    p.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(p);

  
    let newGif = document.createElement("img");
    newGif.src = "chipi-chipi-chapa-chapa.gif"; 
    newGif.alt = "Celebration";
    newGif.style.maxWidth = "100%";
    newGif.style.height = "auto";
    newGif.style.display = "block";
    newGif.style.marginTop = "20px"; 
    newGif.style.position = "absolute";
    newGif.style.left = "50%";
    newGif.style.transform = "translateX(-50%)";
    newGif.style.bottom = "20px"; // Adjust this to position the GIF correctly
    document.body.appendChild(newGif);
});
