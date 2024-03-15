import styled from 'styled-components'

export const OptionAndHomeContainer = styled.div`
  display: flex;
  justify-content: stretch;
`
export const HomeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    height: 90vh;
    overflow-y: scroll;
  }
`

export const HomeBanner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const BannerLogo = styled.img`
  height: 35px;
  margin-bottom: 20px;
`
export const BannerPara = styled.p`
  color: #1e293b;
  font-size: 16px;
  width: 250px;
  margin-top: 0px;
  @media (min-width: 768px) {
    width: 350px;
    font-size: 20px;
  }
`

export const BannerButton = styled.button`
  border: 1px solid #1e293b;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: transparent;
  color: #1e293b;
  font-weight: 550;
  font-size: 13px;
`
export const CloseBanner = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 30px;
`
export const UlHomeList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    padding: 20px;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    padding: 20px;
    flex-direction: row;
  }
`
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`
export const SearchContainer = styled.div`
  border: 1px solid #94a3b8;
  display: flex;
  margin: 15px;
  @media (min-width: 768px) {
    width: 500px;
  }
`
export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 13px;
  padding: 8px;
  width: 100%;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : ' #616e7c')};
`
export const SearchButton = styled.button`
  background-color: ${props => props.isDark && '#212121'};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  border-left: 1px solid #94a3b8;
  align-self: stretch;
  width: 60px;
  color: #606060;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`
export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 576px) {
    padding: 10px;
    width: 300px;
  }
  @media (min-width: 768px) {
    width: 330px;
  }
`
