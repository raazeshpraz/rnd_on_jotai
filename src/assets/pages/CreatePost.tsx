import React, { useState } from "react";
import { useAtom } from "jotai";
import { blogsAtom } from "../state/blogAtoms";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useAtom(blogsAtom);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = { id: blogs.length + 1, title, content };
    setBlogs([...blogs, newPost]);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
