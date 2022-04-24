// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {DummyEvent, EventCore} from '../../../types/event';
import {range} from '../../../utils';

type Data = {
    name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<EventCore[]>) => {
    res.status(200).json(range(48).map((i) => DummyEvent(i.toString())));
};
