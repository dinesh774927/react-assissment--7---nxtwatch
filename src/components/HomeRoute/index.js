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
    isDark: false,
    menuOption: 'home',
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

  changeMenu = id => {
    this.setState({menuOption: id})
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

  failure = () => <div>faliure</div>

  emptyList = () => <div>working</div>

  success = () => {
    const {isDark, videosList, searchInput} = this.state
    if (videosList.length === 0) {
      return this.emptyList()
    }
    return (
      <ListContainer>
        <SearchContainer>
          <SearchInput
            value={searchInput}
            onChange={this.onChangeSearch}
            isDark={isDark}
            type="search"
            placeholder="Search"
          />
          <SearchButton onClick={this.getDetails} isDark={isDark} type="button">
            <IoIosSearch />
          </SearchButton>
        </SearchContainer>
        <UlHomeList>
          {videosList.map(each => (
            <List key={each.id}>
              <Link className="link" to={`/videos/${each.id}`}>
                <ListItems item={each} isDark={isDark} />
              </Link>
            </List>
          ))}
        </UlHomeList>
      </ListContainer>
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
    const {isDark, menuOption, showBanner} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          menuOption,
          changeTheme: this.changeTheme,
          changeMenu: this.changeMenu,
          logout: this.logout,
        }}
      >
        <HomeContainer data-testid="home" isDark={isDark}>
          <Header />
          <OptionAndHomeContainer>
            <MenuOptionsLarge />
            <HomeListContainer>
              {showBanner && (
                <HomeBanner data-testid="banner">
                  <div>
                    <BannerLogo
                      alt="website logo"
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
              {this.renderApis()}
            </HomeListContainer>
          </OptionAndHomeContainer>
        </HomeContainer>
      </NxtWatchContext.Provider>
    )
  }
}

export default HomeRoute
