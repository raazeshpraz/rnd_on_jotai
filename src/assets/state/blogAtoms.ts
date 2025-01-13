import { atom } from "jotai";

export interface Blog {
  id: number;
  title: string;
  content: string;
}

export const blogListAtom = atom<Blog[]>([]);
export const selectedBlogAtom = atom<Blog | null>(null);
