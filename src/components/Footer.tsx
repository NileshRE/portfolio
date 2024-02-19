import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdArrowUpward } from "react-icons/md";
import { Links } from "../utils/constants";


function Footer(){
    function handleView(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

    return(
        <>
        <footer className="footer" role="footer">
            <h4>Nilesh Kumar Portfolio</h4>
            <span className="nav-items">
                <a href="#skills">skills</a>
                <a href="#projects">projects</a>
                <a href="#uxWorks">ux works</a>
                <a href={Links.Resume} target="blank">Resume</a>
            </span>
            <span className="icons">
            <a href={Links.Linkedin} target="blank"><FaLinkedin size={24} /></a>
            <a href={Links.GitHub} target="blank"><FaGithub size={24} /></a>
            <a href="mailto:19nilesh.kumar@gmail.com" target="blank"><CgMail size={28} /></a>
            <a href="https://api.whatsapp.com/send?phone=+91-9304411983" target="blank"><FaWhatsapp size={24} /></a>
            </span>
        </footer>
        <span onClick={handleView}>
            <MdArrowUpward size={24} color="white" className="arrow" />
            </span>
        </>
    )
}


export default Footer