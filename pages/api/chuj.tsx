// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

type Data = {
    name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const db = await open('/tmp/database.db');
    //await db.exec('CREATE TABLE tbl (col TEXT)');
    await db.exec('INSERT INTO tbl VALUES ("test")');
    const anal = await db.get('SELECT col FROM tbl WHERE col = ?', 'test');
    res.status(200).json(anal);
    //res.status(200).json({name: 'John Doe'});
};
