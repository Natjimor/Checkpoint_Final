import React, { useEffect, useState } from "react";
import { fetchPoems } from "./services/poetry";
import Dashboard from "./screens/Dashboard/Dashboard";

const App: React.FC = () => {
  const [poems, setPoems] = useState<{ id: string; title: string; excerpt: string }[]>([]);

  useEffect(() => {
    const loadPoems = async () => {
      const fetchedPoems = await fetchPoems(20);
      setPoems(fetchedPoems);
    };

    loadPoems();
  }, []);

  const handleViewPoem = (id: string) => {
    console.log(`Viewing poem with id: ${id}`);
  };

  return (
    <div className="App">
      <Dashboard poems={poems} onViewPoem={handleViewPoem} />
    </div>
  );
};

export default App;