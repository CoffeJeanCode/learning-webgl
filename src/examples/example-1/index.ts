import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
let scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  cube: Mesh;

export const setup = withInfo(
  "Example 1",
  "Basic scene"
)(() => {
  scene = new Scene();
  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById("app")?.appendChild(renderer.domElement);
  log("HOLA MUNDO");
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x191d88 });
  cube = new Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
});

export const loop = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
