import React, { useState } from 'react'
import useDebounceRipple from '../../helpers/useDebounceRipple'

import './ripple.scss'

const defaultProps = {
  duration: 750
}

export type RippleType = {
  duration?: number
  rippleColor?: string
} & typeof defaultProps

export type RippleClientType = {
  pageX?: number
  pageY?: number
  size?: number
}[]

const Ripple = (props: RippleType & React.HTMLProps<HTMLDivElement>) => {
  const [ripples, set] = useState<RippleClientType>([])

  const cleanupRipple = () => set([])

  useDebounceRipple({ count: ripples.length, duration: props.duration, cleanup: cleanupRipple })

  function buildRipple (event: React.MouseEvent) {
    const x = event.pageX
    const y = event.pageY
    const currentTarget = event.currentTarget
    const rippleElement = currentTarget.getBoundingClientRect()

    const size = rippleElement.width > rippleElement.height
      ? rippleElement.width
      : rippleElement.height

    const pageX = x - rippleElement.x - size / 2
    const pageY = y - rippleElement.y - size / 2

    const newRipple = { pageX, pageY, size }

    set(prevState => [...prevState, newRipple])
  }

  return (
    <div className="ripple-container" onMouseDown={buildRipple}>
      {ripples.length > 0 && ripples.map((item, index) => (
        <span
          key={index}
          id={'RippleID-' + index}
          className="in-ripple-animated"
          style={{
            top: item.pageY,
            left: item.pageX,
            height: item.size,
            width: item.size
          }}
        />
      ))}
    </div>
  )
}

Ripple.defaultProps = defaultProps

export default Ripple
