import { isMobileDevice } from './helpers/mobile';
import { MobileConfig } from './config/mobile';
import { isInStandaloneMode } from './helpers/standalone';

/**
 * Возвращает true, если приложение - standalone
 */
export const isStandalone = isInStandaloneMode();

/**
 * Установлен в true, если приложение - мобильное
 */
export const isMobile =
    isMobileDevice() && window.innerWidth < MobileConfig.breakpoint && !isStandalone;

/**
 * Установлен в true, если приложение - мобильное
 */
export const isNotDesktop = isMobileDevice() && window.innerWidth < MobileConfig.breakpoint;

/**
 * Возвращает true, когда viewport - компьютер
 */
export const isDesktop = !isMobile && !isStandalone;
