import Button from "../../components/Button/Button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col align-items-center">
      <h1>404 - Strona nie znaleziona</h1>
      <p>Przepraszamy, strona, której szukasz, nie istnieje.</p>
      <Button
        linkTo="/"
        buttonText="Wróć do Strony głównej"
        theme="btn-primary"
      />
    </div>
  );
};

export default NotFoundPage;
