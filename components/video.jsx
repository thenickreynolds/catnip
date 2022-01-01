import Videos from "../utils/videos";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player";

const Video = ({ videoName }) => {
  const vid = Videos.fromName(videoName);

  return (
    <div className={styles.video_container}>
      <ReactPlayer
        url={vid.path}
        className={styles.video_container}
        muted
        playing
        loop
        width="100%"
        height="100%"
      />
    </div>
  );
};
export default Video;
