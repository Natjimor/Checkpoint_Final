import React, { useState } from "react";

interface PoemStepTwoProps {
  onNext: () => void;
  onBack: () => void;
}

const PoemStepTwo: React.FC<PoemStepTwoProps> = ({ onNext, onBack }) => {
  const [lines, setLines] = useState<string[]>([""]);

  const handleLineChange = (index: number, value: string) => {
    const newLines = [...lines];
    newLines[index] = value;
    setLines(newLines);
  };

  const addLine = () => {
    setLines([...lines, ""]);
  };

  const handleNext = () => {
    if (lines.some((line) => line.trim() === "")) {
      alert("Please fill in all the lines before proceeding.");
    } else {
      console.log({ lines, linecount: 0 });
      onNext();
    }
  };

  return (
    <div className="poem-creation-step">
      <h1>Create Your Poem: Step 2</h1>
      {lines.map((line, index) => (
        <label key={index}>
          Line {index + 1}:
          <input
            type="text"
            value={line}
            onChange={(e) => handleLineChange(index, e.target.value)}
            placeholder="Enter a line of the poem"
          />
        </label>
      ))}
      <button onClick={addLine}>Add Line</button>
      <div className="step-buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default PoemStepTwo;
