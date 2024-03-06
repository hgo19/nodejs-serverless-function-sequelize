import type { VercelRequest, VercelResponse } from '@vercel/node'


export default async function handler(req: VercelRequest, res: VercelResponse) {
  const token = req.headers.Authorization;
  console.log(req.headers)

  return res.status(401).json({ message: 'Unauthorized', headers: req.headers });
}


export function GET(req: VercelRequest) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}