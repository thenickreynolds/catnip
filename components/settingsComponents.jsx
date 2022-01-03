import Videos from "../utils/videos";
import { useContext } from "react";
import { SettingsContext } from "./settingsAndSyncProvider";
import SettingsState from "../utils/settingsState";

const SettingsComponents = () => {
  const { settingsState, settingsReducer } = useContext(SettingsContext);

  const selectedVideoName =
    settingsState.videoName || Videos.defaultOption.name;

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
                onChange={(e) =>
                  settingsReducer({
                    type: SettingsState.ACTION_SETTING_SELECTED_VIDEO,
                    newValue: e.currentTarget.value,
                    saveSettings: true,
                  })
                }
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
