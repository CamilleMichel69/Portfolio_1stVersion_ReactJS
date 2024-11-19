import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import "../style/components/contact.scss"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email, 
      message: formData.message,
    };

    emailjs
      .send(
        "service_zh1a7ul", 
        "template_cp0rsbc",  
        templateParams, 
        "bqYdXovBltjP2pF_6"  
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Votre message a été envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div className="contact">
      <div id="contact" className="contact-form-container">
        <h2>CONTACT</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>

          <div>
          <button type="submit" className="submit-button">
            Envoyer
          </button>
          </div>
        </form>
      </div>
      <div className="social-box">
        <p>Retrouvez-moi également sur GitHub et LinkedIn</p>
        <div className="social-buttons">
            <a href="https://github.com/CamilleMichel69" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/camille-michel-a4364aa0/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
