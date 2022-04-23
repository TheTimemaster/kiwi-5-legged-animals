import {FunctionComponent, useContext, useEffect, useState} from 'react';
import UserContext, {User, UserFromToken} from '../context/auth/UserContext';
import {usePostEndpoint} from '../api/hooks/usePostEndpoint';

export type HeaderUserSectionProps = {
    setUser: (user: User) => void;
    logOut: () => void;
};

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
            <button
                onClick={() => {
                    setLogin('login');
                    setPassword('password');
                    tryLogin();
                }}>
                Login
            </button>
        );
    } else {
        return <button onClick={props.logOut}>{user.id}</button>;
    }
};

export default HeaderUserSection;
