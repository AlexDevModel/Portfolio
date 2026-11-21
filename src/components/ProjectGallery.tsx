import {projects} from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGallery(){return <section className="work shell" id="work"><div className="topline"><p className="eyebrow">01 / SELECTED WORK</p><p>A collection of things I've made<br/>and things I'm making.</p></div><h2>Projects<span>.</span></h2><div className="projects">{projects.map(project=><ProjectCard key={project.number} project={project}/>)}</div><p className="note">Starter entries — we'll replace these with your real projects, images and links.</p></section>}