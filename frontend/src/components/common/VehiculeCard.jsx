const VehicleCard = ({ modelo, precio, imagenUrl }) => {
  return (
    <div className="vehicle-card">
      <img src={imagenUrl} alt={modelo} />
      <h3>{modelo}</h3>
      <p>Precio: ${precio.toLocaleString()}</p>
    </div>
  );
};

export default VehicleCard;
