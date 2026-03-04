import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Cube({ visible }: { visible: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!meshRef.current) return

    const mesh = meshRef.current

    // 🎯 escalado suave
    const targetScale = visible ? 1 : 0.001
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.05,
    )

    // OBJ sigue al mouse pero con ángulo limitado

    const maxAngle = 0.5 // ← límite (~28°)

    const targetX = -mouse.y * maxAngle
    const targetY = mouse.x * maxAngle

    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetX, 0.1)

    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetY, 0.1)

    // Animación flotando

    const floatSpeed = 1.5
    const floatHeight = 0.2

    mesh.position.y =
      Math.sin(state.clock.elapsedTime * floatSpeed) * floatHeight
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color='orange' />
    </mesh>
  )
}
