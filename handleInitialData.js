import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
          Example of redux handleInitialData in App.js
      </div>
    )
  }
}

export default connect()(App)
