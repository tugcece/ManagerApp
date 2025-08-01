import type { CheckFinanceRows } from "./types";
import axios from "../../utils/axios";

export const getAllChecks = async (token: string): Promise<CheckFinanceRows[]> => {
  const response = await axios.get(`checks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.checks;
};

export const getCheckById = async (
  token: string,
  id: string
): Promise<CheckFinanceRows> => {
  const response = await axios.get(`checks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


export const addCheck = async (
  token: string,
  data: Partial<CheckFinanceRows>
): Promise<CheckFinanceRows> => {
  console.log("d:", data);
  const response = await axios.post(`checks`, [data], {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateCheck = async (
  token: string,
  data: Partial<CheckFinanceRows>
): Promise<CheckFinanceRows> => {
  const response = await axios.patch(`checks`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};


export const deleteCheck = async (token: string, id: string): Promise<void> => {
  await axios.delete(`finances/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

