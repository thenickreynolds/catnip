import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/loginButton";
import UserProfile from "../components/userProfile";
import LogoutButton from "../components/logoutButton";

export default function Config() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catnip</title>
        <meta name="description" content="Catnip for your cat (and for you)" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/paw_favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/paw_favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/paw_favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/paw_favicon/site.webmanifest" />
      </Head>

      <main className={styles.main}>
        <div>Hi</div>
        <UserProfile />
        <LoginButton />
        <LogoutButton />
      </main>
    </div>
  );
}
