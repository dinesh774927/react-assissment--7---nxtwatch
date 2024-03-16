import {formatDistanceToNowStrict} from 'date-fns'
import {
  Thumbnail,
  ChannelContainer,
  ChannelImg,
  ChannelTitle,
  ChannelNameContainer,
  ChannelName,
  ChannelTitleContainer,
  DateContainer,
  Dateli,
} from './styledComponents'

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
            <DateContainer>
              <li>
                <ChannelName>{item.view_count} views</ChannelName>
              </li>
              <Dateli>
                <ChannelName>{dateFormat} ago</ChannelName>
              </Dateli>
            </DateContainer>
          </ChannelNameContainer>
        </ChannelTitleContainer>
      </ChannelContainer>
    </>
  )
}

export default ListItems
