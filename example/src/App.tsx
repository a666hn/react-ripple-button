import React from 'react'
import { Button } from 'react-ripple-button'

const App = () => {

  const onClickButton = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('[OK]')
  }

  return (
    <div className="component-test-wrapper">
      <div className="component-test-box">
        <header className="component-test-header">
          <h1 className="header-title">Component Test Render</h1>
        </header>
        <div className="component-test-body">
          <Button onClick={onClickButton} label="click me" withRadius/>
        </div>
        <footer className="component-test-footer">
          <div className="box-footer-body">
            <label>Created with{' '}
              <span role="img" aria-label="icon-love">❤️</span>
              {' '}By Adi Hermawan
            </label>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
