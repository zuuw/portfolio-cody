"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/3D-4CODY.glb');

  const modelRef = useRef()

  useFrame((state, delta, xrFrame) => {
    console.log(state.clock)
   
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime)*.15;
    // This function runs at the native refresh rate inside of a shared render-loop
    // mainmodel.jsx:12 Uncaught TypeError: Cannot read properties of undefined (reading 'position')
    // at Model.useFrame [as current] (mainmodel.jsx:12:22)

  })

  return (
    <group {...props} dispose={null}
        ref={modelRef}
        position={[0.042, 0.036, -0.001]}
        rotation={[0,4.75,0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.001']}
      />
    </group>
  )
}

useGLTF.preload('/3D-4CODY.glb')