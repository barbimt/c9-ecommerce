import { NextApiRequest, NextApiResponse } from 'next';
import { products } from './db';

export type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  rating: number
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Product[]>) => { 
  res.status(200).json(products)
}

export default handler