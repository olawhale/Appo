import { useEffect, useState } from "react";
import { fetchForecast, ForecastPoint } from "../api";

export function ForecastChart() {
  const [data, setData] = useState<ForecastPoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchForecast()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading forecast…</div>;
  if (!data.length) return <div>No forecast data.</div>;

  const max = Math.max(...data.map(d => d.value));
  const min = Math.min(...data.map(d => d.value));

  const normalize = (value: number) =>
    ((value - min) / (max - min || 1)) * 100;

  return (
    <div>
      <h2>PEC Forecast</h2>
      <svg viewBox="0 0 100 40" style={{ width: "100%", height: "200px" }}>
        <polyline
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          points={data
            .map((d, i) => {
              const x = (i / (data.length - 1 || 1)) * 100;
              const y = 40 - (normalize(d.value) * 0.3 + 5);
              return `${x},${y}`;
            })
            .join(" ")}
        />
      </svg>
      <ul>
        {data.map(d => (
          <li key={d.date}>
            {new Date(d.date).toLocaleDateString()}: ${d.value.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
