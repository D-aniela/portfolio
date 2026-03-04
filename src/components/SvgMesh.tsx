import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js'

interface Props {
  url: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  visible?: boolean
  item: number
}

export default function SvgMeshStable({
  url,
  scale = 0.002,
  position = [0, -1, 0],
  rotation = [0, 0, 0],
  // visible = true,
  item,
}: Props) {
  const groupRef = useRef<THREE.Group>(null!)
  const svgContainerRef = useRef<THREE.Group>(null!)
  const pupilsRef = useRef<THREE.Mesh[]>([])
  // Es un conjunto grande el cabello
  const hairRef = useRef<THREE.Group | null>(null)
  const { mouse, clock } = useThree()

  useEffect(() => {
    const container = svgContainerRef.current
    if (!container) return

    pupilsRef.current = []

    while (container.children.length) {
      container.remove(container.children[0])
    }

    const loader = new SVGLoader()

    loader.load(url, (data) => {
      const svgGroup = new THREE.Group()
      const hairGroup = new THREE.Group()
      const normalGroup = new THREE.Group()

      data.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path)

        shapes.forEach((shape) => {
          const geometry = new THREE.ShapeGeometry(shape, 64)

          const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
          })

          const mesh = new THREE.Mesh(geometry, material)

          // 🔥 Detectar pupilas
          geometry.computeBoundingBox()
          const box = geometry.boundingBox!
          const size = new THREE.Vector3()
          box.getSize(size)
          const approxRadius = size.x / 2

          if (approxRadius > 40 && approxRadius < 46) {
            pupilsRef.current.push(mesh)
          }

          // 🔥 Detectar cabello por color oscuro específico
          let colorStr = ''
          try {
            colorStr = path.color ? path.color.getStyle() : ''
          } catch {
            colorStr = ''
          }
          // if (!colorStr && data?.xml && path.userData && path.userData.style) {
          //   const fill = path.userData.style.fill as string
          //   if (fill && fill.startsWith('url(')) {
          //     const id = fill.replace(/^url\(#|\)$/g, '')
          //     const gradEl = data.xml.getElementById(id)
          //     if (gradEl) {
          //       const stop = gradEl.querySelector('stop')
          //       if (stop) {
          //         const sc = stop.getAttribute('stop-color')
          //         if (sc) colorStr = sc
          //       }
          //     }
          //   }
          // }

          if (colorStr === 'rgb(6,4,15)' || colorStr === 'rgb(31,22,25)') {
            hairGroup.add(mesh)
          } else {
            normalGroup.add(mesh)
          }
        })
      })

      hairRef.current = hairGroup

      svgGroup.add(normalGroup)
      svgGroup.add(hairGroup)

      // Flip Y
      svgGroup.scale.y = -1

      // Centrar
      const box = new THREE.Box3().setFromObject(svgGroup)
      const center = new THREE.Vector3()
      box.getCenter(center)
      svgGroup.position.sub(center)

      container.add(svgGroup)
    })
  }, [url])

  // 🎯 Eye tracking
  useFrame(() => {
    if (!groupRef.current) return
    /** Si item===2 irse a la izquierda*/
    const targetX = item === 2 ? -3.5 : item === 3 ? 3.5 : 0

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.05,
    )
    /** Fin animación */

    // 🎯 escalado suave
    // const targetScale = visible ? 0.002 : 0
    const targetScale = 0.002
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.05,
    )

    if (!pupilsRef.current.length) return

    pupilsRef.current.forEach((pupil) => {
      const maxRadius = 15

      const target = new THREE.Vector2(
        mouse.x * maxRadius,
        -mouse.y * maxRadius,
      )

      // // limitar dentro de círculo
      // if (target.length() > maxRadius) {
      //   target.normalize().multiplyScalar(maxRadius)
      // }

      pupil.position.x += (target.x - pupil.position.x) * 0.1
      pupil.position.y += (target.y - pupil.position.y) * 0.1
    })

    // Animacion de cabello
    if (hairRef.current) {
      const t = clock.getElapsedTime()
      hairRef.current.rotation.z = Math.sin(t * 2) * 0.015
      hairRef.current.position.x = Math.sin(t * 1.5) * 3
    }
  })

  return (
    <group
      ref={groupRef}
      scale={[scale, scale, scale]}
      position={position}
      rotation={rotation}
    >
      <group ref={svgContainerRef} />
    </group>
  )
}
