import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  menuOption: 'home',
  changeMenu: () => {},
  logout: () => {},
})

export default NxtWatchContext
