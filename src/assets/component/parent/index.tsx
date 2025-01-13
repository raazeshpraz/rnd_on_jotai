import { useAtom } from "jotai";
import { Child } from "../child";
import { countAtom } from "../../atoms";

const Parent = () => {
  const [count, setCount] = useAtom<number>(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Child />
    </div>
  );
};

export default Parent;
