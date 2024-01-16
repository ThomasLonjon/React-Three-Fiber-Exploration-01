import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Outlines, Float, Text, Html, OrbitControls, PivotControls } from "@react-three/drei";

import ImportedModel from "./ImportedModel";

export default function Experience()
{
    // creating Ref
    const cubeRef = useRef()
    const sphereRef = useRef()

    // implementing rotation for the cube
    // useFrame((state, delta) => {cubeRef.current.rotation.y += delta * 0.25})



    return <>
        <OrbitControls makeDefault/>  

                  
        <mesh ref={cubeRef} scale={2} rotation-y={Math.PI * 0.25} position-x={2} position-y={0.07} >
            <boxGeometry />
            <meshBasicMaterial color="mediumpurple" />
            <Outlines thickness={0.05}  />
        </mesh>
        
        <PivotControls anchor={[0,0,0]} depthTest={false} lineWidth={1} > 
            <mesh ref={sphereRef} position-x={-2}>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
                <Html 
                    position={[1,1,0]}
                    wrapperClass="label"
                    center
                    distanceFactor={6}
                    occlude={[sphereRef, cubeRef]}

                >
                    I am a sphere
                </Html>
                    
            </mesh>
        </PivotControls>
        
        <ImportedModel/>


        <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
            <planeGeometry />
            <meshBasicMaterial />
        </mesh>

        <Float speed={2}>
            <Text 
                font="./Monofett-Regular.ttf"
                fontSize={0.5}
                color="black"
                position-y={2}
                textAlign="center"
            >
                Studio Carto
            </Text>
        </Float>
    </>
    
}
