import React, {createContext, useContext, useEffect, useState} from 'react';
import jwtDecode from 'jwt-decode';
import {Optional} from '../../utils';
import {usePostEndpoint} from '../../api/hooks/usePostEndpoint';

const tokenSave = 'usr-token-kiwi';

export type User = {
    login: string;
    id: number;
    sessionKey: string;
    expiration: number;
};

const UserContext = createContext<Optional<User>>(undefined);

type UserPersistenceProps = {
    setUser: (user: User) => void;
};

// que?
export const UserFromToken = (token: string): User => {
    console.log(token);
    const decoded = jwtDecode(token) as any;
    console.log('xd');
    return {
        login: decoded.username,
        id: decoded.id,
        expiration: decoded.exp,
        sessionKey: token,
    };
};

export const LogOut = (): void => {
    localStorage.removeItem(tokenSave);
};

export const UserPersistence: React.FC<UserPersistenceProps> = (props) => {
    const user = useContext(UserContext);
    const [newToken, newErr, refreshToken] = usePostEndpoint<{token: string}>(
        '/api/auth/token/refresh',
    );
    const [refreshTimeout, setRefreshTimeout] = useState<any>(null);

    useEffect(() => {
        const persistedToken = localStorage.getItem(tokenSave);
        console.log('Context47:' + persistedToken);
        if (persistedToken) {
            const persistedUser = UserFromToken(persistedToken);
            console.log(persistedUser);
            if (persistedUser.expiration * 1000 > Date.now()) {
                props.setUser(persistedUser);
            }
        }
    }, []);

    useEffect(() => {
        if (user) {
            console.log(JSON.stringify(user));
            localStorage.setItem(tokenSave, user.sessionKey);
            setRefreshTimeout(
                setTimeout(() => {
                    refreshToken();
                }, 30000),
            );
        }
        return () => {
            if (refreshTimeout != null) {
                clearTimeout(refreshTimeout);
                setRefreshTimeout(null);
            }
        };
    }, [user]);

    useEffect(() => {
        if (newToken?.token) {
            props.setUser(UserFromToken(newToken.token));
        }
    }, [newToken]);

    return <></>;
};

export default UserContext;
