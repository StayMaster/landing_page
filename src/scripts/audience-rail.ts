/** Desktop: vertical scroll drives horizontal persona rail (Zahma-style). Mobile: native swipe. */

export function initAudienceRail() {
  const section = document.querySelector<HTMLElement>('[data-audience-section]');
  const rail = document.querySelector<HTMLElement>('[data-audience-rail]');
  if (!section || !rail) return;

  const mq = window.matchMedia('(min-width: 1024px)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let maxShift = 0;

  function measure() {
    maxShift = Math.max(0, rail.scrollWidth - window.innerWidth);
    if (mq.matches && !reduceMotion) {
      const cards = section.querySelectorAll('[data-audience-card]').length;
      section.style.setProperty('--audience-scroll-steps', String(cards + 1));
    } else {
      section.style.removeProperty('--audience-scroll-steps');
      rail.style.transform = '';
    }
  }

  function onScroll() {
    if (!mq.matches || reduceMotion) return;
    const rect = section.getBoundingClientRect();
    const scrollable = section.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
    rail.style.transform = `translate3d(-${progress * maxShift}px, 0, 0)`;
  }

  measure();
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    measure();
    onScroll();
  });
  mq.addEventListener('change', () => {
    measure();
    onScroll();
  });
}

initAudienceRail();
