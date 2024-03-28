import {BsDot} from 'react-icons/bs'
import {formatDistanceToNowStrict} from 'date-fns'
import NxtWatchContext from '../../Context/NxtwatchContext'

import {
  ThumbnailImg,
  DetailsContainer,
  ChannelImg,
  DetailsBox,
  ChannelTitle,
  ChannelName,
  ViewsContainer,
  DatesContainer,
  ViewsName,
} from './styledComponents'
import './index.css'

const TrendingListDetails = props => {
  const {item} = props

  const dateFormat = formatDistanceToNowStrict(new Date(item.published_at))
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <>
            <ThumbnailImg src={item.thumbnail_url} alt="video thumbnail" />
            <DetailsContainer>
              <ChannelImg
                src={item.channel.profile_image_url}
                alt="channel logo"
              />
              <DetailsBox>
                <ChannelTitle isDark={isDark}>{item.title}</ChannelTitle>
                <DatesContainer>
                  <ChannelName>{item.channel.name}</ChannelName>
                  <ViewsContainer>
                    <BsDot className="dot1" />
                    <ViewsName>{item.view_count} views</ViewsName>
                    <BsDot />
                    <ViewsName>{dateFormat} ago</ViewsName>
                  </ViewsContainer>
                </DatesContainer>
              </DetailsBox>
            </DetailsContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingListDetails
