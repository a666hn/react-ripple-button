import React from 'react'

export interface ITestComponent {
  message?: string
}

const TestComponent: React.FC<ITestComponent> = props => {
  return (
    <div>
      {props.message || 'Test Component'}
    </div>
  )
}

export default TestComponent
