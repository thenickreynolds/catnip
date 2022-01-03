import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import React, { useEffect } from "react";
import SettingsAndSyncProvider from "../components/settingsAndSyncProvider";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <UserProvider>
      <SettingsAndSyncProvider>
        <Component {...pageProps} />
      </SettingsAndSyncProvider>
    </UserProvider>
  );
}

export default MyApp;
