import React from "react";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { blogsAtom } from "../state/blogAtoms";

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogs] = useAtom(blogsAtom);

  const blog = blogs.find((blog) => blog.id === Number(id));
  if (!blog) return <p>Blog post not found</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
