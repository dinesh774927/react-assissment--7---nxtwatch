import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.isDark ? ' #212121' : '#f9f9f9')};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
`
export const LoginContainer = styled.form`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: ${props => !props.isDark && '1px 2px 15px #e2e8f0'};
  border-radius: 10px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`
export const WebLogo = styled.img`
  height: 30px;
  margin-bottom: 30px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  margin-bottom: 30px;
  align-self: stretch;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  margin-bottom: 30px;
`

export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#7e858e')};
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: bold;
`
export const ShowLabel = styled(Label)`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 0px;
  margin-left: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #cbd5e1;
  padding: 9px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  align-self: stretch;
  margin-bottom: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-size: 13px;
  margin: 0px;
  align-self: stretch;
`
