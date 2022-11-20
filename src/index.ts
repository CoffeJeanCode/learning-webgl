import { BasicScene } from "./Chapter1";

const main = () => {
  const canvas: HTMLCanvasElement = document.querySelector("#render");

  const scene = new BasicScene(canvas);
};

main();
