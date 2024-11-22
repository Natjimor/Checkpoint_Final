import ReactDOM from "react-dom";
import AppRoutes from "./routes/main"
import { PoemProvider } from "./contexts/poemContext";

ReactDOM.render(
  <PoemProvider>
    <AppRoutes />
  </PoemProvider>,
  document.getElementById("root")
);