import { Calculator, PageWrapper } from 'components'
import { memo } from 'react'

const App = () => {
  return (
    <PageWrapper>
      <Calculator />
    </PageWrapper>
  )
}

export default memo(App)
