import {site} from '../data/site';

export default function Footer(){return <footer><div className="shell foot"><a className="logo" href="#top" aria-label="Back to top">A<span>.</span></a><p>Made with curiosity and a little bit of code.</p><a href="#top">BACK TO TOP ↑</a><small>© {site.year}</small></div></footer>}