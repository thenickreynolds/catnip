import styles from "../styles/Home.module.css";
import Reloader from "../components/reloader";
import TimeConsts from "../utils/timeConsts";
import PageHead from "../components/pageHead";
import Video from "../utils/videos";

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHead />

      <main className={styles.main}>
        {/* TODO make this every day or so, maybe check if build is updated first */}
        <Reloader durationMs={TimeConsts.MinuteInMs * 2} />

        <video autoPlay loop muted className={styles.video_container}>
          <source src={Video.defaultOption.path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </div>
  );
}
