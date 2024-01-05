  
    function Navbar() {
      
    return (
        <>
          <div className='navbar'>
            <h3 className='title'>Portfolio</h3>
            <div className="nav-buttons">
            <button className="btn"><a href="#skills"><span>#</span>skills</a></button>
            <button className="btn"><a href="#projects"><span>#</span>projects</a></button>
            <button className="btn"><a href="#uxWorks"><span>#</span>ux works</a></button>
            <button className="btn"><a href="https://drive.google.com/file/d/1diU3LRjM0PYgkEgng3Df8BKyyryRyPJc/view?usp=sharing" target="blank"><span>#</span>Resume</a></button>
            </div>
           </div>
        </>
    )
}

export default Navbar