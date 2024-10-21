import './header.css'

const Header = ( {title}: {title: string} ) => {
  return (
    <div className="header">{title}</div>
  )
}

export default Header