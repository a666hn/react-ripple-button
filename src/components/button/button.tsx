import React, { useState } from 'react'
import classNames from 'classnames'
import useDebounceRipple from '../../helpers/useDebounceRipple'
import { declareNewProps } from '../../utils/declare-new-props'
import { IRippleButton, RippleType } from './button.type'

import './button.scss'

const customProps: string[] = [
  'rippleDuration',
  'label',
  'withRadius',
  'block',
  'disabled',
  'variant',
  'className'
]

const Button = (props: IRippleButton & React.HTMLProps<HTMLButtonElement>) => {
  const [ripples, set] = useState<RippleType>([])
  const { rippleDuration, label, withRadius, block, disabled, variant, className } = props // eslint-disable-line

  const restProps = declareNewProps(customProps, props)
  const cleanupRipple = () => set([])

  useDebounceRipple({ count: ripples.length, duration: rippleDuration || 750, cleanup: cleanupRipple })

  const buttonContainer = classNames('btn', {
    'btn-radius': withRadius,
    [`btn-${variant}`]: variant
  }, className)

  function buildEffectRipple (event: React.MouseEvent) {
    const x = event.pageX
    const y = event.pageY
    const currentTarget = event.currentTarget
    const rippleElement = currentTarget.getBoundingClientRect()

    const size = rippleElement.width > rippleElement.height
      ? rippleElement.width
      : rippleElement.height
    const pageX = x - rippleElement.x - size / 2
    const pageY = y - rippleElement.y - size / 2

    const newRipple = { size, pageX, pageY }

    set(prevState => [...prevState, newRipple])
  }

  return (
    <button className={buttonContainer} {...restProps}>
      {(!!label || !!props.children) && (
        <span>{label || props.children}</span>
      )}
      {!disabled && (
        <div className="ripple-container" onMouseDown={buildEffectRipple}>
          {ripples.length > 0 && ripples.map((item, index) => (
            <span
              key={index}
              id={`ripple-effect-id-${index}`}
              className="in-ripple-animated"
              style={{
                top: item.pageY,
                left: item.pageX,
                height: item.size,
                width: item.size,
                animationDuration: `${rippleDuration}ms`
              }}
            />
          ))}
        </div>
      )}
    </button>
  )
}

export default Button
