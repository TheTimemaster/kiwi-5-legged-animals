// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {jwtEncode} from '../../../utils';

type Out = {
    token: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Out>) => {
    const body = req.body;
    console.log(body);

    const data = {
        login: 'xd',
        id: 'id',
        exp: 1650724048000,
        sessionKey: 'lmao',
    };

    res.status(200).json({
        token: jwtEncode(data),
    });
};
