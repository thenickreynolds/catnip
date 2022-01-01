import Pusher from "pusher-js";
import PusherConsts from "./pusherConsts";

export default class PusherClient {
  static pusherClient;

  static ensureConnection() {
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
      method(data);
    });
  }

  static unsubscribe(sub) {
    if (!this.pusherClient) return;

    this.pusherClient.unsubscribe(PusherConsts.userChannelName(sub));
  }

  static disconnect() {
    if (!this.pusherClient) return;

    this.pusherClient.disconnect();
  }
}
