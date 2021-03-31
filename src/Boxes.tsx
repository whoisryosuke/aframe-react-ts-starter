//@ts-ignore
import { Entity } from "aframe-react";
import AnimatedBox from "./AnimatedBox";

function Boxes() {
  const rows = [...new Array(14)];
  const columns = [...new Array(14)];

  const generateBox = (rowIndex: number, colIndex: number) => {
    return (
      <AnimatedBox
        key={`${rowIndex}-${colIndex}`}
        rowIndex={rowIndex}
        colIndex={colIndex}
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
