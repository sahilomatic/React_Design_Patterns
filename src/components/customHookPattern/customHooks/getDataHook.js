import { useEffect, useState } from "react";
export default function useGetDataHook(key) {
  const [required, setRequired] = useState();
  useEffect(() => {
    let data = {
      a: 5,
      b: 3,
      d: 4
    };
    setImmediate(() => {
      setRequired(data[key]);
    }, 1000);
  }, [key]);

  return required;
}
