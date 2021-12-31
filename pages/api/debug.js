export default async function settings(req, res) {
  res
    .status(200)
    .json({
      callback: process.env.AUTH0_CALLBACK,
      base_url: process.env.AUTH0_BASE_URL,
    });
}
