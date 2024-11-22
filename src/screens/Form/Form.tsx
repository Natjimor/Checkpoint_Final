import './form.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePoemContext } from "../../contexts/poemContext";
import PoemStepOne from "../../components/PoemStepOne/PoemStepOne";
import PoemStepTwo from "../../components/PoemStepTwo/PoemStepTwo";
import PoemStepThree from "../../components/PoemStepThree/PoemStepThree";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { updatePoemData} = usePoemContext();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      {step === 1 && (
        <PoemStepOne
          onNext={() => {
            updatePoemData({ title: "Title", author: "Author" });
            handleNext();
          }}
        />
      )}
      {step === 2 && (
        <PoemStepTwo
          onNext={() => {
            updatePoemData({ lines: ["Line 1", "Line 2"] });
            handleNext();
          }}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <PoemStepThree
          onFinish={() => {
            updatePoemData({ category: "Reflection" });
            handleNext();
          }}
          onBack={handleBack}
        />
      )}
    </>
  );
};

export default Form;