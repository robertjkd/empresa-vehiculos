import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
});

// Interceptores para JWT
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

//datos de los vehiculos
export const fetchVehiculos = async () => {
  try {
    const response = await axios.get("/api/vehiculos"); // Ajusta la ruta según tu backend
    return response.data;
  } catch (error) {
    console.error("Error fetching vehiculos:", error);
    throw error;
  }
};
