import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';
import { KuralEntity, Kurals } from "../../thirukural-types/types";


function getKurals() {
    return new Promise((res, rej) => {
        return fs.readFile(path.join(process.cwd(), 'thirukural.json'), { encoding: 'utf-8' },  function(err, data) {
            if(err) {
                rej(err);
                return;
            }
            res(JSON.parse(data));
        });
    });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<KuralEntity[]>
) {
    const kurals = await getKurals() as Kurals;
    res.status(200).json(kurals.kural);
}
