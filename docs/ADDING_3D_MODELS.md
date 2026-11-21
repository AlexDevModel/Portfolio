# Adding 3D models

The portfolio uses Three.js through React Three Fiber. The current viewer shows a procedural placeholder and supports drag-to-rotate and scroll-to-zoom.

## Prepare a model
1. Export from Blender or another 3D tool as `.glb` (recommended) or `.gltf`.
2. Optimise textures and geometry so it loads quickly.
3. Put the file in `public/models/`.
4. Keep a note of its source and licence if it was not made by you.

## Connect a model
The viewer is currently in `src/App.tsx`, inside the `Model` component. We can update it to load a selected file with Drei's `useGLTF` helper. A file at `public/models/my-model.glb` is addressed by the site as `/models/my-model.glb`.

The placeholder stays until you supply a model. This avoids using stock or AI-generated assets.