import Videos from "../utils/videos";
import styles from "../styles/Home.module.css";

const Video = ({ videoName }) => {
  const vid = Videos.fromName(videoName);

  return (
    <video autoPlay loop muted className={styles.video_container}>
      <source src={vid.path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default Video;
