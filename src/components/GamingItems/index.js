import NxtWatchContext from '../../Context/NxtwatchContext'
import {GamingItemContainer, Watching, GamingImg} from './styledComponents'
import {ChannelName} from '../VideoItemDetails/styledComponent'

const GamingItems = props => {
  const {item} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GamingItemContainer>
            <GamingImg alt="video thumbnail" src={item.thumbnail_url} />
            <ChannelName isDark={isDark}>{item.title}</ChannelName>
            <Watching>{item.view_count} Watching Worldwide</Watching>
          </GamingItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingItems
