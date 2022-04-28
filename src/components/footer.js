import React from "react"
import logo from "../assets/images/footer.svg"
import insta from "../assets/images/ig.svg"
import vimeo from "../assets/images/vimeo.svg"
import mail from "../assets/images/mail.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logos-container">
          <img src={logo} alt="banter logo" className="footer-logo" />
          <p className="footer-tagline">Creative content worth talking about</p>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/madebybanter/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="instagram" />
            </a>
            <a
              href="https://vimeo.com/madebybanter"
              target="_blank"
              rel="noreferrer"
            >
              <img src={vimeo} alt="vimeo" />
            </a>
            <a href="mailto:hello@madebybanter.com">
              <img src={mail} alt="mail" />
            </a>
          </div>
        </div>
        <div className="footer-mailing-container">
          <p className="footer-location">Los Angeles + Austin</p>
          <form className="mailing-form" action="">
            <input
              type="email"
              name="email"
              placeholder="Join our mailing list"
            />
            <button className="mailing-submit">&rarr;</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer
