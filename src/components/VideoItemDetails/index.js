import {Component} from 'react'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNowStrict} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../Context/NxtwatchContext'
import Header from '../Header'
import MenuOptionsLarge from '../MenuOptionsLarge'
import {
  OptionAndHomeContainer,
  HomeListContainer,
  ListContainer,
  LoaderContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from '../HomeRoute/styledComponents'
import {HomeContainer} from '../TrendingRoute/styledComponents'

import {
  VideoDetailsContainer,
  TitleDetailsContainer,
  SmallPlayer,
  LargePlayer,
  ChannelTitle,
  ViewsLikeContainer,
  LikesContainer,
  LikesContainer1,
  ViewsName,
  ViewsName1,
  ChannelName,
  ViewsContainer,
  ChannelDetailsContainer,
  ChannelImg,
  Hrline,
  DescriptionSmall,
  DescriptionLarge,
} from './styledComponent'
import '../HomeRoute/index.css'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: '',
    detailApiStatus: apiStatus.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({detailApiStatus: apiStatus.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, option)
    const data = await response.json()
    if (response.ok) {
      const details = this.changeCases(data.video_details)
      this.setState({
        videoDetails: details,
        detailApiStatus: apiStatus.success,
      })
    } else {
      this.setState({detailApiStatus: apiStatus.failure})
    }
  }

  loading = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  failure = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LoaderContainer>
            <NotFoundImg
              alt="failure view"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
            />
            <NotFoundHeading isDark={isDark}>
              Oops! Something Went Wrong
            </NotFoundHeading>
            <NotFoundPara>
              We are having some trouble to complete your request. Please try
              again.
            </NotFoundPara>
            <button className="retry" onClick={this.getDetails} type="button">
              Retry
            </button>
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onLike = () => {
    this.setState(prev => ({like: !prev.like, dislike: false}))
  }

  onDislike = () => {
    this.setState(prev => ({dislike: !prev.dislike, like: false}))
  }

  changeCases = d => ({
    id: d.id,
    channel: d.channel,
    description: d.description,
    publishedAt: d.published_at,
    thumbnailUrl: d.thumbnail_url,
    title: d.title,
    videoUrl: d.video_url,
    viewCount: d.view_count,
  })

  success = () => {
    const {videoDetails, like, dislike} = this.state
    const {
      id,
      channel,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    const dateFormat = formatDistanceToNowStrict(new Date(publishedAt))
    console.log(dateFormat)
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, saveList, addToSaveList} = value
          const isPresent = saveList.every(each => each.id !== id)
          const addToSaveList1 = () => {
            addToSaveList(videoDetails)
          }

          return (
            <VideoDetailsContainer>
              <SmallPlayer>
                <ReactPlayer
                  width="100vw"
                  height="50vh"
                  url={videoUrl}
                  controls
                />
              </SmallPlayer>
              <LargePlayer>
                <ReactPlayer
                  width="100vw"
                  height="70vh"
                  url={videoUrl}
                  controls
                />
              </LargePlayer>
              <TitleDetailsContainer>
                <ChannelTitle isDark={isDark}>{title}</ChannelTitle>
                <ViewsLikeContainer>
                  <ViewsContainer>
                    <ViewsName>{viewCount} views</ViewsName>
                    <BsDot />
                    <ViewsName>{dateFormat} ago</ViewsName>
                  </ViewsContainer>
                  <LikesContainer>
                    <LikesContainer1 like={like}>
                      <BiLike style={{marginRight: '5px'}} />
                      <ViewsName1
                        like={like}
                        type="button"
                        onClick={this.onLike}
                      >
                        Like
                      </ViewsName1>
                    </LikesContainer1>
                    <LikesContainer1 like={dislike}>
                      <BiDislike style={{marginRight: '5px'}} />
                      <ViewsName1
                        like={dislike}
                        type="button"
                        onClick={this.onDislike}
                      >
                        Dislike
                      </ViewsName1>
                    </LikesContainer1>
                    <LikesContainer1
                      like={!isPresent}
                      onClick={addToSaveList1}
                      type="button"
                    >
                      <CgPlayListAdd style={{marginRight: '5px'}} />
                      <ViewsName1 like={!isPresent}>
                        {isPresent ? 'Save' : 'Saved'}
                      </ViewsName1>
                    </LikesContainer1>
                  </LikesContainer>
                </ViewsLikeContainer>
                <Hrline isDark={isDark} />
                <ChannelDetailsContainer>
                  <ChannelImg
                    alt="channel logo"
                    src={channel.profile_image_url}
                  />
                  <div>
                    <ChannelName isDark={isDark}>{channel.name}</ChannelName>
                    <ViewsName>
                      {channel.subscriber_count} subscribers
                    </ViewsName>
                    <DescriptionLarge isDark={isDark}>
                      {description}
                    </DescriptionLarge>
                  </div>
                </ChannelDetailsContainer>
                <DescriptionSmall isDark={isDark}>
                  {description}
                </DescriptionSmall>
              </TitleDetailsContainer>
            </VideoDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderApis = () => {
    const {detailApiStatus} = this.state
    switch (detailApiStatus) {
      case apiStatus.success:
        return this.success()
      case apiStatus.failure:
        return this.failure()
      case apiStatus.inprogress:
        return this.loading()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer data-testid="videoItemDetails" isDark={isDark}>
              <Header menuOption="" />
              <OptionAndHomeContainer>
                <MenuOptionsLarge menuOption="" />
                <HomeListContainer>
                  <ListContainer>{this.renderApis()}</ListContainer>
                </HomeListContainer>
              </OptionAndHomeContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
