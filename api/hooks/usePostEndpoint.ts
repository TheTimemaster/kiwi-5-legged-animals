import {Optional} from '../../utils';
import React, {useContext, useState} from 'react';
import {AXIOS} from '../client';
import UserContext from '../../context/auth/UserContext';

type POSTOptions<T> = {
    useAuth?: boolean;
    default?: T;
    files?: {
        key: string;
        ref: React.RefObject<HTMLInputElement>;
    }[];
};

type POSTExecuteOptions = {
    payload?: object | FormData;
    useFormData?: boolean;
};

export const usePostEndpoint = <T>(
    endpoint: string,
    options?: POSTOptions<T>,
): [
    Optional<T>,
    Optional<Error>,
    (execOption?: POSTExecuteOptions) => Promise<void>,
] => {
    const user = useContext(UserContext);
    const [result, setResult] = useState(options?.default);
    const [error, setError] = useState(undefined);

    const execute = (execOption?: POSTExecuteOptions) => {
        const formData = new FormData();
        const useForm =
            execOption?.useFormData ?? (options?.files?.length ?? 0) > 0;

        for (const file of options?.files ?? []) {
            if (file.ref?.current != null) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                formData.append(file.key, file.ref?.current?.files[0]);
            }
        }

        return AXIOS.post(endpoint, useForm ? formData : execOption?.payload, {
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

    return [result, error, execute];
};
