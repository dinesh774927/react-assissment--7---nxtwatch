import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const BannerContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  padding: 15px;
  padding-left: 30px;
  display: flex;
  align-items: center;
`

export const LogoContainer = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#d7dfe9')};
  padding-bottom: 15px;
  padding-right: 10px;
  padding-left: 20px;
  padding-top: 20px;
  border-radius: 70px;
  font-size: 30px;
  color: #ff0000;
  margin-right: 15px;
`

export const HeadingTrending = styled.h1`
  font-size: 25px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const TrendListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const TrendListItems = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  @media (min-width: 576px) {
    flex-direction: row;
    padding: 15px;
  }
`
