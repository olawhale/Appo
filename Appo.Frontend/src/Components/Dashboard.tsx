// src/pages/Dashboard.tsx

import { useEffect, useState } from "react";
import { getSummary, getWorkloads, getForecast, PecSummary, Workload, ForecastPoint } from "../api";

export default function Dashboard() {
  const [summary, setSummary] = useState<PecSummary | null>(null);
  const [workloads, setWorkloads] = useState<Workload[]>([]);
  const [forecast, setForecast] = useState<ForecastPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [s, w, f] = await Promise.all([
          getSummary(),
          getWorkloads(),
          getForecast()
        ]);

        setSummary(s);
        setWorkloads(w);
        setForecast(f);
      } catch (err) {
        console.error("Error loading dashboard:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>PEC Dashboard</h1>

      {/* Summary Section */}
      <section>
        <h2>Summary</h2>
        {summary ? (
          <ul>
            <li>Total: {summary.total}</li>
            <li>Active: {summary.active}</li>
            <li>Inactive: {summary.inactive}</li>
          </ul>
        ) : (
          <p>No summary data available.</p>
        )}
      </section>

      {/* Workloads Section */}
      <section>
        <h2>Workloads</h2>
        {workloads.length > 0 ? (
          <ul>
            {workloads.map(w => (
              <li key={w.id}>
                {w.name}: {w.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No workloads available.</p>
        )}
      </section>

      {/* Forecast Section */}
      <section>
        <h2>Forecast</h2>
        {forecast.length > 0 ? (
          <ul>
            {forecast.map((f, i) => (
              <li key={i}>
                {new Date(f.date).toLocaleDateString()}: {f.value}
              </li>
            ))}
          </ul>
        ) : (
          <p>No forecast data available.</p>
        )}
      </section>
    </div>
  );
}
