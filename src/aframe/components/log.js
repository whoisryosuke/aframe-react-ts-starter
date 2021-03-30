const AFRAME = window.AFRAME;
const THREE = window.THREE;
AFRAME.registerComponent("hello-world", {
  init: function () {
    console.log(
      "Hello adventurer! Take these, you'll need them:",
      AFRAME,
      THREE
    );
  },
});
