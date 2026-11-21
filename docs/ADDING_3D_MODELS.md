# Adding 3D models

The portfolio uses Three.js through React Three Fiber and Drei. The viewer currently displays a procedural placeholder, but it is already wired to load a GLB model.

## Prepare a model
1. Export from Blender or another 3D tool as `.glb` (recommended) or `.gltf`.
2. Optimise textures and geometry so it loads quickly.
3. Put the file in `public/models/`.
4. Keep a note of its source and licence if it was not made by you.

## Display your model
1. Open `src/components/ModelShowcase.tsx`.
2. Find the `featuredModelPath` constant near the top.
3. Change it from `undefined` to the public path of your file. For example:
   ```ts
   const featuredModelPath = '/models/my-model.glb';
   ```
4. Save and run the site. The model will appear in the viewer.

## Adjust the model size
The `ModelAsset` component accepts a `scale` prop. The default is 1. If a model appears too large or small, we can expose a scale setting in `ModelShowcase.tsx` and tune it to the model.

## Controls
- Drag to rotate.
- Scroll to zoom.
- Panning is disabled to keep the model centred.

The placeholder stays in place until you supply a model. This avoids using stock or AI-generated assets. Check that you have the rights to publish any model you add.