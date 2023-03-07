import { NextApiRequest, NextApiResponse } from 'next';
import { tycs } from './db';

type Tyc = {
  version: string,
  tycs:  TycChildren[]  ;
};

type TycChildren = {
  id: number, 
      title: string, 
      description: string 
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Tyc>) => {
  res.status(200).json(tycs)
}

export default handler