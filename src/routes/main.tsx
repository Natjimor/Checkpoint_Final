import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";
import Detail from "../screens/Detail/Detail";
import Form from "../screens/Form/Form";
import Intro from "../screens/Intro/Intro";
import { fetchPoems } from "../services/poetry";

interface Poem {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  lines: string[];
  category: string;
}

const AppRoutes: React.FC = () => {
  const [poems, setPoems] = useState<Poem[]>([]);

  useEffect(() => {
    const loadPoems = async () => {
      const fetchedPoems = await fetchPoems(20);
      const poemsWithDetails = fetchedPoems.map((poem: any) => ({
        ...poem,
        author: poem.author || "Unknown",
        lines: poem.lines || [],
        category: poem.category || "Uncategorized",
      }));
      setPoems(poemsWithDetails);
    };

    loadPoems();
  }, []);

  const handleViewPoem = (id: string) => {
    console.log(`Viewing poem with id: ${id}`);
  };

  const handleBack = () => {
    console.log("Back to the dashboard");
  };

  const router = createBrowserRouter([
    { path: "/", element: <Intro /> },
    { path: "/form", element: <Form /> },
    {
      path: "/dashboard",
      element: <Dashboard poems={poems} onViewPoem={handleViewPoem} />
    },
    {
      path: "/detail",
      element: <Detail poem={poems[0]} onBack={handleBack} />
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;