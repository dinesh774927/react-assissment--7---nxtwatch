import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoIosClose} from 'react-icons/io'
import Header from '../Header'
import NxtWatchContext from '../../Context/NxtwatchContext'
import {HomeContainer} from '../Header/styledComponents'
import {
  OptionAndHomeContainer,
  HomeBanner,
  BannerLogo,
  BannerPara,
  HomeListContainer,
  BannerButton,
  CloseBanner,
} from './styledComponents'
import MenuOptionsLarge from '../MenuOptionsLarge'

class HomeRoute extends Component {
  state = {isDark: false, menuOption: 'home', searchInput: '', showBanner: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
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
            </HomeListContainer>
          </OptionAndHomeContainer>
        </HomeContainer>
      </NxtWatchContext.Provider>
    )
  }
}

export default HomeRoute
