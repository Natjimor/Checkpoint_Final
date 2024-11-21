import "./intro.css";

interface IntroProps {
  onNext: () => void;
}

const Intro: React.FC<IntroProps> = ({ onNext }) => {
  return (
    <div className="intro">
      <h1 className="intro-title">Welcome to PoemWorld</h1>
      <p className="intro-description">
        Discover, read, and share beautiful poems from around the world. Let
        your imagination flow like verses of poetry.
      </p>
      <button className="intro-button" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Intro;
