import {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import {Environment,Float,OrbitControls} from '@react-three/drei';
import ModelAsset from './ModelAsset';

type ModelViewerProps={modelPath?:string};

function PlaceholderModel(){return <Float speed={1.4} rotationIntensity={.35} floatIntensity={.5}><mesh rotation={[.25,.4,0]} castShadow><icosahedronGeometry args={[1.25,1]}/><meshStandardMaterial color="#cc6f00" roughness={.28} metalness={.22} flatShading/></mesh></Float>}

export default function ModelViewer({modelPath}:ModelViewerProps){
  return <Canvas camera={{position:[0,0,4.8],fov:42}} dpr={[1,1.75]}>
    <color attach="background" args={['#f2c96e']}/>
    <ambientLight intensity={1.1}/>
    <directionalLight position={[3,4,5]} intensity={2.2}/>
    <Environment preset="studio"/>
    <Suspense fallback={null}>
      {modelPath?<ModelAsset path={modelPath}/>:<PlaceholderModel/>}
    </Suspense>
    <OrbitControls enablePan={false} minDistance={3} maxDistance={7}/>
  </Canvas>;
}