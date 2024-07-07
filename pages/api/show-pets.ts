import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const pets = await sql`SELECT * FROM Pets;`;
    return res.status(200).json({ pets });
  } catch (error) {
    console.error('Error fetching pets:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}