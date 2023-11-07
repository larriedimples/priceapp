import React from 'react'

export default function Contact() {
  return (
    <>
    <div>
      <h1>Contact Us</h1>

      <div className="contact-section">
        <h3><i class="fa-solid fa-phone"></i>Phone</h3>
        <br />
        <p><i class="fa-solid fa-headset"></i>  Customer Support: Call us at +4917674790579 for any urgent assistance.</p>
        <br />
        <p><strong><i class="fa-solid fa-clock"></i>Business Hours:</strong> Our phone support is available from Monday to Friday, 9:00 AM to 5:00 PM.</p>
      </div>
      <br />
      <br />

      {/* Social Media Contact */}
      <div className="contact-section">
        <h3><i class="fa-solid fa-hashtag"></i>Social Media</h3>
        <br />
        <p>Connect with us on our social media pages for updates, tips, and more:</p>
        <br />
        <ul>
          <li><a href="https://www.facebook.com/dimplesglow"><i class="fa-brands fa-facebook"></i>:dimplesglow </a></li>
          <br />
          <li><a href="https://www.instagram.com/dimp_lesglow"><i class="fa-brands fa-instagram"></i>:dimp_lesglow</a></li>
          <br />
          
          <br />
        </ul>
      </div>
    </div>
    </>
  )
}


