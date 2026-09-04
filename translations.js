/* =====================================================================
   ADI San Juan de Peñas Blancas — shared data, translations, and logic
   Used by every page. Edit the content below to update the site.
   ===================================================================== */

/* ---------------- EDITABLE CONTENT ---------------- */

// ADI board — from the official Registro Público personería jurídica document
const BOARD = [
  { role_es:"Presidencia", role_en:"President", name:"Rocío Trejos Santamaría" },
  { role_es:"Vicepresidencia", role_en:"Vice President", name:"Adán Andrey Carvajal Barquero" },
  { role_es:"Tesorería", role_en:"Treasurer", name:"Álvaro Castro Arrieta" },
  { role_es:"Secretaría", role_en:"Secretary", name:"Silvia Raquel Vargas Zúñiga" },
  { role_es:"Vocal 1", role_en:"Board Member 1", name:"Víctor Manuel Porras Zúñiga" },
  { role_es:"Vocal 2", role_en:"Board Member 2", name:"Juan Luis Rojas Zúñiga" },
  { role_es:"Vocal 3", role_en:"Board Member 3", name:"José María Zúñiga Fernández" },
  { role_es:"Fiscalía", role_en:"Fiscal / Oversight", name:"Hazel María Arias Chaves" },
];

// History timeline — edit dates/descriptions as the community confirms them
const TIMELINE = [
  { year:"~1946", label_es:"Primeras familias", label_en:"First families settle",
    desc_es:"Familias campesinas abren camino y construyen las primeras viviendas.", desc_en:"Farming families open the road and build the first homes." },
  { year:"1951", label_es:"Se crea el distrito", label_en:"District is created",
    desc_es:"El distrito de Peñas Blancas se funda oficialmente.", desc_en:"The district of Peñas Blancas is officially founded." },
  { year:"1987", label_es:"Abre la Escuela", label_en:"School opens",
    desc_es:"La Escuela Emilio Castro Gómez abre sus puertas.", desc_en:"Escuela Emilio Castro Gómez opens its doors." },
  { year:"1991", label_es:"Llega el agua potable", label_en:"Piped water arrives",
    desc_es:"Se construye el Acueducto Rural Las Delicias.", desc_en:"The Acueducto Rural Las Delicias is built." },
  { year:"1994", label_es:"Nace Finca Luna Nueva", label_en:"Finca Luna Nueva begins",
    desc_es:"Inicia como finca orgánica; en 1999 se convierte en eco-lodge con la llegada de Tom y Terry Newmark.", desc_en:"Begins as an organic farm; becomes an eco-lodge in 1999 when Tom and Terry Newmark arrive." },
  { year:"2006", label_es:"Abre el Liceo Rural", label_en:"Liceo Rural opens",
    desc_es:"San Juan cuenta por primera vez con educación secundaria propia.", desc_en:"San Juan gets its own secondary school for the first time." },
  { year:"2008", label_es:"Llega el Centro Soltis", label_en:"Centro Soltis arrives",
    desc_es:"Texas A&M abre su centro de investigación junto a la comunidad.", desc_en:"Texas A&M opens its research center next to the community." },
  { year:"2010", label_es:"Se funda la ADI", label_en:"The ADI is founded",
    desc_es:"Nace la Asociación de Desarrollo Integral de San Juan de Peñas Blancas.", desc_en:"The Asociación de Desarrollo Integral of San Juan de Peñas Blancas is founded." },
  { year:"2016", label_es:"Abre Tierra Valiente", label_en:"Tierra Valiente opens",
    desc_es:"El hotel-cooperativa Tierra Valiente inicia operaciones.", desc_en:"The Tierra Valiente hotel-cooperative begins operating." },
  { year:"2015–2022", label_es:"Se pavimenta el camino principal", label_en:"Main road gets paved",
    desc_es:"Con apoyo de la Embajada Alemana, el Gobierno de Costa Rica, DINADECO y la comunidad.", desc_en:"With support from the German Embassy, the Costa Rican government, DINADECO, and the community." },
  { year:"2023", label_es:"Llegan Educatours y Offbeat Travel", label_en:"Educatours & Offbeat Travel arrive",
    desc_es:"Comienzan alianzas de turismo educativo con grupos internacionales.", desc_en:"Educational-tourism partnerships begin with international groups." },
];

