import { Links } from "../utils/constants"

  
    function Navbar() {
      
    return (
        <>
          <nav className='navbar'>
            <h3 className='title'>Portfolio</h3>
            <div className="nav-buttons">
            <button className="btn"><a href="#skills"><span>#</span>skills</a></button>
            <button className="btn"><a href="#projects"><span>#</span>projects</a></button>
            <button className="btn"><a href="#uxWorks"><span>#</span>ux works</a></button>
            <button className="btn"><a href={Links.Resume} target="blank"><span>#</span>Resume</a></button>
            </div>
           </nav>
        </>
    )
}

export default Navbar