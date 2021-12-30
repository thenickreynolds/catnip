import styles from "../styles/Home.module.css";
import LoginButton from "../components/loginButton";
import UserProfile from "../components/userProfile";
import LogoutButton from "../components/logoutButton";
import PageHead from "../components/pageHead";

export default function Settings() {
  return (
    <div className={styles.container}>
      <PageHead />

      <main className={styles.main}>
        <div>Settings</div>
        <UserProfile />
        <LoginButton />
        <LogoutButton />
      </main>
    </div>
  );
}
