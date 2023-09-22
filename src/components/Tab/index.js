import './index.css'

const Tab = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {buttonText, id} = tabDetails

  const onClickTab = () => {
    onChangeTab(id)
  }

  const activeClass = isActive ? 'active-button' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-button ${activeClass}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tab
