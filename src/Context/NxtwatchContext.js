import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  saveList: [],
  addToSaveList: () => {},
})

export default NxtWatchContext
