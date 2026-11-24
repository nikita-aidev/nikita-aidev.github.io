const SUPPORTED = Object.keys(translations); // ["ru", "en", "de", "es", "fr", "zh"]
const switcher = document.getElementById("lang-switch");
const themeBtn = document.getElementById("theme-toggle");
const list = document.getElementById("projects-list");
const typedEl = document.getElementById("typed");

// Если у посетителя в системе отключены анимации — уважаем это
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// =====================================================
//  ТЕМА (тёмная / светлая)
// =====================================================
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeBtn.textContent = theme === "light" ? "🌙" : "☀️";
  localStorage.setItem("theme", theme);
}

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  applyTheme(current === "light" ? "dark" : "light");
});

applyTheme(document.documentElement.dataset.theme || "dark");

// =====================================================
//  ПРОЕКТЫ
// =====================================================

// Берём текст на нужном языке: если перевода нет — английский, потом русский
function pick(value, lang) {
  if (typeof value === "string") return value;
  return value[lang] || value.en || value.ru || "";
}

function renderProjects(lang) {
  const t = translations[lang];
  list.innerHTML = "";

  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    const tags = p.tags.map((tag) => `<span class="tag">${pick(tag, lang)}</span>`).join("");

    let links = "";
    if (p.link) links += `<a href="${p.link}" target="_blank">${t["projects.open"]}</a>`;
    if (p.code) links += `<a href="${p.code}" target="_blank">${t["projects.code"]}</a>`;

    card.innerHTML = `
      <h3>${pick(p.title, lang)}</h3>
      <p>${pick(p.description, lang)}</p>
      <div class="tags">${tags}</div>
      ${links ? `<div class="card-links">${links}</div>` : ""}
    `;

    list.appendChild(card);
  });
}

// =====================================================
//  ЭФФЕКТ ПЕЧАТАЮЩЕГОСЯ ТЕКСТА
// =====================================================
let typingTimer;

function startTyping(lang) {
  clearTimeout(typingTimer);
  const roles = translations[lang]["hero.roles"];

  if (reduceMotion) {
    typedEl.textContent = roles[0];
    return;
  }

  let i = 0;          // какая фраза
  let j = 0;          // сколько букв напечатано
  let deleting = false;

  function tick() {
    const word = roles[i];

    if (!deleting) {
      j++;
      typedEl.textContent = word.slice(0, j);
      if (j === word.length) {          // допечатали — ждём и начинаем стирать
        deleting = true;
        typingTimer = setTimeout(tick, 1800);
        return;
      }
    } else {
      j--;
      typedEl.textContent = word.slice(0, j);
      if (j === 0) {                    // стёрли — переходим к следующей фразе
        deleting = false;
        i = (i + 1) % roles.length;
        typingTimer = setTimeout(tick, 350);
        return;
      }
    }
    typingTimer = setTimeout(tick, deleting ? 40 : 85);
  }

  typedEl.textContent = "";
  tick();
}

// =====================================================
//  ЯЗЫК
// =====================================================
function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) lang = "ru";
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t[el.dataset.i18n];
    if (typeof value === "string") el.textContent = value;
  });

  document.documentElement.lang = lang;
  document.title = t.title;
  switcher.value = lang;
  localStorage.setItem("lang", lang); // запоминаем выбор посетителя

  renderProjects(lang);
  startTyping(lang);
}

// Какой язык показать при открытии:
// 1) тот, что посетитель выбрал раньше, 2) язык его браузера, 3) русский
function detectLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved && SUPPORTED.includes(saved)) return saved;
  const browser = (navigator.language || "ru").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browser) ? browser : "ru";
}

switcher.addEventListener("change", () => setLanguage(switcher.value));
setLanguage(detectLanguage());

// =====================================================
//  ЦИФРЫ (считаются автоматически)
// =====================================================
const projectCount = projects.filter((p) => !p.soon).length; // заглушки «скоро» не считаем
document.getElementById("stat-projects").dataset.count = projectCount;
document.getElementById("stat-tech").dataset.count = document.querySelectorAll(".skills li").length;

// Подпись с правильным окончанием: 1 проект, 2 проекта, 5 проектов
function updateProjectsLabel(lang) {
  const forms = translations[lang]["stats.projects"];
  const form = new Intl.PluralRules(lang).select(projectCount);
  document.getElementById("stat-projects-label").textContent = forms[form] || forms.other;
}
updateProjectsLabel(switcher.value);
switcher.addEventListener("change", () => updateProjectsLabel(switcher.value));

function countUp(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = target; return; }
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // плавное замедление в конце
    el.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// =====================================================
//  ПОЯВЛЕНИЕ БЛОКОВ ПРИ ПРОКРУТКЕ
// =====================================================

// Карточки в одной сетке появляются по очереди, с небольшой задержкой
document.querySelectorAll(".services, .steps").forEach((grid) => {
  grid.querySelectorAll(".reveal").forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      entry.target.querySelectorAll("[data-count]").forEach(countUp);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Текущий год в подвале
document.getElementById("year").textContent = new Date().getFullYear();
