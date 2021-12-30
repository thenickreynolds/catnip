import Videos from "../utils/videos";

const Video = ({ videoName }) => {
  const vid = Videos.fromName(videoName);

  return (
    <video autoPlay loop muted>
      <source src={vid.path} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default Video;
