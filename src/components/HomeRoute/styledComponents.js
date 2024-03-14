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
