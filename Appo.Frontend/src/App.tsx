import { Dashboard } from "./components/Dashboard";
import { WorkloadTable } from "./components/WorkloadTable";
import { ForecastChart } from "./components/ForecastChart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Dashboard />
      <hr />
      <WorkloadTable />
      <hr />
      <ForecastChart />
    </div>
  );
}

export default App;
