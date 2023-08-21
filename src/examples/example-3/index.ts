import Addons, {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Color,
} from "../../lib/three";
const Addon = Addons.default;

let scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  cube: Mesh,
  material: MeshBasicMaterial,
  controls: any;

let hue = 0;
let alpha = 0;
export const setup = withInfo(
  "Example 3",
  "Change color material and scale"
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
  material = new MeshBasicMaterial({ color: 0x191d88 });
  cube = new Mesh(geometry, material);
  scene.add(cube);

  camera.position.set(0, 0, 2);
});

export const loop = () => {
  hue = (hue + 0.005) % 1;
  const color = new Color().setHSL(hue, 1, 0.5);

  material.color.copy(color);

  const scale = Math.sin(alpha);
  cube.scale.set(scale, Math.tan(scale), scale);

  alpha += 0.01;
  controls.update();

  renderer.render(scene, camera);
};
