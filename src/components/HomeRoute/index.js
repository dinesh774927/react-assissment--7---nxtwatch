import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import {AiFillHome} from 'react-icons/ai'

import NxtWatchContext from '../../Context/NxtwatchContext'
import Header from '../Header'
import MenuItems from '../MenuOptions'

import {
  HomeContainer,
  OptionContainerLarge,
  MenuOptionContainerLarge,
  OptionContainer,
} from '../Header/styledComponents'
import {OptionAndHomeContainer} from './styledComponents'

const menuList = [
  {
    id: 'home',
    displayText: 'Home',
    link: '/',
    logo: <AiFillHome className="menuIcons" />,
  },
  {
    id: 'trending',
    displayText: 'Trending',
    link: '/trending',
    logo: <HiFire className="menuIcons" />,
  },
  {
    id: 'gaming',
    displayText: 'Gaming',
    link: '/gaming',
    logo: <SiYoutubegaming className="menuIcons" />,
  },
  {
    id: 'savedVideos',
    displayText: 'Saved videos',
    link: '/saved-videos',
    logo: <MdPlaylistAdd className="menuIcons" />,
  },
]

class HomeRoute extends Component {
  state = {isDark: false, menuOption: 'home'}

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
    const {isDark, menuOption} = this.state
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
            <OptionContainerLarge isDark={isDark}>
              <MenuOptionContainerLarge>
                <ul>
                  {menuList.map(each => (
                    <li key={each.id}>
                      <MenuItems
                        each={each}
                        func={this.changeMenu}
                        menuOption={menuOption}
                        isDark={isDark}
                      />
                    </li>
                  ))}
                </ul>
              </MenuOptionContainerLarge>
            </OptionContainerLarge>
          </OptionAndHomeContainer>
        </HomeContainer>
      </NxtWatchContext.Provider>
    )
  }
}

export default HomeRoute
