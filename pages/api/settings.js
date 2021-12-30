import { MongoClient } from "mongodb";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function settings(req, res) {
  const session = await getSession(req, res);
  const userId = session.user.sub;

  const uri = process.env.MONGO_DB_URI;
  const client = new MongoClient(uri);
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("test").command({ ping: 1 });
    res.status(200).json({ name: "connected" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    res.status(200).json({ name: "failed" });
  }
});
