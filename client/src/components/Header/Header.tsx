import { useRef, useEffect } from "react";
import "./header.css";
type HeaderProps = {
  content: React.ReactNode;
  imgUrl: string;
};

const Header: React.FC<HeaderProps> = ({ imgUrl, content }) => {
  const parallaxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const speed = 0.5;
      const yPos = window.scrollY * speed;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="Header">
      <div className="headerContent">{content}</div>
      <img
        src={imgUrl}
        alt="Earth Image"
        ref={parallaxRef}
        className="headerPicture"
      />
    </section>
  );
};

export default Header;
