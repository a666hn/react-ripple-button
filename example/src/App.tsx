import React from 'react'
import { Button } from 'react-ripple-button'

const App = () => {

  const onClickButton = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('[OK]')
  }

  return (
    <div>
      Testing Components :
      <Button label="Click Me" onClick={onClickButton}/>
    </div>
  )
}

export default App
