'use strict';
const english = {
  'skip':'Skip to content',
  'nav.about':'The idea','nav.platform':'The platform','nav.community':'The community','nav.contact':"Let's talk",
  'hero.eyebrow':'PLAY. CREATE. CONNECT.','hero.origin':'PUEBLA, MEXICO · SINCE 2024',
  'hero.line1':'Some worlds','hero.line2':'are made','hero.line3':'together.',
  'hero.body':'Kintare is a community for creating experiences and connections. We’re building a gaming platform that gives your ideas a home, and people to share them with.',
  'hero.cta':'Meet Kintare','hero.panelLabel':'A PLACE TO CONNECT',
  'hero.panelCopy':'For those who play.<br>For those who create.<br>For those who stay.',
  'hero.bottom':'Experiences that bring us together.','hero.scroll':'Keep exploring','hero.stage':'PLATFORM IN DEVELOPMENT',
  'about.tag':'THE IDEA','about.title':'The best part of a game<br>is what happens between people.',
  'about.lead':'The world you built together. The session that ran late. The person who showed up for a game and became part of your life.',
  'about.body':'That’s the way we see play at Kintare. We want to give players, creators and communities a shared foundation to meet, express themselves and make things together.',
  'about.body2':'From Puebla, Mexico, we’re developing the technology behind those experiences: accounts, profiles, shared worlds and tools for the people who look after them.',
  'platform.tag':'THE PLATFORM','platform.title':'Your identity.<br>Your worlds. Your people.',
  'platform.intro':'A shared foundation for playing, creating and running a community. Explore what we’re building.',
  'tab.identity':'Identity','tab.worlds':'Worlds','tab.community':'Community',
  'identity.title':'A place to be yourself.',
  'identity.body':'Your account is the starting point. Player identity, profiles and personalization, with tools to control how you access Kintare.',
  'identity.f1':'Profiles, skins and avatars','identity.f2':'Passkey sign-in and two-step verification','identity.f3':'Account connections and access to game services','identity.note':'Part of Kintare’s technical foundation.',
  'worlds.title':'A world means more when you share it.',
  'worlds.body':'We’re developing services for managing game servers and worlds: places a community can make its own and keep building over time.',
  'worlds.f1':'Identity, session and profile services for Minecraft','worlds.f2':'Server and shared-world management','worlds.f3':'Hytale integrations in development and validation','worlds.note':'Compatibility depends on the game, version and integration.',
  'communityPanel.title':'Every world has people behind it.',
  'communityPanel.body':'A community needs more than a server. We’re building tools to connect its spaces and help the people running them organize and care for their communities.',
  'communityPanel.f1':'Connections with Discord communities','communityPanel.f2':'Roles, permissions and space management','communityPanel.f3':'Moderation and reporting tools','communityPanel.note':'Tools that serve each community.',
  'platform.status':'BUILDING WITH INTENTION.',
  'platform.note':'Kintare is in active development. This is our direction and the foundation we’re working on; availability of individual features will be announced as the platform progresses.',
  'people.tag':'FIND YOUR PLACE','people.title':'There’s more than<br>one way to belong.',
  'people.intro':'Good communities are built by people who bring different things to the table. There’s room for yours.',
  'people.play.title':'Come play.','people.play.body':'Discover other ways to share a session. Explore worlds, meet people and find a community you’ll want to come back to.','people.play.label':'CURIOSITY',
  'people.create.title':'Bring that idea.','people.create.body':'A world, a mod, a character or an experience that doesn’t exist yet. We want to build a place where those ideas can meet other people.','people.create.label':'CREATIVITY',
  'people.build.title':'Build a community.','people.build.body':'If you bring people together around a game, you know the work behind it. We’re building the platform with the people who organize and care for those spaces in mind.','people.build.label':'CONNECTION',
  'faq.tag':'A LITTLE MORE CONTEXT','faq.title':'In case you <br>were wondering.',
  'faq.q1':'What exactly is Kintare?',
  'faq.a1':'A community and a gaming platform in development. We’re building the technical foundation to connect player identity, game services and shared spaces, with the creation of experiences and connections between people as our purpose.',
  'faq.q2':'Is Kintare a video game?',
  'faq.a2':'Kintare is the space and technology connecting experiences and communities. Our current work includes services for Minecraft and integrations with Hytale, at different stages of development and validation.',
  'faq.q3':'Can I use the platform yet?',
  'faq.a3':'We’re in active development. To learn about the project, contribute an idea or explore a collaboration, contact erin_max_ on Discord. We’ll share access to features as they become ready.',
  'faq.q4':'Where did Kintare start?',
  'faq.a4':'In Puebla, Mexico, in 2024. We’re building from here with the belief that a shared experience can connect people anywhere.',
  'faq.q5':'Is Kintare officially affiliated with Minecraft or Hytale?',
  'faq.a5':'Kintare is an independent project. Minecraft and Hytale belong to their respective owners; we mention these games to explain the platform’s integration work, without implying official affiliation or endorsement.',
  'join.tag':'WE’LL MAKE WHAT’S NEXT TOGETHER.','join.title':'Every connection<br>starts with<br>a “hello”.',
  'join.body':'Have an idea, a community or a question about Kintare? We’d like to hear from you.',
  'join.find':'FIND US ON DISCORD','join.copy':'Copy username','join.open':'Open Discord','join.note':'Add this username as a friend to start a conversation.',
  'footer.tag':'EXPERIENCES THAT BRING US TOGETHER.','footer.top':'Back to top','footer.location':'Built in Puebla, Mexico.','footer.privacy':'Privacy',
  'dialog.title':'Let’s talk about your idea.','dialog.body':'Find erin_max_ on Discord and send a friend request to start a conversation.',
  'privacy.title':'Your visit, explained.',
  'privacy.body':'This is a static presentation website. The interest journey, sample card and message composer run in your browser; their answers are not sent to a server. We only save your language choice. We add no analytics and create no accounts from this website.',
  'privacy.body2':'The hosting provider may process technical connection data to serve and protect the website. When you open Discord, its own terms and privacy policies apply.',
  'privacy.contact':'For questions about this website, you can contact erin_max_ on Discord.'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const spanish = Object.fromEntries(nodes.map(node => [node.dataset.i18n,node.innerHTML]));
let language = 'es';
const languageButton = document.querySelector('.language');
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const metaDescription = document.querySelector('meta[name="description"]');
const originalDescription = metaDescription.content;
function setLanguage(next) {
  language = next === 'en' ? 'en' : 'es';
  const dictionary = language === 'en' ? english : spanish;
  nodes.forEach(node => { if(dictionary[node.dataset.i18n] !== undefined) node.innerHTML = dictionary[node.dataset.i18n]; });
  document.documentElement.lang = language;
  document.title = language === 'en' ? 'Kintare — Experiences that bring us together' : 'Kintare — Experiencias que nos conectan';
  metaDescription.content = language === 'en' ? 'Kintare is a community and gaming platform in development from Puebla, Mexico. We build tools for shared worlds, player identity and experiences created together.' : originalDescription;
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = metaDescription.content;
  languageButton.textContent = language === 'es' ? 'EN' : 'ES';
  languageButton.setAttribute('aria-label',language === 'es' ? 'Switch to English' : 'Cambiar a español');
  navigation.setAttribute('aria-label',language === 'es' ? 'Navegación principal' : 'Main navigation');
  document.querySelector('.brand').setAttribute('aria-label',language === 'es' ? 'Kintare, inicio' : 'Kintare, home');
  document.querySelector('.platform-tabs').setAttribute('aria-label',language === 'es' ? 'Áreas de la plataforma' : 'Platform areas');
  document.querySelector('.hero-logo').alt = language === 'es' ? 'Emblema de Kintare: una estrella crema y negra sobre fondo dorado' : 'Kintare emblem: a cream and black star on a gold background';
  document.querySelector('.logo-stage').setAttribute('aria-label',language === 'es' ? 'Animar emblema de Kintare' : 'Animate the Kintare emblem');
  document.querySelectorAll('.close-dialog').forEach(button=>button.setAttribute('aria-label',language === 'es' ? 'Cerrar' : 'Close'));
  updateMenuLabel();
  try { localStorage.setItem('kintare-language',language); } catch {}
  const currentUrl = new URL(location.href);
  currentUrl.searchParams.set('lang',language);
  history.replaceState(null,'',currentUrl);
}
languageButton.addEventListener('click',()=>setLanguage(language === 'es' ? 'en' : 'es'));
const requestedLanguage = new URLSearchParams(location.search).get('lang');
if(requestedLanguage === 'en' || requestedLanguage === 'es') setLanguage(requestedLanguage);
else { try { if(localStorage.getItem('kintare-language') === 'en') setLanguage('en'); } catch {} }
function updateMenuLabel(){menuButton.setAttribute('aria-label',menuButton.getAttribute('aria-expanded') === 'true' ? (language === 'es' ? 'Cerrar menú' : 'Close menu') : (language === 'es' ? 'Abrir menú' : 'Open menu'));}
function closeMenu(){menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('open');updateMenuLabel();}
menuButton.addEventListener('click',()=>{ const open = menuButton.getAttribute('aria-expanded') !== 'true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);updateMenuLabel(); });
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key === 'Escape') closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('.header')) closeMenu();});
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab,focus=false){
  document.querySelector('.platform-tabs').style.setProperty('--tab-index',String(tabs.indexOf(tab)));
  tabs.forEach(item=>{const selected=item === tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected ? 0 : -1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;});
  if(focus) tab.focus();
}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(tabs[next],true);}});});
const contactDialog=document.querySelector('#contact-dialog');
const privacyDialog=document.querySelector('#privacy-dialog');
document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>contactDialog.showModal()));
document.querySelector('[data-privacy]').addEventListener('click',()=>privacyDialog.showModal());
document.querySelectorAll('dialog').forEach(dialog=>{dialog.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom)dialog.close();}});});
let toastTimer;
function toast(message){const el=document.querySelector('.toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),4200);}
const copyFeedbackTimers = new WeakMap();
document.querySelectorAll('.copy-discord').forEach(button=>button.addEventListener('click',async()=>{
  try{
    await navigator.clipboard.writeText('erin_max_');
    toast(language === 'es' ? 'Usuario copiado: erin_max_' : 'Username copied: erin_max_');
    clearTimeout(copyFeedbackTimers.get(button));
    button.classList.add('is-copied');
    button.textContent = language === 'es' ? 'Copiado' : 'Copied';
    copyFeedbackTimers.set(button,setTimeout(()=>{
      button.classList.remove('is-copied');
      button.textContent = language === 'es' ? spanish['join.copy'] : english['join.copy'];
    },2200));
  }catch{toast(language === 'es' ? 'Copia este usuario: erin_max_' : 'Copy this username: erin_max_');}
}));

// Pointer motion belongs to the logo stage, never to the complete card.
const logoStage = document.querySelector('.logo-stage');
const logoImage = document.querySelector('.hero-logo');
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
let logoFrame = 0;
let pointerPosition;
let emblemAnimation;
function resetLogo() {
  cancelAnimationFrame(logoFrame);
  logoFrame = 0;
  logoStage.classList.remove('is-tracking');
  ['--logo-x','--logo-y','--logo-angle'].forEach(property=>logoStage.style.removeProperty(property));
}
logoStage.addEventListener('pointermove',event=>{
  if(motionPreference.matches || !finePointer.matches || event.pointerType === 'touch') return;
  const rect = logoStage.getBoundingClientRect();
  pointerPosition = {
    x:Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1)),
    y:Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1))
  };
  logoStage.classList.add('is-tracking');
  if(logoFrame) return;
  logoFrame = requestAnimationFrame(()=>{
    logoStage.style.setProperty('--logo-x',`${pointerPosition.x*6}px`);
    logoStage.style.setProperty('--logo-y',`${pointerPosition.y*6}px`);
    logoStage.style.setProperty('--logo-angle',`${pointerPosition.x*4}deg`);
    logoFrame = 0;
  });
},{passive:true});
logoStage.addEventListener('pointerleave',resetLogo);
logoStage.addEventListener('pointercancel',resetLogo);
logoStage.addEventListener('blur',resetLogo);
logoStage.addEventListener('click',()=>{
  if(motionPreference.matches) return;
  emblemAnimation?.cancel();
  emblemAnimation = logoImage.animate([{rotate:'0deg'},{rotate:'5deg',offset:.35},{rotate:'-3deg',offset:.7},{rotate:'0deg'}],{duration:650,easing:'ease-in-out'});
});
motionPreference.addEventListener('change',()=>{resetLogo();if(motionPreference.matches)emblemAnimation?.cancel();});

// Keep the navigation in sync with the section currently being read.
const sectionLinks = [...navigation.querySelectorAll('a')];
if('IntersectionObserver' in window){
  const sectionObserver = new IntersectionObserver(entries=>{
    entries.filter(entry=>entry.isIntersecting).forEach(entry=>{
      sectionLinks.forEach(link=>{
        if(link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    });
  },{rootMargin:'-15% 0px -55% 0px',threshold:0});
  sectionLinks.forEach(link=>{const section=document.querySelector(link.hash);if(section)sectionObserver.observe(section);});
}
