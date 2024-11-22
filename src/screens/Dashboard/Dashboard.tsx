import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
  poems: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    lines: string[];
    category: string;
  }[];
  onViewPoem: (id: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ poems, onViewPoem }) => {
  const navigate = useNavigate();

  const handleViewPoem = (poem: { id: string }) => {
    onViewPoem(poem.id);
    navigate("/detail");
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Poem Dashboard</h1>
      <div className="poem-list">
        {poems.map((poem) => (
          <div key={poem.id} className="poem-card">
            <h2 className="poem-title">{poem.title}</h2>
            <p className="poem-excerpt">{poem.excerpt}...</p>
            <button
              className="poem-button"
              onClick={() => handleViewPoem(poem)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;