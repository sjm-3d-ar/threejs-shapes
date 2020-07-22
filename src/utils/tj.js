import * as THREE from "three";

const meshPhongInstance = (geometry, color, x, scene) => {
  const material = new THREE.MeshPhongMaterial({ color });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = x;

  if (scene) scene.add(mesh);

  return mesh;
};

export default {
  meshPhongInstance,
};
