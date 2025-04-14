"use client"
import React, { Suspense } from 'react'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

function ModelRender({children, className}) {
  return (
    <Canvas className={clsx("w-screen h-screen relative", className)}>
        <Suspense fallback={null}>
            {children}
        </Suspense>
        <Environment preset='dawn' />
    </Canvas>
  )
}

export default ModelRender
