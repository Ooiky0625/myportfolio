import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Ooi Kwong Yang</h3>
            <p>Computer Science Multimedia Student</p>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ooiky0625/" className="footer-social-link" aria-label="LinkedIn">
              <span className="footer-icon"><FaLinkedinIn/></span>
            </a>
            <a href="https://github.com/Ooiky0625" className="footer-social-link" aria-label="GitHub">
              <span className="footer-icon"><FiGithub/></span>
            </a>
            <a href="https://www.instagram.com/oky_0625/" className="footer-social-link" aria-label="Instagram">
              <span className="footer-icon"><FaInstagram/></span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ooi Kwong Yang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
