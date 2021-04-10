import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'redux/store'
import ThemeWrapper from 'components/wrappers/ThemeWrapper'
import RouteWrapper from 'components/wrappers/RouteWrapper'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <RouteWrapper />
      </ThemeWrapper>
    </Provider>
  )
}

export default App