// Aqueduct forms — replace href="#" with a link to the real PDF once uploaded
const FORMS = [
  { name_es:"Solicitud de conexión nueva", name_en:"New Connection Request", desc_es:"Para solicitar una nueva conexión de agua al acueducto.", desc_en:"To request a new water connection to the aqueduct." },
  { name_es:"Solicitud de traspaso de derechos", name_en:"Transfer of Rights Request", desc_es:"Para traspasar la conexión a nombre de otra persona.", desc_en:"To transfer the connection to another person's name." },
  { name_es:"Reporte de daño o fuga", name_en:"Damage / Leak Report", desc_es:"Para reportar fugas, daños en tubería o falta de agua.", desc_en:"To report leaks, pipe damage, or lack of water." },
  { name_es:"Solicitud de exoneración", name_en:"Exemption Request", desc_es:"Para solicitar exoneración del pago por casos especiales.", desc_en:"To request a payment exemption for special cases." },
  { name_es:"Formulario de queja o sugerencia", name_en:"Complaint / Suggestion Form", desc_es:"Para enviar quejas, dudas o sugerencias a la ADI.", desc_en:"To send complaints, questions, or suggestions to the ADI." },
];

// Calendar — replace with real upcoming activities
const EVENTS = [
  { day:"", month_es:"Domingos", month_en:"Sundays", title_es:"Clase de inglés gratuita", title_en:"Free English class", desc_es:"3:30 pm – 5:00 pm en el acueducto. Todas las edades y niveles son bienvenidos.", desc_en:"3:30–5:00 pm at the acueducto. All ages and levels welcome." },
  { day:"4", month_es:"SEP", month_en:"SEP", title_es:"Reunión del grupo de adultos mayores", title_en:"Adultos Mayores group meeting", desc_es:"1:00 pm – 2:00 pm.", desc_en:"1:00–2:00 pm." },
];

