import PageHead from "../components/pageHead";
import Header from "../components/header";
import Videos from "../utils/videos";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Settings() {
  const [selectedVideoName, setSelectedVideoName] = useState(
    Videos.defaultOption.name
  );

  const { data, error } = useSWR("/api/settings", fetcher);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <PageHead />
      <Header />

      <main>
        <h1>Settings</h1>
        <p className="fs-5 col-md-8">Configure your home screen</p>

        <h4 className="mb-3">Video</h4>
        <div className="my-3">
          {Videos.options.map((video) => {
            return (
              <div className="form-check" key={video.name}>
                <input
                  id={video.name}
                  value={video.name}
                  name="videoOption"
                  type="radio"
                  className="form-check-input"
                  checked={video.name === selectedVideoName}
                  required=""
                  onChange={(e) => setSelectedVideoName(e.currentTarget.value)}
                />
                <label className="form-check-label" htmlFor={video.name}>
                  {video.name}
                </label>
              </div>
            );
          })}
        </div>

        <h4 className="mb-3">Data</h4>
        <div className="my-3">
          {JSON.stringify(data)}
          {JSON.stringify(error)}
        </div>
      </main>
    </div>
  );
}
