
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Codytext(props) {
  const { nodes, materials } = useGLTF('/models/Asset 1.gltf')

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    console.log(state.clock)
   
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime)*.15;

  })

  return (
    <group {...props} dispose={null}
    ref={modelRef}
        scale={[10,10,10]}
        position={[0.042, 0.036, 0]}
        rotation={[0,320,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
      />
    </group>
  )
}

useGLTF.preload('/Asset 1.gltf')

