import type {AppProps} from 'next/app';
import styled, {createGlobalStyle, ThemeContext} from 'styled-components';
import {DefaultProductTheme} from '../styles/default-product-theme';
import Center from '../components/central/Center';
import UserContext, {
    LogOut,
    User,
    UserPersistence,
} from '../context/auth/UserContext';
import {Optional} from '../utils';
import {useState} from 'react';
import Header from '../components/Header';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
    }
`;

function MyApp({Component, pageProps}: AppProps) {
    const [user, setUser] = useState<Optional<User>>(undefined);

    const logOutMe = () => {
        LogOut();
        setUser(undefined);
    };

    return (
        <ThemeContext.Provider value={DefaultProductTheme}>
            <UserContext.Provider value={user}>
                <UserPersistence setUser={setUser} />
                <GlobalStyle />
                <Header setUser={setUser} logOut={logOutMe} />
                <Component {...pageProps} />
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}
export default MyApp;
