import { useEffect } from 'react';

function Reloader({ durationMs }) {
  useEffect(() => {
    setTimeout(function() {
      location.reload();
    }, durationMs);
  }, []);
  return <></>
}

export default Reloader;