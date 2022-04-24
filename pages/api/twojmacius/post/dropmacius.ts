// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import {compileNonPath} from 'next/dist/shared/lib/router/utils/prepare-destination';

type Data = {
    response: JSON;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const query = req.query;
    const db = await open('database69.db');
    //await db.exec('CREATE TABLE users (name TEXT, preferences TEXT, events TEXT)');

    const sqlchuj = 'DELETE FROM users WHERE name="Maciuś"';

    await db.exec(sqlchuj);

    db.close();

    res.status(200).json({
        response: 'Macius is no longer with us',
    });
};
