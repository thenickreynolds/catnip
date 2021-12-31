import { MongoClient } from "mongodb";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function settings(req, res) {
  try {
    const session = await getSession(req, res);
    const userId = session.user.sub;

    const uri = process.env.MONGO_DB_URI;
    const client = new MongoClient(uri);

    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    const db = await client.db("catnip");
    const users = db.collection("users");

    let user = await users.findOne({ userId });
    let createdUser = false;

    if (user === null) {
      await users.insertOne({ userId });
      user = await users.findOne({ userId });
      createdUser = true;
    }

    res.status(200).json(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    res.status(200).json({ name: "failed" });
  }
});
