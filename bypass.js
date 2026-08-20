const bypassTranslations = {
    ru: {
        title: "Обходка",
        downloadBtn: "Скачать",
        psText: "PS: Инструкция есть",
        instructionLink: "тут",
        clarificationLink: "Уточнение",
        about: "Обо мне",
        games: "Наши игры",
        functions: "Полезные функции"
    },
    en: {
        title: "Bypass Tool",
        downloadBtn: "Download",
        psText: "PS: Instructions available",
        instructionLink: "here",
        clarificationLink: "Clarification",
        about: "About me",
        games: "Our games",
        functions: "Useful functions"
    },
    de: {
        title: "Umgehungstool",
        downloadBtn: "Herunterladen",
        psText: "PS: Anleitung verfügbar",
        instructionLink: "hier",
        clarificationLink: "Klarstellung",
        about: "Über mich",
        games: "Unsere Spiele",
        functions: "Nützliche Funktionen"
    }
};

let currentLang = localStorage.getItem('bypass_language') || 'ru';

function t(key) {
    return bypassTranslations[currentLang]?.[key] || bypassTranslations.ru[key];
}

function updateBypassUILanguage() {
    const elements = ['title', 'downloadBtn', 'psText', 'instructionLink', 'clarificationLink'];
    elements.forEach(key => {
        const el = document.querySelector(`[data-key="${key}"]`);
        if (el) {
            if (key === 'downloadBtn') {
                el.innerHTML = `<i class="fas fa-download"></i> ${t(key)}`;
            } else {
                el.textContent = t(key);
            }
        }
    });
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keys = ['about', 'games', 'functions'];
        if (idx < keys.length) link.textContent = t(keys[idx]);
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('bypass_language', lang);
    updateBypassUILanguage();
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

updateBypassUILanguage();