import React, { memo } from 'react'
import { Calculator } from 'components'
import { GlobalStyles } from 'theme'

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />

      <Calculator />
    </React.Fragment>
  )
}

export default memo(App)
