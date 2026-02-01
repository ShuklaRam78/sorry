// Heart Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  heart.style.fontSize = (10 + Math.random() * 20) + 'px';
  heart.innerHTML = '❤️';

  document.getElementById('hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 120);

// Evasive No Button
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const centerContent = document.querySelector('.center-content');
let noBtnMoving = false;

noBtn.addEventListener('mouseenter', moveNoBtn);
noBtn.addEventListener('mousemove', moveNoBtn);

function moveNoBtn(e) {
  if (noBtnMoving) return;
  noBtnMoving = true;
  const btnRect = noBtn.getBoundingClientRect();
  const parentRect = centerContent.getBoundingClientRect();
  let newLeft = Math.random() * (parentRect.width - btnRect.width);
  let newTop = Math.random() * (parentRect.height - btnRect.height);
  noBtn.style.position = 'absolute';
  noBtn.style.left = newLeft + 'px';
  noBtn.style.top = newTop + 'px';
  setTimeout(() => { noBtnMoving = false; }, 300);
}

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
});

// Yes Button Click
yesBtn.addEventListener('click', () => {
  document.querySelector('.center-content').style.display = 'none';
  showApologyPage();
});

// Apology Page
function showApologyPage() {
  let apologyPage = document.querySelector('.apology-page');
  if (!apologyPage) {
    apologyPage = document.createElement('div');
    apologyPage.className = 'apology-page';
    apologyPage.innerHTML = `
      <div class="navbar">I lovee youu ❤️</div>
      <div class="hearts-container" id="apology-hearts"></div>
      <audio id="love-song" autoplay loop style="display:none;">
        <source src="/asset/song.mp3" type="audio/mpeg">
      </audio>
      <div class="apology-content">
        <h2>My Dearest,</h2>
        <p>I am truly, deeply sorry for hurting you. I never meant to make you feel sad or upset. You mean the world to me, and every moment without your smile feels empty. Please forgive me for my mistakes. I promise to be better, to listen more, to love you with all my heart, and to never let you down again. You are my everything, and I can't imagine my life without you. I love you more than words can say. Please give me another chance to make you happy. ❤️</p>
      </div>
      <div class="gallery">
        <div class="gallery-title">Our Beautiful Memories 💕</div>
        <div class="polaroid-grid">
          <div class="polaroid rotate-left"><img src="/asset/img6.jpeg" alt="Us"><span>Forever ❤️</span></div>
          <div class="polaroid rotate-right"><img src="/asset/img2.jpeg" alt="Us"><span>My Love 💕</span></div>
          <div class="polaroid rotate-slight"><img src="/asset/img10.jpeg" alt="Us"><span>Always 💖</span></div>
          <div class="polaroid rotate-left-more"><img src="/asset/img1.jpeg" alt="Us"><span>Together 💗</span></div>
          <div class="polaroid rotate-right-more"><img src="/asset/img7.jpeg" alt="Us"><span>You & Me 💓</span></div>
          <div class="polaroid rotate-left"><img src="/asset/img4.jpeg" alt="Us"><span>My Heart 💘</span></div>
          <div class="polaroid rotate-right"><img src="/asset/img3.jpeg" alt="Us"><span>Soulmate 💝</span></div>
          <div class="polaroid rotate-slight-neg"><img src="/asset/img5.jpeg" alt="Us"><span>Cutie 🥰</span></div>
          <div class="polaroid rotate-left-more"><img src="/asset/img8.jpeg" alt="Us"><span>Beautiful 💞</span></div>
          <div class="polaroid rotate-right-more"><img src="/asset/img9.jpeg" alt="Us"><span>I Love You 💕</span></div>
        </div>
      </div>
    `;
    document.body.appendChild(apologyPage);
    apologyPage.style.display = 'flex';
    // Raining hearts on apology page
    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (2 + Math.random() * 3) + 's';
      heart.style.fontSize = (10 + Math.random() * 20) + 'px';
      heart.innerHTML = '❤️';
      document.getElementById('apology-hearts').appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 100);
  } else {
    apologyPage.style.display = 'flex';
  }
}

// Heart CSS
const style = document.createElement('style');
style.innerHTML = `
.heart {
  position: absolute;
  top: -30px;
  pointer-events: none;
  animation: fall 5s linear forwards;
  z-index: 2;
}
@keyframes fall {
  to {
    top: 100vh;
    opacity: 0.2;
    transform: translateY(100vh) scale(0.7) rotate(30deg);
  }
}`;
document.head.appendChild(style);
