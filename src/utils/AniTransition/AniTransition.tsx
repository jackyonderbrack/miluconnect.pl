import useAnimateTransition from "./useAnimateTransition";
import "./AniTransition.css"; // Zaimportuj swoje style CSS

const AniTransition = ({ children }: any) => {
  const { transitionStage } = useAnimateTransition();

  return <div className={`ani-transition ${transitionStage}`}>{children}</div>;
};

export default AniTransition;
