import React from "react";
import { useAtom } from "jotai";
import { Blog, selectedBlogAtom } from "../state/blogAtoms";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const [, setSelectedBlog] = useAtom(selectedBlogAtom);
  const navigate = useNavigate();

  const viewDetails = () => {
    setSelectedBlog(blog);
    navigate(`/blogs/${blog.id}`);
  };

  return (
    <div
      onClick={viewDetails}
      style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
    >
      <h2>{blog.title}</h2>
      <p>{blog.content.substring(0, 50)}...</p>
    </div>
  );
};
export default BlogCard;
