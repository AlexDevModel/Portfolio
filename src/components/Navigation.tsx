import {useEffect,useState} from 'react';
import {site} from '../data/site';

export default function Navigation(){
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    if(!open)return;
    const closeOnEscape=(event:KeyboardEvent)=>{
      if(event.key==='Escape')setOpen(false);
    };
    window.addEventListener('keydown',closeOnEscape);
    return ()=>window.removeEventListener('keydown',closeOnEscape);
  },[open]);

  return <header className="header">
    <a className="logo" href="#top" aria-label="Back to top">A<span>.</span></a>
    <button className="menu" type="button" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-controls="site-navigation" aria-expanded={open}>☰</button>
    <nav id="site-navigation" className={open?'nav open':'nav'} aria-label="Main navigation">
      {([['Work','#work'],['3D showcase','#showcase'],['About','#about']] as const).map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
      {site.contactEmail && <a className="nav-cta" href={`mailto:${site.contactEmail}`}>Get in touch ↗</a>}
    </nav>
  </header>;
}