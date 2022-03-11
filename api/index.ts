import { NowRequest, NowResponse } from "@vercel/node";

const { Client } = require('pg');
const uri = 'postgres://vutltydkohpyot:a9e822ecd595b05a78e4e4b813a131e7bd7c969ba157a7ae69f5e9db3832ee82@ec2-3-225-79-57.compute-1.amazonaws.com:5432/dahv6p2olipejf'

export default (req: NowRequest, res: NowResponse) => {

  const client = new Client({
    connectionString: uri,
    ssl: {
      sslmode: require, 
      rejectUnauthorized: false
    }
  });

  client.connect();

  client.query('select * from pg_user LIMIT 10;', (err, pgResponse) => {
    if (err) throw err;
    client.end()
    return res.status(200).json(pgResponse.rows);
  });

};
