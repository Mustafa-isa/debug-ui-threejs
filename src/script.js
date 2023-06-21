import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from 'lil-gui'
import { gsap } from "gsap";
const scene = new THREE.Scene();
const gui = new dat.GUI()
const ColorPrams ={
  color:0xff0000,
  spin:()=>{
gsap.to(cube.rotation,{y:cube.rotation.y+10 ,duration:1})
  }
}
const canvas = document.querySelector("canvas.webgl");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const matriel =  new THREE.MeshBasicMaterial({ color: ColorPrams.color })
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(4, 4, 4),
matriel
);
scene.add(cube);


//controll nesh by gui
gui.add(cube.position ,'x')
gui.add(cube.position ,'y',-3,3,0.1)
gui.add(cube.position ,'z',-3,3,0.1)
gui.add(cube.position ,'visible')
gui.add(cube.material ,'wireframe')
gui.addColor(ColorPrams ,'color').onChange(()=>{
matriel.color.set(ColorPrams.color)
})
gui.add(ColorPrams ,'spin')
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
scene.add(camera);

const controls = new OrbitControls(camera, canvas);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
