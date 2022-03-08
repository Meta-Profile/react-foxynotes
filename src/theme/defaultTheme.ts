import { ColorType } from './types';

const white = '#FEFEFE';

const black100 = '#151514';
const blackAbsolute = '#000000';

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
        black100: black100,
        blackAbsolute: blackAbsolute,

        white,
        whiteAbsolute: '#FFFFFF',

        red: '#EE2D0B',
        green: '#1CB92C',
        blue: '#2D9CDB',
        primary: '#FE6023',
        secondary: '#FFF5F1',
        // secondary30: 'rgba(255,245,241, 0.9)',
    } as Record<ColorType, string>,

    banner: 'linear-gradient(180deg, #e65b42 0%, #e95053 100%)',

    modal: {
        backgroundColor: white,
        color: blackAbsolute,
    },
};
