// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {EventCore} from '../../../types/event';

export default (req: NextApiRequest, res: NextApiResponse<EventCore>) => {
    const id = req.query.id;
    res.status(200).json({
        description: id.toString(),
        id: id.toString(),
        location: {
            lat: 5,
            lng: 5,
            nearCity: 'xd',
            name: 'kap[a',
        },
        name: id.toString(),
        picture: id.toString(),
    });
};
