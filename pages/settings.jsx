import PageHead from "../components/pageHead";
import Header from "../components/header";
import Videos from "../utils/videos";
import { useState } from "react";

export default function Settings() {
  const [selectedVideoName, setSelectedVideoName] = useState(
    Videos.defaultOption.name
  );

  return (
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <PageHead />
      <Header />

      <main>
        <h1>Settings</h1>
        <p class="fs-5 col-md-8">Configure your home screen</p>

        <h4 class="mb-3">Video</h4>
        <div class="my-3">
          {Videos.options.map((video) => {
            return (
              <div class="form-check">
                <input
                  id={video.name}
                  value={video.name}
                  name="videoOption"
                  type="radio"
                  class="form-check-input"
                  checked={video.name === selectedVideoName}
                  required=""
                  onChange={(e) => setSelectedVideoName(e.currentTarget.value)}
                />
                <label class="form-check-label" for={video.name}>
                  {video.name}
                </label>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
