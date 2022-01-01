import Pusher from "pusher-js";
import PusherConsts from "./pusherConsts";

export default class PusherClient {
  static pusherClient;

  static initConnect() {
    if (!this.pusherClient) {
      this.pusherClient = new Pusher(PusherConsts.APP_KEY, {
        cluster: PusherConsts.CLUSTER,
      });
    }
  }

  static subscribeToUser(sub, method) {
    if (!this.pusherClient) return;

    this.pusherClient.subscribe(PusherConsts.userChannelName(sub));
    this.pusherClient.bind(PusherConsts.MESSAGE_SETTINGS_UPDATED, (data) => {
      console.log("pusher received data");
      method(data);
    });
  }

  static disconnect() {
    if (!this.pusherClient) return;

    this.pusherClient.disconnect();
  }
}
