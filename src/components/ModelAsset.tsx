import {Center,useGLTF} from '@react-three/drei';

type ModelAssetProps={path:string;scale?:number};

export default function ModelAsset({path,scale=1}:ModelAssetProps){
  const {scene}=useGLTF(path);
  return <Center><primitive object={scene} scale={scale}/></Center>;
}