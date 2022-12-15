import { useRef, useState, useEffect } from "react";

export default function withDimension(Element) {
  return function WithDimension(props) {
    const InputRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
      setWidth(InputRef.current.offsetWidth);
      setHeight(InputRef.current.offsetWidth);
    });

    return <Element ref={InputRef} width={width} height={height} {...props} />;
  };
}
