document.documentElement.classList.add('enhanced');
const opening = document.documentElement;
function endIntro() {
  opening.classList.remove('opening');
  document.querySelector('.intro')?.remove();
  document.dispatchEvent(new Event('introfinished'));
}
if (document.querySelector('.intro')) {
  const intro = document.querySelector('.intro');
  let dismissing = false;
  const interrupt = () => {
    if (dismissing) return;
    dismissing = true;
    const fade = intro.animate(
      [{opacity:getComputedStyle(intro).opacity}, {opacity:0}],
      {duration:240, easing:'ease-out', fill:'forwards'}
    );
    fade.onfinish = endIntro;
  };
  const listeners = new AbortController();
  intro.addEventListener('animationend', event => {
    if (event.animationName === 'curtain') endIntro();
  }, {signal:listeners.signal});
  // Also clear the overlay when the animation was skipped or finished before JS loaded.
  for (const event of ['wheel','touchstart','keydown']) {
    window.addEventListener(event, interrupt, { passive:true, signal:listeners.signal });
  }
  document.addEventListener('introfinished', () => listeners.abort(), {once:true});
  if (!opening.classList.contains('opening') || !intro.getAnimations().some(animation => animation.playState === 'running')) endIntro();
}
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const sectionLinks = [...header.querySelectorAll('a[href^="#"]')].map(link => ({
  link, section:document.querySelector(link.hash)
})).filter(item => item.section);
function markCurrentSection() {
  const edge = header.offsetHeight + Math.min(100, innerHeight * .16);
  const current = sectionLinks.filter(item => item.section.getBoundingClientRect().top <= edge).at(-1);
  if (current === activeSection) return;
  activeSection?.link.removeAttribute('aria-current');
  current?.link.setAttribute('aria-current','location');
  activeSection = current;
}
let activeSection;
new ResizeObserver(() => {
  opening.style.setProperty('--header-height', header.offsetHeight + 'px');
  markCurrentSection();
}).observe(header);
if (sectionLinks.length) window.addEventListener('scroll',markCurrentSection,{passive:true});
let smoothScroll;
function configureScrolling() {
  smoothScroll?.destroy();
  smoothScroll = undefined;
  if (!reduceMotion.matches && window.Lenis) {
    smoothScroll = new Lenis({
      autoRaf:true, smoothWheel:true, syncTouch:false,
      wheelMultiplier:.88, duration:1.45, easing:t => 1 - (1 - t) ** 3.5,
      prevent:node => node.tagName === 'TEXTAREA'
    });
  }
}
configureScrolling();
document.addEventListener('click', event => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!smoothScroll || !anchor || event.defaultPrevented || event.button !== 0 ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const target = document.getElementById(anchor.hash.slice(1));
  if (!target) return;
  event.preventDefault();
  if (location.hash !== anchor.hash) history.pushState(null,'',anchor.hash);
  target.setAttribute('tabindex','-1');
  target.focus({preventScroll:true});
  const travel = target.getBoundingClientRect().top - header.offsetHeight - 8;
  const duration = Math.min(1.85, .65 + Math.abs(travel) / innerHeight * .42);
  smoothScroll.scrollTo(scrollY + travel,
    {duration, easing:t => (1 - Math.cos(Math.PI * t)) / 2});
});
reduceMotion.addEventListener('change', () => {
  if (reduceMotion.matches && opening.classList.contains('opening')) endIntro();
  configureScrolling();
});
function setMenu(open) {
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
}
menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menu.focus(); }
});
const wall = document.querySelector('.wall');
if (wall) {
  const button = document.querySelector('.pause');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true, paused = false;
  try { paused = localStorage.getItem('velmora.pause') === 'yes'; } catch {}
  function update() {
    wall.classList.toggle('running', visible && !paused && !reduce.matches && !document.hidden && !opening.classList.contains('opening'));
    button.hidden = reduce.matches;
    button.textContent = paused ? 'Play gallery' : 'Pause gallery';
    button.setAttribute('aria-pressed', String(paused));
  }
  button.addEventListener('click', () => {
    paused = !paused;
    try { localStorage.setItem('velmora.pause', paused ? 'yes' : 'no'); } catch {}
    update();
  });
  const observer = new ResizeObserver(entries => {
    for (const {target,contentRect} of entries) {
      if (contentRect.height) target.parentElement.style.setProperty('--duration', target.getBoundingClientRect().height / (innerWidth < 768 ? 4 : 6) + 's');
    }
  });
  wall.querySelectorAll('.group:first-child').forEach(group => observer.observe(group));
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }).observe(wall);
  reduce.addEventListener('change', update);
  document.addEventListener('visibilitychange', update);
  document.addEventListener('introfinished', update);
  update();
}
const form = document.querySelector('form[data-recipient]');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const entrances = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.animate([{opacity:0.72,transform:'translateY(12px)'},{opacity:1,transform:'none'}],
        {duration:480,easing:'cubic-bezier(.23,1,.32,1)'});
      entrances.unobserve(entry.target);
    }
  });
  document.querySelectorAll('.section-head,.caption,.services h2,.studio h2,.process h2,.case-story figure').forEach(part => entrances.observe(part));
}
form?.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  const subject = 'VELMORA project enquiry from ' + fields.get('name');
  const body = fields.get('brief') + '\n\n' + fields.get('name') + '\n' + fields.get('email');
  location.href = 'mailto:' + form.dataset.recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  form.querySelector('[role=status]').textContent = 'Send the draft from your email app. You can also use the studio email address shown here.';
});
