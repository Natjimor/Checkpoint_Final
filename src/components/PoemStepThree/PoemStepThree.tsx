import React, { useState } from "react";

interface PoemStepThreeProps {
  onFinish: () => void;
  onBack: () => void;
}

const PoemStepThree: React.FC<PoemStepThreeProps> = ({ onFinish, onBack }) => {
  const [category, setCategory] = useState("");

  const handleFinish = () => {
    if (category) {
      console.log({ category });
      onFinish();
    } else {
      alert("Please select a category.");
    }
  };

  return (
    <div className="poem-creation-step">
      <h1>Create Your Poem: Step 3</h1>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Nature">Nature</option>
          <option value="Love">Love</option>
          <option value="Adventure">Adventure</option>
          <option value="Reflection">Reflection</option>
        </select>
      </label>
      <div className="step-buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={handleFinish}>Finish</button>
      </div>
    </div>
  );
};

export default PoemStepThree;
