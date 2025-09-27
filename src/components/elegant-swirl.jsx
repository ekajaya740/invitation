import { MeshGradient } from '@paper-design/shaders-react'

export default function ElegantSwirl() {
  return (
    <MeshGradient
      colors={["#c38941", "#f7f7f7", "#b0b0b0"]}
      distortion={1}
      swirl={0.27}
      grainMixer={0.14}
      grainOverlay={0.23}
      speed={2}
      scale={0.88}
      rotation={90}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
