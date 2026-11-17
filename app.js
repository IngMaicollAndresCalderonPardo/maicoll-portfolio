(() => {
const U = "https://github.com/IngMaicollAndresCalderonPardo/";

const T = {
es: {
  nav_map:"Misiones", nav_skills:"Habilidades", nav_projects:"Proyectos", nav_method:"Método", nav_contact:"Contacto",
  hero_eyebrow:"Full Stack .NET Developer · Mid-level",
  hero_lead:"Construyo sistemas que reemplazan procesos manuales por plataformas web a escala nacional. C#, .NET 8, Oracle PL/SQL y React, con análisis previo y la IA como copiloto.",
  hero_start:"▶ Iniciar recorrido", hero_skip:"Prefiero la versión clásica",
  st1:"años de experiencia", st2:"equipos / proyectos", st3v:"Nacional", st3:"alcance en producción", st4:"equipos internacionales",
  about_t:"Sobre mí",
  about_p1:"Ingeniero de Sistemas (Universidad Cooperativa de Colombia, 2023) con foco en backend C#/.NET sobre bases de datos Oracle y SQL Server. He migrado sistemas heredados (VB, PHP, .NET Framework) a ASP.NET Core y entregado módulos que hoy usan personas en todo el país.",
  about_p2:"Antes de escribir código me gusta entender el negocio: reuniones, flujos, estados y reglas. Con ese contexto analizo, estimo tiempos y recién ahí implemento. Uso IA generativa para medir tareas, explorar arquitectura y acelerar, y siempre reviso lo que produce. Aprendo de forma constante y no me rindo ante un problema difícil.",
  map_t:"Mapa de misiones", map_sub:"Mi trayectoria como un recorrido. Toca cada nivel para ver qué hice y qué aprendí.",
  sk_t:"Árbol de habilidades", sk_sub:"Autoevaluación honesta por nivel de dominio.",
  lv3:"Dominio diario", lv2:"Sólido", lv1:"En crecimiento",
  pr_t:"Proyectos destacados", pr_sub:"Mi trabajo en la Policía Nacional es institucional y no es público; estos repositorios muestran cómo construyo.",
  me_t:"Cómo trabajo",
  ct_t:"Hablemos", ct_sub:"Busco un rol remoto (nacional o internacional) como desarrollador .NET / Full Stack.",
  ct_en:"Inglés: B1 y en mejora activa (trabajé con equipos de EE. UU. en Parserr).",
  foot:"Hecho a mano con HTML, CSS y JS.",
  win_t:"🏆 Logro desbloqueado: Recorrido completo",
  win_p:"Pasaste por los 6 niveles. Si te interesa lo que viste, escríbeme: me encantaría contarte más.",
  view:"Ver repositorio →", boss:"NIVEL ACTUAL"
},
en: {
  nav_map:"Missions", nav_skills:"Skills", nav_projects:"Projects", nav_method:"Method", nav_contact:"Contact",
  hero_eyebrow:"Full Stack .NET Developer · Mid-level",
  hero_lead:"I build systems that replace manual processes with nationwide web platforms. C#, .NET 8, Oracle PL/SQL and React, with upfront analysis and AI as a copilot.",
  hero_start:"▶ Start the tour", hero_skip:"I prefer the classic version",
  st1:"years of experience", st2:"teams / projects", st3v:"Nationwide", st3:"scope in production", st4:"international teams",
  about_t:"About me",
  about_p1:"Systems Engineer (Universidad Cooperativa de Colombia, 2023) focused on C#/.NET backends over Oracle and SQL Server. I've migrated legacy systems (VB, PHP, .NET Framework) to ASP.NET Core and shipped modules now used by people across the whole country.",
  about_p2:"Before writing code I like to understand the business: meetings, flows, states and rules. With that context I analyze, estimate, and only then implement. I use generative AI to size tasks, explore architecture and move faster, and I always review what it produces. I learn constantly and don't give up on hard problems.",
  map_t:"Mission map", map_sub:"My career as a journey. Tap each level to see what I did and learned.",
  sk_t:"Skill tree", sk_sub:"Honest self-assessment by proficiency level.",
  lv3:"Daily driver", lv2:"Solid", lv1:"Growing",
  pr_t:"Featured projects", pr_sub:"My Policía Nacional work is institutional and not public; these repositories show how I build.",
  me_t:"How I work",
  ct_t:"Let's talk", ct_sub:"I'm looking for a remote role (domestic or international) as a .NET / Full Stack developer.",
  ct_en:"English: B1 and actively improving (I worked with US teams at Parserr).",
  foot:"Handcrafted with HTML, CSS and JS.",
  win_t:"🏆 Achievement unlocked: Full tour completed",
  win_p:"You went through all 6 levels. If you liked what you saw, reach out — I'd love to tell you more.",
  view:"View repository →", boss:"CURRENT LEVEL"
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

const SKILLS = [
 {g:{es:"Backend",en:"Backend"}, items:[
  ["C# / .NET 8",3,{es:"Core, MVC, Razor Pages, Framework",en:"Core, MVC, Razor Pages, Framework"}],
  ["ASP.NET Core MVC",3,{es:"Arquitectura limpia, SOLID",en:"Clean architecture, SOLID"}],
  ["REST APIs",3,{es:"Versionado, JWT, integraciones",en:"Versioning, JWT, integrations"}],
  ["xUnit / Moq",2,{es:"Pruebas unitarias y cobertura",en:"Unit testing and coverage"}]]},
 {g:{es:"Datos",en:"Data"}, items:[
  ["Oracle PL/SQL",3,{es:"Procedimientos, paquetes, triggers",en:"Procedures, packages, triggers"}],
  ["SQL Server",2,{es:"T-SQL, SSMS, automatización",en:"T-SQL, SSMS, automation"}],
  ["PostgreSQL",1,{es:"Migraciones con Alembic",en:"Alembic migrations"}]]},
 {g:{es:"Frontend",en:"Frontend"}, items:[
  ["React",2,{es:"Hooks, SPA, consumo de APIs",en:"Hooks, SPA, API consumption"}],
  ["Angular",2,{es:"TypeScript, formularios, servicios",en:"TypeScript, forms, services"}],
  ["JS / TS / Bootstrap",2,{es:"UI responsiva",en:"Responsive UI"}]]},
 {g:{es:"DevOps y flujo",en:"DevOps & workflow"}, items:[
  ["Docker / Compose",2,{es:"Microservicios reproducibles",en:"Reproducible microservices"}],
  ["Azure DevOps CI/CD",2,{es:"Pipelines YAML",en:"YAML pipelines"}],
  ["Git",3,{es:"Control de versiones",en:"Version control"}],
  ["IA generativa",3,{es:"Análisis, estimación y código asistido",en:"Analysis, estimation and assisted coding"}]]}
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

let lang = "es", done = new Set();
const $ = s => document.querySelector(s);
const pips = n => [1,2,3].map(i=>`<i class="pip${i<=n?" on":""}"></i>`).join("");

function render(){
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v=t[el.dataset.i18n]; if(v) el.textContent=v; });
  $("#lang").textContent = lang==="es" ? "EN" : "ES";

  $("#path").innerHTML = LEVELS.map((l,i)=>`
    <li class="lvl${l.boss?" boss":""}${done.has(i)?" done open":""}" data-n="${i+1}" data-i="${i}">
      <button aria-expanded="${done.has(i)}">
        <div class="top"><h3>${l.role[lang]}${l.boss?`<span class="tag">${t.boss}</span>`:""}</h3><span class="when">${l.when[lang]}</span></div>
        <div class="org">${l.org}</div>
        <div class="detail"><div>
          <ul>${l.pts[lang].map(p=>`<li>${p}</li>`).join("")}</ul>
          <div class="chips">${l.tech.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
        </div></div>
      </button>
    </li>`).join("");

  $("#skillgrid").innerHTML = SKILLS.map(g=>`<div class="group">${g.g[lang]}</div>`+
    g.items.map(([n,l,d])=>`<div class="sk"><span class="pips">${pips(l)}</span><b>${n}</b><small>${d[lang]}</small></div>`).join("")).join("");

  $("#cards").innerHTML = PROJECTS.map(p=>`
    <a class="card" href="${U+p.n}" target="_blank" rel="noopener">
      <h3>${p.n}</h3><p>${p.d[lang]}</p>
      <div class="chips">${p.t.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
      <span class="go">${t.view}</span></a>`).join("");

  $("#steps").innerHTML = STEPS.map(s=>`<li><b>${s.t[lang]}</b><span>${s.d[lang]}</span></li>`).join("");
  progress();
}

function progress(){
  const n = done.size, t = T[lang];
  $("#bar").style.width = (n/LEVELS.length*100)+"%";
  $("#count").textContent = `${n}/${LEVELS.length}`;
  const w = $("#win");
  if(n===LEVELS.length){ w.hidden=false; w.innerHTML=`<b>${t.win_t}</b><p>${t.win_p}</p>`; } else w.hidden=true;
}

$("#path").addEventListener("click", e=>{
  const li = e.target.closest(".lvl"); if(!li) return;
  const i = +li.dataset.i, open = li.classList.toggle("open");
  li.querySelector("button").setAttribute("aria-expanded", open);
  if(open){ done.add(i); li.classList.add("done"); progress(); }
});

$("#lang").addEventListener("click", ()=>{
  lang = lang==="es" ? "en" : "es";
  try{ localStorage.setItem("lang", lang); }catch(e){}
  render();
});

$("#yr").textContent = new Date().getFullYear();
try { const s = localStorage.getItem("lang"); if(s) lang = s; else lang = (navigator.language||"es").toLowerCase().startsWith("en") ? "en" : "es"; } catch(e){}
render();
})();
