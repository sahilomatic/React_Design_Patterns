import { useState, useEffect } from "react";
import useGetDataHook from "./customHooks/getDataHook";

export default function Component1(props) {
  let d = useGetDataHook(props.k);
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(d);
  }, [props.k]);

  return <h2> Data is {data}</h2>;
}
