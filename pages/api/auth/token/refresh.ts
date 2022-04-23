// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

type Out = {
    token: string;
};

type In = {
    token: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Out>) => {
    const body = req.body;

    res.status(200).json({
        token: body.token,
    });
};
