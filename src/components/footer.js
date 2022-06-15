import React, { useState } from "react"
import logo from "../assets/images/footer.svg"
import insta from "../assets/images/ig.svg"
import vimeo from "../assets/images/vimeo.svg"
import mail from "../assets/images/mail.svg"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Footer = () => {
  const [submitText, setSubmitText] = useState(null)
  const [formState, setFormState] = useState({})

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then(() => setSubmitText('Thank you!')
      ?.catch(error => setSubmitText(error)))
  }

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
          {!submitText && (
            <form
              className="mailing-form"
              name="email-list"
              method="POST"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                placeholder="Join our mailing list"
              />
              <button type="submit" className="mailing-submit">
                &rarr;
              </button>
            </form>
          )}
          {submitText && (
            <div className="mailing-form">
              <p className="submit-text">{submitText}</p>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
