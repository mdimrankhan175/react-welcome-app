import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  buttonClick = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Welcome </h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          onClick={this.buttonClick}
          type="button"
          className="subscribe-button"
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
