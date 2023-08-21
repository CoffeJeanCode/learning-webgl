import { loop, setup } from "./examples/example-3";
import "./style.css";


const update = () => {
  requestAnimationFrame(update);
  loop();
};


window.onload = () => {
    setup();
    setTimeout(() => {
      update();
    }, 100);
  } 
    