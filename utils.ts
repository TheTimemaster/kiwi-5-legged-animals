import sign from 'jwt-encode';

export type Optional<T> = T | undefined;

export const jwtEncode = (data: any) => {
    const secret = 'secret';
    const jwt = sign(data, secret);
    return jwt;
};

export const range = (n: number): number[] => Array.from(Array(n).keys());
