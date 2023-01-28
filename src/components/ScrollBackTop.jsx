import React from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollBackTop = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <div className='bg-red w-[50px] h-[50px] '>
       <FaArrowCircleUp onClick={scrollToTop} />
      </div>
    );
}

export default ScrollBackTop