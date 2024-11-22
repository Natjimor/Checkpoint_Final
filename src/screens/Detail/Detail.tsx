import React from "react";
import { useNavigate } from "react-router-dom";

interface DetailProps {
  poem: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    lines: string[];
    category: string;
  };
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ poem, onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    onBack();
    navigate("/dashboard");
  };

  const { author, lines, title } = poem;

  return (
    <div className="detail">
      <button className="back-button" onClick={handleBack}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <div className="content">{lines.join(" ")}</div>
      <p className="lines">{lines.length}</p>
    </div>
  );
};

export default Detail;