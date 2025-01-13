import { atom } from "jotai";

export interface Blog {
  id: number;
  title: string;
  content: string;
}

export const blogsAtom = atom<Blog[]>([]);
