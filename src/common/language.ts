export function getBrowserLang() {
    const source = navigator.language;
    return source.includes('ru') ? 'ru' : 'en';
}

export function getLocalstorageLang() {
    return localStorage.getItem('lang');
}

export function getActiveLang() {
    return getLocalstorageLang() ?? getBrowserLang();
}

export function setLocalstorageLang(lng: string) {
    localStorage.setItem('lang', lng);
    return lng;
}
