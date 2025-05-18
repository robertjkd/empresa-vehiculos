import { useState, useEffect } from "react";
import { fetchVehiculos } from "../services/vehiculos";
import SearchBar from "./../components/common/SearchBar";
import VehicleCard from "./../components/common/VehiculeCard";

export default function Home() {
  const [vehiculos, setVehiculos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchVehiculos();
        setVehiculos(data);
      } catch (error) {
        console.error("Error cargando vehículos:", error);
      }
    };
    loadData();
  }, []);

  //Filtro de vehiculos
  const filteredVehiculos = vehiculos.filter((vehiculo) =>
    vehiculo.modelo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Vehículos Eléctricos Disponibles</h1>
      <SearchBar onSearch={setSearchTerm} />
      <div className="vehicle-grid">
        {filteredVehiculos.map((vehiculo) => (
          <VehicleCard
            key={vehiculo.id}
            modelo={vehiculo.modelo}
            precio={vehiculo.precio}
            imagen={vehiculo.imagenUrl}
          />
        ))}
      </div>
    </div>
  );
}
