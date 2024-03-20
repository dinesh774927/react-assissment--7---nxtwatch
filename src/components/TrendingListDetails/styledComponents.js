import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  width: 100vw;
  height: 250px;
  @media (min-width: 576px) {
    width: 350px;
    height: 220px;
  }
  @media (min-width: 768px) {
    width: 350px;
    height: 200px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
`

export const ChannelImg = styled.img`
  width: 40px;
  border-radius: 20px;
  margin-right: 15px;
  @media (min-width: 576px) {
    display: none;
  }
`
export const DetailsBox = styled.div`
  display: flex
  flex-direction:column;
 
`
export const ChannelTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  margin: 0px;
  margin-bottom: 10px;
`
export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  color: #64748b;
  font-size: 13px;
  margin: 0px;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #64748b;
`
export const ViewsName = styled(ChannelName)`
  font-size: 12px;
`
