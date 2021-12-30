import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
