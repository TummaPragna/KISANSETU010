// src/pages/dashboards/PublicDashboard.jsx

import { Section, Card, sectionStyles } from "./FarmerDashboard";

export default function PublicDashboard() {
  const bgUrl =
    "https://www.apnikheti.com/upload/news/4121-ff.jpg";

  const marketPrices = [
    { crop: "Paddy", price: "₹2100 / quintal" },
    { crop: "Wheat", price: "₹2200 / quintal" },
    { crop: "Cotton", price: "₹5500 / quintal" },
  ];

  const awarenessPoints = [
    "Buy directly from local farmers.",
    "Support organic and sustainable practices.",
    "Share awareness on social media.",
  ];

  return (
    <Section bgUrl={bgUrl} heading="Public Awareness Dashboard">
      <div className="grid">

        <Card title="Market Prices (Sample)">
          <table style={{ width: "100%", color: "white", fontSize: "15px" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", paddingBottom: "6px" }}>
                  Crop
                </th>
                <th style={{ textAlign: "left", paddingBottom: "6px" }}>
                  Approx Price
                </th>
              </tr>
            </thead>
            <tbody>
              {marketPrices.map((m) => (
                <tr key={m.crop}>
                  <td>{m.crop}</td>
                  <td>{m.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card title="Why Farming Matters">
          <p style={{ marginBottom: "12px" }}>
            Farming feeds the nation, supports rural livelihoods, and sustains the environment.
            Learn how your choices support farmers.
          </p>

          <ul>
            {awarenessPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Card>

      </div>

      <style>{sectionStyles}</style>
    </Section>
  );
}
