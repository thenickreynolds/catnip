import { MongoClient } from "mongodb";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import PusherServer from "../../utils/pusherServer";

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

    await users.updateOne(filter, updateDoc, options);

    await PusherServer.publishSettingsUpdated(userId);

    await res.status(200).json();
  } catch (e) {
    await res.status(200).json({ error: e });
  } finally {
    await client.close();
  }
});
