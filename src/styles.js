import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @keyframes glow {
    0% {
      box-shadow: rgb(252, 210, 23) 0 0 0px;
      }
    100% {
      box-shadow: rgb(252, 210, 23) 0 10px 100px;
    }
  }

  body {
    color: #FBFBFB; 
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: #2828e6;
    font-family: 'Work Sans', sans-serif;
}
`
export const Wrapper = styled.section.attrs(({$color}) => ({
  style: {
    backgroundColor: `${$color}`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
  style: {
    animation: $isTogether ? 'glow 3s infinite alternate' : 'none'
  }
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;
`
