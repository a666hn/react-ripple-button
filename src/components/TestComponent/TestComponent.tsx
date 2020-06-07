import React from 'react'

export interface ITestComponent {
  message?: string
}

const TestComponent = (props: ITestComponent & React.HTMLProps<HTMLDivElement>) => {
  return (
    <div>
      {props.message || 'Test Component'}
    </div>
  )
}

export default TestComponent
