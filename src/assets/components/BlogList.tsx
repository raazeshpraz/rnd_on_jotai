import React from "react";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { blogsAtom } from "../state/blogAtoms";

const BlogList: React.FC = () => {
  const [blogs] = useAtom(blogsAtom);

  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link to={`/post/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
