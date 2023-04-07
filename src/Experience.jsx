import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import Sphere from './Sphere'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper, RectAreaLight } from 'three'


export default function Experience() {

    //PointLight
    const PointLightRef = useRef()
    useHelper(PointLightRef, PointLightHelper, 5)

    //HemisphereLight
    //const HemisphereLightRef = useRef()
    //useHelper(HemisphereLightRef, HemisphereLightHelper, 5)

    //RectAreaLight
    //const RectAreaLightRef = useRef()

    //DirectionalLight
    // const directionalLightRef = useRef()
    // useHelper(directionalLightRef, DirectionalLightHelper, 1)

    //SpotLight
    // const SpotLightRef = useRef()
    // useHelper(SpotLightRef, SpotLightHelper, 3)
    
    
    return <>

        <OrbitControls makeDefault />

        <pointLight ref={PointLightRef} castShadow position={[0, 5, -8]} intensity={2.5} />

        {/* <directionalLight ref={directionalLightRef} castShadow position={[0, 10, -12]} intensity={2.5} /> */}
        {/* <hemisphereLight ref={HemisphereLightRef} castShadow position={[10, 0, 0]} intensity={12.5} /> */}
        {/* <spotLight ref={SpotLightRef} castShadow position={[0, 3, -6]} intensity={2.5} /> */}
        {/* <rectAreaLight ref={RectAreaLightRef} castShadow position={[0, 0, 3]} intensity={3.5} /> */}

        <ambientLight intensity={0.5} />

        <Sphere/>
        
        <Floor/>
    </>
}