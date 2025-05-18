// frontend/src/components/admin/UserList.jsx
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/userSlice";

const UserList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    // Lógica para cargar usuarios (puedes implementarla)
  }, []);

  return (
    <div className="user-list">
      <h3>Usuarios Registrados</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.fullName} ({user.username})
            <button
              onClick={() => dispatch(deleteUser(user.id))}
              disabled={user.role === "administrador"}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
