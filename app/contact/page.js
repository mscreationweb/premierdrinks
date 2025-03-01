"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import GallerySlider1 from "@/components/slider/GallerySlider1";

export default function Home() {
  const [formData, setFormData] = useState({
    message: "",
    username: "",
    email: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { message, username, email } = formData;
    const phoneNumber = "+919845039771"; // WhatsApp Number

    if (!username || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const whatsappMessage = `Hello, \n\nName: ${username} \nEmail: ${email} \nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSuccess(true);
    setFormData({ message: "", username: "", email: "" }); // Clear Form
  };

  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Contact">
      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="title">Get in touch</div>
            <h2>
              Hi <span className="theme_color">Say</span>
            </h2>
            <div className="separate"></div>
            {/* <div className="text">
              Us percipit urbanitas referrentur ea. Mei at numquam molestiae
              intellegam. Ansed dictas <br /> accumsan. Nam sint atqui
              voluptatibus an, pro ne malis semper perpetua. Nam sint <br />{" "}
              atqui voluptatibus an, pro ne malis semper perpetua.
            </div> */}
          </div>

          <div className="row clearfix">
            {/* Form Column */}
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="contact-form">
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="row clearfix">
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          name="message"
                          placeholder="Your Comment"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="submit"
                          className="theme-btn btn-style-four clearfix"
                        >
                          <span className="icon flaticon-arrow-pointing-to-right"></span>
                          Send
                        </button>
                      </div>
                    </div>
                  </form>

                  {success && (
                    <div className="success-message">
                      ✅ Message sent successfully via WhatsApp!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <ul className="info-list">
                  <li>
                    <strong>Address</strong>
                    Premier Food & Beverages
                    <br />
                    Mangalore, D.K., Karnataka
                  </li>
                  <li>
                    <strong>Contact</strong>
                    <p>
                      <a href="tel:+919845039771">+91 9845 0397 71</a>
                      <a
                        href="https://wa.me/919845039771"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                     
                      </a>
                    </p>
                    <p>
                      <a href="tel:+917349726571">+91 7349 7265 71</a>
                      <a
                        href="https://wa.me/917349726571"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="outer-container">
          <GallerySlider1 />
        </div>
      </section>
      {/* End Gallery Section */}
    </Layout>
  );
}
