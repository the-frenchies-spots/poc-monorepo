// pages/api/mongodb.js
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI || "";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as any);

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { id } = req.body;
    try {
      await client.connect();
      const database = client.db("japan");
      const collection = database.collection("spot");

      const data = await collection.deleteOne({ _id: new ObjectId(id) });

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
