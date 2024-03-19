import {Link} from 'react-router-dom'
import {
  OptionContainer,
  OptionContainer1,
  Menu,
} from '../Header/styledComponents'

const MenuItems = props => {
  const {each, menuOption, isDark} = props

  const check =
    menuOption === each.id ? (
      <Link className="link" to={each.link}>
        <OptionContainer type="button" isDark={isDark}>
          {each.logo}
          <Menu isDark={isDark}>{each.displayText}</Menu>
        </OptionContainer>
      </Link>
    ) : (
      <Link className="link" to={each.link}>
        <OptionContainer1 type="button" isDark={isDark}>
          {each.logo}
          <Menu isDark={isDark}>{each.displayText}</Menu>
        </OptionContainer1>
      </Link>
    )

  return check
}

export default MenuItems
