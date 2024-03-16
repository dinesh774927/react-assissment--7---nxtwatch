import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import NxtWatchContext from './Context/NxtwatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import Trending from './components/TrendingRoute'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false}

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
