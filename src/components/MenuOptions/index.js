import {
  OptionContainer,
  OptionContainer1,
  Menu,
} from '../Header/styledComponents'

const MenuItems = props => {
  const {each, func, menuOption, isDark} = props

  const change = () => {
    func(each.id)
  }

  const check =
    menuOption === each.id ? (
      <OptionContainer
        type="button"
        onClick={change}
        key={each.id}
        isDark={isDark}
      >
        {each.logo}
        <Menu isDark={isDark}>{each.displayText}</Menu>
      </OptionContainer>
    ) : (
      <OptionContainer1
        type="button"
        onClick={change}
        key={each.id}
        isDark={isDark}
      >
        {each.logo}
        <Menu isDark={isDark}>{each.displayText}</Menu>
      </OptionContainer1>
    )

  return check
}

export default MenuItems
