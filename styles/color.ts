export class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r: number, g: number, b: number, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    toString(): string {
        return `rgba(${this.r.toFixed(0)}, ${this.g.toFixed(0)}, ${this.b.toFixed(0)}, ${this.a})`;
    }
    toNoAlphaString(): string {
        return `rgb(${this.r.toFixed(0)}, ${this.g.toFixed(0)}, ${this.b.toFixed(0)})`;
    }
    mix(other: Color, strength = 0.5): Color {
        return new Color(
            this.r * (1 - strength) + other.r * strength,
            this.g * (1 - strength) + other.g * strength,
            this.b * (1 - strength) + other.b * strength,
            this.a * (1 - strength) + other.a * strength,
        );
    }
    invert(): Color {
        const mx = Color._MX() - 1;
        return new Color(mx - this.r, mx - this.g, mx - this.b, this.a);
    }

    withOpacity(a: number) {
        return new Color(this.r, this.g, this.b, this.a * a);
    }

    static fromHex(hex: string): Color {
        const h2d = (h: string) => parseInt(h, 16); // convert a hex value to decimal
        const col = [0, 0, 0];
        const bits = (hex.length - 1) / 3;
        for (let i = 1; i <= bits * 3; i += bits) {
            col[(i - 1) / bits] = (h2d(hex.substr(i, bits)) / 16.0 ** bits) * Color._MX(); // extract the current pairs
        }
        return new Color(col[0], col[1], col[2]);
    }

    static _MX(): number {
        return 256;
    }
}

export class ColorScale {
    _100: Color;
    _80: Color;
    _60: Color;
    _40: Color;
    _20: Color;
    constructor(c: Color, bg: Color) {
        this._100 = c;
        this._80 = c.mix(bg, 0.2);
        this._60 = c.mix(bg, 0.4);
        this._40 = c.mix(bg, 0.6);
        this._20 = c.mix(bg, 0.8);
    }
}
