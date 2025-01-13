import React from "react";
import { useAtom } from "jotai";
import { blogListAtom } from "../state/blogAtoms";
import BlogCard from "../components/BlogCard";

const BlogList: React.FC = () => {
  const [blogs] = useAtom(blogListAtom);

  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
