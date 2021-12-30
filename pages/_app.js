import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Auth0Provider
      domain={"vitatua.auth0.com"}
      clientId={"r62Fac4ZjZ4DL0p8gaav9kR46ZjFTDMN"}
      redirectUri={"http://localhost:3000/"}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
