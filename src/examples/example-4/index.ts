import Addons, {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "../../lib/three";
const Addon = Addons.default;

let scene: Scene,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer,
  controls: any,
  light: DirectionalLight;

const materials = {
  basic: { material: MeshBasicMaterial, color: 0x900c3f },
  toon: { material: MeshToonMaterial, color: 0xc70039 },
  phong: { material: MeshPhongMaterial, color: 0xf94c10 },
  depth: { material: MeshDepthMaterial, color: 0xf8de22 },
};

export const setup = withInfo(
  "Example 4",
  "Trying diferents materials and lights"
)(() => {
  scene = new Scene();
  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

  controls = new Addon.OrbitControls(camera, renderer.domElement);

  const geometry = new BoxGeometry(1, 1, 1);

  const cubes = Object.entries(materials).map(
    ([_, { material, color }]) => new Mesh(geometry, new material({ color }))
  );

  const ambientLight = new AmbientLight(0xfff, 3);

  light = new DirectionalLight(0xfff, 10);

  cubes.forEach((cube, idx) => {
    cube.position.set(0, -(idx * 1.2) + 1, 0);
  });

  light.position.set(0, 0, 5);
  camera.position.set(0, 0, 5);

  scene.add(...cubes, light, camera, ambientLight);
  appendApp(renderer.domElement);
});

export const loop = () => {
  controls.update();
  renderer.render(scene, camera);
};
