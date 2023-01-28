import React, {useState}  from 'react'
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
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <button className={`${visible === false ? "disappear" :"appear"} ontop bg-red p-4 fixed bottom-5 right-5 bg-gradient-tiktok rounded-full z-[3] `} onClick={scrollToTop}>
       <FaArrowCircleUp onClick={scrollToTop} className="text-white  "/>
      </button>
    );
}

export default ScrollBackTop