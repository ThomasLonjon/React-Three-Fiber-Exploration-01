import {useGLTF, Outlines} from "@react-three/drei";


export default function ImportedModel() {
    const {nodes, materials, animations} = useGLTF('/trees.glb')

    console.log(nodes);

    return(
    <>      
        <directionalLight intensity={5}/>
        {/* <ambientLight /> */}

        <mesh geometry={nodes.Pencil001.geometry}>
            <Outlines thickness={0.02}  />
            <meshToonMaterial/>
        </mesh>
    </>

    )
}