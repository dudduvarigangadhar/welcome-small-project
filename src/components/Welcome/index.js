// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  subscribeButton = () => {
    const {subscribe} = this.state
    this.setState(prevState => {
      console.log('clicked')
      console.log('clicked')
    })
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>

          <button className="button" onClick={this.subscribeButton}>
            Subscribe
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
