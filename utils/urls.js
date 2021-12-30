export default class Urls {
  static domain() {
    return typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000";
  }
}
