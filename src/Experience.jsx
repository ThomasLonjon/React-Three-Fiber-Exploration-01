import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TransformControls, OrbitControls } from "@react-three/drei";

export default function Experience()
{
    // creating Ref
    const cubeRef = useRef()

    // implementing rotation for the cube
    useFrame((state, delta) => {cubeRef.current.rotation.y += delta})




    return <>
        <OrbitControls makeDefault/>    

        <TransformControls object={cubeRef}/>

            
        <mesh ref={cubeRef} scale={2} rotation-y={Math.PI * 0.25} position-x={2}>
            <boxGeometry />
            <meshBasicMaterial color="mediumpurple" />
        </mesh>
        

        <mesh position-x={-2}>
            <sphereGeometry />
            <meshBasicMaterial color="orange" />
        </mesh>


        <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
            <planeGeometry />
            <meshBasicMaterial />
        </mesh>

    </>
    
}
