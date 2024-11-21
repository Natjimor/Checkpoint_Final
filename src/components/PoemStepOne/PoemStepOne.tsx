import React, { useState } from "react";

interface PoemStepOneProps {
  onNext: () => void;
}

const PoemStepOne: React.FC<PoemStepOneProps> = ({ onNext }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleNext = () => {
    if (title && author) {
      console.log({ title, author });
      onNext();
    } else {
      alert("Please fill in both the title and the author.");
    }
  };

  return (
    <div className="poem-creation-step">
      <h1>Create Your Poem: Step 1</h1>
      <label>
        Poem Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your poem's title"
        />
      </label>
      <label>
        Author Name:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter the author's name"
        />
      </label>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PoemStepOne;
