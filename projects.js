// ============================================
//  СПИСОК ПРОЕКТОВ
//  Чтобы добавить новый проект — скопируйте блок
//  { ... }, вставьте в список и поменяйте текст.
//  Название и описание пишутся на каждом языке.
//  Если какого-то языка нет, покажется английский.
// ============================================

const projects = [
  {
    title: {
      ru: "Сайт-портфолио",
      en: "Portfolio website",
      de: "Portfolio-Website",
      es: "Sitio web portfolio",
      fr: "Site portfolio",
      zh: "作品集网站",
    },
    description: {
      ru: "Этот сайт. Мой первый проект: адаптивная мультиязычная страница-визитка на чистом HTML, CSS и JavaScript.",
      en: "This very site. My first project: a responsive multilingual portfolio page built with plain HTML, CSS and JavaScript.",
      de: "Genau diese Seite. Mein erstes Projekt: eine responsive, mehrsprachige Portfolio-Seite mit reinem HTML, CSS und JavaScript.",
      es: "Este mismo sitio. Mi primer proyecto: una página de portfolio adaptable y multilingüe hecha con HTML, CSS y JavaScript puros.",
      fr: "Ce site même. Mon premier projet : une page portfolio responsive et multilingue en HTML, CSS et JavaScript pur.",
      zh: "就是这个网站。我的第一个项目：使用纯 HTML、CSS 和 JavaScript 构建的响应式多语言作品集页面。",
    },
    tags: ["HTML", "CSS", "JavaScript", "i18n"],
    link: "",   // ссылка на работающий проект (если есть)
    code: "",   // ссылка на код, например на GitHub (если есть)
  },
  {
    title: {
      ru: "Скоро здесь",
      en: "Coming soon",
      de: "Bald hier",
      es: "Próximamente",
      fr: "Bientôt",
      zh: "即将推出",
    },
    description: {
      ru: "Следующий проект уже в работе.",
      en: "The next project is already in progress.",
      de: "Das nächste Projekt ist bereits in Arbeit.",
      es: "El siguiente proyecto ya está en marcha.",
      fr: "Le prochain projet est déjà en cours.",
      zh: "下一个项目正在进行中。",
    },
    soon: true, // заглушка — не считается в цифре «проектов в портфолио»
    // Тег можно писать просто строкой ("Python") или переводить, как здесь
    tags: [{ ru: "в процессе", en: "in progress", de: "in Arbeit", es: "en progreso", fr: "en cours", zh: "进行中" }],
    link: "",
    code: "",
  },
];
