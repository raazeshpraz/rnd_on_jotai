import React, { useState } from "react";
import { useAtom } from "jotai";
import { blogListAtom } from "../state/blogAtoms";

const NewBlog: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useAtom(blogListAtom);

  const addBlog = () => {
    const newBlog = { id: blogs.length + 1, title, content };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <div>
      <h1>Create New Blog</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addBlog}>Add Blog</button>
    </div>
  );
};

export default NewBlog;
