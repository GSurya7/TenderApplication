import {Component} from 'react'
import './index.css'

class OpenTender extends Component {
  singleBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="open-bg">
        <div className="open-form">
          <div className="open-ntpc">
            <img
              className="ntpc-img-open"
              src="https://images.seeklogo.com/logo-png/30/1/ntpc-logo-png_seeklogo-305340.png"
              alt="ntpc"
            />
            <img
              className="open-img"
              src="https://www.psuconnect.in/sdsdsd/50_years_of_NTPC.jpg"
              alt="single"
            />
          </div>
          <form>
            <h1 className="head">Open Tender Form</h1>
            <label className="open-label" htmlFor="package">
              Name of the Package
            </label>
            <input id="package" type="text" placeholder="Name of the package" />
          </form>
          <button type="submit">Generate</button>
          <button onClick={this.singleBtn} type="button">
            Back
          </button>
        </div>
      </div>
    )
  }
}
export default OpenTender
