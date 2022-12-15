export default function Shapes({ text, radius, color }) {
  return (
    <div
      style={{
        "border-color": `${color}`,
        "border-width": "1opx",
        "background-color": `${color}`,
        "border-radius": `${radius}px`
      }}
    >
      <h2>{text}</h2>
    </div>
  );
}
