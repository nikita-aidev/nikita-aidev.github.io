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
    code: "https://github.com/nikita-aidev/nikita-aidev.github.io",   // ссылка на код, например на GitHub (если есть)
  },
  {
    title: {
      ru: "Telegram-бот визитка",
      en: "Telegram business-card bot",
      de: "Telegram-Visitenkarten-Bot",
      es: "Bot de Telegram tarjeta de visita",
      fr: "Bot Telegram carte de visite",
      zh: "Telegram 名片机器人",
    },
    description: {
      ru: "Бот рассказывает обо мне, показывает проекты и принимает заявки: задаёт три вопроса и сразу пересылает ответы мне. Работает в облаке круглосуточно.",
      en: "The bot tells about me, shows my projects and collects requests: it asks three questions and instantly forwards the answers to me. Runs 24/7 in the cloud.",
      de: "Der Bot stellt mich vor, zeigt meine Projekte und nimmt Anfragen an: Er stellt drei Fragen und leitet die Antworten sofort an mich weiter. Läuft rund um die Uhr in der Cloud.",
      es: "El bot habla de mí, muestra mis proyectos y recibe solicitudes: hace tres preguntas y me reenvía las respuestas al instante. Funciona 24/7 en la nube.",
      fr: "Le bot me présente, montre mes projets et reçoit les demandes : il pose trois questions et me transmet aussitôt les réponses. Il tourne 24 h/24 dans le cloud.",
      zh: "机器人介绍我、展示我的项目并接收需求：提出三个问题，并立即把回答转发给我。全天候运行在云端。",
    },
    // Тег можно писать просто строкой ("Python") или переводить
    tags: ["Python", "aiogram", "Webhook", "Render"],
    link: "https://t.me/nikita_aidev_bot",
    code: "https://github.com/nikita-aidev/telegram-bot",
  },
];
