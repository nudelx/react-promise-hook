import React from 'react'

export default function(init) {
  const t = React.useState(init || null)
  return [t[0], d => Promise.resolve(t[1](d))]
}
