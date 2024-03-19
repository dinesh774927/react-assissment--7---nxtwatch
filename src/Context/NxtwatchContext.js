import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  logout: () => {},
})

export default NxtWatchContext
