import './App.css'
import {Component} from 'react'
import Tab from './components/Tab'
import GreetingImage from './components/GreetingImage'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  onClickTab = id => {
    this.setState({activeTabId: id})
  }

  getImageDetails = () => {
    const {activeTabId} = this.state
    const details = languageGreetingsList.find(
      eachItem => eachItem.id === activeTabId,
    )
    return details
  }

  render() {
    const {activeTabId} = this.state
    const greetingImageDetails = this.getImageDetails()
    console.log(activeTabId)
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(eachItem => (
            <Tab
              key={eachItem.id}
              tabDetails={eachItem}
              onChangeTab={this.onClickTab}
              isActive={eachItem.id === activeTabId}
            />
          ))}
        </ul>

        <GreetingImage imageDetails={greetingImageDetails} />
      </div>
    )
  }
}

export default App
