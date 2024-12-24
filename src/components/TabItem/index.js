import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText} = tabDetails
  const update = () => {
    updateActiveTabId(tabDetails.tabId)
  }
  const activeClass = isActive ? 'active-class' : ''
  return (
    <li className="tab-item-container ">
      <button
        onClick={update}
        type="button"
        className={`tab-btn ${activeClass}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
