import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../Context/NxtwatchContext'
import Header from '../Header'
import MenuOptionsLarge from '../MenuOptionsLarge'
import {HomeContainer} from '../Header/styledComponents'

import {
  OptionAndHomeContainer,
  HomeListContainer,
  ListContainer,
  LoaderContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
  NotFoundButton,
} from '../HomeRoute/styledComponents'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingList: [], listApiStatus: apiStatus.initial}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({listApiStatus: apiStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')

    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch('https://apis.ccbp.in/videos/trending', option)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({
        trendingList: data.videos,
        listApiStatus: apiStatus.failure,
      })
    } else {
      this.setState({listApiStatus: apiStatus.failure})
    }
  }

  loading = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  failure = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LoaderContainer>
            <NotFoundImg
              alt="failure view"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <NotFoundHeading isDark={isDark}>
              Oops! Something Went Wrong
            </NotFoundHeading>
            <NotFoundPara>
              We are having some trouble to complete your request. Please try
              again.
            </NotFoundPara>
            <NotFoundButton onClick={this.getDetails} type="button">
              Retry
            </NotFoundButton>
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  success = () => {}

  renderApis = () => {
    const {listApiStatus} = this.state
    switch (listApiStatus) {
      case apiStatus.success:
        return this.success()
      case apiStatus.failure:
        return this.failure()
      case apiStatus.inprogress:
        return this.loading()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          console.log(isDark)
          return (
            <HomeContainer data-testid="home" isDark={isDark}>
              <Header menuOption="trending" />
              <OptionAndHomeContainer>
                <MenuOptionsLarge menuOption="trending" />
                <HomeListContainer>
                  <ListContainer>{this.renderApis()}</ListContainer>
                </HomeListContainer>
              </OptionAndHomeContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
