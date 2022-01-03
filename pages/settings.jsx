import PageHead from "../components/pageHead";
import Header from "../components/header";
import SettingsComponents from "../components/settingsComponents";
import Spinner from "../components/spinner";
import { useContext } from "react";
import { SettingsContext } from "../components/settingsAndSyncProvider";

export default function Settings() {
  const { settingsState } = useContext(SettingsContext);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <PageHead />
      <Header />

      <main>
        <h1>Settings</h1>
        <p className="fs-5 col-md-8">Configure your home screen</p>

        {settingsState.serverLoadComplete ? (
          <SettingsComponents />
        ) : (
          <Spinner />
        )}
      </main>
    </div>
  );
}
