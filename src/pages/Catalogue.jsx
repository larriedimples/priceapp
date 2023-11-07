import Image8 from './images/Image8.jpg'
import Image9 from './images/Image9.jpg'
import Image10 from './images/Image10.jpg'
import Image11 from './images/Image11.jpg'

export default function Catalogue() {
  return (
    <>
    <h1>Our Range Of Skincare products</h1>
    <div className="container-img">
   <div className='container-items'>
   <img src={Image8} alt="Image 8" />
   </div>
   <br />

    <div className='container-items'>
    <img src={Image9} alt="Image 9" />
    </div>
    
<br />
   <div className='container-items'>
   <img src={Image10} alt="Image 10" />
   </div>
   
<br />
   <div className='container-items'>
   <img src={Image11} alt="Image 11" />
   </div>
  
  
    </div>
    


    
    
    </>
   
  )
}
