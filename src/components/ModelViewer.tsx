import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Float,OrbitControls} from '@react-three/drei';
import ModelAsset from './ModelAsset';

type ModelViewerProps={modelPath?:string};

function PlaceholderModel(){return <mesh rotation={[.25,.4,0]} castShadow><icosahedronGeometry args={[1.25,1]}/><meshStandardMaterial color="#cc6f00" roughness={.28} metalness={.22} flatShading/></mesh>}

export default function ModelViewer({modelPath}:ModelViewerProps){
  return <Canvas camera={{position:[0,0,4.8],fov:42}} dpr={[1,1.75]} shadows>
    <color attach="background" args={['#f2c96e']}/>
    <ambientLight intensity={1.25}/>
    <directionalLight position={[3,4,5]} intensity={2.4} castShadow/>
    <pointLight position={[-3,-2,-2]} intensity={.65}/>
    <Float speed={1.2} rotationIntensity={.12} floatIntensity={.22}>
      <Suspense fallback={<PlaceholderModel/>}>
        {modelPath?<ModelAsset path={modelPath}/>:<PlaceholderModel/>}
      </Suspense>
    </Float>
    <OrbitControls enablePan={false} minDistance={3} maxDistance={7}/>
  </Canvas>;
}