  
    function Navbar() {
      
    return (
        <>
          <div className='navbar'>
            <h3 className='title'>Portfolio</h3>
            <div>
            <button className="btn"><a href="#skills"><span>#</span>skills</a></button>
            <button className="btn"><a href="#projects"><span>#</span>projects</a></button>
            <button className="btn"><a href="#uxWorks"><span>#</span>ux works</a></button>
            <button className="btn"><a href="#resume"><span>#</span>Resume</a></button>
            </div>
           </div>
        </>
    )
}

export default Navbar