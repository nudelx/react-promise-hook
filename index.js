import React from 'react'

export default function(defaultValue, debounce, afterEffect) {
  const [value, onInputChange] = React.useState(defaultValue || '')

  React.useEffect(
    () => {
      const timer = setTimeout(() => {
        onInputChange(value)
        typeof afterEffect === 'function' && afterEffect()
      }, debounce || 400)
      return () => clearTimeout(timer)
    },
    [value]
  )

  return {
    value,
    onInputChange
  }
}
