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

export class StandaloneHelper {
    public static setColor(color: string) {
        document
            .querySelectorAll('meta[name="theme-color"]')
            .forEach((value) => value.setAttribute('content', color));
    }
    public static setBodyColor(color: string) {
        document.body.style.background = color;
        // window.document.documentElement.style.background = color;
    }
}
