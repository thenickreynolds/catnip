export default class PusherConsts {
  static APP_KEY = "a26e9ca991bd52099998";
  static CLUSTER = "us3";
  static MESSAGE_SETTINGS_UPDATED = "settings-updated";

  static userChannelName(sub) {
    return "user-" + sub.replace("|", "_");
  }
}
