import { FC } from "react";
import "./box.css";
import { HiArrowRight } from "react-icons/hi";

export interface BoxProps {
  title: React.ReactNode;
  iconUrl: string;
  buttonLink: string;
}

const Box: FC<BoxProps> = ({ title, iconUrl, buttonLink }) => {
  return (
    <a id="Box" className="box relative" href={buttonLink}>
        <div className="gradient-overlay"></div>
        <span
            className="title font-black text-2xl"
            style={{ "--icon-url": `url(${iconUrl})` } as React.CSSProperties}
        >
            {title}
        </span>
        <span className="button" aria-label="Sprawdź" typeof="button">
            <HiArrowRight className="absolute z-10 animate-bounce -inset-6"/>
        </span>
    </a>
  );
};

export default Box;
