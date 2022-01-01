import Videos from "../utils/videos";
import { useState } from "react";

const SettingsComponents = ({ data }) => {
  const [selectedVideoName, setSelectedVideoName] = useState(
    data.video || Videos.defaultOption.name
  );

  const updateVideoPreference = (newValue) => {
    setSelectedVideoName(newValue);
    fetch("/api/setSetting", {
      method: "POST",
      body: JSON.stringify({ val: newValue }),
    });
  };

  return (
    <>
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
                onChange={(e) => updateVideoPreference(e.currentTarget.value)}
              />
              <label className="form-check-label" htmlFor={video.name}>
                {video.name}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SettingsComponents;
