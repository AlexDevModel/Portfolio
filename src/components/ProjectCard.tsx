import {useState,type PointerEvent} from 'react';
import type {Project} from '../data/projects';

type ProjectCardProps={project:Project};

export default function ProjectCard({project}:ProjectCardProps){
  const [tilt,setTilt]=useState({x:0,y:0});

  function handlePointerMove(event:PointerEvent<HTMLElement>){
    if(event.pointerType!=='mouse')return;
    const bounds=event.currentTarget.getBoundingClientRect();
    const horizontal=(event.clientX-bounds.left)/bounds.width;
    const vertical=(event.clientY-bounds.top)/bounds.height;
    setTilt({x:(.5-vertical)*4,y:(horizontal-.5)*4});
  }

  return <article
    className={'project '+project.accent}
    onPointerMove={handlePointerMove}
    onPointerLeave={()=>setTilt({x:0,y:0})}
    style={{transform:`perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}
  >
    <div className="visual"><small>{project.number}</small><div className="shape"/><b>✳</b><label>{project.category}</label></div>
    <div className="project-copy"><small>{project.category}</small><h3>{project.title}</h3><p>{project.description}</p><span>STARTER CONTENT</span></div>
  </article>;
}