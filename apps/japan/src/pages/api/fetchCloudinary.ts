// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const cloudinary = require("cloudinary");

type Data = any;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // add your api_key
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY, // add your api_secret
  secure: true,
});

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { folderName } = req.body;

  const response = await cloudinary.v2.search
    .expression("Manga/" + folderName)
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  res.status(200).json(response.resources);
};

export default handler;
