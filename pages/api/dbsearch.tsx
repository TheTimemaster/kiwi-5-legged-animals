// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import {AXIOS} from "../../api/client";

type Data = {
    result: JSON; //TODO: this is boilerplate
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const query = req.body;

    const db = await open('/tmp/database69.db');

    const user_data = await db.get('SELECT * FROM users WHERE name="Macius"'); //TODO: boilercode

    await db.close();

    const data = {search_data: query.search_data, user_data: user_data};

    AXIOS.post('http://10.42.0.1:5000/recommend', {'data': data}).then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((error) => {
        console.log(error);
    });
};
