import { useEffect, useState } from 'react';
import { MobileConfig } from '../config/mobile';
import { isMobileDevice } from '../helpers/mobile';

/**
 * Возвращает true, если устройство - мобильное
 */
export const useIsMobile = (): boolean => {
    // Сначала проверим по заголовку, чтобы сразу выдать информацию
    const [isMobile, setIsMobile] = useState(isMobileDevice());

    useEffect(() => {
        const listener = () => {
            setIsMobile(window.innerWidth < MobileConfig.breakpoint);
        };

        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    });

    return isMobile;
};
