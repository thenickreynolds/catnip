import { useEffect } from 'react';

function Reloader({ durationMs }) {
  useEffect(() => {
    setTimeout(function() {
      location.reload();
    }, durationMs);
  }, []);
  return <div>hello</div>
}

export default Reloader;