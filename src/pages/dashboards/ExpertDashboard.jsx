// src/pages/dashboards/ExpertDashboard.jsx

import { Section, Card, sectionStyles } from "./FarmerDashboard";

export default function ExpertDashboard() {
  const bgUrl =
    "https://tse1.mm.bing.net/th/id/OIP.4oZnaK-Zy5Dtl7foL5ds3wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3";

  const farmerQuestions = [
    "How to control pests in cotton?",
    "Best paddy variety for high rainfall areas?",
  ];

  const trainingVideos = [
  {
    title: "Farming Tips (Shorts 1)",
    embed: "https://www.youtube.com/embed/yMw6-cIj720",
  },
  {
    title: "Agriculture Hack (Shorts 2)",
    embed: "https://www.youtube.com/embed/15Atx8i_eqo",
  }
];


  return (
    <Section bgUrl={bgUrl} heading="Expert Dashboard">
      <div className="grid" style={{ gap: "24px" }}>
        <Card title="Farmer Questions">
          <ul>
            {farmerQuestions.map((q) => (
              <li key={q} style={{ marginBottom: "6px" }}>
                {q}
              </li>
            ))}
          </ul>

          <textarea
            placeholder="Type your answer for selected question..."
            style={{
              width: "100%",
              minHeight: "80px",
              borderRadius: "8px",
              padding: "8px",
              border: "1px solid #d4d4d4",
              marginTop: "16px",
            }}
          />

          <button className="primary-btn" style={{ marginTop: "12px" }}>
            Post Answer
          </button>
        </Card>

        <Card title="Training Videos">
          {trainingVideos.map((v) => (
            <div key={v.title} style={{ marginBottom: "24px" }}>
              <p style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "500" }}>
                {v.title}
              </p>
              <iframe
                width="100%"
                height="220"
                src={v.embed}
                title={v.title}
                style={{
                  borderRadius: "12px",
                  border: "none",
                  background: "#000",
                }}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </Card>
      </div>

      <style>{sectionStyles}</style>
    </Section>
  );
}
