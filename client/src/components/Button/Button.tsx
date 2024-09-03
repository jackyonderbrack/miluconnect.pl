import React from "react";
import { useNavigate } from "react-router-dom";
import "./button.css";

type ButtonProps = {
  linkTo: string;
  buttonText: string;
  theme: "btn-primary" | "btn-secondary" | "btn-underline";
  targetId?: string; // Opcjonalny target ID do przewijania
  offset?: number; // Opcjonalny offset do przewijania
};

const Button: React.FC<ButtonProps> = ({ linkTo, buttonText, theme, targetId, offset = 0 }) => {
  const navigate = useNavigate();

  const handleScroll = (targetId: string, offset: number) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }; 

  const handleClick = () => {
    if (targetId) {
      handleScroll(targetId, offset);
    } else {
      setTimeout(() => {
        navigate(linkTo);
      }, 300); // Taki sam czas, jak długość trwania animacji
    }
  };

  return (
    <button onClick={handleClick} className={theme}>
      {buttonText}
    </button>
  );
};

export default Button;
