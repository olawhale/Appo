import { useEffect, useState } from "react";
import { fetchWorkloads, Workload } from "../api";

export function WorkloadTable() {
  const [workloads, setWorkloads] = useState<Workload[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWorkloads()
      .then(setWorkloads)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading workloads…</div>;

  return (
    <div>
      <h2>Workload Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>Workload</th>
            <th>Customer</th>
            <th>PEC Status</th>
            <th>Issue</th>
            <th>Recommendation</th>
            <th>Est. Uplift</th>
          </tr>
        </thead>
        <tbody>
          {workloads.map(w => (
            <tr key={w.id}>
              <td>{w.name}</td>
              <td>{w.customer}</td>
              <td>{w.pecStatus}</td>
              <td>{w.issue}</td>
              <td>{w.recommendation}</td>
              <td>${w.estimatedUplift.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
