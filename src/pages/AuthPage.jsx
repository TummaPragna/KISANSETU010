// src/pages/AuthPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "farmer",
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const bgUrl =
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErr = {};
    if (mode === "signup" && !form.name.trim()) newErr.name = "Name is required";
    if (!form.email.trim()) newErr.email = "Email is required";
    else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(form.email))
      newErr.email = "Invalid email";
    if (!form.password.trim()) newErr.password = "Password is required";
    else if (form.password.length < 6)
      newErr.password = "Min 6 characters required";
    if (!form.role) newErr.role = "Select a role";
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;
    setLoading(true);

    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      role: form.role,
    };

    const action = mode === "login" ? login : register;
    const result = await action(payload);
    setLoading(false);

    if (!result.success) {
      setServerError(result.message || "Something went wrong");
      return;
    }
    navigate("/home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          padding: "30px 40px",
          borderRadius: "18px",
          width: "380px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>KisanSetu</h2>

        {/* Toggle buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "20px",
            borderRadius: "999px",
            overflow: "hidden",
            border: "1px solid #d4d4d4",
          }}
        >
          <button
            style={{
              padding: "8px 0",
              border: "none",
              cursor: "pointer",
              background: mode === "login" ? "#22c55e" : "white",
              color: mode === "login" ? "white" : "#4b5563",
            }}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            style={{
              padding: "8px 0",
              border: "none",
              cursor: "pointer",
              background: mode === "signup" ? "#22c55e" : "white",
              color: mode === "signup" ? "white" : "#4b5563",
            }}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === "signup" && (
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
            />
          )}

          <Field
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@kluniversity.in"
          />

          <Field
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
          />

          <div style={{ marginBottom: "12px" }}>
            <label style={{ fontSize: "14px", fontWeight: 500 }}>Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              style={{
                width: "100%",
                marginTop: "4px",
                padding: "8px 10px",
                borderRadius: "8px",
                border: "1px solid #d4d4d4",
              }}
            >
              <option value="farmer">Farmer</option>
              <option value="expert">Agricultural Expert</option>
              <option value="public">Public</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <ErrorText text={errors.role} />}
          </div>

          {serverError && (
            <div style={{ color: "#b91c1c", marginBottom: "8px", fontSize: 12 }}>
              {serverError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "10px 0",
              borderRadius: "999px",
              border: "none",
              background: "#22c55e",
              color: "white",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text", placeholder }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label style={{ fontSize: "14px", fontWeight: 500 }}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          marginTop: "4px",
          padding: "8px 10px",
          borderRadius: "8px",
          border: "1px solid #d4d4d4",
        }}
      />
      {error && <ErrorText text={error} />}
    </div>
  );
}

function ErrorText({ text }) {
  return <div style={{ color: "#b91c1c", fontSize: "12px", marginTop: "2px" }}>{text}</div>;
}
