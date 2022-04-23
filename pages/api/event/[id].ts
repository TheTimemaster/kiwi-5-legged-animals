// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {DummyEvent, EventCore} from '../../../types/event';

export default (req: NextApiRequest, res: NextApiResponse<EventCore>) => {
    const id = req.query.id;
    res.status(200).json(DummyEvent(id.toString()));
};
