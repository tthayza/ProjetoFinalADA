export const showLoadingScreen = () => {
  const loadingScreen = document.createElement('div')
  loadingScreen.id = 'loading-screen'
  loadingScreen.style.position = 'fixed'
  loadingScreen.style.top = '0'
  loadingScreen.style.left = '0'
  loadingScreen.style.width = '100%'
  loadingScreen.style.height = '100%'
  loadingScreen.style.backgroundColor = '#53212bAf'
  loadingScreen.style.color = 'white'
  loadingScreen.style.display = 'flex'
  loadingScreen.style.alignItems = 'center'
  loadingScreen.style.justifyContent = 'center'
  loadingScreen.style.fontFamily = 'Valorant'
  loadingScreen.innerText = 'Loading...'
  loadingScreen.style.fontSize = '40px'
  loadingScreen.style.fontWeight = '700'
  loadingScreen.style.letterSpacing = '20px'
  loadingScreen.style.zIndex = '5'

  document.body.appendChild(loadingScreen)
}

export const hideLoadingScreen = () => {
  const loadingScreen = document.querySelector('#loading-screen')
  if (loadingScreen) {
    loadingScreen.remove()
  }
}
