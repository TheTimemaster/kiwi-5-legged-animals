// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";

type Data = {
    user_data: JSON;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const query = req.query;
    const db = await open('/tmp/database69.db');

    //console.log('SELECT * FROM users WHERE name = ' + query.name);
    const user_data = await db.get('SELECT * FROM users WHERE name = ?', query.name);

    db.close();

    res.status(200).json({
        user_data: user_data
    });
};
