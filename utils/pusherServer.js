import Pusher from "pusher";
import PusherConsts from "./pusherConsts";

export default class PusherServer {
  static async publishSettingsUpdated(sub) {
    const pusher = new Pusher({
      appId: process.env.PUSHER_APP_ID,
      key: PusherConsts.APP_KEY,
      secret: process.env.PUSHER_APP_SECRET,
      cluster: PusherConsts.CLUSTER,
      useTLS: true,
    });

    return await pusher.trigger(
      PusherConsts.userChannelName(sub),
      PusherConsts.MESSAGE_SETTINGS_UPDATED,
      {
        message: "please refetch",
      }
    );
  }
}
