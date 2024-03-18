import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import {AiFillHome} from 'react-icons/ai'

import {
  OptionContainerLarge,
  MenuOptionContainerLarge,
  Contact,
  ContactContainer,
  SocialContainer,
  Social,
  Invitation,
} from '../Header/styledComponents'

import NxtWatchContext from '../../Context/NxtwatchContext'
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

const MenuOptionsLarge = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      const {menuOption} = props
      return (
        <OptionContainerLarge isDark={isDark}>
          <MenuOptionContainerLarge>
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
          </MenuOptionContainerLarge>
          <ContactContainer>
            <Contact isDark={isDark}>CONTACT US</Contact>
            <SocialContainer>
              <Social
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Social
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Social
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialContainer>
            <Invitation isDark={isDark}>
              Enjoy! Now to see yours channels and recommendations!
            </Invitation>
          </ContactContainer>
        </OptionContainerLarge>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuOptionsLarge
