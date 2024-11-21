import "./App.css";

import Intro from "./screens/Intro/Intro";
import Dashboard from "./screens/Dashboard/Dashboard";
import Detail from "./screens/Detail/Detail";
import Form from "./screens/Form/Form";

const poems = [
  {
    id: "1",
    title: "The Road Not Taken",
    excerpt: "Two roads diverged in a yellow wood",
  },
  {
    id: "2",
    title: "Ozymandias",
    excerpt: "I met a traveler from an antique land",
  },
  { id: "3", title: "Daffodils", excerpt: "I wandered lonely as a cloud" },
];

const examplePoem = {
  title: "Epitaph. Intended for Sir Isaac Newton, in Westminster Abbey.",
  author: "Alexander Pope",
  lines: [
    "    ISAACUS NEWTONUS:",
    "    QUEM IMMORTALEM",
    "TESTANTUR TEMPUS, NATURA, COELUM:",
    "      MORTALEM",
    "    HOC MARMOR FATETUR.",
    "",
    "Nature and Nature's laws lay hid in night",
    "God said, Let Newton be! and all was light.",
  ],
  linecount: "7",
};

function App() {
  return <Form />;
  // return <Detail poem={examplePoem} onBack={() => {}} />;
  // return <Dashboard poems={poems} onViewPoem={() => {}} />;
  // return <Intro onNext={() => {}} />;
}

export default App;
