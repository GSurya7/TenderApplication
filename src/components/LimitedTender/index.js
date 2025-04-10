import {Component} from 'react'
import './index.css'

const limitedLocation = [
  {
    id: 1,
    limitedTender:
      'Ramagundam Super Thermal Power Station P.O.: Jyothinagar, Distt. Karim Nagar (Telangana) - 505215.GST No. 36AAACN0255D1ZZ',
  },
  {
    id: 2,
    limitedTender:
      'Simhadri Super Thermal Power Station P.O.: NTPC Simhadri, Distt. Visakhapatnam (Andhra Pradesh) - 531020GST NO. 37AAACN0255D2ZW.',
  },
  {
    id: 3,
    limitedTender:
      'Kudgi Super Thermal Power Station P.O.: Kudgi, Thaluk: Basavan Bagawadi, Distt. Vijayapura (Karnataka) - 586121. GST NO. 29AAACN0255D1ZU',
  },
  {
    id: 4,
    limitedTender:
      'Rajiv Gandhi Combined Cycle Power Project P.O.: Choolatheruvu, Distt. Alappuzha (Kerala) - 690506. GST NO. 32AAACN0255D2Z6',
  },
]

class LimitedTender extends Component {
  singleBtn = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <div className="limited-bg">
        <div className="limited-form">
          <div className="limited-ntpc">
            <img
              className="ntpc-img-limited"
              src="https://images.seeklogo.com/logo-png/30/1/ntpc-logo-png_seeklogo-305340.png"
              alt="ntpc"
            />
            <img
              className="limited-img"
              src="https://www.psuconnect.in/sdsdsd/50_years_of_NTPC.jpg"
              alt="single"
            />
          </div>
          <form>
            <h1 className="head">Limited Tender Form</h1>
            <label className="limited-label" htmlFor="package">
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
export default LimitedTender
