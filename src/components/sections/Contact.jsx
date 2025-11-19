import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_sgko4e5",
        "template_q36750b",
        formRef.current,
        "Ocaq4Rm5z9oBfHUNJ"
      )
      .then(
        (result) => {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="site-section py-5">
      <div className="about-top">
        <div className="about-header">
          <i className="bi bi-envelope about-icon" aria-hidden="true"></i>
          <h2 className="about-title">
            Contact <label className="contact-title-2">Me</label>
          </h2>
        </div>
      </div>

      <div className="container contact-section">
        <div className="about-bottom">
          <div className="about-bottom-left col-md-5 contact-info">
            <div className="about-text-block">
              <h3 className="about-name">
                <i>"Focus on Progress, Not Perfection"</i>
              </h3>
              <p className="contact-intro mb-3">
                Got a project, question or just want to say hi? Send me a
                message and I'll get back to you as soon as I can.
              </p>
              <ul className="list-unstyled contact-list mb-0">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:clarenzcorpuz28@gmail.com">
                    clarenzcorpuz28@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +63 912 345 6789
                </li>
                <li>
                  <strong>Address:</strong> St. James, Batal, Santiago City,
                  Isabela
                </li>
              </ul>
              <div className="mt-3">
                <a
                  href="/Resume MCVC-P.pdf"
                  className="btn btn-outline-primary"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My CV (PDF)
                </a>
              </div>
            </div>
          </div>

          <div className="about-bottom-right col-md-7">
            <div className="contact-form-container card p-4 shadow-sm">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
              >
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>

                <div className="d-flex align-items-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "sent" && (
                    <div className="ms-3 text-success">
                      Message sent — thank you!
                    </div>
                  )}
                  {status === "error" && (
                    <div className="ms-3 text-danger">
                      Failed to send message.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
