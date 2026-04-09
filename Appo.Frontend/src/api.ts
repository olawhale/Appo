export interface PecSummary {
  currentPec: number;
  missedPec: number;
  upliftPotential: number;
  pecScore: number;
}

export interface Workload {
  id: string;
  name: string;
  customer: string;
  pecStatus: string;
  issue: string;
  recommendation: string;
  estimatedUplift: number;
}

export interface ForecastPoint {
  date: string;
  value: number;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getSummary() {
  const res = await fetch(`${BASE_URL}/api/pec/summary`);
  return res.json();
}

export async function fetchWorkloads(): Promise<Workload[]> {
  const res = await fetch(`${BASE_URL}/api/pec/workloads`);
  if (!res.ok) throw new Error("Failed to load workloads");
  return res.json();
}

export async function fetchForecast(): Promise<ForecastPoint[]> {
  const res = await fetch(`${BASE_URL}/api/pec/forecast`);
  if (!res.ok) throw new Error("Failed to load forecast");
  return res.json();
}

