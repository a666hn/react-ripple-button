import { useLayoutEffect } from 'react'

export interface IDebounceRipple {
  cleanup: () => void
  duration: number
  count: number
}

const useDebounceRipple = (props: IDebounceRipple) => {
  const { count, duration, cleanup } = props
  useLayoutEffect(() => {
    let debounce: any = null

    if (count > 0) {
      clearTimeout(debounce)

      debounce = setTimeout(() => {
        cleanup()
        clearTimeout(debounce)
      }, duration * 4)
    }

    return () => clearTimeout(debounce)
  }, [props])
}

export default useDebounceRipple
