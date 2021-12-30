import { MongoClient } from "mongodb";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function settings(req, res) {
  const session = await getSession(req, res);
  const userId = session.user.sub;

  // TODO assume we're setting the video param for now
  //   const setting = req.setting;
  const { val } = JSON.parse(req.body);

  const uri = process.env.MONGO_DB_URI;
  const client = new MongoClient(uri);

  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    const db = await client.db("catnip");
    const users = db.collection("users");

    const filter = { userId };
    const updateDoc = {
      $set: {
        video: val,
      },
    };

    const options = { upsert: true };

    const result = await users.updateOne(filter, updateDoc, options);

    res.status(200).json({
      name: JSON.stringify(result + "value was " + JSON.stringify(req)),
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    res.status(200).json({ name: "failed" });
  }
});
