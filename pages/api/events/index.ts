// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {EventCore} from '../../../types/event';
import {range} from '../../../utils';

type Data = {
    name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<EventCore[]>) => {
    res.status(200).json(
        range(20).map((i) => ({
            description: 'Random event',
            id: i.toString(),
            location: {
                lat: 0,
                lng: 0,
                name: 'Elo',
                nearCity: 'Wawa',
            },
            name: 'Random event',
            picture: 'xd',
        })),
    );
};
