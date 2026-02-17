import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css"; // custom CSS file
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaFileDownload,
  FaRegCopyright,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🚀");
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      {/* Right: Contact Info */}
      <div className="contact-info">
        <h2 className="contactinfo">Contact Info</h2>
        <p>
          <FaEnvelope className="icon" />{" "}
          <a href="mailto:nichalshweta77@example.com">
            nichalshweta77@example.com
          </a>
        </p>
        <p>
          <FaPhone className="icon" /> <a href="">+91 9876543210</a>
        </p>
        <p>
          <FaLinkedin className="icon" />{" "}
          <a href="https://www.linkedin.com/in/shweta-nichal-28b186284/">
            linkedin.com/in/shweta
          </a>
        </p>
        <p>
          <FaCode className="icon" />{" "}
          <a href="https://leetcode.com/u/nichalshweta1/">
            leetcode.com/u/shweta
          </a>
        </p>
        <p>
          <FaGithub className="icon" />{" "}
          <a href="https://github.com/S17-Shwet">github.com/S17-Shwet</a>
        </p>

        {/* Download CV Button */}
        <a href="/Shweta_Nichal_Resume.pdf" download className="download-btn">
          <FaFileDownload className="icon" />
          Download CV
        </a>
      </div>

      {/* Left: Contact Form */}
      <div className="contact-form">
        {/* <h2>Get in Touch</h2> */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
