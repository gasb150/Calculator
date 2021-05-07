import React, {Fragment} from 'react'
import ButtonPanel from './ButtonPanel'
import Display from './Display'
const result = '0'
const App = () => {

  return (
    <Fragment>
      <Display result={result} />
      <ButtonPanel />
      
    </Fragment>
  )
}

export default App