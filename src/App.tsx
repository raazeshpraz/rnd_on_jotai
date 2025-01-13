import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import CreatePost from "./assets/pages/CreatePost";
import ViewPost from "./assets/pages/ViewPost";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<ViewPost />} />
      </Routes>
    </Router>
  );
};

export default App;
