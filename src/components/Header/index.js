import Popup from 'reactjs-popup'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsBrightnessHigh} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'
import {FaMoon, FaBars} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import './index.css'
import NxtWatchContext from '../../Context/NxtwatchContext'
import {
  NavContainer,
  HomeLogo,
  MenuContainer,
  MenuButton,
  PopupContainer,
  Close,
  MenuOptionContainer,
  LogOutPopContainer,
  CloseContainer,
  ConfirmationText,
  ButtonContainer,
  LogOutButton,
  MenuContainerLarge,
  ProfileImg,
  LogOutButtonLarge,
} from './styledComponents'
import MenuItems from '../MenuOptions'

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

const Header = props => {
  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const {menuOption} = props

        return (
          <NavContainer isDark={isDark}>
            <Link to="/">
              <HomeLogo
                alt="website logo"
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
              />
            </Link>
            <MenuContainer isDark={isDark}>
              <MenuButton isDark={isDark} onClick={changeTheme} type="button">
                {isDark ? <BsBrightnessHigh /> : <FaMoon />}
              </MenuButton>
              <Popup
                modal
                trigger={
                  <MenuButton isDark={isDark} type="button">
                    <FaBars />
                  </MenuButton>
                }
              >
                {close => (
                  <PopupContainer isDark={isDark}>
                    <Close type="button" isDark={isDark} onClick={close}>
                      <IoIosClose />
                    </Close>
                    <MenuOptionContainer>
                      <ul>
                        {menuList.map(each => (
                          <li key={each.id}>
                            <MenuItems
                              each={each}
                              menuOption={menuOption}
                              isDark={isDark}
                            />
                          </li>
                        ))}
                      </ul>
                    </MenuOptionContainer>
                  </PopupContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <MenuButton isDark={isDark} type="button">
                    <FiLogOut />
                  </MenuButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogOutPopContainer isDark={isDark}>
                    <CloseContainer isDark={isDark}>
                      <ConfirmationText isDark={isDark}>
                        Are you sure you want to logout?
                      </ConfirmationText>
                      <ButtonContainer>
                        <LogOutButton
                          isDark={isDark}
                          onClick={close}
                          type="button"
                          outline
                        >
                          Cancel
                        </LogOutButton>
                        <LogOutButton
                          onClick={logout}
                          isDark={isDark}
                          type="button"
                        >
                          Confirm
                        </LogOutButton>
                      </ButtonContainer>
                    </CloseContainer>
                  </LogOutPopContainer>
                )}
              </Popup>
            </MenuContainer>
            <MenuContainerLarge>
              <MenuButton isDark={isDark} onClick={changeTheme} type="button">
                {isDark ? <BsBrightnessHigh /> : <FaMoon />}
              </MenuButton>
              <ProfileImg
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              />

              <Popup
                modal
                trigger={
                  <LogOutButtonLarge type="button" isDark={isDark}>
                    Logout
                  </LogOutButtonLarge>
                }
                className="popup-content"
              >
                {close => (
                  <LogOutPopContainer isDark={isDark}>
                    <CloseContainer isDark={isDark}>
                      <ConfirmationText isDark={isDark}>
                        Are you sure you want to logout?
                      </ConfirmationText>
                      <ButtonContainer>
                        <LogOutButton
                          isDark={isDark}
                          onClick={close}
                          type="button"
                          outline
                        >
                          Cancel
                        </LogOutButton>
                        <LogOutButton
                          onClick={logout}
                          isDark={isDark}
                          type="button"
                        >
                          Confirm
                        </LogOutButton>
                      </ButtonContainer>
                    </CloseContainer>
                  </LogOutPopContainer>
                )}
              </Popup>
            </MenuContainerLarge>
          </NavContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
