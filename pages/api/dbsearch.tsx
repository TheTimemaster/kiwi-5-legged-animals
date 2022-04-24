// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import {AXIOS} from '../../api/client';
import {EventCore} from '../../types/event';

export default async (
    req: NextApiRequest,
    res: NextApiResponse<EventCore[]>,
) => {
    const db = await open('database69.db');

    const user_data = await db.get('SELECT * FROM users WHERE name="Maciuś"'); //TODO: boilercode

    await db.close();

    const data = {search_data: req.query.search ?? '', user_data: user_data};

    console.log(data);
    const results = await AXIOS.post('http://10.0.5.118:5000/recommend', data);
    res.status(200).json(Object.values(results.data));
};
