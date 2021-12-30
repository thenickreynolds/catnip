import PageHead from "../components/pageHead";
import Header from "../components/header";
import useSWR from "swr";
import SettingsComponents from "../components/settingsComponents";
import Spinner from "../components/spinner";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Settings() {
  const { data, error } = useSWR("/api/settings", fetcher);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <PageHead />
      <Header />

      <main>
        <h1>Settings</h1>
        <p className="fs-5 col-md-8">Configure your home screen</p>

        {data ? <SettingsComponents data={data} /> : <Spinner />}
      </main>
    </div>
  );
}
