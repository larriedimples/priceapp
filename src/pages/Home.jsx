import Image1 from './images/image1.jpg'
import Image3 from './images/Image3.jpg'


export default function Home() {
  return (
    <>
    <h1>DimplesGlow Skincare</h1>
    <h3>"Glow Beyond Ordinary...</h3>
    
     <div className="containerr">
     <p>Dear Esteemed Clients,</p>
    <p>We extend a warm welcome and heartfelt gratitude to you for choosing DimplesGlow. We are delighted to have you explore our comprehensive skincare price list, designed to enhance your beauty regimen and elevate your self-care routine.</p>
    <img src={Image1} alt="Image 1" />
    
<br />
    <p>At <strong> DimplesGlow</strong>, we are passionate about providing you with the highest quality skincare products that deliver remarkable results. We have carefully curated a collection of products that cater to various skin concerns, ensuring there is something for everyone.</p>
<br />
    <p>As you peruse our price list, we invite you to discover a range of cleansers, toners, serums, moisturizers, masks, eye care, sunscreen, and special treatments. </p>
<br />
<img src={Image3} alt="Image 3" />
    <p>Thank you once again for choosing DimplesGlow. We believe that self-care should be accessible to all, and we are dedicated to providing you with affordable luxury and exceptional value. </p>
<br />
    <p>Wishing you a beautiful and glowing skincare journey!</p>
    <p>Best regards, <br /> DimplesGlow</p>


     </div>

    


 

    </>
  )
}
