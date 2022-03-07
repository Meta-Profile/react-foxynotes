/// <reference types="react-scripts" />

import 'styled-components';
import { defaultTheme } from '../../theme/defaultTheme';

// and extend them!
declare module 'styled-components' {
    export type DefaultTheme = typeof defaultTheme;
}
