(() => {
document.documentElement.classList.add("js");
const U = "https://github.com/IngMaicollAndresCalderonPardo/";
const MAIL = "ing.maicollcalderonpardo@gmail.com";

const T = {
es: {
  nav_profile:"Perfil", nav_work:"Trayectoria", nav_projects:"Proyectos", nav_method:"Método", nav_contact:"Contacto",
  hero_eyebrow:"Full Stack .NET Developer · Mid-level",
  hero_lead:"Construyo sistemas que reemplazan procesos manuales por plataformas web a escala nacional. C#, .NET 8, Oracle PL/SQL y React, con análisis previo y la IA como copiloto.",
  hero_cta:"Ver trayectoria",
  f1k:"Antes", f1v:"Excel, plantillas llenadas a mano, sistemas heredados",
  f2k:"Mi parte", f2v:"Análisis, PL/SQL y C#",
  f3k:"Después", f3v:"Plataformas web de alcance nacional",
  st1:"años de experiencia", st2:"equipos / proyectos", st3v:"Nacional", st3:"alcance en producción", st4:"equipos internacionales",
  statement:"Entiendo el negocio primero. Después construyo el sistema.",
  about_p1:"Ingeniero de Sistemas (Universidad Cooperativa de Colombia, 2023) con foco en backend C#/.NET sobre bases de datos Oracle y SQL Server. He migrado sistemas heredados (VB, PHP, .NET Framework) a ASP.NET Core y entregado módulos que hoy usan personas en todo el país.",
  about_p2:"Antes de escribir código me gusta entender el negocio: reuniones, flujos, estados y reglas. Con ese contexto analizo, estimo tiempos y recién ahí implemento. Uso IA generativa para medir tareas, explorar arquitectura y acelerar, y siempre reviso lo que produce. Aprendo de forma constante y no me rindo ante un problema difícil.",
  work_t:"Trayectoria", now_word:"hoy", now:"Actual", more:"más al pasar el cursor",
  work_sub:"Desplázate: el stack se ilumina según el rol que estás leyendo.",
  stack_hint:"Stack · se ilumina según el rol visible. Pasa el cursor sobre una habilidad para ver dónde la usé.",
  lv3:"Dominio diario", lv2:"Sólido", lv1:"En crecimiento",
  pr_t:"Proyectos", pr_sub:"Mi trabajo en la Policía Nacional es institucional y no es público; estos repositorios muestran cómo construyo.",
  me_t:"Cómo trabajo",
  ct_t:"Hablemos", ct_sub:"Busco un rol remoto (nacional o internacional) como desarrollador .NET / Full Stack.",
  ct_en:"Inglés: B1 y en mejora activa (trabajé con equipos de EE. UU. en Parserr).",
  copy:"Copiar correo", copied:"Copiado ✓",
  foot:"Hecho a mano con HTML, CSS y JS."
},
en: {
  nav_profile:"Profile", nav_work:"Experience", nav_projects:"Projects", nav_method:"Method", nav_contact:"Contact",
  hero_eyebrow:"Full Stack .NET Developer · Mid-level",
  hero_lead:"I build systems that replace manual processes with nationwide web platforms. C#, .NET 8, Oracle PL/SQL and React, with upfront analysis and AI as a copilot.",
  hero_cta:"See experience",
  f1k:"Before", f1v:"Excel, hand-filled templates, legacy systems",
  f2k:"My part", f2v:"Analysis, PL/SQL and C#",
  f3k:"After", f3v:"Nationwide web platforms",
  st1:"years of experience", st2:"teams / projects", st3v:"Nationwide", st3:"scope in production", st4:"international teams",
  statement:"Business first. Then the system.",
  about_p1:"Systems Engineer (Universidad Cooperativa de Colombia, 2023) focused on C#/.NET backends over Oracle and SQL Server. I've migrated legacy systems (VB, PHP, .NET Framework) to ASP.NET Core and shipped modules now used by people across the whole country.",
  about_p2:"Before writing code I like to understand the business: meetings, flows, states and rules. With that context I analyze, estimate, and only then implement. I use generative AI to size tasks, explore architecture and move faster, and I always review what it produces. I learn constantly and don't give up on hard problems.",
  work_t:"Experience", now_word:"today", now:"Current", more:"on hover",
  work_sub:"Scroll: the stack lights up for the role you're reading.",
  stack_hint:"Stack · lights up for the visible role. Hover a skill to see where I used it.",
  lv3:"Daily driver", lv2:"Solid", lv1:"Growing",
  pr_t:"Projects", pr_sub:"My Policía Nacional work is institutional and not public; these repositories show how I build.",
  me_t:"How I work",
  ct_t:"Let's talk", ct_sub:"I'm looking for a remote role (domestic or international) as a .NET / Full Stack developer.",
  ct_en:"English: B1 and actively improving (I worked with US teams at Parserr).",
  copy:"Copy email", copied:"Copied ✓",
  foot:"Handcrafted with HTML, CSS and JS."
}};

const LEVELS = [
 { when:{es:"Nov 2021 – Nov 2022",en:"Nov 2021 – Nov 2022"}, role:{es:"Practicante de Ingeniería de Sistemas",en:"Systems Engineering Intern"}, org:"Sistemas y Computadores · Bucaramanga",
   pts:{es:["Migré aplicaciones de VB.NET a C# en el proyecto Impuesto de Registro, mejorando rendimiento y mantenibilidad.","Aprendí a leer código heredado ajeno y a modernizarlo sin romper el negocio."],
        en:["Migrated applications from VB.NET to C# on the Impuesto de Registro project, improving performance and maintainability.","Learned to read someone else's legacy code and modernize it without breaking the business."]},
   tech:["VB.NET","C#","SQL Server"] },
 { when:{es:"Nov 2022 – Abr 2024",en:"Nov 2022 – Apr 2024"}, role:{es:"Ingeniero de Sistemas",en:"Systems Engineer"}, org:"Sistemas y Computadores · Bucaramanga",
   pts:{es:["Desarrollo y mantenimiento de aplicaciones web y de escritorio (WebForms, Razor Pages, .NET Core, Angular).","Diseño y consumo de APIs RESTful; generación dinámica de PDFs y códigos QR.","Automatización de procesos en SQL Server y Oracle; mejoras de microservicios con Docker.","Pipelines CI/CD en Azure DevOps con plantillas YAML y variables dinámicas."],
        en:["Built and maintained web and desktop apps (WebForms, Razor Pages, .NET Core, Angular).","Designed and consumed RESTful APIs; dynamic PDF and QR code generation.","Automated database processes in SQL Server and Oracle; improved Docker microservices.","CI/CD pipelines in Azure DevOps with YAML templates and dynamic variables."]},
   tech:[".NET Core","Angular","Docker","Azure DevOps","Oracle","REST"] },
 { when:{es:"Jul 2024 – Feb 2025",en:"Jul 2024 – Feb 2025"}, role:{es:"Ingeniero de Sistemas",en:"Systems Engineer"}, org:"Dirección de Sanidad · Policía Nacional",
   pts:{es:["Migré aplicaciones heredadas de PHP a C# y ASP.NET MVC.","Desarrollé los módulos de Enfermería y Oncología, reemplazando procesos manuales en Excel.","Diseño de bases de datos, diagramas UML y pruebas unitarias con xUnit sobre Oracle."],
        en:["Migrated legacy PHP applications to C# and ASP.NET MVC.","Built the Nursing and Oncology modules, replacing manual Excel processes.","Database design, UML diagrams and xUnit unit tests on Oracle."]},
   tech:["ASP.NET MVC","Oracle","xUnit","UML"] },
 { when:{es:"Feb 2025 – Ago 2025",en:"Feb 2025 – Aug 2025"}, role:{es:"Formación autodirigida",en:"Self-directed training"}, org:{es:"Inglés y proyectos de práctica",en:"English and practice projects"},
   pts:{es:["Estudio diario de inglés: de A2 a B1.","Construí y publiqué proyectos en GitHub: microservicios con Python + React + Docker, Angular + ASP.NET Core, arquitectura limpia en .NET 8, xUnit y PL/SQL.","Convertí una pausa en preparación: más inglés, más práctica y mejores bases."],
        en:["Daily English study: from A2 to B1.","Built and published GitHub projects: Python + React + Docker microservices, Angular + ASP.NET Core, clean architecture in .NET 8, xUnit and PL/SQL.","Turned a pause into preparation: more English, more practice and stronger foundations."]},
   tech:["English","Python","React","Docker","PostgreSQL","xUnit"] },
 { when:{es:"2025 – 2026",en:"2025 – 2026"}, role:{es:"Developer Full Stack",en:"Full Stack Developer"}, org:"Stentro", url:"https://stentro.co/",
   pts:{es:["Miembro del equipo de desarrollo de una plataforma de inventario, ventas, caja y fiados para pymes, con un asesor de IA que sugiere qué reponer, qué rebajar y dónde ganar más.","APIs en .NET con Entity Framework; trabajo en backend y frontend, que se ejecutan como procesos independientes.","Servicios contenerizados con Docker; la plataforma está organizada y separada por industrias."],
        en:["Member of the development team of an inventory, sales, cash-register and customer-credit platform for small businesses, with an AI advisor that suggests what to reorder, what to discount and where to earn more.","APIs in .NET with Entity Framework; I work on backend and frontend, which run as independent processes.","Services containerized with Docker; the platform is organized and separated by industry."]},
   tech:[".NET","Entity Framework","APIs REST","Docker"] },
 { when:{es:"Sep 2025 – Nov 2025",en:"Sep 2025 – Nov 2025"}, role:{es:"Desarrollador .NET (remoto, EE. UU.)",en:".NET Developer (remote, USA)"}, org:"Parserr",
   pts:{es:["APIs y endpoints en .NET/C# con Entity Framework.","Pruebas unitarias bajo la metodología de testing de la compañía.","Integración backend con React y coordinación con el equipo frontend.","Comunicación técnica en inglés con equipos internacionales y con el CEO; Agile/Scrum, Azure y Rider."],
        en:[".NET/C# APIs and endpoints with Entity Framework.","Unit testing following the company's testing methodology.","Backend integration with React and coordination with the frontend team.","Technical communication in English with international teams and the CEO; Agile/Scrum, Azure and Rider."]},
   tech:[".NET","Entity Framework","React","Azure","Scrum"] },
 { when:{es:"Nov 2025 – Jul 2026",en:"Nov 2025 – Jul 2026"}, role:{es:"Ingeniero de Sistemas",en:"Systems Engineer"}, org:"Dirección de Sanidad · Policía Nacional",
   pts:{es:["Migración de aplicaciones heredadas de VB a C# y ASP.NET MVC.","Módulo de Cirugía: reemplacé plantillas llenadas a mano por formularios web.","Pruebas con xUnit, Oracle y entregables mensuales cumplidos a tiempo."],
        en:["Migrated legacy VB applications to C# and ASP.NET MVC.","Surgery module: replaced hand-filled templates with web forms.","xUnit tests, Oracle, and monthly deliverables met on schedule."]},
   tech:["C#","ASP.NET MVC","Oracle","xUnit"] },
 { boss:true, when:{es:"Feb 2026 – Actualidad",en:"Feb 2026 – Present"}, role:{es:"Ingeniero de Sistemas (contratista)",en:"Systems Engineer (contractor)"}, org:"DIBIE · Dirección de Bienestar Social y Familia · Policía Nacional",
   pts:{es:["Migración del sistema nacional de bienestar institucional (SIBIS) de .NET Framework 4.8 + Entity Framework a ASP.NET Core 8 MVC, con acceso a datos vía PL/SQL puro.","Módulo de Afiliaciones: solicitudes, estados del proceso, certificados, beneficiarios y cambios de fechas.","Módulo de Alianzas, diseñado desde cero: empresas, convenios, prórrogas y control de vigencias de contratos.","Integración con PSE y descuento por nómina, y con sistemas externos (SIATH, LSI, CASUR).","Generación de certificados y carnés en PDF (QuestPDF), códigos de barras/QR (ZXing) y reportes Excel protegidos.","Módulos publicados en producción con uso a nivel nacional; hoy en soporte y mejora continua."],
        en:["Migrated the national institutional welfare system (SIBIS) from .NET Framework 4.8 + Entity Framework to ASP.NET Core 8 MVC, with data access via pure PL/SQL.","Affiliations module: requests, process states, certificates, beneficiaries and date changes.","Alliances module, designed from scratch: companies, agreements, extensions and contract validity control.","PSE payment gateway and payroll-deduction integration, plus external systems (SIATH, LSI, CASUR).","Certificate and ID-card PDFs (QuestPDF), barcodes/QR (ZXing) and password-protected Excel reports.","Modules live in production with nationwide use; now in support and continuous improvement."]},
   tech:["ASP.NET Core 8","Oracle PL/SQL","QuestPDF","ZXing","PSE","Excel"] }
];

// [nombre, nivel 1-3, descripción, palabras clave para iluminar según el rol ("*" = transversal)]
const SKILLS = [
 {g:{es:"Backend",en:"Backend"}, items:[
  ["C# / .NET 8",3,{es:"Core, MVC, Razor Pages, Framework",en:"Core, MVC, Razor Pages, Framework"},["c#",".net","asp.net"]],
  ["ASP.NET Core MVC",3,{es:"Arquitectura limpia, SOLID",en:"Clean architecture, SOLID"},["asp.net","razor"]],
  ["REST APIs",3,{es:"Versionado, JWT, integraciones",en:"Versioning, JWT, integrations"},["rest","api"]],
  ["xUnit / Moq",2,{es:"Pruebas unitarias y cobertura",en:"Unit testing and coverage"},["xunit","moq","unit","unitarias"]]]},
 {g:{es:"Datos",en:"Data"}, items:[
  ["Oracle PL/SQL",3,{es:"Procedimientos, paquetes, triggers",en:"Procedures, packages, triggers"},["oracle","pl/sql"]],
  ["SQL Server",2,{es:"T-SQL, SSMS, automatización",en:"T-SQL, SSMS, automation"},["sql server"]],
  ["PostgreSQL",1,{es:"Migraciones con Alembic",en:"Alembic migrations"},["postgres"]]]},
 {g:{es:"Frontend",en:"Frontend"}, items:[
  ["React",2,{es:"Hooks, SPA, consumo de APIs",en:"Hooks, SPA, API consumption"},["react"]],
  ["Angular",2,{es:"TypeScript, formularios, servicios",en:"TypeScript, forms, services"},["angular"]],
  ["JS / TS / Bootstrap",2,{es:"UI responsiva",en:"Responsive UI"},["javascript","typescript","bootstrap","angular","react"]]]},
 {g:{es:"DevOps y flujo",en:"DevOps & workflow"}, items:[
  ["Docker / Compose",2,{es:"Microservicios reproducibles",en:"Reproducible microservices"},["docker"]],
  ["Azure DevOps CI/CD",2,{es:"Pipelines YAML",en:"YAML pipelines"},["azure","ci/cd"]],
  ["Git",3,{es:"Control de versiones",en:"Version control"},["*"]],
  ["IA generativa",3,{es:"Análisis, estimación y código asistido",en:"Analysis, estimation and assisted coding"},["*"]]]},
 {g:{es:"Versatilidad",en:"Versatility"}, items:[
  ["Código heredado",3,{es:"Leer y migrar VB, PHP y .NET Framework",en:"Reading and migrating VB, PHP and .NET Framework"},["heredad","legacy","vb","php"]],
  ["Jobs en base de datos",2,{es:"Tareas programadas y por lotes en Oracle/SQL Server",en:"Scheduled and batch tasks in Oracle/SQL Server"},["automat","tarea","job"]],
  ["Android / Kotlin",1,{es:"Apps móviles en Android Studio, Kotlin básico",en:"Mobile apps in Android Studio, basic Kotlin"},["android","kotlin"]],
  ["Unity",1,{es:"Formación en desarrollo de juegos",en:"Game development training"},["unity"]]]}
];

const PROJECTS = [
 {n:"StudentCourseApp", t:["C#",".NET 8","EF Core 9","MVC"], d:{es:"Gestión de estudiantes y materias con arquitectura limpia y principios SOLID. Desarrollada como prueba técnica.",en:"Student and course management with clean architecture and SOLID principles. Built as a technical assessment."}},
 {n:"fullstack-python-react-docker", t:["Python","React","Docker","JWT","PostgreSQL"], d:{es:"Dos microservicios (Usuarios y Publicaciones) con autenticación JWT, migraciones Alembic y orquestación con Docker Compose.",en:"Two microservices (Users and Posts) with JWT auth, Alembic migrations and Docker Compose orchestration."}},
 {n:"contacts-management-angular-dotnet", t:["Angular","ASP.NET Core","TypeScript"], d:{es:"CRUD de contactos con validaciones en frontend y backend sobre una Web API.",en:"Contacts CRUD with frontend and backend validation over a Web API."}},
 {n:"LibraryApp", t:["ASP.NET Core MVC","SQL Server"], d:{es:"Gestión de biblioteca con validaciones, publicaciones y scripts de base de datos.",en:"Library management with validation, publications and database scripts."}},
 {n:"curso-unit-testing-csharp", t:["xUnit","Moq","Coverlet"], d:{es:"Pruebas unitarias con dependencias simuladas, cobertura de código y base para CI/CD.",en:"Unit tests with mocked dependencies, code coverage and a CI/CD-ready setup."}},
 {n:"curso-plsql", t:["Oracle","PL/SQL"], d:{es:"Ejercicios de procedimientos, funciones, paquetes y triggers en Oracle.",en:"Exercises on procedures, functions, packages and triggers in Oracle."}}
];

const STEPS = [
 {t:{es:"Contexto primero",en:"Context first"}, d:{es:"Reuniones, flujos y reglas del negocio antes de abrir el editor.",en:"Meetings, flows and business rules before opening the editor."}},
 {t:{es:"Análisis",en:"Analysis"}, d:{es:"Modelo de datos, estados y casos borde documentados.",en:"Data model, states and edge cases documented."}},
 {t:{es:"Estimación con IA",en:"AI-assisted estimation"}, d:{es:"Divido en tareas y mido tiempos de implementación con apoyo de IA.",en:"I split work into tasks and size implementation time with AI support."}},
 {t:{es:"Implementación",en:"Implementation"}, d:{es:"Código limpio, PL/SQL y C# mantenibles, revisando lo que la IA propone.",en:"Clean, maintainable C# and PL/SQL, reviewing what AI proposes."}},
 {t:{es:"Pruebas y entrega",en:"Testing and delivery"}, d:{es:"xUnit, validación con usuarios y despliegue a producción.",en:"xUnit, user validation and production release."}},
 {t:{es:"Soporte y mejora",en:"Support and improvement"}, d:{es:"Acompaño el sistema en producción y aprendo de cada incidente.",en:"I stay with the system in production and learn from every incident."}}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const root = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover:hover) and (pointer:fine)").matches;

let lang = "es", active = -1;

// texto de cada rol (ambos idiomas) para cruzar con las habilidades
const HAY = LEVELS.map(l => (l.tech.join(" ")+" "+l.pts.es.join(" ")+" "+l.pts.en.join(" ")+" "+l.role.es+" "+l.role.en).toLowerCase());
const FLAT = SKILLS.flatMap(g => g.items);
const uses = (s, i) => s[3].some(k => k === "*" || HAY[i].includes(k));

function meter(n){ return `<span class="sm" data-l="${n}">${[1,2,3].map(i=>`<i${i<=n?' class="on"':""}></i>`).join("")}</span>`; }

function render(){
  const t = T[lang];
  root.lang = lang;
  $$("[data-i18n]").forEach(el => { const v = t[el.dataset.i18n]; if (v != null) el.textContent = v; });
  $("#lang").textContent = lang === "es" ? "EN" : "ES";

  // trayectoria: del más reciente al más antiguo
  const order = LEVELS.map((_, i) => i).reverse();
  $("#tl").innerHTML = order.map(i => {
    const l = LEVELS[i], pts = l.pts[lang], org = typeof l.org === "string" ? l.org : l.org[lang];
    const [first, ...rest] = pts;
    return `<article class="role rv${l.boss?" now":""}" tabindex="0" data-i="${i}">
      <span class="dot"></span>
      <div class="when">${l.when[lang]}</div>
      <div class="rb">
        <h3>${l.role[lang]}${l.boss?`<span class="now-tag"><i></i>${t.now}</span>`:""}</h3>
        <p class="org">${l.url?`<a href="${l.url}" target="_blank" rel="noopener">${org} ↗</a>`:org}</p>
        <ul class="pts"><li>${first}</li></ul>
        ${rest.length?`<div class="extra"><div><ul class="pts" style="margin-top:0">${rest.map(p=>`<li>${p}</li>`).join("")}</ul></div></div>
        <span class="more-hint">+${rest.length} · ${t.more}</span>`:""}
        <div class="tech">${l.tech.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
      </div>
    </article>`;
  }).join("");

  // stack
  let n = 0;
  $("#stack").innerHTML = `<p class="stack-head">${t.stack_hint}</p>
    <div class="legend"><span>${meter(3)}${t.lv3}</span><span>${meter(2)}${t.lv2}</span><span>${meter(1)}${t.lv1}</span></div>` +
    SKILLS.map(g => `<div class="gl">${g.g[lang]}</div>` + g.items.map(s => {
      const idx = n++;
      return `<div class="sk" tabindex="0" data-s="${idx}"><span class="sn">${s[0]}</span>${meter(s[1])}<span class="sd">${s[2][lang]}</span></div>`;
    }).join("")).join("");

  // proyectos
  $("#projs").innerHTML = PROJECTS.map((p, i) => `
    <a class="proj" href="${U+p.n}" target="_blank" rel="noopener">
      <span class="pi">0${i+1}</span><span class="pn">${p.n}</span>
      <span class="pt">${p.t.join(" · ")}</span><span class="pa">↗</span>
      <p class="pd">${p.d[lang]}</p></a>`).join("");
  $("#projs").classList.add("rv");

  // método
  $("#steps").innerHTML = STEPS.map((s, i) => `<li class="rv" style="--d:${i*.09}s"><span class="n">0${i+1}</span><b>${s.t[lang]}</b><span class="d">${s.d[lang]}</span></li>`).join("");

  bind();
  if (active < 0) active = LEVELS.length - 1;
  setActive(active);
}

/* ---------- iluminar el stack según el rol visible ---------- */
function setActive(i){
  active = i;
  $$(".role").forEach(r => r.classList.toggle("on", +r.dataset.i === i));
  $("#stack").classList.add("has-active");
  $$(".sk").forEach(el => el.classList.toggle("lit", uses(FLAT[+el.dataset.s], i)));
}

/* ---------- observadores ---------- */
let rvObs, roleObs, secObs;
function bind(){
  rvObs && rvObs.disconnect(); roleObs && roleObs.disconnect();
  rvObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); rvObs.unobserve(e.target); } }), {threshold:.12, rootMargin:"0px 0px -6% 0px"});
  $$(".rv").forEach(el => rvObs.observe(el));
  roleObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(+e.target.dataset.i); }), {rootMargin:"-45% 0px -50% 0px"});
  $$(".role").forEach(el => roleObs.observe(el));
}
secObs = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$(".top nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), {rootMargin:"-40% 0px -55% 0px"});
$$(".sec").forEach(s => secObs.observe(s));

/* resaltar los roles donde usé una habilidad (al pasar el cursor o enfocar) */
const stack = $("#stack"), tl = $("#tl");
function hl(el){
  const s = el && el.closest(".sk");
  if (!s){ tl.classList.remove("hovering"); $$(".role").forEach(r => r.classList.remove("hl")); return; }
  const sk = FLAT[+s.dataset.s];
  tl.classList.add("hovering");
  $$(".role").forEach(r => r.classList.toggle("hl", uses(sk, +r.dataset.i)));
}
stack.addEventListener("mouseover", e => hl(e.target));
stack.addEventListener("mouseleave", () => hl(null));
stack.addEventListener("focusin", e => hl(e.target));
stack.addEventListener("focusout", () => hl(null));

/* ---------- nombre: las letras reaccionan al cursor ---------- */
(function name(){
  const h = $("#name");
  h.innerHTML = ["Maicoll","Calderón"].map((w, r) =>
    `<span class="ln l${r}" aria-hidden="true">${[...w].map((c, k) => `<span class="ch" style="--k:${k + r*4}">${c}</span>`).join("")}</span>`).join("");
  if (reduced || !canHover) return;
  const letters = $$(".ch"); let px = -9999, py = -9999, raf = 0;
  const hero = $(".hero");
  const tick = () => {
    raf = 0;
    letters.forEach(el => {
      const b = el.getBoundingClientRect(), cx = b.left + b.width/2, cy = b.top + b.height/2;
      const d = Math.hypot(px - cx, py - cy), p = Math.max(0, 1 - d/230);
      el.style.setProperty("--p", p.toFixed(3));
      el.style.setProperty("--y", (p*p*34).toFixed(1));
    });
  };
  hero.addEventListener("pointermove", e => { px = e.clientX; py = e.clientY; if (!raf) raf = requestAnimationFrame(tick); });
  hero.addEventListener("pointerleave", () => { px = py = -9999; if (!raf) raf = requestAnimationFrame(tick); });
})();

/* ---------- pizarra de puntos (alcance nacional) ---------- */
$(".dots").innerHTML = Array.from({length:36}, (_, i) => `<i style="animation-delay:${((i*0.53)%3.4).toFixed(2)}s"></i>`).join("");

/* ---------- contadores ---------- */
const cObs = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.count; cObs.unobserve(el);
  if (reduced){ el.textContent = to; return; }
  const t0 = performance.now();
  (function step(now){ const k = Math.min(1, (now - t0)/1100); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); })(t0);
}), {threshold:.6});
$$("[data-count]").forEach(el => cObs.observe(el));

