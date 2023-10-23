// pages/api/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI || "";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any);

export default async function handler(req: any, res: any) {
  if (req.method === "GET") {
    const { tag, color, name, description, picture, lat, lng } = req.body;
    try {
      await client.connect();
      const database = client.db("japan");
      const collection = database.collection("spot");
      const data = await collection.find({}).toArray();

      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
