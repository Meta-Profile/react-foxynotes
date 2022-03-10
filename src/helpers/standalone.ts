/**
 * Возвращает true, если приложение в standalone
 * @return {Boolean}
 */
export function isInStandaloneMode() {
    return (
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone ||
        document.referrer.includes('android-app://')
    );
}
