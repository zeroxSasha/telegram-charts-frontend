import type { ApiResponse } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCollections = async (): Promise<ApiResponse> => {
    const response = await fetch(`${API_BASE_URL}collections`);
    if (!response.ok) throw new Error('Did not receive expected data');
    return await response.json();
};
