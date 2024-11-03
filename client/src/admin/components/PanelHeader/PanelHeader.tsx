import './PanelHeader.css'

const PanelHeader = ( {title}: {title: string} ) => {
  return (
    <div className="panel_header">{title}</div>
  )
}

export default PanelHeader