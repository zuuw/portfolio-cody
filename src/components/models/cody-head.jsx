"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ModelMe(props) {
  const { nodes, materials } = useGLTF('/models/Codyface.glb')

  const modelRef = useRef()

    useFrame((state,delta,xrFrame)=> {
        console.log(state.clock)

        modelRef.current.position.y = Math.sin(state.clock.elapsedTime)*.15;
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
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.004']}
        position={[0.793, 0.393, 0.249]}
        scale={0.356}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials['Material.005']}
        position={[0.784, 0.404, -0.359]}
        scale={0.356}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['Material.003']}
        position={[0.963, 0.37, 0.26]}
        scale={0.211}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials['Material.002']}
        position={[0.956, 0.375, -0.385]}
        scale={0.211}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials['Material.006']}
        position={[0.042, 0.036, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials['Material.008']}
        position={[0.042, 0.036, -0.001]}
      />
      <group position={[1.467, 0.834, -0.035]} rotation={[1.604, -0.11, -1.292]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glasses_1.geometry}
          material={materials.frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Glasses_2.geometry}
          material={materials.Mat_2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Codyface.glb')
