import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, OrbitControls, PivotControls } from "@react-three/drei";

export default function Experience()
{
    // creating Ref
    const cubeRef = useRef()
    const sphereRef = useRef()

    // implementing rotation for the cube
    useFrame((state, delta) => {cubeRef.current.rotation.y += delta})




    return <>
        <OrbitControls makeDefault/>  

                  
        <mesh ref={cubeRef} scale={2} rotation-y={Math.PI * 0.25} position-x={2}>
            <boxGeometry />
            <meshBasicMaterial color="mediumpurple" />
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
        


        <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
            <planeGeometry />
            <meshBasicMaterial />
        </mesh>

    </>
    
}
