const tracks = [
  {
    id: "math", short: "M", category: "MATHEMATICS", name: "Mathematics for real life", level: "Beginner", duration: "3 modules", tone: "math",
    summary: "Build confidence with numbers, patterns, and evidence. See where math shows up in decisions you make every day.",
    modules: [
      { title: "Numbers, ratios & percentages", focus: "Make sense of prices, discounts, ratios, and everyday quantities.", lessons: ["Percentages without the guesswork", "Ratios in recipes and plans"], example: "A jacket costs $80 and is discounted by 25%. A quick way to find the saving is 80 x 0.25 = $20, so the new price is $60. Compare that with a second shop's offer before deciding.", exampleLabel: "A shopping decision", application: { name: "Desmos four-function calculator", url: "https://www.desmos.com/scientific", note: "Check calculations and explore how changing a value affects the result." }, project: { title: "The smart-shop comparison", brief: "Compare the real cost of three versions of one everyday purchase. Include discounts, unit prices, and a short recommendation backed by your calculations.", steps: ["Choose one item sold in at least three sizes or offers.", "Calculate the unit price and any discount for each.", "Present the comparison and explain the best-value choice."], deliverable: "A one-page comparison sheet with calculations and a recommendation." } },
      { title: "Algebra & patterns", focus: "Use variables and simple equations to model changing costs and quantities.", lessons: ["From words to equations", "Patterns, rules & graphs"], example: "A mobile plan charges $10 each month plus $2 per gigabyte of data. If g is the number of gigabytes, the monthly cost is C = 10 + 2g. At 8 GB, C = $26. The equation makes it easy to compare plans before signing up.", exampleLabel: "A phone-plan choice", application: { name: "Desmos graphing calculator", url: "https://www.desmos.com/calculator", note: "Graph two pricing rules and find where one plan becomes cheaper." }, project: { title: "Choose a phone plan", brief: "Model two or more mobile plans with equations. Find the point where each plan is better value and make a recommendation for different users.", steps: ["Gather the fixed fee and variable cost for each plan.", "Write an equation for each plan and compare at several usage levels.", "Explain the break-even point and who should choose each plan."], deliverable: "A simple comparison with equations, a graph, and a written recommendation." } },
      { title: "Statistics & probability", focus: "Read data carefully, summarize what it says, and spot misleading claims.", lessons: ["Averages and what they hide", "Chance, samples & fair comparisons"], example: "Five learners spend 1, 2, 2, 3, and 12 hours studying. The mean is 4 hours, but the median is 2. The unusually high value pulls up the mean, so reporting both gives a more honest picture of a typical week.", exampleLabel: "Reading a survey", application: { name: "Our World in Data", url: "https://ourworldindata.org/grapher", note: "Explore published datasets and ask what a chart does, and does not, prove." }, project: { title: "A better school-week survey", brief: "Design a short, fair survey about a real question, summarize the results, and present one conclusion that is supported by the evidence.", steps: ["Write a neutral question and decide who should answer it.", "Collect or use a small sample and summarize it with suitable statistics.", "Show the result in a clear chart and note one limitation."], deliverable: "A one-page evidence brief with a chart, a conclusion, and a limitation." } }
    ]
  },
  {
    id: "web", short: "</>", category: "WEB DEVELOPMENT", name: "Build for the web", level: "Beginner", duration: "3 modules", tone: "web",
    summary: "Go from a blank page to a small interactive website. Learn the building blocks used on the web every day.",
    modules: [
      { title: "HTML: give content structure", focus: "Turn ideas into clear, accessible page structure with semantic HTML.", lessons: ["Headings, paragraphs & links", "Forms and meaningful page structure"], example: "A course page should have one clear h1, section headings in order, and links whose labels explain their destination. Semantic elements like main, nav, and article help both people and assistive technology understand the page.", exampleLabel: "A page people can navigate", application: { name: "MDN HTML learning area", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content", note: "Read the reference while inspecting real page structure in your browser." }, project: { title: "A page about something you know", brief: "Create a small, well-structured page that helps someone understand a topic you care about. Make it readable and easy to navigate.", steps: ["Choose a topic and sketch its heading structure.", "Use semantic elements, links, and a useful image with alt text.", "Check the page with keyboard navigation and a narrow screen."], deliverable: "A single-page HTML site with clear structure and accessible navigation." } },
      { title: "CSS: design the experience", focus: "Use layout, type, color, and responsive rules to make pages feel considered.", lessons: ["Selectors, spacing & type", "Flexbox, grid & responsive design"], example: "A product list can use CSS Grid with repeat(auto-fit, minmax(220px, 1fr)). Cards fit side by side when there's room, then stack naturally on a phone, without needing a separate layout for every screen size.", exampleLabel: "A layout that adapts", application: { name: "MDN CSS layout guide", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout", note: "Explore layout techniques and see how a responsive page changes at different widths." }, project: { title: "Make the page feel finished", brief: "Give your HTML page a visual system and a responsive layout. Make sure the design supports the content instead of getting in its way.", steps: ["Choose a small palette and a readable type scale.", "Build the main layout with Flexbox or Grid.", "Test at desktop and mobile widths and adjust spacing."], deliverable: "A styled, responsive page with a consistent visual language." } },
      { title: "JavaScript: add useful interaction", focus: "Use variables, functions, and events to make a page respond to people.", lessons: ["Values, conditions & functions", "Events and updating the page"], example: "A button can listen for a click, read the value in a form, and update a message on the page. That small interaction connects user input to a useful outcome without reloading the whole page.", exampleLabel: "A helpful interaction", application: { name: "MDN JavaScript guide", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting", note: "Try the examples in a local page and inspect what changes when you interact." }, project: { title: "Add one useful interaction", brief: "Add a small interaction to your page that helps a visitor do something: filter a list, check a form, or reveal relevant details.", steps: ["Decide what the visitor is trying to do.", "Listen to an event and update the page with JavaScript.", "Test expected input, empty input, and keyboard use."], deliverable: "A responsive page with one tested, purposeful JavaScript interaction." } }
    ]
  },
  {
    id: "data", short: "D", category: "DATA ANALYSIS", name: "Make data useful", level: "Beginner", duration: "3 modules", tone: "data",
    summary: "Learn to ask better questions of data, find useful patterns, and communicate what the numbers mean.",
    modules: [
      { title: "Data foundations & spreadsheets", focus: "Organize information and use spreadsheet formulas to answer simple questions.", lessons: ["Rows, columns & tidy data", "Sorting, filtering & formulas"], example: "If a table has one row per order and columns for date, item, quantity, and price, a SUM of the revenue column gives a total. A consistent table structure makes sorting, checking, and later analysis much easier.", exampleLabel: "A small shop's orders", application: { name: "Google Sheets training center", url: "https://support.google.com/a/users/answer/9282959", note: "Apply spreadsheet basics to a small dataset and see how formulas update." }, project: { title: "A week of spending, made clear", brief: "Organize a small set of realistic weekly expenses, calculate useful totals, and identify one practical change the data supports.", steps: ["Create a tidy table with dates, categories, and amounts.", "Use formulas to calculate totals and category summaries.", "Check the figures and write one evidence-based observation."], deliverable: "A tidy spreadsheet with formulas and a short written insight." } },
      { title: "Explore & summarize data", focus: "Use questions, comparisons, and basic descriptive statistics to find patterns.", lessons: ["Ask a question before calculating", "Compare groups and check outliers"], example: "If average delivery times rose this month, compare the same weekdays and delivery regions before blaming one cause. Averages summarize what happened; they do not explain why it happened.", exampleLabel: "A delivery-time question", application: { name: "Kaggle Learn: Intro to Data Analysis", url: "https://www.kaggle.com/learn/data-visualization", note: "Practice exploring datasets and checking which comparisons are meaningful." }, project: { title: "Find the story in a small dataset", brief: "Choose a small dataset, write one question you can answer, and show how the data supports or challenges your first guess.", steps: ["State a focused question and identify the relevant fields.", "Calculate a useful comparison and check for unusual values.", "Write a conclusion with a caveat about what you cannot infer."], deliverable: "A short analysis with a question, supporting calculations, and a caveat." } },
      { title: "Charts & data storytelling", focus: "Choose clear charts and explain insights without overstating the evidence.", lessons: ["Match chart type to the question", "Write a chart title that says something"], example: "A line chart is useful for showing how a measure changes over time. A bar chart is better for comparing distinct categories. Labeling the units and writing a takeaway in the title helps readers interpret the chart accurately.", exampleLabel: "Choose the right chart", application: { name: "Data to Viz chart chooser", url: "https://www.data-to-viz.com/", note: "Explore chart choices and learn where common visualizations can mislead." }, project: { title: "One chart, one clear message", brief: "Build a small data story around one chart that helps a real audience understand a result and decide what to do next.", steps: ["Pick a question, audience, and chart type that fits.", "Label the chart clearly and make the main finding easy to see.", "Add a takeaway and a note on limits or missing context."], deliverable: "A labeled chart with a concise insight and an honest limitation." } }
    ]
  }
];

const app = document.querySelector("#app");
const dialog = document.querySelector("#lesson-dialog");
const dialogContent = document.querySelector("#dialog-content");
const searchInput = document.querySelector("#search-input");
const toast = document.querySelector("#toast");
let route = "dashboard";
let activeTrack = "math";
let searchTerm = "";
let toastTimer;

const readStore = (key) => {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); }
  catch { return []; }
};
const completed = new Set(readStore("mtech-completed-modules"));
const planned = new Set(readStore("mtech-planned-projects"));
const saveSet = (key, set) => localStorage.setItem(key, JSON.stringify([...set]));
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[char]);
const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const moduleKey = (trackId, index) => `${trackId}-${index}`;
const allModules = () => tracks.flatMap((track) => track.modules.map((module, index) => ({ track, module, index })));
const trackProgress = (track) => Math.round(track.modules.filter((_, index) => completed.has(moduleKey(track.id, index))).length / track.modules.length * 100);
const totalComplete = () => completed.size;
const totalPlanned = () => planned.size;
const setRoute = (next, options = {}) => {
  route = next;
  if (options.track) activeTrack = options.track;
  if (options.search !== undefined) searchTerm = options.search;
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("is-active", button.dataset.route === route || (route === "track" && button.dataset.route === "tracks")));
  document.querySelector("#sidebar").classList.remove("is-open");
  render();
};

function render() {
  const active = tracks.find((track) => track.id === activeTrack) || tracks[0];
  const labels = { dashboard: "Overview", learning: "My learning", tracks: "Explore tracks", track: active.category.toLowerCase(), projects: "Project studio", search: "Search results" };
  document.querySelector("#breadcrumb").innerHTML = `Your learning space <span>/</span> <strong>${escapeHTML(labels[route])}</strong>`;
  document.querySelector("#nav-progress").textContent = totalComplete();
  if (route === "dashboard") app.innerHTML = renderDashboard();
  if (route === "learning") app.innerHTML = renderLearning();
  if (route === "tracks") app.innerHTML = renderTracks();
  if (route === "track") app.innerHTML = renderTrack(active);
  if (route === "projects") app.innerHTML = renderProjects();
  if (route === "search") app.innerHTML = renderSearch();
}

function renderHeroArt() {
  return `<div class="hero-art" aria-label="A chart showing steady weekly learning progress">
    <svg viewBox="0 0 300 150" role="img" aria-hidden="true">
      <path d="M20 20v108h258" fill="none" stroke="#557348" stroke-opacity=".35" stroke-width="1"/>
      <path d="M20 101h258M20 74h258M20 47h258" fill="none" stroke="#557348" stroke-opacity=".17" stroke-dasharray="3 5"/>
      <path d="m36 105 53-24 47 12 49-41 70-18" fill="none" stroke="#245c49" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      <circle cx="36" cy="105" r="4" fill="#e57d5f"/><circle cx="89" cy="81" r="4" fill="#e57d5f"/><circle cx="136" cy="93" r="4" fill="#e57d5f"/><circle cx="185" cy="52" r="4" fill="#e57d5f"/><circle cx="255" cy="34" r="5" fill="#245c49" stroke="#f6f7f2" stroke-width="2"/>
      <text x="25" y="144" fill="#506746" font-size="9" font-family="DM Sans, sans-serif">WEEK 1</text><text x="226" y="144" fill="#506746" font-size="9" font-family="DM Sans, sans-serif">WEEK 5</text>
      <rect x="186" y="0" width="91" height="31" rx="3" fill="#fff"/><text x="196" y="13" fill="#78817b" font-size="8" font-family="DM Sans, sans-serif">YOUR MOMENTUM</text><text x="196" y="25" fill="#245c49" font-size="11" font-weight="700" font-family="Space Grotesk, sans-serif">UPWARD</text>
    </svg>
    <div class="hero-stat"><strong>${totalComplete()}</strong><span>modules completed</span></div>
  </div>`;
}

function courseCard(track, showProgress = true) {
  const progress = trackProgress(track);
  return `<article class="course-card">
    <div class="course-card-top"><span class="course-mark ${track.tone}">${escapeHTML(track.short)}</span><span class="level-tag">${escapeHTML(track.level)} · ${escapeHTML(track.duration)}</span></div>
    <h3>${escapeHTML(track.name)}</h3><p>${escapeHTML(track.summary)}</p>
    <div class="course-card-bottom"><span>${showProgress ? `${progress}% complete` : `${track.modules.length} modules · ${track.modules.reduce((sum, module) => sum + module.lessons.length, 0)} lessons`}</span><button class="text-button" data-open-track="${track.id}" aria-label="Open ${escapeHTML(track.name)}">Explore ${icon("arrow")}</button></div>
    ${showProgress ? `<div class="progress-line" aria-label="${progress}% complete"><span style="width:${progress}%"></span></div>` : ""}
  </article>`;
}

function renderDashboard() {
  const current = allModules().find(({ track, index }) => !completed.has(moduleKey(track.id, index))) || allModules()[0];
  const { track: nextTrack, module: nextModule, index: nextIndex } = current;
  return `<div class="dashboard-hero"><div class="hero-copy"><p class="eyebrow">A GOOD PLACE TO BEGIN</p><h1>Learn something real.<br>Build something useful.</h1><p>Mathematics, code, and data make more sense when you can use them. Pick a path and turn your curiosity into a skill.</p><button class="primary-button" data-route="tracks">Explore learning tracks ${icon("arrow")}</button></div>${renderHeroArt()}</div>
    <div class="stat-strip" aria-label="Your learning statistics"><div class="stat-item"><span class="stat-symbol">${totalComplete()}</span><div><small>MODULES FINISHED</small><strong>${totalComplete()} of 9</strong></div></div><div class="stat-item"><span class="stat-symbol">${totalPlanned()}</span><div><small>PROJECTS PLANNED</small><strong>${totalPlanned()} of 9</strong></div></div><div class="stat-item"><span class="stat-symbol">3</span><div><small>WAYS TO LEARN</small><strong>One practical path</strong></div></div></div>
    <section class="section"><div class="section-heading"><div><h2>Choose your direction</h2><p>Three beginner-friendly paths. Each ends with something you can show.</p></div><button class="text-button" data-route="tracks">All tracks ${icon("arrow")}</button></div><div class="course-grid">${tracks.map((track) => courseCard(track)).join("")}</div></section>
    <section class="section dashboard-bottom"><div class="continue-panel"><div class="section-heading"><div><h2>Pick up where you are</h2><p>Your next step is ready whenever you are.</p></div></div><div class="continue-main"><span class="continue-mark">${escapeHTML(nextTrack.short)}</span><div><h3>${escapeHTML(nextModule.title)}</h3><p>${escapeHTML(nextTrack.name)} · Module ${nextIndex + 1}</p></div><button class="small-button continue-action" data-open-module="${nextTrack.id}" data-module-index="${nextIndex}">Open lesson ${icon("arrow")}</button></div><div class="progress-line"><span style="width:${trackProgress(nextTrack)}%"></span></div></div><div class="project-callout"><p class="eyebrow">MAKE IT YOURS</p><h3>Every module ends in a real project.</h3><p>Practice the idea, make a thing, and explain what you learned.</p><button class="text-button" data-route="projects">Visit project studio ${icon("arrow")}</button><span class="project-stamp">M!</span></div></section>`;
}

function renderTracks() {
  return `<div class="page-intro"><div><p class="eyebrow">THE STARTING LINE</p><h1>Find your next skill.</h1><p>Start with the path that feels useful. You can switch any time.</p></div></div><div class="tracks-grid">${tracks.map((track) => courseCard(track, false)).join("")}</div><section class="section"><div class="section-heading"><div><h2>How learning works here</h2><p>Learn a concept, see where it shows up, then build your own answer.</p></div></div><div class="stat-strip"><div class="stat-item"><span class="stat-symbol">01</span><div><small>UNDERSTAND</small><strong>Short lessons</strong></div></div><div class="stat-item"><span class="stat-symbol">02</span><div><small>CONNECT</small><strong>Real applications</strong></div></div><div class="stat-item"><span class="stat-symbol">03</span><div><small>MAKE</small><strong>Module projects</strong></div></div></div></section>`;
}

function renderTrack(track) {
  const progress = trackProgress(track);
  return `<div class="track-hero ${track.tone}-tone"><div><p class="eyebrow">${escapeHTML(track.category)} · ${escapeHTML(track.level)}</p><h1>${escapeHTML(track.name)}</h1><p>${escapeHTML(track.summary)}</p><div class="track-meta"><span class="meta-pill">${track.modules.length} modules</span><span class="meta-pill">${track.modules.reduce((sum, module) => sum + module.lessons.length, 0)} bite-sized lessons</span><span class="meta-pill">${track.modules.length} practical projects</span></div></div><div class="track-completion"><span class="completion-ring">${progress}%</span><small>track progress</small></div></div>
    <div class="section-heading"><div><h2>Your modules</h2><p>Each module connects a new idea to an application and a project.</p></div></div>
    <div class="module-list">${track.modules.map((module, index) => {
      const done = completed.has(moduleKey(track.id, index));
      return `<article class="module-row ${done ? "is-complete" : ""}"><span class="module-number">${done ? icon("check") : String(index + 1).padStart(2, "0")}</span><div class="module-main"><h2>${escapeHTML(module.title)}</h2><p>${escapeHTML(module.focus)}</p><ul class="module-lessons">${module.lessons.map((lesson) => `<li>${escapeHTML(lesson)}</li>`).join("")}</ul><div class="module-project"><small>End-of-module project</small><strong>${escapeHTML(module.project.title)}</strong><span>${escapeHTML(module.project.brief)}</span></div></div><div class="module-action"><button class="small-button" data-open-module="${track.id}" data-module-index="${index}">${done ? "Review module" : "Start module"} ${icon("arrow")}</button></div></article>`;
    }).join("")}</div>
    <div class="track-detail-footer"><span>Estimated pace: 2–3 sessions per module</span><button class="text-button" data-route="projects">See all projects ${icon("arrow")}</button></div>`;
}

function renderLearning() {
  const percentage = Math.round(totalComplete() / 9 * 100);
  return `<div class="page-intro"><div><p class="eyebrow">YOUR PROGRESS</p><h1>Learning, in motion.</h1><p>Progress lives here in this browser, so you can return to your work later.</p></div><button class="secondary-button" data-route="tracks">Browse tracks ${icon("arrow")}</button></div>
    <div class="learning-summary"><div class="summary-card"><small>MODULES COMPLETED</small><strong>${totalComplete()} <span style="color:#a1aaa2;font-size:13px">/ 9</span></strong></div><div class="summary-card"><small>PROJECTS PLANNED</small><strong>${totalPlanned()} <span style="color:#a1aaa2;font-size:13px">/ 9</span></strong></div><div class="summary-card"><small>OVERALL PROGRESS</small><strong>${percentage}%</strong></div></div>
    <div class="section-heading"><div><h2>Your learning tracks</h2><p>Open a track to continue a module or revisit a project.</p></div></div><div class="tracks-grid">${tracks.map((track) => courseCard(track)).join("")}</div>`;
}

function renderProjects() {
  const projects = allModules();
  return `<div class="page-intro"><div><p class="eyebrow">PROJECT STUDIO</p><h1>Proof, not just notes.</h1><p>Every module gives you a small, practical challenge to make the idea stick.</p></div></div><div class="project-grid">${projects.map(({ track, module, index }) => {
    const key = moduleKey(track.id, index);
    const isPlanned = planned.has(key);
    return `<article class="project-card ${isPlanned ? "is-planned" : ""}"><div class="project-card-top"><span class="course-mark ${track.tone}">${escapeHTML(track.short)}</span><span class="project-course">${escapeHTML(track.name)} · Module ${index + 1}</span></div><h2>${escapeHTML(module.project.title)}</h2><p>${escapeHTML(module.project.brief)}</p><button class="small-button" data-toggle-project="${key}">${isPlanned ? `${icon("check")} Added to my plan` : "Add to my plan"}</button></article>`;
  }).join("")}</div>`;
}

function renderSearch() {
  const query = searchTerm.trim().toLowerCase();
  const matches = allModules().filter(({ track, module }) => `${track.name} ${track.category} ${track.summary} ${module.title} ${module.focus} ${module.project.title}`.toLowerCase().includes(query));
  const matchingTracks = tracks.filter((track) => `${track.name} ${track.category} ${track.summary}`.toLowerCase().includes(query));
  if (!query) return `<div class="page-intro"><div><p class="eyebrow">SEARCH</p><h1>What would you like to learn?</h1><p>Search a course, lesson, or project topic above.</p></div></div>`;
  return `<div class="page-intro"><div><p class="eyebrow">SEARCH RESULTS</p><h1>Results for “${escapeHTML(searchTerm)}”</h1><p>${matches.length + matchingTracks.length} match${matches.length + matchingTracks.length === 1 ? "" : "es"} across the learning paths.</p></div></div><div class="search-results">${matchingTracks.map((track) => `<button class="search-result" data-open-track="${track.id}"><span><strong>${escapeHTML(track.name)}</strong><small>Learning track · ${escapeHTML(track.category)}</small></span>${icon("arrow")}</button>`).join("")}${matches.map(({ track, module, index }) => `<button class="search-result" data-open-module="${track.id}" data-module-index="${index}"><span><strong>${escapeHTML(module.title)}</strong><small>${escapeHTML(track.name)} · ${escapeHTML(module.project.title)}</small></span>${icon("arrow")}</button>`).join("")}${matches.length + matchingTracks.length ? "" : `<div class="empty-state">No matches yet. Try “percentages”, “HTML”, or “charts”.</div>`}</div>`;
}

function openModule(trackId, index) {
  const track = tracks.find((item) => item.id === trackId);
  const module = track?.modules[index];
  if (!track || !module) return;
  const done = completed.has(moduleKey(trackId, index));
  dialogContent.innerHTML = `<div class="dialog-body"><p class="eyebrow">${escapeHTML(track.category)} · MODULE ${String(index + 1).padStart(2, "0")}</p><h2 id="dialog-title">${escapeHTML(module.title)}</h2><p>${escapeHTML(module.focus)} Work through these ideas, try the example, and see how they apply beyond the lesson.</p><div class="lesson-example"><small>${escapeHTML(module.exampleLabel)}</small><p>${escapeHTML(module.example)}</p></div><h3 style="margin:20px 0 9px;font:600 13px var(--font-display)">Take it into the real world</h3><a class="application-link" href="${escapeHTML(module.application.url)}" target="_blank" rel="noopener noreferrer"><span><strong>${escapeHTML(module.application.name)}</strong><small>${escapeHTML(module.application.note)}</small></span>${icon("external")}</a><div class="dialog-project"><small>YOUR MODULE PROJECT</small><h3>${escapeHTML(module.project.title)}</h3><p>${escapeHTML(module.project.brief)}</p><ul>${module.project.steps.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ul><p style="margin-top:11px"><strong>Deliverable:</strong> ${escapeHTML(module.project.deliverable)}</p></div><div class="dialog-actions"><small>${done ? "This module is in your completed list." : "You can revisit this lesson any time."}</small><button class="primary-button" data-complete-module="${moduleKey(trackId, index)}">${done ? `${icon("check")} Completed` : "Mark module complete"}</button></div></div>`;
  if (!dialog.open) dialog.showModal();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route]");
  const trackButton = event.target.closest("[data-open-track]");
  const moduleButton = event.target.closest("[data-open-module]");
  const projectButton = event.target.closest("[data-toggle-project]");
  const completeButton = event.target.closest("[data-complete-module]");
  if (routeButton) setRoute(routeButton.dataset.route);
  if (trackButton) setRoute("track", { track: trackButton.dataset.openTrack });
  if (moduleButton) openModule(moduleButton.dataset.openModule, Number(moduleButton.dataset.moduleIndex));
  if (projectButton) {
    const key = projectButton.dataset.toggleProject;
    planned.has(key) ? planned.delete(key) : planned.add(key);
    saveSet("mtech-planned-projects", planned);
    render();
  }
  if (completeButton) {
    completed.add(completeButton.dataset.completeModule);
    saveSet("mtech-completed-modules", completed);
    dialog.close();
    render();
    showToast("Module completed. Nice work.");
  }
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  setRoute("search", { search: searchInput.value });
});
document.querySelector("#search-form").addEventListener("click", () => {
  if (window.matchMedia("(max-width: 720px)").matches) searchInput.focus();
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") searchInput.value = "";
});
document.querySelector("#notification-button").addEventListener("click", () => showToast("You’re all caught up. Keep learning at your own pace."));
document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("is-open"));
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

render();