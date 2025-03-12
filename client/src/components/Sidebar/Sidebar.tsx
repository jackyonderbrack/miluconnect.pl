import { HiBackward } from "react-icons/hi2"
import Button from "../Button/Button"
import Link from "../Link/Link"
import BouncingButton from "../BouncingButton/BouncingButton"
import { HiArrowCircleDown } from "react-icons/hi"

const Sidebar = () => {
  return (
    <section className="flex-1 background-top py-3 px-2 md:p-4 lg:p-8 mr-0 md:mr-4 lg:mr-8 flex flex-col gap-12">
      <p>Szukasz czegoś innego?</p>
      <div className="flex flex-col gap-6">
        <h3>Oferta:</h3>
        <ul className="flex flex-col gap-2">
          <Link href='/strony-internetowe' text={"Strony internetowe"} theme={"link-secondary"} />
          <Link href='/ecommerce' text={"Sklepy internetowe"} theme={"link-secondary"} />
          <Link href='/projektowanie-graficzne' text={"Projektowanie graficzne"} theme={"link-secondary"} />
          <Link href='/seo-i-google-ads' text={"Pozycjonowanie i Google Ads"} theme={"link-secondary"} />
          <Link href='/domeny-i-hosting' text={"Hosting i domeny"} theme={"link-secondary"} />
          <Link href='/aplikacje-mobilne' text={"Aplikacje mobilne"} theme={"link-secondary"} />
        </ul>
        <a href="/" className="flex gap-4 items-center"><HiBackward />Powrót do Strony głównej</a>
      </div>
      <div className="flex flex-col gap-6">
        <h3>Profelio</h3>
        <p>Uzyskaj wcześniejszy dostęp</p>
        <a href="https://profelio.pl" className="p-3 border-1 border-[var(--color-accent-primary)] rounded-xl text-center" rel="noreferrer, noopener" target="_blank">Przejdź na Profelio.pl</a>
      </div>
      <div className="flex flex-col gap-6">
        <h3>Masz już pomysł?</h3>
        <p>Spróbuj go wycenić</p>
        <BouncingButton targetId='PricingForm'>
							<HiArrowCircleDown size={32}  />
							Cennik
						</BouncingButton>
      </div>

      <div className="flex flex-col gap-6">
        <h3>Potrzebujesz pomocy?</h3>
        <Button
          linkTo='/kontakt'
          buttonText='Kontakt'
          theme='btn-primary'
        />
      </div>
    </section>
  )
}

export default Sidebar