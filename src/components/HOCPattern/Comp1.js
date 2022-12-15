import { forwardRef } from "react";
import withDimension from "./HOCFunc";
function Comp1(props, ref) {
  return (
    <div ref={ref} style={{ width: "20px" }}>
      <h2>
        width is {props.width} and height is {props.height}
      </h2>
    </div>
  );
}

export default withDimension(forwardRef(Comp1));
