import { useAtomValue } from "jotai";
import { countAtom } from "../../atoms";

export const Child = () => {
  const parentCount = useAtomValue(countAtom);

  return <div className="card">Parent Count : {parentCount}</div>;
};
