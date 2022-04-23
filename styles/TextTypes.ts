import styled from 'styled-components';

export enum TextColor {
    Black = 0,
    White = 1,
    Primary = 2,
}

type ColoredTextProps = {
    bold?: boolean;
    strong?: boolean;
    gray?: boolean;
    error?: boolean;
    invert?: boolean;
    color?: TextColor;
    underline?: boolean;
    semistrong?: boolean;
};

const LINE_HEIGHT_MULT = 1;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ColoredText = (s: keyof IntrinsicElements) => styled(s as unknown as keyof IntrinsicElement)<ColoredTextProps>`
    font-family: ${(p) => (p.bold ? 'AcuminPro-Bold' : 'AcuminPro-Regular')};
    color: ${(p) => {
        const colScale = p.error
            ? p.theme.colors.primary
            : [p.theme.colors.black, p.theme.colors.white, p.theme.colors.primary][p.color ?? TextColor.Black];
        const col = p.strong ? colScale._100 : p.semistrong ? colScale._80 : colScale._60;
        return p.invert ? col.invert() : col;
    }};
    ${(p) => (p.underline ? 'text-decoration: underline' : '')};
`;

export const H0 = styled(ColoredText('h1'))`
    font-size: ${(p) => p.theme.sizes.H0}px;
    line-height: ${(p) => p.theme.sizes.H0 * LINE_HEIGHT_MULT}px;
`;

export const H1 = styled(ColoredText('h1'))`
    font-size: ${(p) => p.theme.sizes.H1}px;
    line-height: ${(p) => p.theme.sizes.H1 * LINE_HEIGHT_MULT}px;
`;

export const H2 = styled(ColoredText('h2'))`
    font-size: ${(p) => p.theme.sizes.H2}px;
    line-height: ${(p) => p.theme.sizes.H2 * LINE_HEIGHT_MULT}px;
`;

export const H3 = styled(ColoredText('h3'))`
    font-size: ${(p) => p.theme.sizes.H3}px;
    line-height: ${(p) => p.theme.sizes.H3 * LINE_HEIGHT_MULT}px;
`;

export const P = styled(ColoredText('p'))`
    font-size: ${(p) => p.theme.sizes.P}px;
    line-height: ${(p) => p.theme.sizes.P * LINE_HEIGHT_MULT}px;
`;

export const P2 = styled(ColoredText('p'))`
    font-size: ${(p) => p.theme.sizes.P2}px;
    line-height: ${(p) => p.theme.sizes.P2 * LINE_HEIGHT_MULT}px;
`;
