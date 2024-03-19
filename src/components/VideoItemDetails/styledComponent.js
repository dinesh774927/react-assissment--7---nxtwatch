import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  @media (min-width: 768px) {
    padding: 20px;
  }
`

export const TitleDetailsContainer = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`
export const SmallPlayer = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    display: none;
  }
`
export const LargePlayer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 15px;
  }
`
export const ChannelTitle = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  margin: 0px;
  margin-bottom: 15px;
`
export const ViewsLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 25px;
  color: ${props => (props.like ? '#3b82f6' : '#64748b')};
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const LikesContainer1 = styled.button`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.like ? '#3b82f6' : '#64748b')};
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewsName = styled.p`
  font-size: 15px;
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #64748b;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
`
export const Hrline = styled.hr`
  border: 1px solid ${props => (props.isDark ? '#64748b' : '#cccccc')};
  margin-bottom: 20px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelImg = styled.img`
  width: 40px;
  margin-right: 20px;
`
export const DescriptionSmall = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  @media (min-width: 768px) {
    display: none;
  }
`
export const DescriptionLarge = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    font-size: 15px;
    color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  }
`
