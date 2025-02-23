import "./PrivacyPolicy.css";
import Button from "../Button/Button";

const PrivacyPolicy = () => {
  return (
    <>
    <div className="grid grid-cols-2">
      <div>
        <p className="copyright">
          <span>© 2025 MILU Connect</span>
          <span>Wszelkie prawa zastrzeżone</span>
        </p> 
        <p className="">
          <Button linkTo="/polityka-prywatnosci" buttonText="Polityka prywatności" theme="btn-primary"></Button>
        </p>
      </div>
      <p className="tags">
      Strony internetowe, sklepy internetowe, programowanie, e-commerce, wordpress, joomla, apilo, shopper, baselinker, AI, chatboty, gpt, aplikacje, mobilne, strony internetowe Rybnik, strony internetowe Żory, sklepy internetowe Rybnik, sklepy internetowe Żory, Śląsk, dla małych firm, dla korporacji, SEO, marketing cyfrowy, analiza danych, Katowice, Gliwice, Mysłowice, Pszczyna, Cieszyn, Ustroń, Bielsko, Jastrzębie-Zdrój, machine learning
    </p>
    </div>
    </>
  );
};

export default PrivacyPolicy;
