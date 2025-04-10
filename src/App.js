import './App.css'
import {Switch, Route} from 'react-router-dom'
import Ntpc from './components/Ntpc'
import SingleTender from './components/SingleTender'
import LimitedTender from './components/LimitedTender'
import OpenTender from './components/OpenTender'

const App = () => (
  <Switch>
    <Route exact path="/" component={Ntpc} />
    <Route exact path="/single" component={SingleTender} />
    <Route exact path="/limited" component={LimitedTender} />
    <Route exact path="/open" component={OpenTender} />
  </Switch>
)

export default App
