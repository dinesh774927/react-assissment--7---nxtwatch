import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../Context/NxtwatchContext'
import Header from '../Header'
import MenuOptionsLarge from '../MenuOptionsLarge'
import TrendingListDetails from '../TrendingListDetails'
import {
  OptionAndHomeContainer,
  HomeListContainer,
  ListContainer,
  LoaderContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from '../HomeRoute/styledComponents'
import {
  BannerContainer,
  LogoContainer,
  HeadingTrending,
  HomeContainer,
  TrendListContainer,
  TrendListItems,
} from './styledComponents'
import '../ListItems'
import '../HomeRoute/index.css'

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

    if (response.ok) {
      const details = data.videos.map(each => this.changeCases(each))
      this.setState({
        trendingList: details,
        listApiStatus: apiStatus.success,
      })
    } else {
      this.setState({listApiStatus: apiStatus.failure})
    }
  }

  changeCases = d => ({
    id: d.id,
    channel: d.channel,
    description: d.description,
    publishedAt: d.published_at,
    thumbnailUrl: d.thumbnail_url,
    title: d.title,
    videoUrl: d.video_url,
    viewCount: d.view_count,
  })

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
            <button className="retry" onClick={this.getDetails} type="button">
              Retry
            </button>
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  success = () => {
    const {trendingList} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <BannerContainer isDark={isDark}>
                <LogoContainer isDark={isDark}>
                  <HiFire className="menuIcons" />
                </LogoContainer>
                <HeadingTrending isDark={isDark}>Trending</HeadingTrending>
              </BannerContainer>
              <TrendListContainer>
                {trendingList.map(each => (
                  <Link
                    key={each.id}
                    className="link"
                    to={`/videos/${each.id}`}
                  >
                    <TrendListItems>
                      <TrendingListDetails item={each} />
                    </TrendListItems>
                  </Link>
                ))}
              </TrendListContainer>
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
