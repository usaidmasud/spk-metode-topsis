// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import peoples from "../../../utils/datas/peoples";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") res.status(405).end();
  res.status(200).json({
    message: "OK",
    data: peoples,
  });
}
