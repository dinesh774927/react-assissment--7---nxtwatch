import {Component} from 'react'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../Context/NxtwatchContext'
import Header from '../Header'
import GamingItems from '../GamingItems'
import MenuOptionsLarge from '../MenuOptionsLarge'
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
import {
  BannerContainer,
  LogoContainer,
  HeadingTrending,
  HomeContainer,
} from '../TrendingRoute/styledComponents'
import {GamingListContainer} from './styledComponents'
import '../Header/index.css'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingList: [], listApiStatus: apiStatus.initial}

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
    const response = await fetch('https://apis.ccbp.in/videos/gaming', option)
    const data = await response.json()

    if (response.ok) {
      console.log(data)
      this.setState({
        gamingList: data.videos,
        listApiStatus: apiStatus.success,
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

  success = () => {
    const {gamingList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <BannerContainer isDark={isDark}>
                <LogoContainer isDark={isDark}>
                  <SiYoutubegaming className="menuIcons" />
                </LogoContainer>
                <HeadingTrending isDark={isDark}>Gaming</HeadingTrending>
              </BannerContainer>
              <GamingListContainer>
                {gamingList.map(each => (
                  <Link
                    className="link"
                    key={each.id}
                    to={`/videos/${each.id}`}
                  >
                    <GamingItems item={each} />
                  </Link>
                ))}
              </GamingListContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

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

          return (
            <HomeContainer data-testid="trending" isDark={isDark}>
              <Header menuOption="gaming" />
              <OptionAndHomeContainer>
                <MenuOptionsLarge menuOption="gaming" />
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

export default Gaming
