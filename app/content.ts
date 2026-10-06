export type Lang = "ru" | "en" | "uz";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "ЎЗ" },
];

type Copy = {
  nav: { about: string; topics: string; guests: string; apply: string };
  hero: { badge: string; title1: string; title2: string; sub: string; cta: string; cta2: string };
  stats: { value: string; label: string }[];
  about: { title: string; text: string; points: { t: string; d: string }[] };
  topics: { title: string; items: { t: string; d: string }[] };
  guests: { title: string; sub: string; items: string[] };
  form: {
    title: string;
    sub: string;
    name: string;
    email: string;
    company: string;
    stage: string;
    stages: { value: string; label: string }[];
    story: string;
    storyPh: string;
    link: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: string;
  contact: string;
};

export const content: Record<Lang, Copy> = {
  ru: {
    nav: { about: "О подкасте", topics: "Темы", guests: "Гости", apply: "Стать гостем" },
    hero: {
      badge: "Скоро · первый сезон",
      title1: "Деньги приходят",
      title2: "не так, как вы думаете.",
      sub: "Founder Gap - подкаст с основателями, которые привлекли инвестиции от венчурных фондов или получили soft и hard commitment. Без глянца: питчи, цифры, отказы и то, что было на самом деле.",
      cta: "Подать заявку как гость",
      cta2: "О чём подкаст",
    },
    stats: [
      { value: "VC", label: "фонды и их решения" },
      { value: "Soft / Hard", label: "путь commitment до денег" },
      { value: "100%", label: "реальные истории фаундеров" },
    ],
    about: {
      title: "Разрыв между идеей и чеком",
      text: "Между «у нас есть продукт» и «деньги на счёте» лежит пропасть. Мы разбираем её вместе с теми, кто её перешёл.",
      points: [
        { t: "Реальные кейсы", d: "Только основатели, которые действительно привлекли деньги или получили commitment." },
        { t: "Цифры и условия", d: "Раунды, оценки, сроки, структура сделок - настолько открыто, насколько готов гость." },
        { t: "Ошибки и отказы", d: "Сколько было «нет» до первого «да» и чему они научили." },
      ],
    },
    topics: {
      title: "О чём говорим",
      items: [
        { t: "Первый контакт с фондом", d: "Как выйти на инвесторов и получить встречу." },
        { t: "Soft vs hard commitment", d: "Чем отличаются, как не перепутать и как довести до перевода." },
        { t: "Питч и due diligence", d: "Что реально смотрят фонды и где срываются сделки." },
        { t: "Term sheet и переговоры", d: "Оценка, доля, права инвесторов, красные флаги." },
        { t: "Жизнь после раунда", d: "Отчётность, давление, следующий раунд." },
        { t: "Регион и рынок", d: "Особенности привлечения из Центральной Азии и СНГ." },
      ],
    },
    guests: {
      title: "Кто может стать гостем",
      sub: "Мы ищем основателей, у которых есть что рассказать.",
      items: [
        "Привлекли раунд от венчурного фонда (pre-seed, seed и выше)",
        "Получили soft или hard commitment от инвестора",
        "Готовы честно рассказать о процессе, а не только об успехе",
      ],
    },
    form: {
      title: "Хочу в подкаст",
      sub: "Расскажите о себе и своём стартапе. Мы ответим по email.",
      name: "Имя и фамилия",
      email: "Email",
      company: "Стартап",
      stage: "Что у вас было",
      stages: [
        { value: "vc", label: "Инвестиции от венчурного фонда" },
        { value: "hard", label: "Hard commitment" },
        { value: "soft", label: "Soft commitment" },
      ],
      story: "Коротко о вашей истории",
      storyPh: "Чем занимается стартап, сколько и от кого привлекли, чем можете поделиться…",
      link: "Ссылка на сайт или LinkedIn",
      submit: "Отправить заявку",
      sending: "Отправляем…",
      success: "Спасибо! Заявка получена, мы скоро свяжемся с вами.",
      error: "Не удалось отправить. Проверьте поля и попробуйте ещё раз.",
    },
    footer: "© Founder Gap. Подкаст о фаундерах и венчурных деньгах.",
    contact: "Есть вопросы? Пишите в Telegram",
  },
  en: {
    nav: { about: "About", topics: "Topics", guests: "Guests", apply: "Be a guest" },
    hero: {
      badge: "Coming soon · Season one",
      title1: "Funding doesn't happen",
      title2: "the way you think it does.",
      sub: "Founder Gap is a podcast with founders who raised from venture funds or secured soft and hard commitments. No gloss: the pitches, the numbers, the rejections, and what really happened.",
      cta: "Apply as a guest",
      cta2: "What it's about",
    },
    stats: [
      { value: "VC", label: "funds and how they decide" },
      { value: "Soft / Hard", label: "from commitment to cash" },
      { value: "100%", label: "real founder stories" },
    ],
    about: {
      title: "The gap between an idea and a check",
      text: "Between “we have a product” and “money in the bank” lies a canyon. We cross it together with the people who already have.",
      points: [
        { t: "Real cases", d: "Only founders who actually raised or secured a commitment." },
        { t: "Numbers and terms", d: "Rounds, valuations, timelines, deal structure - as open as each guest is willing to be." },
        { t: "Mistakes and rejections", d: "How many “no”s came before the first “yes”, and what they taught." },
      ],
    },
    topics: {
      title: "What we talk about",
      items: [
        { t: "First contact with a fund", d: "How to reach investors and land the meeting." },
        { t: "Soft vs hard commitment", d: "How they differ and how to turn one into a wire." },
        { t: "Pitch and due diligence", d: "What funds really look at and where deals fall apart." },
        { t: "Term sheet and negotiation", d: "Valuation, equity, investor rights, red flags." },
        { t: "Life after the round", d: "Reporting, pressure, the next raise." },
        { t: "Region and market", d: "Raising from Central Asia and the CIS." },
      ],
    },
    guests: {
      title: "Who can be a guest",
      sub: "We're looking for founders with something worth telling.",
      items: [
        "Raised a round from a venture fund (pre-seed, seed and beyond)",
        "Received a soft or hard commitment from an investor",
        "Ready to talk honestly about the process, not just the win",
      ],
    },
    form: {
      title: "I want to be on the show",
      sub: "Tell us about you and your startup. We'll reply by email.",
      name: "Full name",
      email: "Email",
      company: "Startup",
      stage: "What you had",
      stages: [
        { value: "vc", label: "Investment from a venture fund" },
        { value: "hard", label: "Hard commitment" },
        { value: "soft", label: "Soft commitment" },
      ],
      story: "Your story in short",
      storyPh: "What the startup does, how much and from whom you raised, what you can share…",
      link: "Website or LinkedIn link",
      submit: "Send application",
      sending: "Sending…",
      success: "Thank you! We got your application and will be in touch soon.",
      error: "Couldn't send. Check the fields and try again.",
    },
    footer: "© Founder Gap. A podcast about founders and venture money.",
    contact: "Questions? Message us on Telegram",
  },
  uz: {
    nav: { about: "Подкаст ҳақида", topics: "Мавзулар", guests: "Меҳмонлар", apply: "Меҳмон бўлиш" },
    hero: {
      badge: "Тез орада · биринчи мавсум",
      title1: "Пул сиз ўйлагандек",
      title2: "келмайди.",
      sub: "Founder Gap - венчур фондлардан инвестиция жалб қилган ёки soft ва hard commitment олган асосчилар билан подкаст. Ялтироқликсиз: питчлар, рақамлар, рад жавоблари ва аслида нима бўлгани.",
      cta: "Меҳмон сифатида ариза бериш",
      cta2: "Подкаст нима ҳақида",
    },
    stats: [
      { value: "VC", label: "фондлар ва уларнинг қарорлари" },
      { value: "Soft / Hard", label: "commitment’дан пулгача" },
      { value: "100%", label: "асосчиларнинг ҳақиқий ҳикоялари" },
    ],
    about: {
      title: "Ғоя ва чек орасидаги тафовут",
      text: "«Маҳсулотимиз бор» ва «ҳисобда пул бор» орасида катта жарлик бор. Биз уни ўтиб бўлганлар билан бирга таҳлил қиламиз.",
      points: [
        { t: "Ҳақиқий кейслар", d: "Фақат ҳақиқатан пул жалб қилган ёки commitment олган асосчилар." },
        { t: "Рақамлар ва шартлар", d: "Раундлар, баҳолаш, муддатлар, битим тузилмаси - меҳмон тайёр бўлганча очиқ." },
        { t: "Хатолар ва рад жавоблари", d: "Биринчи «ҳа»гача нечта «йўқ» бўлгани ва улар нимани ўргатгани." },
      ],
    },
    topics: {
      title: "Нима ҳақида гаплашамиз",
      items: [
        { t: "Фонд билан биринчи алоқа", d: "Инвесторларга қандай чиқиш ва учрашув олиш." },
        { t: "Soft vs hard commitment", d: "Улар қандай фарқ қилади ва пулга қандай етказиш." },
        { t: "Питч ва due diligence", d: "Фондлар нимага қарайди ва битимлар қаерда бузилади." },
        { t: "Term sheet ва музокаралар", d: "Баҳо, улуш, инвестор ҳуқуқлари, қизил байроқлар." },
        { t: "Раунддан кейинги ҳаёт", d: "Ҳисобот, босим, кейинги раунд." },
        { t: "Минтақа ва бозор", d: "Марказий Осиё ва МДҲдан инвестиция жалб қилиш." },
      ],
    },
    guests: {
      title: "Ким меҳмон бўла олади",
      sub: "Биз айтишга арзийдиган ҳикояси бор асосчиларни излаймиз.",
      items: [
        "Венчур фонддан раунд жалб қилган (pre-seed, seed ва ундан юқори)",
        "Инвестордан soft ёки hard commitment олган",
        "Фақат ғалабани эмас, жараённи ҳам ҳалол айтишга тайёр",
      ],
    },
    form: {
      title: "Подкастга чиқмоқчиман",
      sub: "Ўзингиз ва стартапингиз ҳақида ёзинг. Биз email орқали жавоб берамиз.",
      name: "Исм ва фамилия",
      email: "Email",
      company: "Стартап",
      stage: "Сизда нима бўлган",
      stages: [
        { value: "vc", label: "Венчур фонддан инвестиция" },
        { value: "hard", label: "Hard commitment" },
        { value: "soft", label: "Soft commitment" },
      ],
      story: "Ҳикоянгиз қисқача",
      storyPh: "Стартап нима қилади, қанча ва кимдан жалб қилдингиз, нималарни улашиш мумкин…",
      link: "Сайт ёки LinkedIn ҳаволаси",
      submit: "Ариза юбориш",
      sending: "Юборилмоқда…",
      success: "Раҳмат! Аризангиз қабул қилинди, тез орада боғланамиз.",
      error: "Юбориб бўлмади. Майдонларни текшириб, қайта уриниб кўринг.",
    },
    footer: "© Founder Gap. Асосчилар ва венчур пуллар ҳақида подкаст.",
    contact: "Саволингиз борми? Telegram’да ёзинг",
  },
};
