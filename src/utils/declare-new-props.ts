export interface NewProps {
  [key: string]: any
}

export function declareNewProps<A extends Array<string>, C extends Object>(allowedProps: A, currentProps: C): NewProps {
  const newProps: NewProps = {}

  for (const item in currentProps) {
    if (allowedProps.indexOf(item) < 0)
      newProps[item] = currentProps[item]
  }

  return newProps
}
