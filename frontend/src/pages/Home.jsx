import { useState, useEffect } from "react";
import { fetchVehiculos } from "../api/vehiculos"; // Ejemplo de API
import { VehicleCard, SearchBar } from "../components"; // Componentes reutilizables

export default function Home() {
  const [vehiculos, setVehiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchVehiculos();
        setVehiculos(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Filtrado por búsqueda
  const filteredVehicles = vehiculos.filter((vehicle) =>
    vehicle.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <SearchBar onSearch={setSearchTerm} />
      {loading ? (
        <p>Cargando vehículos...</p>
      ) : (
        <div className="vehicle-grid">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} data={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
}