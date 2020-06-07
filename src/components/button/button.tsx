import React from 'react'
import { declareNewProps } from '../../utils/declare-new-props'
export interface IButtonRippleEffect {
  [key: string]: any
  label?: string
  withRadius?: boolean
  block?: boolean
}

export type PropsObject = {
  [key: string]: string
}

const Button = (props: IButtonRippleEffect & React.HTMLProps<HTMLButtonElement>) => {
  const customProps = ['label', 'withRadius', 'block'] // eslint-disable-line
  const newProps = declareNewProps(customProps, props)

  return <button {...newProps}>{props.label || props.children}</button>
}

export default Button
