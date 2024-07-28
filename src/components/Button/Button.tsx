import { useNavigate } from "react-router-dom";
import "./button.css";
import useAnimateTransition from "../../utils/AniTransition/useAnimateTransition";

type ButtonProps = {
  linkTo: string;
  buttonText: string;
  theme: "btn-primary" | "btn-secondary" | "btn-underline";
};

const Button: React.FC<ButtonProps> = ({ linkTo, buttonText, theme }) => {
  const navigate = useNavigate();
  const { triggerAnimation } = useAnimateTransition();
  const handleClick = () => {
    triggerAnimation();
    setTimeout(() => {
      navigate(linkTo);
    }, 300); // Taki sam czas, jak długość trwania animacji
  };
  return (
    <button
      onClick={handleClick}
      className={theme}>
      {buttonText}
    </button>
  );
};

export default Button;
