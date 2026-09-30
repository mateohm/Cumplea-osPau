const openGift = document.getElementById("openGift");
const giftSection = document.getElementById("regalo");
const giftCard = document.getElementById("giftCard");
const flipCard = document.getElementById("flipCard");
const heartsContainer = document.querySelector(".hearts");

const yesBtn = document.getElementById("yesBtn");
const loveModal = document.getElementById("loveModal");
const closeModal = document.getElementById("closeModal");
const closeModal2 = document.getElementById("closeModal2");

// Abrir regalo y llevar suavemente a la tarjeta.
openGift.addEventListener("click", () => {
  giftSection.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    giftCard.animate(
      [
        { transform: "rotateY(0deg) translateY(0)" },
        { transform: "rotateY(-12deg) translateY(-10px)" },
        { transform: "rotateY(12deg) translateY(-10px)" },
        { transform: "rotateY(0deg) translateY(0)" }
      ],
      {
        duration: 900,
        easing: "cubic-bezier(.2,.75,.25,1)"
      }
    );
  }, 750);
});

// Girar tarjeta.
function toggleCard() {
  giftCard.classList.toggle("flipped");
  flipCard.textContent = giftCard.classList.contains("flipped")
    ? "Volver a ver la tarjeta ↻"
    : "Girar tarjeta ↻";
}

giftCard.addEventListener("click", toggleCard);
flipCard.addEventListener("click", toggleCard);

// Corazones flotantes.
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.35 ? "♥" : "♡";

  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${8 + Math.random() * 18}px`;
  heart.style.animationDuration = `${7 + Math.random() * 8}s`;
  heart.style.animationDelay = `${Math.random() * 2}s`;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 16000);
}

setInterval(createHeart, 900);

for (let i = 0; i < 8; i++) {
  setTimeout(createHeart, i * 350);
}

// Modal de confirmación.
function showModal() {
  loveModal.classList.add("active");
  loveModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  loveModal.classList.remove("active");
  loveModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

yesBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
closeModal2.addEventListener("click", hideModal);

loveModal.addEventListener("click", (event) => {
  if (event.target === loveModal) hideModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
