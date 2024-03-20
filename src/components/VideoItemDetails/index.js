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
  NotFoundButton,
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
  ChannelName,
  ViewsContainer,
  ChannelDetailsContainer,
  ChannelImg,
  Hrline,
  DescriptionSmall,
  DescriptionLarge,
} from './styledComponent'

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
      this.setState({
        videoDetails: data.video_details,
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
            <NotFoundButton onClick={this.getDetails} type="button">
              Retry
            </NotFoundButton>
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

  success = () => {
    const {videoDetails, like, dislike} = this.state

    const dateFormat = formatDistanceToNowStrict(
      new Date(videoDetails.published_at),
    )

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, saveList, addToSaveList} = value
          const isPresent = saveList.every(each => each.id !== videoDetails.id)
          const addToSaveList1 = () => {
            addToSaveList(videoDetails)
          }

          return (
            <VideoDetailsContainer>
              <SmallPlayer>
                <ReactPlayer
                  width="100vw"
                  height="50vh"
                  url={videoDetails.video_url}
                  controls
                />
              </SmallPlayer>
              <LargePlayer>
                <ReactPlayer
                  width="100vw"
                  height="70vh"
                  url={videoDetails.video_url}
                  controls
                />
              </LargePlayer>
              <TitleDetailsContainer>
                <ChannelTitle isDark={isDark}>
                  {videoDetails.title}
                </ChannelTitle>
                <ViewsLikeContainer>
                  <ViewsContainer>
                    <ViewsName>{videoDetails.view_count} views</ViewsName>
                    <BsDot />
                    <ViewsName>{dateFormat} ago</ViewsName>
                  </ViewsContainer>
                  <LikesContainer>
                    <LikesContainer1
                      type="button"
                      onClick={this.onLike}
                      like={like}
                    >
                      <BiLike style={{marginRight: '5px'}} />
                      <ViewsName>Like</ViewsName>
                    </LikesContainer1>
                    <LikesContainer1
                      type="button"
                      onClick={this.onDislike}
                      like={dislike}
                    >
                      <BiDislike style={{marginRight: '5px'}} />
                      <ViewsName>Dislike</ViewsName>
                    </LikesContainer1>
                    <LikesContainer1
                      like={!isPresent}
                      onClick={addToSaveList1}
                      type="button"
                    >
                      <CgPlayListAdd style={{marginRight: '5px'}} />
                      <ViewsName>{isPresent ? 'Save' : 'Saved'}</ViewsName>
                    </LikesContainer1>
                  </LikesContainer>
                </ViewsLikeContainer>
                <Hrline isDark={isDark} />
                <ChannelDetailsContainer>
                  <ChannelImg
                    alt="channel logo"
                    src={videoDetails.channel.profile_image_url}
                  />
                  <div>
                    <ChannelName isDark={isDark}>
                      {videoDetails.channel.name}
                    </ChannelName>
                    <ViewsName>
                      {videoDetails.channel.subscriber_count} subscribers
                    </ViewsName>
                    <DescriptionLarge isDark={isDark}>
                      {videoDetails.description}
                    </DescriptionLarge>
                  </div>
                </ChannelDetailsContainer>
                <DescriptionSmall isDark={isDark}>
                  {videoDetails.description}
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
