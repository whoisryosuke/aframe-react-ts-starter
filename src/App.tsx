//@ts-ignore
import { Entity, Scene } from "aframe-react";
import "./App.css";
import Boxes from "./Boxes";

function App() {
  return (
    <Scene stats>
      <Entity primitive="a-light" type="ambient" color="#445451" />
      <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
      <Boxes />
      <Entity light={{ type: "point" }} />

      <Entity primitive="a-camera">
        <Entity
          primitive="a-cursor"
          animation__click={{
            property: "scale",
            startEvents: "click",
            from: "0.1 0.1 0.1",
            to: "1 1 1",
            dur: 150,
          }}
        />
      </Entity>
      <Entity fps-counter position={{ x: 0, y: 0, z: -5 }} />
    </Scene>
  );
}

export default App;
