// src/pages/DashboardRouter.jsx
import { useParams } from "react-router-dom";
import FarmerDashboard from "./dashboards/FarmerDashboard";
import ExpertDashboard from "./dashboards/ExpertDashboard";
import PublicDashboard from "./dashboards/PublicDashboard";
import AdminDashboard from "./dashboards/AdminDashboard";

export default function DashboardRouter() {
  const { role } = useParams();

  if (role === "farmer") return <FarmerDashboard />;
  if (role === "expert") return <ExpertDashboard />;
  if (role === "public") return <PublicDashboard />;
  if (role === "admin") return <AdminDashboard />;

  return <div>Unknown role</div>;
}
