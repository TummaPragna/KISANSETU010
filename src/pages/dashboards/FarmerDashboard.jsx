// src/pages/dashboards/FarmerDashboard.jsx

export default function FarmerDashboard() {
  const bgUrl =
    "https://tse3.mm.bing.net/th/id/OIP.YHvH4f3ggq3HGjCsSqDD4AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3";

  const schemes = [
    { name: "PM-Kisan", desc: "Direct income support to farmers." },
    { name: "Soil Health Card", desc: "Testing soil for better productivity." },
  ];

  const weather = {
    today: "Partly cloudy, 30°C",
    tip: "Good day for irrigation in the evening.",
  };

  const seeds = [
    "High-yield paddy seeds",
    "Drought resistant maize",
    "Organic vegetable seeds",
  ];

  return (
    <Section bgUrl={bgUrl} heading="Farmer Dashboard">
      <div className="grid">
        <Card title="Today's Weather">
          <p>{weather.today}</p>
          <p style={{ marginTop: 6, fontSize: 13 }}>{weather.tip}</p>
        </Card>

        <Card title="Government Schemes">
          <ul>
            {schemes.map((s) => (
              <li key={s.name}>
                <strong>{s.name}:</strong> {s.desc}
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Seeds & Cultivation">
          <ul>
            {seeds.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Card>

        <Card title="Ask an Expert">
          <textarea
            placeholder="Type your question to experts..."
            style={{
              width: "100%",
              minHeight: "80px",
              borderRadius: "8px",
              padding: "8px",
              border: "1px solid #d4d4d4",
            }}
          />
          <button className="primary-btn" style={{ marginTop: 8 }}>
            Submit Question
          </button>
        </Card>
      </div>
    </Section>
  );
}

function Section({ bgUrl, heading, children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px 16px 60px",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "34px", marginBottom: "16px" }}>{heading}</h1>
        <style>{sectionStyles}</style>
        {children}
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

const sectionStyles = `
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }
  .card {
    background: rgba(0,0,0,0.75);
    border-radius: 16px;
    padding: 16px 18px;
    font-size: 14px;
    color: white;
  }
  .card h3 {
    margin-bottom: 8px;
    font-size: 18px;
    color: white;
  }
  .primary-btn {
    padding: 8px 16px;
    border-radius: 999px;
    border: none;
    background: #22c55e;
    color: white;
    cursor: pointer;
  }
`;

export { Section, Card, sectionStyles };
