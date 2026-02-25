# 3D Models Directory

This folder is intended for your 3D assets.

As per your request to use your "f1 car 3 model in glb format":

1. Place your `f1_car.glb` (or whatever your model is named) in this directory.
2. Open `src/components/canvas/CarModel.tsx`.
3. Uncomment the bottom code block starting with `export const F1Model`, adjust the path matching your file (e.g., `const { scene } = useGLTF('/models/your_file.glb')`).
4. Replace the placeholder `<group>...</group>` with the new `F1Model` or integrate it replacing the placeholder meshes.

We have set up the `groupRef` and `GSAP` animations so any model placed inside that group will automatically receive the cinematic scroll animations.
