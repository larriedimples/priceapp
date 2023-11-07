import Image4 from './images/Image4.jpg'
import Image6 from './images/Image6.jpg'
import Image12 from './images/Image12.jpg'


export default function About() {
  return (
    <>
   <div className="containerr">
    <h1>About Us</h1>
    <p>
        Welcome to DimplesGlow, your trusted partner on your skincare journey. We are passionate about helping you achieve and maintain healthy, radiant skin. Our mission is to provide you with the best skincare products and expert guidance to enhance your natural beauty.
      </p>
      <br />
      <img src={Image4} alt="Image 4" />
      <h2>Our Story</h2>
      <br />
      <p>
        DimplesGlow was founded by a team of skincare enthusiasts who wanted to create a brand that focuses on quality, transparency, and customer satisfaction. We believe that every individual deserves to feel confident in their skin, and that's why we're dedicated to offering effective, safe, and affordable skincare solutions.
      </p>
      <img src={Image6} alt="Image 6" />
      <br />
      <h2>Our Commitment</h2>
      <br />
      <p>
        At DimplesGlow, we are committed to:

        - Using high-quality, natural ingredients in our products.
        - Providing comprehensive skincare resources and tips.
        - Delivering exceptional customer service.
        - Promoting sustainability and eco-friendly practices.
      </p>
<br />
      <h2>Contact Us</h2>
      <img src={Image12} alt="Image 12" />
      <br />
      <p>
        Have questions or feedback? Feel free to get in touch with us. We'd love to hear from you.
<br />
<br />
      
      </p>
   </div>

   
    </>
    
  )
}
