import React from 'react';


export default function Home() {
  return (
    <div className="home-container">
    <header>
      <h1>Welcome to DimplesGlow</h1>
      <p>Your destination for natural skincare solutions</p>
    </header>

    <section className="features">
      <div className="feature">
        <h2>Natural Ingredients</h2>
        <p>Discover the power of natural and organic skincare ingredients.</p>
      </div>

      <div className="feature">
        <h2>Customized Solutions</h2>
        <p>Personalized skincare solutions for your unique needs.</p>
      </div>

      <div className="feature">
        <h2>Ethical and Cruelty-Free</h2>
        <p>We care about the environment and never test on animals.</p>
      </div>
    </section>

    <section className="cta">
      <h2>Join Us Today</h2>
      <p>Embrace your natural beauty with DimplesGlow skincare products.</p>
      <button>Shop Now</button>
    </section>
  </div>
  )
}
