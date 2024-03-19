import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  BgContainer,
  LoginContainer,
  WebLogo,
  InputContainer,
  Label,
  ShowLabel,
  Input,
  ErrorMsg,
  ShowPasswordContainer,
  LoginButton,
} from './styledComponents'

import NxtWatchContext from '../../Context/NxtwatchContext'

class LoginRoute extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const option = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <BgContainer isDark={isDark}>
              <LoginContainer onSubmit={this.onSubmitForm} isDark={isDark}>
                <WebLogo
                  alt="Website Logo"
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                />
                <InputContainer>
                  <Label htmlFor="username">USERNAME</Label>
                  <Input
                    isDark={isDark}
                    onChange={this.onChangeUsername}
                    value={username}
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </InputContainer>
                <InputContainer>
                  <Label htmlFor="password">PASSWORD</Label>
                  <Input
                    isDark={isDark}
                    onChange={this.onChangePassword}
                    value={password}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                  />
                </InputContainer>
                <ShowPasswordContainer>
                  <input onChange={this.onShowPassword} type="checkbox" />
                  <ShowLabel isDark={isDark}>Show Password</ShowLabel>
                </ShowPasswordContainer>

                <LoginButton type="submit">Login</LoginButton>
                {errorMsg !== '' && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
              </LoginContainer>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
