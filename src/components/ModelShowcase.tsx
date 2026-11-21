import ModelViewer from './ModelViewer';

// Add a model path here when a GLB is ready, e.g. "/models/my-model.glb".
const featuredModelPath:string|undefined=undefined;

export default function ModelShowcase(){return <section className="showcase" id="showcase"><div className="shell"><div className="topline"><p className="eyebrow">02 / THE 3D CORNER</p><p>A little room for objects<br/>to speak for themselves.</p></div><div className="show-grid"><div><p className="eyebrow">INTERACTIVE VIEWER</p><h2>Made to be<br/><em>explored.</em></h2><p className="model-desc">This viewer is ready for one of your own 3D models. For now, it displays a procedural object so the space is alive from day one.</p><small className="hint">↔ DRAG TO ROTATE · SCROLL TO ZOOM</small></div><div className="viewer"><ModelViewer modelPath={featuredModelPath}/><small>MODEL PREVIEW / 001</small></div></div></div></section>}