// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);     // {email, role, name}
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("kisansetu_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const login = async ({ email, password, role }) => {
    try {
      const res = await api.post("/auth/login", { email, password, role });
      setUser(res.data.user);
      localStorage.setItem("kisansetu_user", JSON.stringify(res.data.user));
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      return { success: false, message: msg };
    }
  };

  const register = async ({ name, email, password, role }) => {
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        role,
      });
      setUser(res.data.user);
      localStorage.setItem("kisansetu_user", JSON.stringify(res.data.user));
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      return { success: false, message: msg };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("kisansetu_user");
    navigate("/auth");
  };

  const value = { user, login, register, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
