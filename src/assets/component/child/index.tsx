import { useAtomValue } from "jotai";
import { countAtom } from "../../state/blogAtoms";

export const Child = () => {
  const parentCount = useAtomValue(countAtom);

  return <div className="card">Parent Count : {parentCount}</div>;
};
