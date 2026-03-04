import { Text } from '@react-three/drei'

export default function TextOptions() {
  return (
    <>
      {/* 🔥 MENU CURVO */}
      <Text
        position={[-2000, 1100, 0]}
        fontSize={400}
        fontStyle='italic'
        color='white'
        anchorX='center'
        anchorY='middle'
      >
        about
      </Text>

      <Text
        position={[2000, 1100, 0]}
        fontSize={400}
        color='white'
        anchorX='center'
        anchorY='middle'
      >
        projects
      </Text>

      <Text
        position={[0, 2000, 0]}
        fontSize={400}
        color='white'
        anchorX='center'
        anchorY='middle'
      >
        stack
      </Text>

      <Text
        position={[0, -1050, 0]}
        fontSize={400}
        color='white'
        anchorX='center'
        anchorY='middle'
      >
        contact
      </Text>
    </>
  )
}
