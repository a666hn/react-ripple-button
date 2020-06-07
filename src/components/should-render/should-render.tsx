import React from 'react'

export interface IShouldRender {
  renderIf?: boolean
  children?: React.ReactNode
}

const ShouldRender = (props: IShouldRender): any => {
  const { renderIf, children } = props
  return renderIf ? children : null
}

export default ShouldRender
