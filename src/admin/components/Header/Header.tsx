import './header.css'

const Header = ( {title}: {title: string} ) => {
  return (
    <div className="admin-header">{title}</div>
  )
}

export default Header