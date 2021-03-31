import React, { useEffect, useRef } from "react";
//@ts-ignore
import { Entity } from "aframe-react";

interface Props {
  rowIndex: number;
  colIndex: number;
}

const AnimatedBox = ({ rowIndex, colIndex }: Props) => {
  const boxRef = useRef<any>(null);
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

  useEffect(() => {
    AFRAME.ANIME({
      targets: toPosition,
      ...initialPosition,
      loop: true,
      direction: "alternate",
      update: function () {
        boxRef.current.el.object3D.position.x = toPosition.x;
        boxRef.current.el.object3D.position.y = toPosition.y;
      },
    });
  }, [toPosition, boxRef, initialPosition]);
  return (
    <Entity
      ref={boxRef}
      key={`${rowIndex}-${colIndex}`}
      geometry={{ primitive: "box" }}
      material={{ color: "red" }}
      position={initialPosition}
    />
  );
};

export default AnimatedBox;