/* ---------------- TRANSLATIONS ---------------- */
const I18N = {
  es: {
    brand:"ADI San Juan de Peñas Blancas",
    nav_inicio:"Inicio", nav_laadi:"La ADI", nav_comunidad:"Nuestra Comunidad",
    nav_turismo:"Turismo y Emprendimientos", nav_acueducto:"Acueducto",
    nav_actividades:"Actividades", nav_contacto:"Contacto",
    langBtn:"EN", dl:"Descargar",

    footer_text:'Sitio de la <strong>Asociación de Desarrollo Integral de San Juan de Peñas Blancas</strong> · San Ramón, Alajuela, Costa Rica',

    // ---- HOME ----
    hero_eyebrow:"San Ramón · Alajuela · Costa Rica",
    hero_title:"Bienvenidos a San Juan de Peñas Blancas",
    hero_lead:"Una comunidad rural entre montañas protegidas y ríos, donde la agricultura, la niebla de la tarde y la vida de pueblo se encuentran.",
    hero_btn1:"Turismo y Emprendimientos", hero_btn2:"Contáctenos",
    home_welcome_title:"Una comunidad en crecimiento",
    home_welcome_text:"Este sitio es un punto de encuentro para la comunidad de San Juan y para quienes quieran conocerla: la historia del pueblo, quiénes forman la ADI, qué hacer aquí, y cómo comunicarse con nosotros.",
    ql_laadi_title:"La ADI", ql_laadi_text:"Quiénes somos, la Junta Directiva, comités, proyectos y aliados.",
    ql_comunidad_title:"Nuestra Comunidad", ql_comunidad_text:"Historia, educación, la gente de San Juan y algunos números.",
    ql_turismo_title:"Turismo y Emprendimientos", ql_turismo_text:"Fincas, hospedajes y negocios locales para visitar.",
    ql_acueducto_title:"Acueducto", ql_acueducto_text:"Formularios y trámites del servicio de agua.",
    ql_actividades_title:"Actividades", ql_actividades_text:"La agenda comunitaria: clases, reuniones y eventos.",
    ql_contacto_title:"Contacto", ql_contacto_text:"Escríbanos o síganos en redes sociales.",

    // ---- LA ADI ----
    page_laadi_eyebrow:"Organización comunitaria", page_laadi_title:"La ADI",
    page_laadi_sub:"Quiénes somos, cómo estamos organizados, y en qué estamos trabajando.",
    about_adi_title:"¿Qué es la ADI?",
    about_adi_text:"La Asociación de Desarrollo Integral de San Juan de Peñas Blancas es una organización comunitaria que trabaja por el bienestar y el desarrollo de nuestra comunidad. A través de proyectos, iniciativas y alianzas, buscamos responder a las necesidades de San Juan y crear nuevas oportunidades para sus habitantes.",
    directiva_title:"Directiva",
    directiva_sub:"La ADI se fundó en 2010. Nombres y contactos actualizados por la propia Asociación.",
    committees_title:"Comités e Iniciativas",
    com1_title:"Comité de Emergencias", com1_text:"Coordina la respuesta ante situaciones de riesgo y desastres naturales en la comunidad.",
    com2_title:"Comité de Seguridad", com2_text:"Trabaja junto a la Fuerza Pública para fortalecer la seguridad comunitaria.",
    com3_title:"Reciclaje Mensual", com3_text:"Iniciativa mensual en alianza con la ADI de La Fortuna, que recolecta el material reciclable y lo transforma en bloques plásticos y otros productos.",
    projects_title:"Proyectos",
    proj1_title:"Huerta Escolar", proj1_text:"La huerta comunitaria se cederá a la escuela para educación ambiental y alimentación saludable.",
    proj2_title:"Aula de Talleres", proj2_text:"Construcción de un aula dedicada exclusivamente a talleres productivos y formación técnica.",
    proj3_title:"Apartamentos Contrapartida", proj3_text:"Desarrollo de vivienda accesible para familias de la comunidad.",
    allies_title:"Aliados",
    allies_sub:"Organizaciones que trabajan junto a la ADI y la comunidad de San Juan.",
    ally1_title:"Centro Soltis (Texas A&M)", ally1_text:"Centro de investigación y educación de Texas A&M University, ubicado junto a San Juan.",
    ally2_title:"Educatours", ally2_text:"Operador de turismo educativo que trae grupos internacionales a conocer la comunidad.",
    ally3_title:"Offbeat Travel", ally3_text:"Empresa de turismo sostenible enfocada en experiencias con comunidades locales.",
    ally_link:"Sitio web",

    // ---- NUESTRA COMUNIDAD ----
    page_comunidad_eyebrow:"San Juan de Peñas Blancas", page_comunidad_title:"Nuestra Comunidad",
    page_comunidad_sub:"Nuestra historia, nuestra gente, y algunos números que nos describen.",
    historia_eyebrow:"Nuestras raíces", historia_title:"Historia",
    historia_intro:"Las primeras familias llegaron a San Juan alrededor de 1946, abriendo camino y construyendo las primeras viviendas. Cruzar el río Peñas Blancas era todo un reto: primero se hacía en andarivel, luego por un puente hamaca, hasta que finalmente se construyó un puente de cemento.",
    numeros_title:"San Juan en Números",
    fact1_v:"Alajuela", fact1_k:"Provincia",
    fact2_v:"San Ramón", fact2_k:"Cantón",
    fact3_v:"~1946", fact3_k:"Fundada",
    fact4_v:"~379", fact4_k:"Habitantes",
    fact5_v:"62%", fact5_k:"Bosque protegido",
    edu_eyebrow:"Educación en San Juan", edu_title:"Educación",
    edu1_title:"Kínder", edu1_text:"Funciona dentro de la Escuela Emilio Castro Gómez, atendiendo a los niños y niñas en edad preescolar de la comunidad.",
    edu2_title:"Escuela Emilio Castro Gómez", edu2_text:"Abrió sus puertas en 1987 y atiende de primero a sexto grado, en horario de la mañana.",
    edu3_title:"Liceo Rural de San Juan", edu3_text:"Abrió en 2006 y ofrece educación secundaria de sétimo a onceavo año, con talleres socio-productivos y un mariposario construido por los propios estudiantes en 2022.",
    spot_eyebrow:"Gente de San Juan", spot_title:"Persona Destacada",
    spot1_quote:"\"La vida en una comunidad rural nos enseña que la riqueza no siempre se mide en dinero, sino en solidaridad. Aquí un vecino no es solo alguien que vive cerca, es familia. Aquí el esfuerzo diario tiene el aroma a café recién hecho y el sonido del viento entre los árboles.\"",
    spot2_quote:"\"El lugar más lindo del mundo.\"",

    // ---- TURISMO Y EMPRENDIMIENTOS ----
    page_turismo_eyebrow:"Naturaleza y descanso", page_turismo_title:"Turismo y Emprendimientos",
    page_turismo_sub:"Fincas, hospedajes y negocios locales para conocer nuestra comunidad.",
    tour1_tag:"Finca", tour1_text:"Finca de café y chocolate con tours, senderos y hospedaje, dirigida por la familia Villegas.",
    tour2_tag:"Artesanía", tour2_title:"El Rincón de la Costura", tour2_text:"Emprendimiento local de costura y artesanía de la comunidad.",
    tour3_tag:"Hotel", tour3_text:"Cooperativa de hospedaje enfocada en agricultura regenerativa y turismo sostenible.",
    tour4_tag:"Hotel", tour4_text:"Finca orgánica desde 1994, convertida en eco-lodge en 1999 por sus copropietarios Tom y Terry Newmark.",
    tour5_text:"Próximamente: emprendimientos y cabinas Airbnb de la comunidad, en cuanto confirmemos con cada persona.",
    tour_website:"Sitio web", tour_maps:"Ver en el mapa", tour2_pending:"Sitio web y ubicación: pendientes",
    dir_text1:"<strong>Cómo llegar:</strong> San Juan de Peñas Blancas está a unos 15 km al sur de La Fortuna, junto al Centro Soltis de Texas A&M, sobre un camino parcialmente pavimentado.",

    // ---- ACUEDUCTO ----
    page_acueducto_eyebrow:"Servicios comunitarios", page_acueducto_title:"Formularios del Acueducto",
    page_acueducto_sub:"Descargue, complete y entregue estos formularios en la oficina de la ADI.",
    aq_info:"La Asociación Acueducto Rural Las Delicias opera desde 1991 y sirve a San Juan, San Isidro de Peñas Blancas y La Altura.",
    aq_office_text:"Oficina del Acueducto Rural Las Delicias, en San Juan de Peñas Blancas.",

    // ---- ACTIVIDADES ----
    page_actividades_eyebrow:"Agenda comunitaria", page_actividades_title:"Próximas Actividades",
    page_actividades_sub:"Clases, reuniones y eventos que organizamos en San Juan.",

    // ---- CONTACTO ----
    page_contacto_eyebrow:"Escríbanos", page_contacto_title:"Contacto",
    page_contacto_sub:"¿Tiene una sugerencia, consulta o propuesta para la ADI? Nos encantaría escucharla.",
    contact_title:"Envíe su Mensaje", contact_sub:"Complete el formulario y le responderemos lo antes posible.",
    contact_name:"Nombre", contact_email:"Correo electrónico", contact_msg:"Mensaje", contact_send:"Enviar",
    contact_or:"O escríbanos directamente a",
    contact_social_title:"Síganos en redes sociales",
  },

  en: {
    brand:"ADI San Juan de Peñas Blancas",
    nav_inicio:"Home", nav_laadi:"The ADI", nav_comunidad:"Our Community",
    nav_turismo:"Tourism & Businesses", nav_acueducto:"Aqueduct",
    nav_actividades:"Activities", nav_contacto:"Contact",
    langBtn:"ES", dl:"Download",

    footer_text:'Website of the <strong>Asociación de Desarrollo Integral de San Juan de Peñas Blancas</strong> · San Ramón, Alajuela, Costa Rica',

    // ---- HOME ----
    hero_eyebrow:"San Ramón · Alajuela · Costa Rica",
    hero_title:"Welcome to San Juan de Peñas Blancas",
    hero_lead:"A rural community nestled among protected mountains and rivers, where farming, afternoon mist, and small-town life meet.",
    hero_btn1:"Tourism & Businesses", hero_btn2:"Contact Us",
    home_welcome_title:"A community that keeps growing",
    home_welcome_text:"This site is a meeting point for San Juan's community and for anyone getting to know it: the town's history, who makes up the ADI, what to do here, and how to reach us.",
    ql_laadi_title:"The ADI", ql_laadi_text:"Who we are, the Board of Directors, committees, projects, and allies.",
    ql_comunidad_title:"Our Community", ql_comunidad_text:"History, education, the people of San Juan, and a few numbers.",
    ql_turismo_title:"Tourism & Businesses", ql_turismo_text:"Farms, lodging, and local businesses worth visiting.",
    ql_acueducto_title:"Aqueduct", ql_acueducto_text:"Forms and paperwork for the water service.",
    ql_actividades_title:"Activities", ql_actividades_text:"The community agenda: classes, meetings, and events.",
    ql_contacto_title:"Contact", ql_contacto_text:"Write to us or follow us on social media.",

    // ---- LA ADI ----
    page_laadi_eyebrow:"Community organization", page_laadi_title:"The ADI",
    page_laadi_sub:"Who we are, how we're organized, and what we're working on.",
    about_adi_title:"What is the ADI?",
    about_adi_text:"The Asociación de Desarrollo Integral of San Juan de Peñas Blancas is a community organization working for the wellbeing and development of our community. Through projects, initiatives, and partnerships, we work to meet San Juan's needs and create new opportunities for its residents.",
    directiva_title:"Board of Directors",
    directiva_sub:"The ADI was founded in 2010. Names and contacts kept current by the Association.",
    committees_title:"Committees & Initiatives",
    com1_title:"Emergency Committee", com1_text:"Coordinates the community's response to risk situations and natural disasters.",
    com2_title:"Security Committee", com2_text:"Works alongside the national police to strengthen community safety.",
    com3_title:"Monthly Recycling", com3_text:"A monthly initiative in partnership with the La Fortuna ADI, which collects recyclables and turns them into plastic bricks and other products.",
    projects_title:"Projects",
    proj1_title:"School Garden", proj1_text:"The community garden will be handed over to the school for environmental education and healthy eating.",
    proj2_title:"Workshop Classroom", proj2_text:"Building a classroom dedicated exclusively to productive workshops and technical training.",
    proj3_title:"Matching-Fund Housing", proj3_text:"Developing affordable housing for families in the community.",
    allies_title:"Allies",
    allies_sub:"Organizations working alongside the ADI and the San Juan community.",
    ally1_title:"Centro Soltis (Texas A&M)", ally1_text:"Texas A&M University's research and education center, located next to San Juan.",
    ally2_title:"Educatours", ally2_text:"An educational tourism operator that brings international groups to visit the community.",
    ally3_title:"Offbeat Travel", ally3_text:"A sustainable tourism company focused on experiences with local communities.",
    ally_link:"Website",

    // ---- OUR COMMUNITY ----
    page_comunidad_eyebrow:"San Juan de Peñas Blancas", page_comunidad_title:"Our Community",
    page_comunidad_sub:"Our history, our people, and a few numbers that describe us.",
    historia_eyebrow:"Our roots", historia_title:"History",
    historia_intro:"The first families arrived in San Juan around 1946, opening the road and building the first homes. Crossing the río Peñas Blancas was a real challenge: first by cable car, then by a hammock bridge, until a concrete bridge was finally built.",
    numeros_title:"San Juan by the Numbers",
    fact1_v:"Alajuela", fact1_k:"Province",
    fact2_v:"San Ramón", fact2_k:"Canton",
    fact3_v:"~1946", fact3_k:"Founded",
    fact4_v:"~379", fact4_k:"Population",
    fact5_v:"62%", fact5_k:"Protected forest",
    edu_eyebrow:"Education in San Juan", edu_title:"Education",
    edu1_title:"Kindergarten", edu1_text:"Runs inside Escuela Emilio Castro Gómez, serving the community's preschool-age children.",
    edu2_title:"Escuela Emilio Castro Gómez", edu2_text:"Opened in 1987 and serves grades 1–6, in the morning schedule.",
    edu3_title:"Liceo Rural de San Juan", edu3_text:"Opened in 2006, offering secondary education (grades 7–11) with socio-productive workshops and a butterfly garden built by the students themselves in 2022.",
    spot_eyebrow:"People of San Juan", spot_title:"Featured Neighbor",
    spot1_quote:"\"Life in a rural community teaches us that wealth isn't always measured in money, but in solidarity. Here, a neighbor isn't just someone who lives nearby — they're family. Here, the daily effort carries the smell of fresh coffee and the sound of wind through the trees.\"",
    spot2_quote:"\"The most beautiful place in the world.\"",

    // ---- TOURISM & BUSINESSES ----
    page_turismo_eyebrow:"Nature & rest", page_turismo_title:"Tourism & Businesses",
    page_turismo_sub:"Farms, lodging, and local businesses worth visiting.",
    tour1_tag:"Farm", tour1_text:"A coffee and chocolate farm with tours, trails, and lodging, run by a family from the community.",
    tour2_tag:"Craft", tour2_title:"El Rincón de la Costura", tour2_text:"A local sewing and craft business from the community.",
    tour3_tag:"Hotel", tour3_text:"A lodging cooperative focused on regenerative agriculture and sustainable tourism.",
    tour4_tag:"Hotel", tour4_text:"An organic farm since 1994, turned into an eco-lodge in 1999 by co-owners Tom and Terry Newmark.",
    tour5_text:"Coming soon: local entrepreneurs and Airbnb cabins, once we've confirmed with each person.",
    tour_website:"Website", tour_maps:"View on map", tour2_pending:"Website and location: pending",
    dir_text1:"<strong>Getting here:</strong> San Juan de Peñas Blancas is about 15 km south of La Fortuna, next to Texas A&M's Centro Soltis, on a partially paved road.",

    // ---- AQUEDUCT ----
    page_acueducto_eyebrow:"Community services", page_acueducto_title:"Aqueduct Forms",
    page_acueducto_sub:"Download, fill out, and deliver these forms to the ADI office.",
    aq_info:"The Asociación Acueducto Rural Las Delicias has operated since 1991, serving San Juan, San Isidro de Peñas Blancas, and La Altura.",
    aq_office_text:"Office of the Acueducto Rural Las Delicias, in San Juan de Peñas Blancas.",

    // ---- ACTIVITIES ----
    page_actividades_eyebrow:"Community agenda", page_actividades_title:"Upcoming Activities",
    page_actividades_sub:"Classes, meetings, and events we organize in San Juan.",

    // ---- CONTACT ----
    page_contacto_eyebrow:"Get in touch", page_contacto_title:"Contact",
    page_contacto_sub:"Have a suggestion, question, or proposal for the ADI? We'd love to hear it.",
    contact_title:"Send Us a Message", contact_sub:"Fill out the form and we'll get back to you as soon as we can.",
    contact_name:"Name", contact_email:"Email", contact_msg:"Message", contact_send:"Send",
    contact_or:"Or write to us directly at",
    contact_social_title:"Follow us on social media",
  }
};

