import Reloader from "../components/reloader";
import TimeConsts from "../utils/timeConsts";
import PageHead from "../components/pageHead";
import Video from "../components/video";
import Spinner from "../components/spinner";
import useSWR from "swr";
import { useUser } from "@auth0/nextjs-auth0";
import { useEffect } from "react";
import PusherClient from "../utils/pusherClient";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, mutate, error } = useSWR("/api/settings", fetcher);
  const videoName = data ? data.video : null;
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // Never disconnect, just only connect if the user goes to this page
      PusherClient.ensureConnection();
      PusherClient.subscribeToUser(user.sub, () => mutate());
      return () => PusherClient.unsubscribe(user.sub);
    }
  }, [user]);

  return (
    <div>
      <PageHead />

      <main>
        {/* TODO make this every day or so, maybe check if build is updated first */}
        <Reloader durationMs={TimeConsts.HourInMs} />

        {!data && !error ? <Spinner /> : <Video videoName={videoName} />}

        <div className={styles.settings_cog}>
          <Link href="/settings">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
