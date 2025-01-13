import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./assets/pages/BlogList";
import NewBlog from "./assets/pages/NewBlog";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/new" element={<NewBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
