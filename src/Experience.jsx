export default function Experience() {
  return (
    <>
      <mesh scale={2} rotation-y={Math.PI * 0.25} position-x={2}>
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
  );
}
