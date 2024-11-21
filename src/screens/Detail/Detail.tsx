import { Poem } from "../../types/poems";
import "./detail.css";

interface DetailProps {
  poem: Poem;
  onBack: () => void;
}

const Detail: React.FC<DetailProps> = ({ poem, onBack }) => {
  const { author, linecount, lines, title } = poem;

  const content = "Why is this not rendering? ..... 😅";

  return (
    <div className="detail">
      <button className="back-button" onClick={onBack}>
        &larr; Back
      </button>
      <h1 className="title">{title}</h1>
      <h2 className="author">By {author}</h2>
      <div className="content">{content}</div>
      <p className="lines">{linecount}</p>
    </div>
  );
};

export default Detail;
