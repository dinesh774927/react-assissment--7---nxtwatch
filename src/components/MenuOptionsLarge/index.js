import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {MdPlaylistAdd} from 'react-icons/md'

import {AiFillHome} from 'react-icons/ai'

import {
  OptionContainerLarge,
  MenuOptionContainerLarge,
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

const MenuOptionsLarge = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, menuOption, changeMenu} = value

      return (
        <OptionContainerLarge isDark={isDark}>
          <MenuOptionContainerLarge>
            <ul>
              {menuList.map(each => (
                <li key={each.id}>
                  <MenuItems
                    each={each}
                    func={changeMenu}
                    menuOption={menuOption}
                    isDark={isDark}
                  />
                </li>
              ))}
            </ul>
          </MenuOptionContainerLarge>
        </OptionContainerLarge>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuOptionsLarge
