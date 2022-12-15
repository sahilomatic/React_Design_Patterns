import Shapes from "./shapes";

export default function View() {
  return (
    <>
      <Shapes text={"Div1 "} color={"red"} radius={10} />
      <Shapes text={"customDiv"} color={"green"} radius={50} />
    </>
  );
}
