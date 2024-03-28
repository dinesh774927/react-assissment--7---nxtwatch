import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  Thumbnail,
  ChannelContainer,
  ChannelImg,
  ChannelTitle,
  ChannelNameContainer,
  ChannelName,
  ChannelTitleContainer,
} from './styledComponents'
import {
  ViewsContainer,
  ViewsName,
} from '../TrendingListDetails/styledComponents'

const ListItems = props => {
  const {item, isDark} = props
  const dateFormat = formatDistanceToNowStrict(new Date(item.published_at))

  return (
    <>
      <Thumbnail alt="video thumbnail" src={item.thumbnail_url} />
      <ChannelContainer>
        <ChannelImg alt="channel logo" src={item.channel.profile_image_url} />
        <ChannelTitleContainer>
          <ChannelTitle isDark={isDark}>{item.title}</ChannelTitle>
          <ChannelNameContainer>
            <ChannelName>{item.channel.name}</ChannelName>
            <ViewsContainer>
              <BsDot className="dot1" />
              <ViewsName>{item.view_count} views</ViewsName>
              <BsDot />
              <ViewsName>{dateFormat} ago</ViewsName>
            </ViewsContainer>
          </ChannelNameContainer>
        </ChannelTitleContainer>
      </ChannelContainer>
    </>
  )
}

export default ListItems
