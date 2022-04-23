// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {EventCore} from '../../../types/event';

type Data = {
    name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<EventCore>) => {
    res.status(404);
};