/* ---------- scroll: barra, cabecera, línea de tiempo ---------- */
let sTick = 0;
function onScroll(){
  if (sTick) return;
  sTick = requestAnimationFrame(() => {
    sTick = 0;
    const max = document.documentElement.scrollHeight - innerHeight;
    $("#sp").style.setProperty("--sp", max > 0 ? (scrollY/max).toFixed(4) : 0);
    $("#topbar").classList.toggle("stuck", scrollY > 8);
    const r = tl.getBoundingClientRect();
    tl.style.setProperty("--p", Math.max(0, Math.min(1, (innerHeight*.5 - r.top)/r.height)).toFixed(4));
  });
}
addEventListener("scroll", onScroll, {passive:true}); addEventListener("resize", onScroll);

/* ---------- controles ---------- */
$("#lang").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try{ localStorage.setItem("lang", lang); }catch(e){}
  render(); onScroll();
});
$("#theme").addEventListener("click", () => {
  const now = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = now === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try{ localStorage.setItem("theme", next); }catch(e){}
});
$("#copy").addEventListener("click", async () => {
  try{ await navigator.clipboard.writeText(MAIL); }
  catch(e){ const ta = document.createElement("textarea"); ta.value = MAIL; document.body.appendChild(ta); ta.select(); try{ document.execCommand("copy"); }catch(_){} ta.remove(); }
  const s = $("#copy span"); s.textContent = T[lang].copied;
  setTimeout(() => { s.textContent = T[lang].copy; }, 1800);
});

$("#yr").textContent = new Date().getFullYear();
try{
  const th = localStorage.getItem("theme"); if (th) root.dataset.theme = th;
  const s = localStorage.getItem("lang");
  lang = s || ((navigator.language||"es").toLowerCase().startsWith("en") ? "en" : "es");
}catch(e){}
render(); onScroll();
})();