/* ---------------- RENDER FUNCTIONS (only run if the target container exists on this page) ---------------- */

function renderTimeline(lang){
  const list = document.getElementById("timelineList");
  if(!list) return;
  list.innerHTML = TIMELINE.map(t => `
    <li>
      <span class="year">${t.year}</span>
      <span class="tlabel">${lang==='es'?t.label_es:t.label_en}</span>
      <p class="tdesc">${lang==='es'?t.desc_es:t.desc_en}</p>
    </li>`).join("");
}

function renderBoard(lang){
  const grid = document.getElementById("boardGrid");
  if(!grid) return;
  grid.innerHTML = BOARD.map(m => `
    <div class="board-card">
      <span class="role">${lang==='es'?m.role_es:m.role_en}</span>
      <span class="name">${m.name}</span>
    </div>`).join("");
}

function renderForms(lang){
  const list = document.getElementById("formsList");
  if(!list) return;
  list.innerHTML = FORMS.map(f => `
    <div class="form-row">
      <div>
        <div class="fname">${lang==='es'?f.name_es:f.name_en}</div>
        <div class="fdesc">${lang==='es'?f.desc_es:f.desc_en}</div>
      </div>
      <a class="dl-btn" href="#">${I18N[lang].dl}</a>
    </div>`).join("");
}

