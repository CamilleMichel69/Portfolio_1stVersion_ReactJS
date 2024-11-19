import { useState } from "react";
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

    // Vous envoyez les données du formulaire à EmailJS avec les noms des variables qui correspondent à celles définies dans votre template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,  // L'adresse e-mail de la personne qui soumet le formulaire
      message: formData.message,
    };

    emailjs
      .send(
        "service_zh1a7ul",  // Votre ID de service EmailJS
        "template_cp0rsbc",  // Votre ID de template EmailJS
        templateParams,  // Les données que vous voulez envoyer à EmailJS
        "bqYdXovBltjP2pF_6"  // Votre clé API publique EmailJS
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
  );
};

export default Contact;
