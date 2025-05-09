// src/components/ThreeViewer.tsx
import { $, component$, useOnWindow, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ThreeDViewer = component$(() => {
  useOnWindow(
    'load', $(async () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff); 
      document.getElementById('three-container')?.appendChild(renderer.domElement);

      const light = new THREE.HemisphereLight(0xffffff, 0x444444);
      light.position.set(0, 200, 0);
      scene.add(light);

      camera.position.set(10, 5, 10);
      camera.lookAt(0, 1, 0);

      // Load GLB model
      const loader = new GLTFLoader();
      loader.load('/models/factory_lv0.glb', (gltf: { scene: THREE.Object3D<THREE.Object3DEventMap>; }) => {
        scene.add(gltf.scene);
      }, undefined, (error: any) => {
        console.error('Error loading GLB:', error);
      });

      // Animate
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();
    })
  );


  return <div id="three-container"></div>;
});
