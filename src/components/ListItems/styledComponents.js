import styled from 'styled-components'

export const Thumbnail = styled.img`
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 576px) {
    height: 150px;
  }
  @media (min-width: 768px) {
    height: 170px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px;
`
export const ChannelImg = styled.img`
  width: 30px;
  border-radius: 15px;
  margin-right: 15px;
`
export const ChannelTitle = styled.p`
  font-size: 15px;
  margin: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#0f0f0f')};
`
export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;

  @media (min-width: 576px) {
    flex-direction: column;
  }
`

export const ChannelName = styled.p`
  color: #616e7c;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 0px;
`
export const ChannelTitleContainer = styled.div`
  display: flex;
  align-self: stretch;

  flex-direction: column;
  justify-content: space-between;
`
export const DateContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
`
export const Dateli = styled.li`
  list-style-type: circle;
`
