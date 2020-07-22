/* eslint-disable no-param-reassign */
import React, { useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as THREE from "three";

import { tj } from "_utils";

const useStyles = makeStyles({
  root: {
    // width: "50%",
    // height: "50%",
  },
});

const Shapes = () => {
  const classes = useStyles();

  const canvas = useRef();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });

    const fov = 75;
    const aspect = 2; // w / h
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const cubes = [
      tj.meshPhongInstance(geometry, 0x44aa88, 0, scene),
      tj.meshPhongInstance(geometry, 0x8844aa, -2, scene),
      tj.meshPhongInstance(geometry, 0xaa8844, 2, scene),
    ];

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }

    const render = time => {
      time *= 0.001;

      cubes.forEach(cube => {
        cube.rotation.x = time;
        cube.rotation.y = time;
      });

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }, []);

  return <canvas className={classes.root} ref={canvas} />;
};

export default Shapes;
