// frontend/src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Ruta correcta
import userReducer from "./slices/userSlice"; // Asegúrate de que el archivo existe

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer, // Solo si es necesario
  },
});
