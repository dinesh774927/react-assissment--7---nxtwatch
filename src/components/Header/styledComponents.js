import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
`

export const NavContainer = styled.nav`
  padding: 15px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HomeLogo = styled.img`
  height: 30px;
  margin-left: 20px;
  margin-bottom: 5px;
  @media (min-height: 768px) {
    height: 40px;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`

export const MenuContainerLarge = styled(MenuContainer)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 10px;
  font-size: 23px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  outline: none;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-top: 8px;
    margin-right: 13px;
  }
`
export const ProfileImg = styled.img`
  height: 25px;
  margin-right: 10px;
`

export const PopupContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
`
export const OptionContainerLarge = styled(PopupContainer)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 300px;
    justify-content: flex-start;
  }
`

export const Close = styled(MenuButton)`
  align-self: flex-end;
  margin: 30px;
  font-size: 30px;
`
export const MenuOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  align-self: stretch;
`
export const MenuOptionContainerLarge = styled(MenuOptionContainer)`
  justify-content: flex-start;
`

export const OptionContainer1 = styled.button`
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 10px;
  color: #606060;
  align-self: stretch;
  background-color: transparent;
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`

export const OptionContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 10px;
  align-self: stretch;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ff0b37;
  font-size: 25px;
  font-weight: bold;
  background-color: ${props => (props.isDark ? '#383838' : '#e2e8f0')};
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`

export const Menu = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  text-align: left;
  width: 100px;
`

export const LogOutPopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseContainer = styled.div`
  background-color: ${props => (props.isDark ? '#383838' : '#ffffff')};
  padding: 10px;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-family: 'Roboto';
`
export const ConfirmationText = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#ffffff' : '#00306e')};
  margin-bottom: 20px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogOutButton = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  border: ${props => (props.outline ? '1px solid #616e7c' : 'none')};
  margin: 15px;
  padding: 12px;
  padding-left: 18px;
  padding-right: 18px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.outline ? '#94a3b8' : '#ffffff')};
  border-radius: 2px;
`

export const LogOutButtonLarge = styled(LogOutButton)`
  background-color: transparent;
  border: ${props =>
    props.isDark ? '1px solid #ffffff' : '1px solid #3b82f6'};
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  padding: 8px;
  font-size: 13px;
  padding-left: 15px;
  padding-right: 15px;
`
