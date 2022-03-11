import { useTheme } from 'styled-components';
import { useEffect, useState } from 'react';
import tinycolor2 from 'tinycolor2';
import { StandaloneHelper } from '../helpers/standalone';
import { isNotDesktop } from '../states';

export const useProfileColors = (color?: string) => {
    // Themefy
    const theme: any = useTheme();
    const [newTheme, setNewTheme] = useState<any>();

    useEffect(() => {
        if (!color) return;
        const source = tinycolor2(color);
        const primaryColor = source;
        let secondaryColor = source.clone().lighten(28);
        const bannerColor = source.clone().desaturate(27);
        let i = 0;
        if (secondaryColor.isLight()) {
            while (!tinycolor2.isReadable(secondaryColor, primaryColor)) {
                primaryColor.darken(1);
                i++;
                if (i >= 100) break;
            }
        } else {
            while (!tinycolor2.isReadable(secondaryColor, primaryColor)) {
                primaryColor.brighten(1);
                i++;
                if (i >= 100) break;
            }
        }
        StandaloneHelper.setColor(bannerColor.toHexString());

        setNewTheme({
            banner: isNotDesktop
                ? bannerColor.toHexString()
                : `linear-gradient(180deg, ${bannerColor.toHexString()} 0%, ${bannerColor
                      .clone()
                      .darken(5)
                      .toHexString()} 100%)`,
            colors: {
                ...theme.colors,
                primary: primaryColor.toHexString(),
                secondary: secondaryColor.toHexString(),
            },
        });
    }, [theme, color]);
    return newTheme;
};
