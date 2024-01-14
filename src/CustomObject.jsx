import * as THREE from "three"


export default function CustomObject()
{
    const verticiesCount = 10 * 3;
    const positions = new Float32Array(verticiesCount * 3);

    for (let i = 0; i < verticiesCount * 3; i++)
        positions[i] = (Math.random() - 0.5) * 3;

    return(
        <mesh>
            <bufferGeometry>
                <bufferAttribute 
                    attach="attributes-position"
                    count={verticiesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <meshBasicMaterial color="red" side={THREE.DoubleSide}/>
        </mesh>
    )
}