function renderEvents(lang){
  const grid = document.getElementById("calGrid");
  if(!grid) return;
  grid.innerHTML = EVENTS.map(e => `
    <div class="cal-card">
      <div class="cal-date"><span class="d">${e.day}</span><span class="m">${lang==='es'?e.month_es:e.month_en}</span></div>
      <div>
        <h4>${lang==='es'?e.title_es:e.title_en}</h4>
        <p>${lang==='es'?e.desc_es:e.desc_en}</p>
      </div>
    </div>`).join("");
}

/* ---------------- LANGUAGE APPLICATION ---------------- */

let currentLang = "es";

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key] !== undefined){
      el.innerHTML = I18N[lang][key];
    }
  });
  const toggleBtn = document.getElementById("langToggle");
  if(toggleBtn) toggleBtn.textContent = I18N[lang].langBtn;

  renderTimeline(lang);
  renderBoard(lang);
  renderForms(lang);
  renderEvents(lang);

  try{ localStorage.setItem("adi_lang", lang); }catch(e){}
}

function initLangToggle(){
  const toggleBtn = document.getElementById("langToggle");
  if(toggleBtn){
    toggleBtn.addEventListener("click", ()=>{
      applyLang(currentLang === "es" ? "en" : "es");
    });
  }
  const navToggleBtn = document.getElementById("navToggleBtn");
  const navLinks = document.getElementById("navLinks");
  if(navToggleBtn && navLinks){
    navToggleBtn.addEventListener("click", ()=>{
      navLinks.classList.toggle("open");
    });
  }
}

/* ---------------- CONTACT FORM (contacto.html only) ---------------- */
/* TODO: replace ADI_EMAIL with the ADI's real contact email if it ever changes. */
const ADI_EMAIL = "adisanjuandepenasblancas@gmail.com";

function initContactForm(){
  const form = document.getElementById("contactForm");
  if(!form) return;
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("cf_name").value;
    const email = document.getElementById("cf_email").value;
    const msg = document.getElementById("cf_msg").value;
    const subject = encodeURIComponent(`Mensaje de ${name} — sitio web ADI San Juan`);
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${ADI_EMAIL}?subject=${subject}&body=${body}`;
  });
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  initLangToggle();
  initContactForm();
  let startLang = "es";
  try{
    const saved = localStorage.getItem("adi_lang");
    if(saved === "es" || saved === "en") startLang = saved;
  }catch(e){}
  applyLang(startLang);
});
