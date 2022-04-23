// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";

type Data = {
    response: JSON;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const query = req.query;
    const db = await open('/tmp/database69.db');
    //await db.exec('CREATE TABLE users (name TEXT, preferences TEXT, events TEXT)');

    const sqlchuj =
        'INSERT INTO users (name, preferences, events) VALUES ("'
        + query.name
        + '", "'
        + query.preferences + '", "' +
        query.events + '")';

    await db.exec(sqlchuj);

    const response = await db.get('SELECT * FROM users WHERE name = ?', query.name);
    console.log(response);
    db.close();

    res.status(200).json({
        response: response
    });
};

// const user_data = await db.get('SELECT * FROM users WHERE name = ?', query.name);
// res.status(200).json({
//     user_data: user_data
// });

//
//const chuj = await db.get('SELECT * FROM users');
//const cipa = await db.get('SELECT name FROM "users"', 'user_data');
//console.log(cipa);
// //res.status(200).json({
//     user_data: chuj
// });
//await db.exec('INSERT INTO users VALUES ("Macius", "jointy, marihuana, ruchanie", "2137 666 314")');

//res.status(200).json(await db.get('SELECT * FROM users WHERE name = ' + body.name, 'user_data'));
