import {Link} from 'react-router-dom'
import {
  OptionContainer,
  OptionContainer1,
  Menu,
} from '../Header/styledComponents'

import './index.css'

const MenuItems = props => {
  const {each, menuOption, isDark} = props

  const check =
    menuOption === each.id ? (
      <OptionContainer type="button" isDark={isDark}>
        {each.logo}

        <Menu isDark={isDark}>
          {isDark ? (
            <Link className="linkdark" to={each.link}>
              {each.displayText}
            </Link>
          ) : (
            <Link className="linklight" to={each.link}>
              {each.displayText}
            </Link>
          )}
        </Menu>
      </OptionContainer>
    ) : (
      <OptionContainer1 type="button" isDark={isDark}>
        {each.logo}
        <Menu isDark={isDark}>
          {isDark ? (
            <Link className="linkdark" to={each.link}>
              {each.displayText}
            </Link>
          ) : (
            <Link className="linklight" to={each.link}>
              {each.displayText}
            </Link>
          )}
        </Menu>
      </OptionContainer1>
    )

  return check
}

export default MenuItems
