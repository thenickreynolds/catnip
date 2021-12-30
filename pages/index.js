import Reloader from "../components/reloader";
import TimeConsts from "../utils/timeConsts";
import PageHead from "../components/pageHead";
import Video from "../components/video";
import Spinner from "../components/spinner";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/settings", fetcher);
  const videoName = data ? data.video : null;

  return (
    <div>
      <PageHead />

      <main>
        {/* TODO make this every day or so, maybe check if build is updated first */}
        <Reloader durationMs={TimeConsts.HourInMs} />

        {!data && !error ? <Spinner /> : <Video videoName={videoName} />}
      </main>
    </div>
  );
}
