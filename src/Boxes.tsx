//@ts-ignore
import { Entity } from "aframe-react";

function Boxes() {
  const rows = [...new Array(14)];
  const columns = [...new Array(14)];

  const generateBox = (rowIndex: number, colIndex: number) => {
    const initialPosition = {
      x: -10 + rowIndex * 2,
      y: -10 + colIndex * 2,
      z: -5,
    };
    const toPosition = {
      x: -10 + rowIndex * 2 - 1,
      y: -10 + colIndex * 2 - 1,
      z: -5,
    };
    return (
      <Entity
        key={`${rowIndex}-${colIndex}`}
        geometry={{ primitive: "box" }}
        material={{ color: "red" }}
        position={initialPosition}
        animation={{
          property: "position",
          to: toPosition,
          loop: true,
          dur: 2000,
        }}
      />
    );
  };
  const boxes = rows.map((_, rowIndex) => {
    const result = columns.map((_, columnIndex) =>
      generateBox(rowIndex, columnIndex)
    );
    return [...result];
  });
  console.log("boxes", boxes);
  return <>{boxes}</>;
}

export default Boxes;
