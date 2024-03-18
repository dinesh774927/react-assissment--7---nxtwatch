import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {IoIosClose, IoIosSearch} from 'react-icons/io'
import Header from '../Header'
import NxtWatchContext from '../../Context/NxtwatchContext'
import ListItems from '../ListItems'
import {HomeContainer} from '../Header/styledComponents'
import {
  OptionAndHomeContainer,
  HomeBanner,
  BannerLogo,
  BannerPara,
  HomeListContainer,
  BannerButton,
  CloseBanner,
  UlHomeList,
  ListContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoaderContainer,
  List,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
  NotFoundButton,
} from './styledComponents'
import MenuOptionsLarge from '../MenuOptionsLarge'
import './index.css'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class HomeRoute extends Component {
  state = {
    searchInput: '',
    showBanner: true,
    videosList: [],
    listApiStatus: apiStatus.initial,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({listApiStatus: apiStatus.inprogress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      option,
    )
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.setState({videosList: data.videos, listApiStatus: apiStatus.success})
    } else {
      this.setState({listApiStatus: apiStatus.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onShowBanner = () => {
    this.setState(prev => ({showBanner: !prev.showBanner}))
  }

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
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

  emptyList = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoaderContainer>
            <NotFoundImg
              alt="not found"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <NotFoundHeading isDark={isDark}>
              No Search results found
            </NotFoundHeading>
            <NotFoundPara>
              Try different key words or remove search filter
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
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.emptyList()
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <UlHomeList>
              {videosList.map(each => (
                <List key={each.id}>
                  <Link className="link" to={`/videos/${each.id}`}>
                    <ListItems item={each} isDark={isDark} />
                  </Link>
                </List>
              ))}
            </UlHomeList>
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
    const {showBanner, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <HomeContainer data-testid="home" isDark={isDark}>
              <Header menuOption="home" />
              <OptionAndHomeContainer>
                <MenuOptionsLarge menuOption="home" />
                <HomeListContainer>
                  {showBanner && (
                    <HomeBanner data-testid="banner">
                      <div>
                        <BannerLogo
                          alt="nxt watch logo"
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <BannerButton>GET IT NOW</BannerButton>
                      </div>
                      <CloseBanner
                        data-testid="close"
                        onClick={this.onShowBanner}
                        type="button"
                      >
                        <IoIosClose />
                      </CloseBanner>
                    </HomeBanner>
                  )}
                  <ListContainer>
                    <SearchContainer>
                      <SearchInput
                        value={searchInput}
                        onChange={this.onChangeSearch}
                        isDark={isDark}
                        type="search"
                        placeholder="Search"
                      />
                      <SearchButton
                        onClick={this.getDetails}
                        isDark={isDark}
                        type="button"
                      >
                        <IoIosSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderApis()}
                  </ListContainer>
                </HomeListContainer>
              </OptionAndHomeContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeRoute
