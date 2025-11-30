// src/pages/WelcomePage.jsx
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  const bgUrl =
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80";

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
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.45)",
          padding: "40px 60px",
          borderRadius: "18px",
          maxWidth: "700px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Welcome to <span style={{ color: "#7CFC00" }}>KisanSetu</span>
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Inspiring society about farming and helping farmers benefit from various sectors.
        </p>

        <button
          onClick={() => navigate("/auth")}
          style={{
            padding: "12px 36px",
            fontSize: "18px",
            borderRadius: "999px",
            border: "none",
            background: "#22c55e",
            color: "white",
            cursor: "pointer",
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}
