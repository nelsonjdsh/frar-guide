// Add these variables at the beginning of your script.js file
let trailingHearts = [];
const MAX_TRAILING_HEARTS = 20; // Adjust as needed

function animateHearts() {
  const birdContainer = document.getElementById("bird-container");
  const heartContainer = document.getElementById("heart-container");

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-fall";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDelay = Math.random() * 3 + "s"; // Retraso aleatorio para efecto más natural
    heartContainer.appendChild(heart);
  }

  for (let i = 0; i < 5; i++) {
    const text = document.createElement("div");
    text.className = "text-fall";
    const friendshipTexts = [
      "Amistad",
      "Cariño",
      "Empatía",
      "Alegría",
      "Felicidad",
      "Amor",
      "Corazón",
      "Besos",
      "Abrazos",
      "Pasión",
      "Ternura",
      "Complicidad",
      "Dulzura",
      "Afecto",
      "Comprensión",
      "Encanto",
      "Ilusión",
      "Sentimiento",
      "Sueños",
      "Compañerismo",
      "Admiración",
      "Confianza",
      "Respeto",
      "Compromiso",
      "Magia",
      "Paz",
      "Armonía",
      "Fascinación",
      "Devoción",
      "Romance",
      "Enamoramiento",
      "Cuidado",
      "Pasión",
      "Maravilla",
      "Asombro",
      "Plenitud",
      "Esperanza",
      "Fe",
      "Candor",
      "Amabilidad",
      "Generosidad",
      "Gratitud",
      "Euforia",
      "Alma gemela",
      "Destino",
      "Felicidad eterna",
      "Amor verdadero",
      "Juntos para siempre",
    ];

    text.innerHTML =
      friendshipTexts[Math.floor(Math.random() * friendshipTexts.length)];
    text.style.left = Math.random() * window.innerWidth + "px";
    text.style.animationDelay = Math.random() * 3 + "s"; // Retraso aleatorio para efecto más natural
    heartContainer.appendChild(text);
  }

  const bird = document.getElementById("bird");
  const rose = document.getElementById("rose");

  let birdX = 0;
  let birdY = 0;
  let direction = 1; // Variable para la dirección (1 para derecha, -1 para izquierda)

  function animateBird() {
    birdX += 1 * direction; // Ajusta la velocidad según sea necesario
    birdY = Math.sin(birdX / 10) * 50 + 50; // Ajusta la amplitud de la onda

    bird.style.left = birdX + "px";
    bird.style.top = birdY + "px";

    rose.style.left = birdX + "px";
    rose.style.top = birdY + 50 + "px"; // Ajusta la posición de la rosa

    // Cambia de dirección cuando llega al límite
    if (birdX >= window.innerWidth || birdX <= 0) {
      direction *= -1;
    }

    requestAnimationFrame(animateBird);
  }
  function playBackgroundAudio() {
    const audio = document.getElementById("backgroundAudio");
    audio.play();
  }

  setTimeout(() => {
    rose.style.display = "block";
    birdContainer.style.display = "block";
    playBackgroundAudio();
    createCursorHearts();
  }, 2000); // Muestra la rosa después de 5 segundos

  animateBird();
}

// Add this function to create hearts at the cursor position
function createCursorHearts() {
  document.addEventListener("mousemove", onMouseMove);
}

// Function to handle mouse movement
function onMouseMove(event) {
  const heartContainer = document.getElementById("heart-container");
  const heart = document.createElement("div");
  heart.className = "heart-cursor";
  heart.innerHTML = "❤";
  heart.style.left = event.pageX + "px";
  heart.style.top = event.pageY + "px";

  heartContainer.appendChild(heart);
  trailingHearts.push(heart);

  if (trailingHearts.length > MAX_TRAILING_HEARTS) {
    const removedHeart = trailingHearts.shift();
    heartContainer.removeChild(removedHeart);
  }
}
