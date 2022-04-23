import {Color, ColorScale} from './color';

declare module 'styled-components' {
    interface DefaultTheme {
        colors: {
            bg: Color;
            primary: ColorScale;
            primaryDark: ColorScale;
            secondary: ColorScale;
            white: ColorScale;
            black: ColorScale;
            error: Color;
        };
        sizes: {
            H0: number;
            H1: number;
            H2: number;
            H3: number;
            P: number;
            P2: number;
            padding: number;
        };
        breakpoint: {
            mobile: string;
            tablet: string;
        };
        up: (bp: string, vert?: boolean) => string;
        down: (bp: string, vert?: boolean) => string;
        between: (low: string, high: string, vert?: boolean) => string;
    }
}
