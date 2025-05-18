// frontend/src/components/auth/EditProfile.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slices/userSlice";

const EditProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    username: user?.username || "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ userId: user.id, userData: formData }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        placeholder="Nombre completo"
      />
      <input
        type="text"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        placeholder="Nombre de usuario"
      />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default EditProfile;
