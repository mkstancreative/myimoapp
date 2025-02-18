import React from "react";
import "./Assets/CSS/Main.css";
import img15 from "./Assets/others/img15.png";

function Contact() {
  return (
    <>
      <main>
        <section className="contact-section">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <p>
              We’re Here to Help with Your Questions, Feedback, and Support
              Needs—Reach Out Anytime!
            </p>
            <form action="">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Message:</label>
                <input type="text" />
              </div>
              <button>Send Message</button>
              <span>Or</span>
              <button>Login to Chat with Us</button>
            </form>
          </div>
          <div className="contact-image">
            <img src={img15} alt="Guy On Mic" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
