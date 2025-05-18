//import axios from "axios";

// export const fetchVehiculos = async () => {
//   try {
//     const response = await axios.get("/api/vehiculos");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching vehiculos:", error);
//     throw error;
//   }
// };

// Temporal: Eliminar cuando el backend esté listo
export const fetchVehiculos = async () => [
  {
    id: 1,
    modelo: "Model S",
    precio: 79990,
    imagenUrl: "/placeholder-car.jpg",
  },
  {
    id: 2,
    modelo: "Model 3",
    precio: 46990,
    imagenUrl: "/placeholder-car.jpg",
  },
];
