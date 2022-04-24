import {FunctionComponent, useContext, useEffect, useState} from 'react';
import UserContext, {User, UserFromToken} from '../context/auth/UserContext';
import {usePostEndpoint} from '../api/hooks/usePostEndpoint';
import {P} from '../styles/TextTypes';
import styled from 'styled-components';

export type HeaderUserSectionProps = {
    setUser: (user: User) => void;
    logOut: () => void;
};

export const Wrapper = styled.div`
    display: flex;
`;

const ClickableP = styled(P)`
    margin-left: 20px;

    &:hover {
        color: ${(p) => p.theme.colors.primary._100.toString()};
    }
`;

const HeaderUserSection: FunctionComponent<HeaderUserSectionProps> = (
    props,
) => {
    const user = useContext(UserContext);

    const [loginRes, loginErr, goLogin] = usePostEndpoint<{token: string}>(
        '/api/auth/login',
    );
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
        if (loginRes) {
            const token = loginRes.token;
            console.log('HeaderUser:' + JSON.stringify(loginRes));
            props.setUser(UserFromToken(token));
        }
    }, [loginRes, loginErr]);

    const tryLogin = () => {
        const form = new FormData();
        form.append('username', login);
        form.append('password', password);
        goLogin({payload: form});
    };

    if (user?.id == undefined) {
        return (
            <ClickableP
                onClick={() => {
                    setLogin('login');
                    setPassword('password');
                    tryLogin();
                }}>
                Login
            </ClickableP>
        );
    } else {
        return (
            <Wrapper>
                <P>{`Logged in as: ${user.id}`}</P>
                <ClickableP onClick={props.logOut}>Log out</ClickableP>
            </Wrapper>
        );
    }
};

export default HeaderUserSection;
