import { useEffect, useState } from "react";
import { fetchPecSummary, PecSummary } from "../api";

export function Dashboard() {
  const [summary, setSummary] = useState<PecSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPecSummary()
      .then(setSummary)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading dashboard…</div>;
  if (!summary) return <div>Failed to load PEC summary.</div>;

  return (
    <div className="dashboard">
      <h1>APPO Dashboard</h1>
      <div className="cards">
        <div className="card">
          <h3>PEC Score</h3>
          <p className="big">{summary.pecScore}</p>
        </div>
        <div className="card">
          <h3>Current PEC</h3>
          <p>${summary.currentPec.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Missed PEC</h3>
          <p>${summary.missedPec.toLocaleString()}/month</p>
        </div>
        <div className="card">
          <h3>Uplift Potential</h3>
          <p>+${summary.upliftPotential.toLocaleString()}/month</p>
        </div>
      </div>
    </div>
  );
}
