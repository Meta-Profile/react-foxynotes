import { ColorType } from './types';

export const defaultTheme = {
    colors: {
        black3: '#FBFBFB',
        black5: '#F2F2F2',
        black10: '#E7E7E7',
        black20: '#CDCDCD',
        black30: '#BFBFBF',
        black40: '#A3A3A3',
        black70: '#5D5D5D',
        black90: '#2C2C2B',
        black95: '#292929',
        black100: '#151514',
        blackAbsolute: '#000000',

        white: '#FEFEFE',
        whiteAbsolute: '#FFFFFF',

        red: '#EE2D0B',
        green: '#1CB92C',
        blue: '#2D9CDB',
        primary: '#FE6023',
        secondary: '#FFF5F1'
    } as Record<ColorType, string>
};
