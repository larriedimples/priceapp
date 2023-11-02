import React from 'react'

export default function Contact() {
  return (
    <div className="contact-container">
    <header>
      <h1>Contact Us</h1>
      <p>We're here to assist you with any questions or concerns.</p>
    </header>

    <section className="contact-info">
      <div className="contact-item">
        <h2>Email</h2>
        <p>Send us an email at: <a href="mailto:contact@dimplesglow.com">contact@dimplesglow.com</a></p>
      </div>

      <div className="contact-item">
        <h2>Phone</h2>
        <p>Call our customer support at: <a href="tel:+1234567890">123-456-7890</a></p>
      </div>

      <div className="contact-item">
        <h2>Address</h2>
        <p>Visit us at: 123 DimplesGlow Street, Radiance City</p>
      </div>
    </section>

    <section className="contact-form">
      <h2>Send Us a Message</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <br />
        <textarea id="message" name="message" rows="4" required></textarea>
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
  )
}
