import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import { BrowserRouter, useRoutes, Link } from "react-router-dom";

function App() {
  const elements = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/creator/:id", element: <ViewCreator /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
  ]);
  return (
    <div>
      <nav>
        <Link to="/">CreatorVerse</Link>
        {"|"}
        <Link to="/new">Add Creator</Link>
      </nav>
      {elements}
    </div>
  );
}

export default App;
