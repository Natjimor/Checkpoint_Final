import './intro.css'
import React from "react";
import { useNavigate } from "react-router-dom";

const Intro: React.FC = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/form");
  };

  return (
    <div className="intro">
      <h1 className="intro-title">Welcome to PoemWorld</h1>
      <p>Discover, read, and share beautiful poems from around the world.</p>
      <button className='intro-button' onClick={handleNext}>Start</button>
    </div>
  );
};

export default Intro;

