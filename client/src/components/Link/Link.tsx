import React from 'react'
import './link.css'

type LinkProps = {
    href: string | undefined;
    text: string;
    theme: "link-primary" | "link-secondary" | "link-underline";
}

const Link: React.FC<LinkProps> = ({href, text, theme}) => {
  return (
    <a href={href} className={theme}>{text}</a>
  )
}

export default Link