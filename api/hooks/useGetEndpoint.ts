import {Optional} from '../../utils';
import {useContext, useEffect, useState} from 'react';
import {AXIOS} from '../client';
import UserContext from '../../context/auth/UserContext';

type GETOptions<T> = {
    useAuth?: boolean;
    default?: T;
    poll?: number;
};

export const useGetEndpoint = <T>(
    endpoint: string,
    options?: GETOptions<T>,
): [Optional<T>, Optional<Error>, () => Promise<void>] => {
    const user = useContext(UserContext);
    const [result, setResult] = useState(options?.default);
    const [error, setError] = useState(undefined);

    const refresh = () => {
        return AXIOS.get(endpoint, {
            headers: {
                Authorization: user ? `Bearer ${user.sessionKey}` : undefined,
            },
        })
            .then((res: any) => {
                setError(undefined);
                setResult(res.data);
            })
            .catch((err: any) => {
                setError(err);
                setResult(undefined);
            });
    };

    useEffect(() => {
        refresh();
    }, [endpoint]);

    useEffect(() => {
        if (options?.poll) {
            const int = setInterval(refresh, options.poll);
            return () => clearInterval(int);
        }
    }, [endpoint, options?.poll]);

    return [result, error, refresh];
};
