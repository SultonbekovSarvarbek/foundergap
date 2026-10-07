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
      title1: "Как фаундеры договариваются",
      title2: "с инвесторами",
      sub: "Founder Gap — подкаст о том, как основатели стартапов привлекают венчурные инвестиции. Разбираем их опыт: как проходили встречи с фондами, почему приходили отказы и о каких условиях удалось договориться. Отдельно говорим о том, что происходит между «мы готовы инвестировать» и переводом денег.",
      cta: "Стать гостем подкаста",
      cta2: "О чём подкаст",
    },
    stats: [
      { value: "Венчурные фонды", label: "Как проходят встречи и переговоры" },
      { value: "Договорённости", label: "Что происходит до перевода денег" },
      { value: "Опыт основателей", label: "Питчи, отказы и условия сделок" },
    ],
    about: {
      title: "От первой встречи до денег на счёте",
      text: "Между первой встречей с фондом и деньгами на счёте — переговоры, проверки и отказы. Разбираем, как основатели проходят этот путь.",
      points: [
        { t: "Опыт привлечения инвестиций", d: "Истории основателей, которые получили инвестиции или договорились с инвестором и ещё ждут перевода денег." },
        { t: "Цифры и условия", d: "Раунды, оценки, сроки и структура сделок - в той мере, в какой гость готов о них говорить." },
        { t: "Ошибки и отказы", d: "Сколько отказов было до первого «да» и чему они научили." },
      ],
    },
    topics: {
      title: "О чём говорим",
      items: [
        { t: "Первый контакт с фондом", d: "Как выйти на инвесторов и получить встречу." },
        { t: "Soft и hard commitment", d: "Предварительная договорённость и более жёсткое обязательство инвестора: чем они отличаются и почему не гарантируют деньги." },
        { t: "Питч и due diligence", d: "Что фонды проверяют перед сделкой и на каком этапе она может сорваться." },
        { t: "Term sheet и переговоры", d: "Документ с основными условиями сделки: оценка, доля, права инвесторов и на что обратить внимание." },
        { t: "Жизнь после раунда", d: "Отчётность перед инвесторами, ожидания и подготовка к следующему раунду." },
        { t: "Регион и рынок", d: "Как проходит привлечение инвестиций в Центральной Азии и СНГ." },
      ],
    },
    guests: {
      title: "Кто может стать гостем",
      sub: "Достаточно одного из первых двух условий. Третье нужно в любом случае.",
      items: [
        "Привлекли инвестиции от венчурного фонда (pre-seed, seed и выше)",
        "Либо получили soft или hard commitment от инвестора",
        "В обоих случаях: готовы обсудить свой опыт, включая сложные моменты",
      ],
    },
    form: {
      title: "Стать гостем Founder Gap",
      sub: "Расскажите о себе и своём стартапе. Мы ответим по email.",
      name: "Имя и фамилия",
      email: "Email",
      company: "Стартап",
      stage: "На каком этапе привлечение инвестиций?",
      stages: [
        { value: "vc", label: "Инвестиции от венчурного фонда" },
        { value: "hard", label: "Hard commitment" },
        { value: "soft", label: "Soft commitment" },
      ],
      story: "Коротко о вашей истории",
      storyPh: "Чем занимается стартап, какие инвестиции или договорённости у вас есть, чем можете поделиться…",
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
      title1: "How founders negotiate",
      title2: "with investors",
      sub: "Founder Gap is a podcast about how startup founders raise venture funding. We go through their experience: how meetings with funds went, why rejections came, and which terms they managed to agree on. We also talk about what happens between “we're ready to invest” and the money actually arriving.",
      cta: "Become a guest",
      cta2: "What it's about",
    },
    stats: [
      { value: "Venture funds", label: "How meetings and negotiations go" },
      { value: "Agreements", label: "What happens before the money arrives" },
      { value: "Founder experience", label: "Pitches, rejections and deal terms" },
    ],
    about: {
      title: "From the first meeting to money in the bank",
      text: "Between the first meeting with a fund and money in the bank there are negotiations, checks and rejections. We look at how founders get through it.",
      points: [
        { t: "Fundraising experience", d: "Stories of founders who raised funding, or agreed a deal with an investor and are still waiting for the money." },
        { t: "Numbers and terms", d: "Rounds, valuations, timelines and deal structure - as far as each guest is willing to share." },
        { t: "Mistakes and rejections", d: "How many “no”s came before the first “yes”, and what they taught." },
      ],
    },
    topics: {
      title: "What we talk about",
      items: [
        { t: "First contact with a fund", d: "How to reach investors and land the meeting." },
        { t: "Soft and hard commitment", d: "A preliminary agreement and a firmer investor pledge: how they differ and why neither guarantees the money." },
        { t: "Pitch and due diligence", d: "What funds check before a deal and where it can fall apart." },
        { t: "Term sheet and negotiation", d: "The document with the key deal terms: valuation, equity, investor rights and what to watch for." },
        { t: "Life after the round", d: "Reporting to investors, expectations and preparing for the next round." },
        { t: "Region and market", d: "What fundraising looks like in Central Asia and the CIS." },
      ],
    },
    guests: {
      title: "Who can be a guest",
      sub: "One of the first two conditions is enough. The third applies in every case.",
      items: [
        "Raised investment from a venture fund (pre-seed, seed and beyond)",
        "Or received a soft or hard commitment from an investor",
        "In both cases: ready to talk about your experience, including the difficult parts",
      ],
    },
    form: {
      title: "Become a Founder Gap guest",
      sub: "Tell us about you and your startup. We'll reply by email.",
      name: "Full name",
      email: "Email",
      company: "Startup",
      stage: "Where are you in the fundraising process?",
      stages: [
        { value: "vc", label: "Investment from a venture fund" },
        { value: "hard", label: "Hard commitment" },
        { value: "soft", label: "Soft commitment" },
      ],
      story: "Your story in short",
      storyPh: "What the startup does, what funding or agreements you have, what you can share…",
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
      title1: "Асосчилар инвесторлар билан",
      title2: "қандай келишади",
      sub: "Founder Gap - стартап асосчилари венчур инвестицияларни қандай жалб қилиши ҳақида подкаст. Уларнинг тажрибасини таҳлил қиламиз: фондлар билан учрашувлар қандай ўтгани, нега рад жавоблари келгани ва қандай шартларга келишилгани. Алоҳида «инвестиция киритишга тайёрмиз» деган сўздан пул ўтказилгунга қадар нима бўлишини гаплашамиз.",
      cta: "Подкаст меҳмони бўлиш",
      cta2: "Подкаст нима ҳақида",
    },
    stats: [
      { value: "Венчур фондлар", label: "Учрашув ва музокаралар қандай ўтади" },
      { value: "Келишувлар", label: "Пул ўтказилгунга қадар нима бўлади" },
      { value: "Асосчилар тажрибаси", label: "Питчлар, рад жавоблари ва битим шартлари" },
    ],
    about: {
      title: "Биринчи учрашувдан ҳисобдаги пулгача",
      text: "Фонд билан биринчи учрашув ва ҳисобдаги пул орасида музокаралар, текширувлар ва рад жавоблари бор. Асосчилар бу йўлдан қандай ўтишини таҳлил қиламиз.",
      points: [
        { t: "Инвестиция жалб қилиш тажрибаси", d: "Инвестиция олган ёки инвестор билан келишиб, пул ўтказилишини кутаётган асосчиларнинг ҳикоялари." },
        { t: "Рақамлар ва шартлар", d: "Раундлар, баҳолаш, муддатлар ва битим тузилмаси - меҳмон айтишга тайёр бўлган доирада." },
        { t: "Хатолар ва рад жавоблари", d: "Биринчи «ҳа»гача нечта рад жавоби бўлгани ва улар нимани ўргатгани." },
      ],
    },
    topics: {
      title: "Нима ҳақида гаплашамиз",
      items: [
        { t: "Фонд билан биринчи алоқа", d: "Инвесторларга қандай чиқиш ва учрашув олиш." },
        { t: "Soft ва hard commitment", d: "Дастлабки келишув ва инвесторнинг қатъийроқ мажбурияти: улар қандай фарқ қилади ва нега пулни кафолатламайди." },
        { t: "Питч ва due diligence", d: "Фондлар битимдан олдин нимани текширади ва у қаерда бузилиши мумкин." },
        { t: "Term sheet ва музокаралар", d: "Битимнинг асосий шартлари ёзилган ҳужжат: баҳо, улуш, инвестор ҳуқуқлари ва нималарга эътибор бериш керак." },
        { t: "Раунддан кейинги ҳаёт", d: "Инвесторлар олдидаги ҳисобот, кутилмалар ва кейинги раундга тайёргарлик." },
        { t: "Минтақа ва бозор", d: "Марказий Осиё ва МДҲда инвестиция жалб қилиш қандай кечади." },
      ],
    },
    guests: {
      title: "Ким меҳмон бўла олади",
      sub: "Дастлабки иккита шартдан биттаси етарли. Учинчиси ҳар қандай ҳолатда керак.",
      items: [
        "Венчур фонддан инвестиция жалб қилган (pre-seed, seed ва ундан юқори)",
        "Ёки инвестордан soft ёки hard commitment олган",
        "Иккала ҳолатда ҳам: ўз тажрибасини, қийин лаҳзаларни ҳам муҳокама қилишга тайёр",
      ],
    },
    form: {
      title: "Founder Gap меҳмони бўлиш",
      sub: "Ўзингиз ва стартапингиз ҳақида ёзинг. Биз email орқали жавоб берамиз.",
      name: "Исм ва фамилия",
      email: "Email",
      company: "Стартап",
      stage: "Инвестиция жалб қилиш қайси босқичда?",
      stages: [
        { value: "vc", label: "Венчур фонддан инвестиция" },
        { value: "hard", label: "Hard commitment" },
        { value: "soft", label: "Soft commitment" },
      ],
      story: "Ҳикоянгиз қисқача",
      storyPh: "Стартап нима билан шуғулланади, қандай инвестиция ёки келишувларингиз бор, нималарни улашиш мумкин…",
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
