import { useEffect, useRef, useState } from "react";

const useTick = <T>(onTick: Function, dependencies: Array<T> = []) => {
  const [tickRate] = useState(500);
  const tickRef = useRef<number>();

  useEffect(() => {
    tickRef.current = setInterval(onTick, tickRate);

    return () => clearInterval(tickRef.current);
  }, [tickRate, ...dependencies]);
};

export default useTick;
