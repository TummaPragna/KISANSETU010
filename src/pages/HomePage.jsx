// src/pages/HomePage.jsx

import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const { user } = useAuth();

  // ✅ Updated background here:
  const bgUrl =
    "https://tse3.mm.bing.net/th/id/OIP.vGjqtotiXnShrDF95bfoQQHaEh?rs=1&pid=ImgDetMain&o=7&rm=3";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "120px auto",
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Top Row: Profile + Settings */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "60px",
          }}
        >
          {/* Profile Box */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              padding: "24px 34px",
              borderRadius: "18px",
              width: "260px",
              textAlign: "left",
              color: "white",
            }}
          >
            <h3>User Profile</h3>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Role:</strong> {user?.role}</p>
          </div>

          {/* Settings Box */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              padding: "24px 34px",
              borderRadius: "18px",
              width: "260px",
              textAlign: "left",
              color: "white",
            }}
          >
            <h3>Settings</h3>
            <p>Language: English (default)</p>
            <p>Theme: Light / Dark (future)</p>
            <p>Notifications: Enabled</p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <h1 style={{ marginBottom: "20px", fontSize: "36px" }}>
          KisanSetu Dashboards
        </h1>
        <p style={{ marginBottom: "60px" }}>
          Choose your role to explore farming resources, schemes, expert guidance, and market information.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Farmer Dashboard */}
          <DashboardCard
            link="/dashboard/farmer"
            img="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=800&q=80"
            title="Farmer Dashboard"
            desc="Weather, schemes, seeds, cultivation, ask experts."
          />

          {/* Expert Dashboard */}
          <DashboardCard
            link="/dashboard/expert"
            img="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
            title="Agricultural Expert"
            desc="Share videos, answer farmer questions, provide guidance."
          />

          {/* Public Dashboard */}
          <DashboardCard
            link="/dashboard/public"
            img="https://www.apnikheti.com/upload/news/4121-ff.jpg"
            title="Public Awareness"
            desc="Know crop prices, seeds cost, market trends."
          />

          {/* Admin Dashboard */}
          <DashboardCard
            link="/dashboard/admin"
            img="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
            title="Admin Panel"
            desc="Manage content, schemes, and platform data."
          />
        </div>
      </div>
    </div>
  );
}

// Small reusable card component
function DashboardCard({ link, img, title, desc }) {
  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          height: "200px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          backdropFilter: "blur(6px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        }}
      >
        <h2>{title}</h2>
        <p style={{ fontSize: "14px" }}>{desc}</p>
      </div>
    </a>
  );
}
