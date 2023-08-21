import Addons, {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "../../lib/three";
const Addon = Addons.default;

let scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  cube: Mesh,
  controls: any;
export const setup = withInfo(
  "Example 2",
  "With Controls"
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
  appendApp(renderer.domElement);

  controls = new Addon.OrbitControls(camera, renderer.domElement);
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x191d88 });
  cube = new Mesh(geometry, material);
  scene.add(cube);

  camera.position.set(0, 0, 2);
});

export const loop = () => {
  cube.rotation.x += 0.01;
  controls.update();

  renderer.render(scene, camera);
};
