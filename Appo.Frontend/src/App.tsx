import { useEffect, useState } from "react";
import { getSummary } from "./api";

export default function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    getSummary().then(setSummary);
  }, []);

  if (!summary) return <p>Loading...</p>;

  return (
    <div>
      <h2>PEC Summary</h2>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
    </div>
  );
}
