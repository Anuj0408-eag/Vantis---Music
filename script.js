
  (function () {
    const waveform = document.getElementById('waveform');
    const bars = 60;
    for (let i = 0; i < bars; i++) {
      const bar = document.createElement('i');
      const h = 6 + Math.round(Math.sin(i * 0.5) * 8 + Math.random() * 14);
      bar.style.height = Math.max(4, h) + 'px';
      bar.style.animationDelay = (i * 0.02) + 's';
      waveform.appendChild(bar);
    }
    const player = document.getElementById('player');
    const playBtn = document.getElementById('playBtn');
    playBtn.addEventListener('click', function () {
      const playing = player.classList.toggle('is-playing');
      playBtn.textContent = playing ? '❙❙' : '▶';
      playBtn.setAttribute('aria-label', playing ? 'Pause preview' : 'Play preview');
    });
  })();

(function () {
  const rows = document.querySelectorAll('.beat-row');
  rows.forEach(function (row) {
    const wave = row.querySelector('.beat-wave');
    const btn = row.querySelector('.beat-play');
    if (!wave || !btn) return;

    const bars = 34;
    for (let i = 0; i < bars; i++) {
      const bar = document.createElement('i');
      const h = 5 + Math.round(Math.sin(i * 0.6) * 6 + Math.random() * 10);
      bar.style.height = Math.max(3, h) + 'px';
      wave.appendChild(bar);
    }

    btn.addEventListener('click', function () {
      const playing = row.classList.toggle('is-playing');
      btn.textContent = playing ? '❙❙' : '▶';
      btn.setAttribute('aria-label', playing ? 'Pause preview' : 'Play preview');
      wave.querySelectorAll('i').forEach(function (bar, i) {
        bar.style.animation = playing ? `wf 1.1s ease-in-out infinite` : 'none';
        bar.style.animationDelay = (i * 0.02) + 's';
        bar.style.background = playing ? 'var(--signal)' : 'var(--line-strong)';
      });
    });
  });
})();
