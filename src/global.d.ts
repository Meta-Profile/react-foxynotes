
// and extend them!
import { ColorType } from './theme/types';

declare module 'styled-components' {
    export type DefaultTheme = { colors: Record<ColorType, string> };
}
