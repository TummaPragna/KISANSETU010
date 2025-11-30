// src/pages/dashboards/AdminDashboard.jsx
import { useEffect, useState } from "react";
import api from "../../api/api";
import { Section, Card } from "./FarmerDashboard";

export default function AdminDashboard() {
  const bgUrl =
    "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&w=1600&q=80";

  const [schemes, setSchemes] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSchemes = async () => {
    try {
      const res = await api.get("/schemes");
      setSchemes(res.data);
    } catch (err) {
      setError("Failed to load schemes");
    }
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Scheme name required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      if (editingId) {
        await api.put(`/schemes/${editingId}`, form);
      } else {
        await api.post("/schemes", form);
      }
      setForm({ name: "", description: "" });
      setEditingId(null);
      fetchSchemes();
    } catch (err) {
      setError("Save failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (scheme) => {
    setEditingId(scheme.id);
    setForm({ name: scheme.name, description: scheme.description });
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/schemes/${id}`);
      fetchSchemes();
    } catch (err) {
      setError("Delete failed");
    }
  };

  return (
    <Section bgUrl={bgUrl} heading="Admin Dashboard">
      <div className="grid">
        <Card title="Add / Edit Government Scheme">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Scheme name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
            />
            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              style={{ ...inputStyle, minHeight: 70 }}
            />
            {error && (
              <div style={{ color: "#fecaca", fontSize: 12, marginTop: 4 }}>
                {error}
              </div>
            )}
            <button className="primary-btn" style={{ marginTop: 8 }} disabled={loading}>
              {loading ? "Saving..." : editingId ? "Update Scheme" : "Add Scheme"}
            </button>
          </form>
        </Card>

        <Card title="Existing Schemes">
          {schemes.length === 0 ? (
            <p>No schemes yet.</p>
          ) : (
            <ul>
              {schemes.map((s) => (
                <li
                  key={s.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <div>
                    <strong>{s.name}</strong>
                    <div style={{ fontSize: 12 }}>{s.description}</div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button className="primary-btn" onClick={() => handleEdit(s)}>
                      Edit
                    </button>
                    <button
                      style={{
                        borderRadius: "999px",
                        border: "none",
                        padding: "6px 10px",
                        cursor: "pointer",
                        background: "#ef4444",
                        color: "white",
                      }}
                      onClick={() => handleDelete(s.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </Section>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "8px 10px",
  borderRadius: 8,
  border: "1px solid #d4d4d4",
  fontSize: 14,
};
