export interface IRipple {
  rippleDuration?: number
}

export interface IRippleButton extends IRipple {
  [key: string]: any
  label?: string
  withRadius?: boolean
  block?: boolean
  disabled?: boolean
  variant?: string,
  className?: string
}

export type RippleType = {
  pageX?: number
  pageY?: number
  size?: number
}[]
