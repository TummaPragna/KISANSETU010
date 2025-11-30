// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();  // ✔ Inside the component

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
  };

  const iconButton = {
    borderRadius: "999px",
    padding: "5px 10px",
    border: "none",
    cursor: "pointer",
    background: "rgba(255,255,255,0.1)",
    color: "white",
  };

  const logoutBtn = {
    ...iconButton,
    background: "#ef4444",
  };

  return (
    <header
      style={{
        width: "100%",
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(6px)",
        background: "rgba(0,0,0,0.4)",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      {/* Left */}
      <div style={{ fontWeight: "700", fontSize: "24px", letterSpacing: "2px" }}>
        Kisan<span style={{ color: "#7CFC00" }}>Setu</span>
      </div>

      {/* Middle */}
      <nav style={{ display: "flex", gap: "20px", fontSize: "15px" }}>
        <Link to="/home" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/dashboard/farmer" style={navLinkStyle}>
          Farmer
        </Link>
        <Link to="/dashboard/expert" style={navLinkStyle}>
          Expert
        </Link>
        <Link to="/dashboard/public" style={navLinkStyle}>
          Public
        </Link>
        <Link to="/dashboard/admin" style={navLinkStyle}>
          Admin
        </Link>
      </nav>

      {/* Right */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          style={iconButton}
          title="Settings"
          onClick={() => navigate("/home#settings")}
        >
          ⚙
        </button>

        {user && (
          <>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                background: "#7CFC00",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#1e293b",
                fontWeight: "700",
              }}
            >
              {user.name ? user.name[0].toUpperCase() : "U"}
            </div>

            <button style={logoutBtn} onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
}
