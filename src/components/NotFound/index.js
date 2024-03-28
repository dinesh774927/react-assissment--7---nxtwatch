import NxtWatchContext from '../../Context/NxtwatchContext'

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
import Header from '../Header'
import MenuOptionsLarge from '../MenuOptionsLarge'
import '../ListItems'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      return (
        <HomeContainer data-testid="trending" isDark={isDark}>
          <Header menuOption="trending" />
          <OptionAndHomeContainer>
            <MenuOptionsLarge menuOption="trending" />
            <HomeListContainer>
              <ListContainer>
                <LoaderContainer>
                  <NotFoundImg
                    alt="not found"
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    }
                  />
                  <NotFoundHeading isDark={isDark}>
                    Page Not Found
                  </NotFoundHeading>
                  <NotFoundPara>
                    we are sorry, the page you requested could not be found.
                  </NotFoundPara>
                </LoaderContainer>
              </ListContainer>
            </HomeListContainer>
          </OptionAndHomeContainer>
        </HomeContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
