// 作品卡 hover 時才載入並播放影片；觸控裝置改成捲進畫面時自動播放
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const canHover = matchMedia('(hover: hover)').matches;

function play(video: HTMLVideoElement) {
  if (!video.src && video.dataset.src) video.src = video.dataset.src;
  video
    .play()
    .then(() => video.classList.add('playing'))
    .catch(() => {});
}

function stop(video: HTMLVideoElement) {
  video.pause();
  video.classList.remove('playing');
}

if (!reduceMotion) {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-hover-video]')].filter((c) => c.querySelector('video'));

  if (canHover) {
    for (const card of cards) {
      const video = card.querySelector('video')!;
      card.addEventListener('pointerenter', () => play(video));
      card.addEventListener('pointerleave', () => stop(video));
      card.addEventListener('focusin', () => play(video));
      card.addEventListener('focusout', () => stop(video));
    }
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const video = e.target.querySelector('video')!;
          e.isIntersecting ? play(video) : stop(video);
        }
      },
      { threshold: 0.6 },
    );
    cards.forEach((c) => io.observe(c));
  }
}
