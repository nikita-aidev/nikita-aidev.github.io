// ============================================
//  СПИСОК ПРОЕКТОВ
//  Чтобы добавить новый проект — скопируйте блок
//  { ... }, вставьте в список и поменяйте текст.
//  Название и описание пишутся на каждом языке.
//  Если какого-то языка нет, покажется английский.
//  soon: true — проект «В работе»: показывается с пометкой
//  и не входит в счётчик проектов.
// ============================================

const projects = [
  {
    title: {
      ru: "ИИ-ассистент в Telegram",
      en: "AI assistant on Telegram",
      de: "KI-Assistent auf Telegram",
      es: "Asistente de IA en Telegram",
      fr: "Assistant IA sur Telegram",
      zh: "Telegram AI 助手",
    },
    description: {
      ru: "Работает в продакшене 24/7. Отвечает на вопросы обо мне на языке собеседника, помнит контекст и сам предлагает оставить заявку, а заявки сразу приходят мне. Модель выбрал по тестам: gpt-oss-120b через Groq отвечает меньше чем за секунду. Есть лимит запросов на пользователя, защищённый webhook, а LLM-провайдер меняется в настройках.",
      en: "Running in production 24/7. It answers questions about me in the visitor's language, keeps the conversation context and suggests leaving a request, which reaches me instantly. I picked the model by testing: gpt-oss-120b via Groq answers in under a second. Per-user rate limits, a secured webhook, and the LLM provider is switchable in config.",
      de: "Läuft rund um die Uhr im Live-Betrieb. Er beantwortet Fragen über mich in der Sprache des Besuchers, behält den Kontext und schlägt vor, eine Anfrage zu hinterlassen, die mich sofort erreicht. Das Modell habe ich per Test gewählt: gpt-oss-120b über Groq antwortet in unter einer Sekunde. Rate-Limits pro Nutzer, gesicherter Webhook, LLM-Anbieter per Konfiguration austauschbar.",
      es: "Funciona en producción 24/7. Responde a preguntas sobre mí en el idioma del visitante, recuerda el contexto y propone dejar una solicitud, que me llega al instante. Elegí el modelo con pruebas: gpt-oss-120b vía Groq responde en menos de un segundo. Límite de peticiones por usuario, webhook protegido y proveedor de LLM configurable.",
      fr: "En production 24 h/24. Il répond aux questions à mon sujet dans la langue du visiteur, garde le contexte et propose de laisser une demande, qui m'arrive aussitôt. J'ai choisi le modèle par des tests : gpt-oss-120b via Groq répond en moins d'une seconde. Limite de requêtes par utilisateur, webhook sécurisé et fournisseur LLM modifiable dans la configuration.",
      zh: "全天候在生产环境运行。用访客的语言回答关于我的问题，记住上下文，并主动建议留下需求，需求会立即发给我。模型经过测试挑选：通过 Groq 调用 gpt-oss-120b，响应不到一秒。支持按用户限流、受保护的 webhook，LLM 服务商可通过配置切换。",
    },
    // Тег можно писать просто строкой ("Python") или переводить
    tags: ["Python", "aiogram", "LLM", "Groq", "Webhook", "Render"],
    link: "https://t.me/nikita_aidev_bot",
    code: "https://github.com/nikita-aidev/telegram-bot",
  },
  {
    soon: true,
    title: {
      ru: "ИИ-агент для поиска работы",
      en: "AI job-search agent",
      de: "KI-Agent für die Jobsuche",
      es: "Agente de IA para buscar empleo",
      fr: "Agent IA de recherche d'emploi",
      zh: "AI 求职智能体",
    },
    description: {
      ru: "MCP-сервер для API hh.ru и агент поверх него: подбирает вакансии под резюме, объясняет, каких навыков не хватает, и пишет сопроводительное письмо. Качество измеряю на своём наборе тестов (evals) и сравниваю модели по точности, цене и скорости.",
      en: "An MCP server for the hh.ru API with an agent on top: it matches vacancies to a résumé, explains which skills are missing and drafts a cover letter. I measure quality on my own eval set and compare models on accuracy, cost and speed.",
      de: "Ein MCP-Server für die hh.ru-API mit einem Agenten darüber: Er findet passende Stellen zum Lebenslauf, erklärt fehlende Skills und schreibt ein Anschreiben. Die Qualität messe ich mit eigenem Eval-Set und vergleiche Modelle nach Genauigkeit, Kosten und Geschwindigkeit.",
      es: "Un servidor MCP para la API de hh.ru con un agente encima: busca vacantes que encajen con el currículum, explica qué habilidades faltan y redacta la carta de presentación. Mido la calidad con mi propio conjunto de evals y comparo modelos por precisión, coste y velocidad.",
      fr: "Un serveur MCP pour l'API hh.ru avec un agent par-dessus : il trouve les offres adaptées au CV, explique les compétences manquantes et rédige la lettre de motivation. Je mesure la qualité avec mon propre jeu d'evals et compare les modèles en précision, coût et vitesse.",
      zh: "为 hh.ru API 构建的 MCP 服务器及其上的智能体：根据简历匹配职位，指出缺少的技能，并撰写求职信。我用自建的评测集（evals）衡量质量，并从准确性、成本和速度上对比模型。",
    },
    tags: ["Python", "MCP", "AI Agents", "Evals"],
    link: "",
    code: "",
  },
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
      ru: "Этот сайт: адаптивный, на 6 языках, со светлой и тёмной темой. Чистый HTML, CSS и JavaScript без фреймворков.",
      en: "This very site: responsive, in 6 languages, with light and dark themes. Plain HTML, CSS and JavaScript, no frameworks.",
      de: "Genau diese Seite: responsiv, in 6 Sprachen, mit hellem und dunklem Design. Reines HTML, CSS und JavaScript ohne Frameworks.",
      es: "Este mismo sitio: adaptable, en 6 idiomas, con tema claro y oscuro. HTML, CSS y JavaScript puros, sin frameworks.",
      fr: "Ce site même : responsive, en 6 langues, avec thème clair et sombre. HTML, CSS et JavaScript purs, sans framework.",
      zh: "就是这个网站：响应式，支持 6 种语言，亮色与暗色主题。纯 HTML、CSS 和 JavaScript，未使用框架。",
    },
    tags: ["HTML", "CSS", "JavaScript", "i18n"],
    link: "",
    code: "https://github.com/nikita-aidev/nikita-aidev.github.io",
  },
];
