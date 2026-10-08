(() => {
  'use strict';
  const english = {
    'nav.progress':'Progress','journey.tag':'YOUR STARTING POINT','journey.title':'What brings<br>you here?',
    'journey.intro':'Three questions to find the part of Kintare that interests you. You can change direction whenever you like.',
    'journey.q1':'01. I want to…','journey.q2':'02. I’m especially interested in…','journey.q3':'03. I would arrive…',
    'choice.play':'Play and explore','choice.play.note':'Find worlds and people.','choice.create':'Create something of my own','choice.create.note':'Give an idea a home.',
    'choice.community':'Bring my people together','choice.community.note':'Run a community.','choice.worlds':'Shared worlds','choice.identity':'Identity and characters','choice.tools':'Tools to organize',
    'choice.solo':'On my own','choice.friends':'With friends','choice.group':'With my community','journey.result':'YOUR PATH',
    'tour.tag':'INSIDE KINTARE','tour.title':'Your character.<br>Your spaces.','tour.intro':'Player customization and tools for organizing servers. Explore these real Kintare Accounts views.',
    'tour.player':'Your character','tour.servers':'Your servers','tour.real':'REAL SCREENSHOTS · OCT 2026','tour.expand':'Enlarge ↗',
    'tour.visit':'Visit Kintare Accounts ↗','tour.note':'Kintare Accounts, October 8, 2026. Views of the player editor and server setup, cropped to exclude private account data. Game integrations remain in development and validation.',
    'tour.captureTitle':'Kintare Accounts · Real interface','tour.captureNote':'Captured on October 8, 2026 · Kintare',
    'gallery.tag':'MADE BY THE COMMUNITY','gallery.title':'Room for<br>your next idea.','gallery.intro':'Worlds, mods, characters and gatherings. We want to make space for projects by the people who build communities.',
    'gallery.empty':'The first story could be yours.','gallery.note':'The gallery is open to proposals. Each published project will include a description, authorized images and credit for its creators.','gallery.cta':'Suggest a project ↗',
    'profile.tag':'TRY AN IDEA','profile.title':'An identity<br>that feels like yours.','profile.intro':'Play with this card’s name, color and emblem. A small illustration of what having your own place can mean.',
    'profile.name':'What would you call yourself?','profile.color':'Choose your color','color.gold':'Gold','color.sage':'Sage','color.lilac':'Lilac',
    'profile.avatar':'Your emblem','profile.initials':'Initials','profile.preview':'PREVIEW','profile.subtitle':'A world to discover.','profile.cardNote':'PLAY · CREATE · CONNECT',
    'profile.note':'An interactive website example, not a real account. Changes stay on this page and are neither saved nor sent.',
    'roadmap.tag':'THE PROJECT TODAY','roadmap.title':'What exists.<br>What comes next.','roadmap.intro':'We build in parts. This map separates the implemented foundation, work being validated and next steps.',
    'filter.all':'All','filter.built':'Foundation implemented','filter.testing':'In validation','filter.next':'Next',
    'roadmap.accounts':'Accounts and identity','roadmap.accounts.copy':'Accounts has an access website, profiles and security tools. Discord and passkeys appear on its sign-in screen.','roadmap.see':'See the screens ↗',
    'roadmap.worlds':'Services and shared worlds','roadmap.worlds.copy':'Minecraft services, server management and Hytale integrations. Validation happens by version and by experience.',
    'roadmap.community':'Community tools','roadmap.community.copy':'Discord connections, roles, permissions and moderation. Current work connects these pieces with game services.',
    'roadmap.next':'Learn with the people who will use it','roadmap.next.copy':'Hear proposals from creators and communities, start conversations and share authorized experiences in the gallery.','roadmap.join':'I’d like to contribute ↗',
    'roadmap.note':'Reviewed on October 7, 2026. “Foundation implemented” describes existing work; it does not mean every feature is publicly available. No release date has been announced for the next steps.',
    'journal.tag':'KINTARE JOURNAL','journal.title':'Show the work.<br>Share the journey.','journal.date':'OCTOBER 7, 2026','journal.entryTitle':'A window into what we’re building.',
    'journal.entryCopy':'We opened this website to explain Kintare more clearly: what we want to create, where the Accounts experience begins and how each person can take part.',
    'journal.more':'Read the note','journal.body':'This presentation brings together views of Accounts tools and a project map. The interest journey and identity card are website demonstrations. Requests are prepared here and sent on Discord.',
    'journal.body2':'The journal will be a place to publish concrete progress, decisions and shared experiences, with dates and context.','journal.cta':'Explore the screenshots ↗',
    'team.tag':'FROM PUEBLA','team.title':'People making<br>room for others.','team.lead':'Kintare began in 2024 with an idea: playing can also be a way to build connections.',
    'team.body':'We’re developing a shared foundation so player identity, worlds and community tools can work together. The aim is to make organizing an experience leave more time to enjoy it.',
    'team.role':'Project contact · Kintare','team.contact':'Let’s talk ↗','team.alias':'Erin Gómez · “Erin” is a pseudonym',
    'request.tag':'LET’S TALK ABOUT YOUR IDEA','request.title':'The next part<br>could start with you.',
    'request.intro':'Tell us what you would like to try or build. Prepare your message here, copy it and send it to erin_max_ on Discord.',
    'request.note':'This form only prepares a message in your browser. You need to send it on Discord for us to receive it. Access is neither requested nor granted automatically.',
    'request.kind':'I would like to…','request.access':'Learn about access options','request.collaborate':'Collaborate with Kintare','request.project':'Suggest a project for the gallery',
    'request.message':'My idea or what I’m looking for','request.hint':'A few lines are enough. Avoid passwords or private information.','request.copy':'Copy my message','request.preview':'See the message I’ll copy',
    'join.open':'Open Discord ↗','contact.email':'Questions by email ↗'
  };
  const textNodes = [...document.querySelectorAll('[data-k]')];
  const spanish = new Map(textNodes.map(node=>[node,node.innerHTML]));
  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'es';
  const tr = (es,en) => lang() === 'es' ? es : en;
  const journey = document.querySelector('#journey-form');
  journey.addEventListener('submit',event=>event.preventDefault());
  function renderJourney() {
    const data = new FormData(journey);
    const interest = data.get('interest');
    const focus = data.get('focus');
    const company = data.get('company');
    const titles = {
      play:['Empieza con un mundo.','Start with a world.'],create:['Tu idea necesita un lugar.','Your idea needs a home.'],community:['Tu gente, un punto de encuentro.','A place for your people to meet.']
    };
    const intro = {
      play:['Te interesa descubrir experiencias y compartir una partida.','You want to discover experiences and share a session.'],
      create:['Tienes ganas de crear. Conoce la plataforma y cuéntanos qué te gustaría hacer.','You want to create. Explore the platform and tell us what you’d like to make.'],
      community:['Organizar también es crear: queremos escuchar cómo juega tu comunidad.','Organizing is creating too: we want to hear how your community plays.']
    };
    const interests = {worlds:['Explora los mundos y sus servicios.','Explore worlds and their services.'],identity:['Prueba la tarjeta de identidad de ejemplo.','Try the sample identity card.'],tools:['Consulta las herramientas de comunidad y su avance.','Read about community tools and their progress.']};
    const groups = {solo:['Puedes empezar por tu cuenta.','You can begin on your own.'],friends:['Trae también las ideas de tus amigos.','Bring your friends’ ideas too.'],group:['Cuéntanos cómo te gustaría reunir a tu comunidad.','Tell us how you’d like to bring your community together.']};
    document.querySelector('#journey-result-title').textContent=tr(...titles[interest]);
    document.querySelector('#journey-result-copy').textContent=[tr(...intro[interest]),tr(...interests[focus]),tr(...groups[company])].join(' ');
    const next=document.querySelector('#journey-next');
    next.href=focus==='identity'?'#tu-identidad':focus==='tools'?'#avances':'#plataforma';
    next.textContent=focus==='identity'?tr('Probar mi identidad ↗','Try my identity ↗'):focus==='tools'?tr('Ver los avances ↗','See the progress ↗'):tr('Explorar los mundos ↗','Explore worlds ↗');
    next.dataset.platform=focus==='worlds'?'worlds':'';
  }
  journey.addEventListener('change',renderJourney);
  document.querySelector('#journey-next').addEventListener('click',event=>{
    if(event.currentTarget.dataset.platform==='worlds') document.querySelector('#tab-worlds').click();
  });
  const screens = {
    player:{src:'assets/accounts-player-editor.png',width:1112,height:587,address:'Kintare Accounts / Players',alt:['Editor real de jugador: skin, vista previa 3D y capa','Real player editor: skin, 3D preview and cape'],points:[
      {x:29,y:37,title:['Tu skin, tu personaje','Your skin, your character'],copy:['El editor permite seleccionar una skin PNG y elegir entre los modelos Classic y Slim. Esta captura muestra el perfil de Erin.','The editor lets you select a PNG skin and choose Classic or Slim models. This capture shows Erin’s profile.']},
      {x:63,y:40,title:['Verlo antes de jugar','See it before you play'],copy:['La vista previa 3D muestra el aspecto del personaje junto a su nombre de jugador. Las capturas se toman de la herramienta real de personalización.','The 3D preview shows the character’s appearance alongside their player name. These screenshots come from the real customization tool.']},
      {x:96,y:37,title:['También los detalles','The details too'],copy:['La sección Cape ofrece una carga de capa en PNG. Aquí puedes ver las herramientas para personalizar el aspecto del jugador en un mismo lugar.','The Cape section offers PNG cape upload. Here you can see the tools for customizing player appearance in one place.']}
    ]},
    servers:{src:'assets/accounts-server-setup.png',width:776,height:724,address:'Kintare Accounts / Servers',alt:['Formulario real para configurar un servidor Minecraft, sin datos de conexión','Real Minecraft server setup form, without connection data'],points:[
      {x:96,y:17,title:['Elegir cómo conectar','Choose how to connect'],copy:['La configuración empieza por el proveedor y el conector de Minecraft. Aquí aparecen las opciones Minecraft direct y RCON para preparar la conexión de un servidor.','Setup starts with the provider and Minecraft connector. Here, Minecraft direct and RCON options help prepare a server connection.']},
      {x:96,y:48,title:['Preparar la experiencia','Prepare the experience'],copy:['Las opciones reúnen modo de control, canal de versión y software del servidor. Su disponibilidad y funcionamiento dependen de la integración y de la versión.','Options bring together control mode, version channel and server software. Availability and behavior depend on the integration and version.']},
      {x:96,y:78,title:['Decidir quién participa','Decide who takes part'],copy:['La configuración reúne acceso por invitación o comunidad de Discord, quién administra el servidor y opciones de filtrado del chat. Herramientas para organizar el espacio que comparte tu gente.','Setup brings together invitation or Discord community access, who manages the server and chat filtering options. Tools for organizing the space your people share.']}
    ]}
  };
  let currentScreen='player',currentPoint=0;
  const tourImage=document.querySelector('#tour-image');
  function renderTour() {
    const screen=screens[currentScreen],point=screen.points[currentPoint];
    tourImage.src=screen.src;tourImage.alt=tr(...screen.alt);tourImage.width=screen.width;tourImage.height=screen.height;
    document.querySelector('#tour-address').textContent=screen.address;
    document.querySelector('#tour-count').textContent=tr(`PUNTO 0${currentPoint+1} / 03`,`POINT 0${currentPoint+1} / 03`);
    document.querySelector('#tour-point-title').textContent=tr(...point.title);
    document.querySelector('#tour-point-copy').textContent=tr(...point.copy);
    document.querySelectorAll('[data-screen]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.screen===currentScreen)));
    const hotspots=document.querySelector('#tour-hotspots'),list=document.querySelector('#tour-point-list');
    hotspots.replaceChildren();list.replaceChildren();
    screen.points.forEach((item,index)=>{
      [hotspots,list].forEach(parent=>{
        const button=document.createElement('button');button.type='button';button.textContent=String(index+1);
        button.setAttribute('aria-label',`${index+1}. ${tr(...item.title)}`);button.setAttribute('aria-pressed',String(index===currentPoint));
        if(parent===hotspots){
          button.className='hotspot';
          const imageRatio=screen.width/screen.height,frameRatio=16/10;
          const fitX=Math.min(1,imageRatio/frameRatio),fitY=Math.min(1,frameRatio/imageRatio);
          button.style.left=`${(1-fitX)*50+item.x*fitX}%`;
          button.style.top=`${(1-fitY)*50+item.y*fitY}%`;
        }
        button.addEventListener('click',()=>{currentPoint=index;renderTour();const replacement=(parent===hotspots?hotspots:list).children[index];replacement.focus({preventScroll:true});});
        parent.append(button);
      });
    });
    const full=document.querySelector('#capture-full');full.src=screen.src;full.alt=tourImage.alt;full.width=screen.width;full.height=screen.height;
  }
  document.querySelectorAll('[data-screen]').forEach(button=>button.addEventListener('click',()=>{currentScreen=button.dataset.screen;currentPoint=0;renderTour();}));
  document.querySelector('.expand-capture').addEventListener('click',()=>document.querySelector('#capture-dialog').showModal());
  const profileForm=document.querySelector('#profile-form');
  profileForm.addEventListener('submit',event=>event.preventDefault());
  const colors={gold:'#e5a83b',sage:'#9fb3a0',lilac:'#a5a2ce'};
  function renderProfile(){
    const data=new FormData(profileForm),name=String(data.get('name')).trim()||tr('Explorador','Explorer');
    document.querySelector('#profile-display').textContent=name;
    const initials=name.split(/\s+/).slice(0,2).map(part=>Array.from(part)[0]||'').join('').toLocaleUpperCase();
    document.querySelector('#profile-initials').textContent=initials;
    document.querySelector('#profile-initials').hidden=data.get('avatar')==='kintare';
    document.querySelector('#profile-logo').hidden=data.get('avatar')!=='kintare';
    document.querySelector('.profile-preview').style.setProperty('--profile-accent',colors[data.get('color')]||colors.gold);
  }
  profileForm.addEventListener('input',renderProfile);
  const filters=[...document.querySelectorAll('[data-status]')];
  filters.forEach(button=>button.addEventListener('click',()=>{
    filters.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    document.querySelectorAll('[data-phase]').forEach(item=>item.hidden=button.dataset.status!=='all'&&item.dataset.phase!==button.dataset.status);
  }));
  const requestForm=document.querySelector('#request-form'),requestMessage=document.querySelector('#request-message'),requestKind=document.querySelector('#request-kind');
  const feedback=document.querySelector('#request-feedback');
  const requestNames={access:['conocer las opciones de acceso','learn about access options'],collaborate:['colaborar con Kintare','collaborate with Kintare'],project:['proponer un proyecto para la galería','suggest a project for the gallery']};
  function requestText(){
    const intent=tr(...requestNames[requestKind.value]);
    return tr(`Hola Erin, me gustaría ${intent}.`,`Hi Erin, I’d like to ${intent}.`)+`\n\n${requestMessage.value.trim()}`;
  }
  function renderRequest(){
    document.querySelector('#request-preview').textContent=requestText();
    requestMessage.placeholder=tr('Por ejemplo: organizo una comunidad y me gustaría conocer las opciones para compartir un mundo.','For example: I run a community and would like to learn about sharing a world.');
  }
  requestForm.addEventListener('input',()=>{feedback.textContent='';renderRequest();});
  requestForm.querySelector('[type="submit"]').disabled=false;
  requestForm.addEventListener('submit',async event=>{
    event.preventDefault();
    try{await navigator.clipboard.writeText(requestText());feedback.textContent=tr('Mensaje copiado. Envíalo a erin_max_ en Discord; todavía no lo hemos recibido.','Message copied. Send it to erin_max_ on Discord; we haven’t received it yet.');}
    catch{requestForm.querySelector('details').open=true;feedback.textContent=tr('Puedes seleccionar y copiar el mensaje de la vista previa. Después, envíalo por Discord.','Select and copy the message from the preview, then send it on Discord.');}
  });
  document.querySelectorAll('[data-request]').forEach(button=>button.addEventListener('click',()=>{
    requestKind.value=button.dataset.request;renderRequest();
    document.querySelector('#participa').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    requestMessage.focus({preventScroll:true});
  }));
  function translate(){
    textNodes.forEach(node=>{node.innerHTML=lang()==='en'?(english[node.dataset.k]??spanish.get(node)):spanish.get(node);});
    renderJourney();renderTour();renderProfile();renderRequest();feedback.textContent='';
  }
  new MutationObserver(translate).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  translate();
})();
