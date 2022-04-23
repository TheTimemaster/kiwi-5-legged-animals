import type {AppProps} from 'next/app';
import styled, {createGlobalStyle, ThemeContext} from 'styled-components';
import {DefaultProductTheme} from '../styles/default-product-theme';
import Center from '../components/central/Center';

const GlobalStyle = createGlobalStyle`
`;

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeContext.Provider value={DefaultProductTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeContext.Provider>
    );
}
export default MyApp;
