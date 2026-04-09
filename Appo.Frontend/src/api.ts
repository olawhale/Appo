// src/api.ts

const BASE_URL = import.meta.env.VITE_API_URL;

// ---------- Types ----------
export interface PecSummary {
  total: number;
  active: number;
  inactive: number;
}

export interface Workload {
  id: number;
  name: string;
  value: number;
}

export interface ForecastPoint {
  date: string;   // ISO date string
  value: number;
}

// ---------- API Calls ----------
export async function getSummary(): Promise<PecSummary> {
  const res = await fetch(`${BASE_URL}/api/pec/summary`);
  if (!res.ok) throw new Error("Failed to fetch summary");
  return res.json();
}

export async function getWorkloads(): Promise<Workload[]> {
  const res = await fetch(`${BASE_URL}/api/pec/workloads`);
  if (!res.ok) throw new Error("Failed to fetch workloads");
  return res.json();
}

export async function getForecast(): Promise<ForecastPoint[]> {
  const res = await fetch(`${BASE_URL}/api/pec/forecast`);
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return res.json();
}
