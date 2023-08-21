import { loop, setup } from "./examples/example-4";

const update = () => {
  requestAnimationFrame(update);
  loop();
};

window.onload = () => {
  setup();
  setTimeout(() => {
    update();
  }, 100);
};
