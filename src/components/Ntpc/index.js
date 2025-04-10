import {Component} from 'react'
import './index.css'

const typeOfWork = [
  {
    id: 1,
    work: 'Civil Work',
  },
  {
    id: 2,
    work: 'O&M Work',
  },
  {
    id: 3,
    work: 'Supply Cum Erection',
  },
]

const typeOfTender = [
  {
    id: 1,
    tender: 'Single Tender',
  },
  {
    id: 2,
    tender: 'Limited Tender',
  },
  {
    id: 3,
    tender: 'Open Tender',
  },
]

class Ntpc extends Component {
  state = {
    pf: '',
    valueofwork: '',
    typeWork: 'Civil Work',
    typeTender: 'Single Tender',
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    const {pf, valueofwork, typeWork, typeTender} = this.state
    const {history} = this.props
    if (pf.trim() && valueofwork.trim()) {
      if (typeTender === 'Single Tender' && typeWork === 'O&M Work') {
        history.replace('/single')
      } else if (typeTender === 'Limited Tender' && typeWork === 'O&M Work') {
        history.replace('/limited')
      } else if (typeTender === 'Open Tender' && typeWork === 'O&M Work') {
        history.replace('/open')
      }
    } else {
      alert('Fill the Details')
    }
    this.setState({pf: '', valueofwork: ''})
  }

  render() {
    const {pf, valueofwork, typeWork, typeTender} = this.state
    return (
      <div className="bg-cont">
        <div className="form-cont">
          <img
            className="ntpc-img"
            src="https://images.seeklogo.com/logo-png/30/1/ntpc-logo-png_seeklogo-305340.png"
            alt="ntpc"
          />
          <form onSubmit={this.formSubmit}>
            <label className="input" htmlFor="prno">
              PR NO
            </label>
            <br />
            <input
              name="pf"
              value={pf}
              onChange={this.handleChange}
              id="prno"
              type="text"
              placeholder="Pr Number"
            />
            <br />
            <label className="input" htmlFor="work">
              Value of the Work
            </label>
            <br />
            <input
              name="valueofwork"
              value={valueofwork}
              onChange={this.handleChange}
              id="work"
              type="text"
              placeholder="Value of work"
            />
            <br />
            <label htmlFor="type" className="input">
              Type of Work
            </label>
            <br />
            <select
              name="typeWork"
              value={typeWork}
              onChange={this.handleChange}
              id="type"
            >
              {typeOfWork.map(work => (
                <option value={work.work} key={work.id}>
                  {work.work}
                </option>
              ))}
            </select>
            <br />
            <label htmlFor="tender" className="input">
              Type of Tender
            </label>
            <br />
            <select
              name="typeTender"
              value={typeTender}
              onChange={this.handleChange}
              id="tender"
            >
              {typeOfTender.map(tender => (
                <option value={tender.tender} key={tender.id}>
                  {tender.tender}
                </option>
              ))}
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Ntpc
