// Shared script used across pages
// Contains: loader, page navigation (fade), typing effect, confetti wrapper, floating hearts

// ---------------- Loader ----------------
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  // show ~1.5s then fade
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.style.pointerEvents = 'none';
  }, 1500);
}

// ---------------- Page navigation with fade ----------------
function pageNavigate(url) {
  const main = document.getElementById('main');
  if (main) {
    main.classList.remove('fade-in');
    main.classList.add('fade-out');
    setTimeout(() => { window.location.href = url; }, 420);
  } else {
    window.location.href = url;
  }
}

// ---------------- Typing effect ----------------
function typeWrite(el, text, speed = 30, callback) {
  el.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      if (typeof callback === 'function') callback();
    }
  }, speed);
}

// ---------------- Confetti helper (wraps canvas-confetti) ----------------
window.confetti = window.confetti || function(opts) {
  try {
    if (window.confetti && typeof window.confetti === 'function') window.confetti(opts);
  } catch(e){}
};

// ---------------- Floating hearts helper ----------------
function floatingHeart() {
  const hearts = document.getElementById('hearts');
  if (!hearts) return;
  const h = document.createElement('div');
  h.className = 'heart';
  h.innerText = '💖';
  const left = Math.random() * 100;
  h.style.left = left + 'vw';
  h.style.fontSize = (14 + Math.random() * 28) + 'px';
  const dur = 4000 + Math.random() * 5000;
  h.style.animationDuration = (dur/1000) + 's';
  hearts.appendChild(h);
  setTimeout(() => { h.remove(); }, dur + 200);
}

function floatingHeartsBurst(count = 18, interval = 40) {
  for (let i=0;i<count;i++){
    setTimeout(() => floatingHeart(), i*interval);
  }
}
