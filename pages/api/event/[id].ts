// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {DummyEvent, EventCore} from '../../../types/event';
import {AXIOS} from '../../../api/client';

export default async (req: NextApiRequest, res: NextApiResponse<EventCore>) => {
    const id = req.query.id;

    const result = await AXIOS.get('http://10.0.5.118:5000/event/' + id);
    res.status(200).json(result.data);
};
