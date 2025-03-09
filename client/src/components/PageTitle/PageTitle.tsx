import { useRef, useEffect } from "react";
import './pageTitle.css'

interface PageTitleProps {
  children: React.ReactNode;
  img: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, img }) => {
  const parallaxRef = useRef<HTMLImageElement>(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const speed = 0.6;
        const yPos = window.scrollY * speed;
  
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${yPos}px)`;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div id="PageTitle">
      {children}
      <div>
        <img src={img} alt="Obrazek tytułu" ref={parallaxRef}/>
      </div>
    </div>
  );
};

export default PageTitle;
