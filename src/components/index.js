import './index.css'

const HistoryList = props => {
  const {listItems, deleteApp} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = listItems

  const onDelete = () => {
    deleteApp(id)
  }

  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <div className="sub-container">
        <div className="app-container">
          <img src={logoUrl} alt="domain logo" className="app-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>

        <button className="delete-icon" onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryList
