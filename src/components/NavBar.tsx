import { RiMenu2Line } from "react-icons/ri";
import { Links } from "../utils/constants"
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

  
    function Navbar() {
      const [showNav, setShowNav] = useState(false);
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);

      useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
      <>
        <nav className="navbar">
        <div>
          {(windowWidth < 960) && <span onClick={()=>setShowNav(true)}><RiMenu2Line color="white" size={28} /></span>}
          <h3 className="title"><img src="/assets/mylogo.png" /></h3>
          </div>
          {(showNav || (windowWidth > 960)) && 
          <div className="nav-buttons">
            {showNav && <button className="btn closebtn">
             <MdClose size={16} color="white" onClick={()=>setShowNav(false)} />
            </button>}
            <button className="btn">
              <a href="#skills">
                <span>#</span>skills
              </a>
            </button>
            <button className="btn">
              <a href="#projects">
                <span>#</span>projects
              </a>
            </button>
            <button className="btn">
              <a href="#uxWorks">
                <span>#</span>ux works
              </a>
            </button>
            <button className="btn">
              <a href={Links.Resume} target="blank">
                <span>#</span>Resume
              </a>
            </button>
          </div>}
        </nav>
      </>
    );
}

export default Navbar