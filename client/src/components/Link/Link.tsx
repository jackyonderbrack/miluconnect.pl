import React from 'react'
import './link.css'

type LinkProps = {
    href: string | undefined;
    text: React.ReactNode;
    theme: "link-primary" | "link-secondary" | "link-underline";
    children?: React.ReactNode
}

const Link: React.FC<LinkProps> = ({href, text, theme, children}) => {
  return (
    <a href={href} className={`${theme} flex gap-2 items-center`}>{children} {text}</a>
  )
}

export default Link