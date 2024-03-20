import {Component} from 'react'
import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'

import NxtWatchContext from '../../Context/NxtwatchContext'
import Header from '../Header'
import MenuOptionsLarge from '../MenuOptionsLarge'
import TrendingListDetails from '../TrendingListDetails'
import {
  OptionAndHomeContainer,
  HomeListContainer,
  ListContainer,
  LoaderContainer,
  NotFoundImg,
  NotFoundHeading,
} from '../HomeRoute/styledComponents'
import {
  BannerContainer,
  LogoContainer,
  HeadingTrending,
  HomeContainer,
  TrendListContainer,
  TrendListItems,
} from '../TrendingRoute/styledComponents'
import '../ListItems'
import {NotFoundPara} from './styledComponents'

class SavedRoute extends Component {
  success = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, saveList} = value
        if (saveList.length === 0) {
          return this.noVideos()
        }
        return (
          <>
            <BannerContainer isDark={isDark}>
              <LogoContainer isDark={isDark}>
                <HiFire className="menuIcons" />
              </LogoContainer>
              <HeadingTrending isDark={isDark}>Saved Videos</HeadingTrending>
            </BannerContainer>
            <TrendListContainer>
              {saveList.map(each => (
                <Link key={each.id} className="link" to={`/videos/${each.id}`}>
                  <TrendListItems>
                    <TrendingListDetails item={each} />
                  </TrendListItems>
                </Link>
              ))}
            </TrendListContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  noVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LoaderContainer>
            <NotFoundImg
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <NotFoundHeading isDark={isDark}>
              No saved videos found
            </NotFoundHeading>
            <NotFoundPara isDark={isDark}>
              You can save your videos while watching them
            </NotFoundPara>
          </LoaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <HomeContainer data-testid="savedVideos" isDark={isDark}>
              <Header menuOption="trending" />
              <OptionAndHomeContainer>
                <MenuOptionsLarge menuOption="trending" />
                <HomeListContainer>
                  <ListContainer>{this.success()}</ListContainer>
                </HomeListContainer>
              </OptionAndHomeContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedRoute
