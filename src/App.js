import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import NxtWatchContext from './Context/NxtwatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import Gaming from './components/GamingRoute'
import Trending from './components/TrendingRoute'
import SavedRoute from './components/SavedRoute'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, saveList: []}

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  addToSaveList = item => {
    const {saveList} = this.state
    const check = saveList.every(each => each.id !== item.id)
    if (!check) {
      const newList = saveList.filter(each => each.id !== item.id)
      this.setState({saveList: newList})
    } else {
      this.setState({saveList: [...saveList, item]})
    }
  }

  render() {
    const {isDark, saveList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          saveList,
          addToSaveList: this.addToSaveList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedRoute} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
