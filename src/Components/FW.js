import { Fireworks } from 'fireworks/lib/react'

export default function firework() {
  let fxProps = {
    count: 4,
    interval: 1000,
    bubbleSizeMaximum: 10,
    colors: ['#FFFF00', '#0000FF', '#00FF00', '#FF0000'],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 500 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }

  return (
    <div>
      <Fireworks {...fxProps} />
    </div>
  )
}