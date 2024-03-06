import type { VercelRequest, VercelResponse } from '@vercel/node'


export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = req.headers.Authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}


export function GET(req: VercelRequest) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}