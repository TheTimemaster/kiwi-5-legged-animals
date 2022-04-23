import {Color, ColorScale} from './color';
import {DefaultTheme} from 'styled-components';

const bg = new Color(249, 250, 251);

export const DefaultProductTheme: DefaultTheme = {
    colors: {
        bg,
        primary: new ColorScale(new Color(0, 173, 152), bg),
        primaryDark: new ColorScale(new Color(54, 8, 3), bg),
        secondary: new ColorScale(new Color(222, 9, 82), bg),
        white: new ColorScale(new Color(255, 255, 255), bg),
        black: new ColorScale(new Color(0, 0, 0), bg),
        error: new Color(255, 50, 50),
    },
    sizes: {
        H0: 24,
        H1: 22,
        H2: 20,
        H3: 18,
        P: 16,
        P2: 14,
        padding: 20,
    },
    breakpoint: {
        mobile: '576px',
        tablet: '1200px',
    },
    up: (breakpoint, vertical = false) =>
        `@media (min-${
            vertical ? 'height' : 'width'
        }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint, vertical = false) =>
        `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
    between: (breakpointMin, breakpointMax, vertical = false) =>
        `@media (max-${
            vertical ? 'height' : 'width'
        }: ${breakpointMax}) and (min-${
            vertical ? 'height' : 'width'
        }: calc(${breakpointMin} + 0.02px))`,
};
