import {
  Engine,
  FreeCamera,
  HemisphericLight,
  MeshBuilder,
  Scene,
  Vector3
} from "@babylonjs/core";

export class BasicScene {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(canvas);
    this.scene = this.createScene();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  createScene() {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera("camera", new Vector3(0, 2, 0), this.scene);

    camera.attachControl(true);

    const hemiLight = new HemisphericLight(
      "light",
      new Vector3(0, 1, 0),
      this.scene
    );

    hemiLight.intensity = 0.7;

    const ground = MeshBuilder.CreateGround(
      "ground",
      { width: 5, height: 5, subdivisions: 16 },
      this.scene
    );

    const ball = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 1 },
      this.scene
    );

    ball.position = new Vector3(0, 2, 1);
    return scene;
  }
}
