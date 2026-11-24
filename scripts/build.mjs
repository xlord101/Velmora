import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { projects, email } from '../content.mjs';
import './studies.mjs';

const mark = readFileSync('assets/mark.svg','utf8').replace('<svg ', '<svg aria-hidden="true" ');
const esc = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const image=(url,alt,base='',lazy=true)=>`<img src="${esc(base+url)}" alt="${esc(alt)}" width="640" height="560" decoding="async" ${lazy?'loading="lazy"':''}>`;
const link=(url,label)=>`<a href="${url}">${label}</a>`;
function layout(body,title,description,base='',home=false){
 const dest=home?'':base+'index.html';
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#321018"><meta name="description" content="${esc(description)}"><title>${esc(title)}</title><link rel="icon" href="${base}assets/mark.svg"><link rel="stylesheet" href="${base}assets/lenis.css"><link rel="stylesheet" href="${base}style.css"><script defer src="${base}assets/lenis.min.js"></script><script defer src="${base}site.js"></script></head><body>
 <a class="skip" href="#main">Skip to content</a>
 ${home?`<div class="intro" aria-hidden="true"><div>${mark}</div></div><script>try{if(!location.hash&&!sessionStorage.getItem('velmora.visit')&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&performance.getEntriesByType('navigation')[0]?.type!=='back_forward'){document.documentElement.classList.add('opening');sessionStorage.setItem('velmora.visit','1')}}catch{}</script>`:''}
 <header><a class="brand" aria-label="VELMORA Design Studio, home" href="${base}index.html">${mark}<span>VELMORA<small>Design Studio</small></span></a><nav id="navigation" aria-label="Main">${link(dest+'#services','Services')}${link(dest+'#work','Work')}${link(dest+'#studio','Studio')}${link(dest+'#process','Process')}</nav><div class="actions">${link(dest+'#enquire','Start a project')}<button class="menu" aria-controls="navigation" aria-expanded="false">Menu</button></div></header>
 ${body}<footer><a class="footer-brand" href="${base}index.html"><span>VELMORA</span><small>Design Studio</small></a><span>Gallery motion adapted from <a href="https://skiper-ui.com/">Skiper UI</a></span><a href="#main">Back to top ↑</a></footer></body></html>`;
}
const media=projects.flatMap(p=>[p.cover,p.detail]);
const groups=[[0,3,4],[2,5,0],[4,1,2],[1,4,3]];
const wall=groups.map((ids,i)=>{
 const group=`<div class="group">${ids.map((id,j)=>image(media[id % media.length],'','',j>0)).join('')}</div>`;
 return `<div class="lane"><div class="track" style="--delay:-${[9,31,19,42][i]}s">${group}${group}</div></div>`;
}).join('');
const services=[['Space planning','How people enter, move and settle into a room.'],['Materials & finishes','How timber, stone and fabric meet in changing light.'],['Interior visualisation','Room views that make proportion, colour and detail easier to discuss.']];
const stages=[['First conversation','Bring a plan, a photograph, or simply a description of the room. We begin with how you want to live in it.'],['Concept & character','A spatial direction and material palette give the conversation a visible starting point.'],['Design development','Room studies bring layout, finishes and individual details into focus.'],['Final design','Review the resolved proposal and agree on the next steps for your space.']];
const home=`<main id="main"><section class="hero" aria-labelledby="hero-title"><div class="wall" aria-hidden="true">${wall}</div><div class="hero-title"><p>Interior design studio</p><h1 id="hero-title">VELMORA</h1><a class="textlink" href="#work">View projects <span aria-hidden="true">↓</span></a></div><button class="pause" hidden>Pause gallery</button></section>
 <section id="services" class="services space"><h2>What we design</h2><div>${services.map(([a,b])=>`<article><h3>${a}</h3><p>${b}</p></article>`).join('')}</div></section>
 <section id="work" class="work space"><div class="section-head"><h2>Selected work</h2><p>Illustrated spatial studies</p></div><div class="projects">${projects.map(p=>`<a class="project" href="work/${p.slug}/index.html"><div class="crop">${image(p.cover,p.alt)}</div><div class="caption"><h3>${p.name}</h3><p>${p.material}</p></div></a>`).join('')}</div></section>
 <section id="studio" class="studio space"><div class="studio-mark" aria-hidden="true">${mark}</div><div><p class="label">The studio</p><h2>Rooms for daily life.</h2><p>The first question is often a small one. Where do you sit when the afternoon light comes in? What do you reach for first? These everyday gestures give an interior its starting point.</p></div></section>
 <section id="process" class="process space"><div><p class="label">Our process</p><h2>From first sketch<br>to final detail.</h2></div><div>${stages.map(([a,b],i)=>`<details ${i===0?'open':''}><summary>${a}</summary><p>${b}</p></details>`).join('')}</div></section>
 <section id="enquire" class="enquire space"><div><img class="contact-portrait" src="assets/contact-portrait.webp" width="640" height="788" alt="Black-and-white portrait of a man wearing sunglasses and a dark jacket" loading="lazy" decoding="async"><p class="label">Project enquiries</p><h2>Tell us about<br>your space.</h2><a href="mailto:${email}">${email}</a></div><form data-recipient="${email}" action="mailto:${email}" method="post" enctype="text/plain"><label>Your name<input name="name" required autocomplete="name"></label><label>Email address<input name="email" required type="email" autocomplete="email"></label><label>A little about your project<textarea name="brief" required rows="3"></textarea></label><button class="submit">Open email draft</button><p role="status"></p></form></section></main>`;
writeFileSync('index.html',layout(home,'VELMORA Design Studio | Interiors','Explore interior studies, materials and the design process at VELMORA Design Studio.','',true));
for(const [i,p] of projects.entries()){
 const next=projects[(i+1)%projects.length], base='../../';
 const body=`<main id="main" class="case"><section class="case-head"><a href="../../index.html#work">← Selected work</a><p class="label">Illustrated spatial study</p><h1>${esc(p.name)}</h1><p>${esc(p.material)}</p></section><figure class="case-cover">${image(p.cover,p.alt,base,false)}</figure><section class="case-story space"><div><p class="label">Design note</p><h2>${esc(p.caption)}</h2><p>${esc(p.text)}</p></div><figure>${image(p.detail,'Detail crop. '+p.caption,base)}</figure></section><div class="case-end space"><a href="../../index.html#enquire">Discuss a similar space</a><a href="../${next.slug}/index.html">Next study · ${esc(next.name)}</a></div></main>`;
 mkdirSync('work/'+p.slug,{recursive:true}); writeFileSync('work/'+p.slug+'/index.html',layout(body,p.name+' | VELMORA Design Studio',p.caption,base));
}
