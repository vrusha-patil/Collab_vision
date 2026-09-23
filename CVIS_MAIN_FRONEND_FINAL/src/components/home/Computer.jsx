// // // // import React, { Suspense, useEffect, useState } from "react";
// // // // import { Canvas } from "@react-three/fiber";
// // // // import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// // // // // import CanvasLoader from "../Loader";

// // // // const Computers = ({ isMobile }) => {
// // // //   const computer = useGLTF("./desktop_pc/scene.gltf");

// // // //   return (
// // // //     <mesh>
// // // //       {/* A light source that simulates sunlight, providing a broad light effect */}
// // // //       <hemisphereLight intensity={0.15} groundColor="black" />

// // // //       {/* A spotlight focused on a specific area, creating strong lighting with a narrow cone */}
// // // //       <spotLight
// // // //         position={[-20, 50, 10]}
// // // //         angle={0.12}
// // // //         penumbra={1}
// // // //         intensity={1}
// // // //         castShadow
// // // //         shadow-mapSize={1024}
// // // //       />

// // // //       {/* A point light that emits light in all directions from a single point */}
// // // //       <pointLight intensity={1} />

// // // //       {/* An ambient light that provides uniform lighting across the entire scene */}
// // // //       {/* Increased intensity for brighter lighting */}
// // // //       <ambientLight intensity={3.0} />

// // // //       {/* The 3D model of the computer */}
// // // //       <primitive
// // // //         object={computer.scene}
// // // //         scale={isMobile ? 0.7 : 0.75}
// // // //         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
// // // //         rotation={[-0.01, -0.2, -0.1]}
// // // //       />
// // // //     </mesh>
// // // //   );
// // // // };

// // // // const Computer = () => {
// // // //   const [isMobile, setIsMobile] = useState(false);

// // // //   useEffect(() => {
// // // //     // Add a listener for changes to the screen size
// // // //     const mediaQuery = window.matchMedia("(max-width: 500px)");

// // // //     // Set the initial value of the `isMobile` state variable
// // // //     setIsMobile(mediaQuery.matches);

// // // //     // Define a callback function to handle changes to the media query
// // // //     const handleMediaQueryChange = (event) => {
// // // //       setIsMobile(event.matches);
// // // //     };

// // // //     // Add the callback function as a listener for changes to the media query
// // // //     mediaQuery.addEventListener("change", handleMediaQueryChange);

// // // //     // Remove the listener when the component is unmounted
// // // //     return () => {
// // // //       mediaQuery.removeEventListener("change", handleMediaQueryChange);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <Canvas
// // // //       frameloop="demand"
// // // //       shadows
// // // //       dpr={[1, 2]}
// // // //       camera={{ position: [20, 3, 5], fov: 25 }}
// // // //       gl={{ preserveDrawingBuffer: true }}
// // // //     >
// // // //       <Suspense fallback={<div>Loading...</div>}>
// // // //         <OrbitControls
// // // //           enableZoom={false}
// // // //           maxPolarAngle={Math.PI / 2}
// // // //           minPolarAngle={Math.PI / 2}
// // // //         />
// // // //         <Computers isMobile={isMobile} />
// // // //       </Suspense>

// // // //       <Preload all />
// // // //     </Canvas>
// // // //   );
// // // // };

// // // // export default Computer;
// // // import React, { Suspense, useEffect, useState, useMemo } from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// // // const Computers = ({ isMobile }) => {
// // //   const computer = useMemo(() => useGLTF("./desktop_pc/scene.gltf"), []);

// // //   return (
// // //     <mesh>
// // //       <hemisphereLight intensity={0.15} groundColor="black" />
// // //       <spotLight
// // //         position={[-20, 50, 10]}
// // //         angle={0.12}
// // //         penumbra={1}
// // //         intensity={1}
// // //         castShadow
// // //         shadow-mapSize={1024}
// // //       />
// // //       <pointLight intensity={1} />
// // //       <ambientLight intensity={3.0} />
// // //       <primitive
// // //         object={computer.scene}
// // //         scale={isMobile ? 0.7 : 0.75}
// // //         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
// // //         rotation={[-0.01, -0.2, -0.1]}
// // //       />
// // //     </mesh>
// // //   );
// // // };

// // // const Computer = () => {
// // //   const [isMobile, setIsMobile] = useState(false);

// // //   useEffect(() => {
// // //     const mediaQuery = window.matchMedia("(max-width: 500px)");
// // //     setIsMobile(mediaQuery.matches);

// // //     const handleMediaQueryChange = (event) => {
// // //       setIsMobile(event.matches);
// // //     };

// // //     mediaQuery.addEventListener("change", handleMediaQueryChange);

// // //     // Handle WebGL context loss and restoration
// // //     const handleContextLoss = (event) => {
// // //       event.preventDefault();
// // //       console.warn("WebGL context lost.");
// // //     };

// // //     const handleContextRestore = () => {
// // //       console.log("WebGL context restored.");
// // //       // You can reinitialize or reload resources here if needed
// // //     };

// // //     const canvas = document.querySelector("canvas");
// // //     canvas.addEventListener("webglcontextlost", handleContextLoss);
// // //     canvas.addEventListener("webglcontextrestored", handleContextRestore);

// // //     return () => {
// // //       mediaQuery.removeEventListener("change", handleMediaQueryChange);
// // //       canvas.removeEventListener("webglcontextlost", handleContextLoss);
// // //       canvas.removeEventListener("webglcontextrestored", handleContextRestore);
// // //     };
// // //   }, []);

// // //   return (
// // //     <Canvas
// // //       frameloop="demand"
// // //       shadows
// // //       dpr={[1, 2]}
// // //       camera={{ position: [20, 3, 5], fov: 25 }}
// // //       gl={{ preserveDrawingBuffer: true }}
// // //     >
// // //       <Suspense fallback={<div>Loading...</div>}>
// // //         <OrbitControls
// // //           enableZoom={false}
// // //           maxPolarAngle={Math.PI / 2}
// // //           minPolarAngle={Math.PI / 2}
// // //         />
// // //         <Computers isMobile={isMobile} />
// // //       </Suspense>
// // //       <Preload all />
// // //     </Canvas>
// // //   );
// // // };

// // // export default Computer;
// // import React from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { Html } from "@react-three/drei";

// // function Box() {
// //   return (
// //     <mesh>
// //       <boxGeometry args={[1, 1, 1]} />
// //       <meshStandardMaterial color="orange" />
// //     </mesh>
// //   );
// // }

// // function Computer() {
// //   return (
// //     <Canvas>
// //       {/* Lighting for the scene */}
// //       <ambientLight intensity={0.5} />
// //       <directionalLight position={[2, 5, 2]} intensity={1} />

// //       {/* 3D Box component */}
// //       <Box />

// //       {/* HTML overlay in 3D space */}
// //       <Html position={[1, 1, 0]}>
// //         <div
// //           style={{
// //             color: "white",
// //             backgroundColor: "rgba(0, 0, 0, 0.5)",
// //             padding: "10px",
// //           }}
// //         >
// //           This is an HTML overlay
// //         </div>
// //       </Html>
// //     </Canvas>
// //   );
// // }

// // export default Computer;
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Html, useGLTF, OrbitControls } from "@react-three/drei";
// import { Vector3 } from "three";

// // Load the computer model
// function ComputerModel({ scale = 0.7, position = [0, -1.5, 0] }) {
//   const { scene } = useGLTF("./desktop_pc/scene.gltf"); // Replace with the correct path

//   return <primitive object={scene} scale={scale} position={position} />;
// }

// // Main Computer component
// function Computer() {
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <Canvas camera={{ position: [0, 2, 5] }}>
//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 10, 5]} intensity={1} />

//         {/* 3D Computer Model */}
//         <Suspense
//           fallback={
//             <Html>
//               <div>Loading...</div>
//             </Html>
//           }
//         >
//           <ComputerModel />
//         </Suspense>

//         {/* Controls to rotate/zoom the model */}
//         <OrbitControls
//           enableZoom={true}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 3}
//         />
//       </Canvas>
//     </div>
//   );
// }

// export default Computer;
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useGLTF, OrbitControls } from "@react-three/drei";

// Load the computer model
function ComputerModel({ scale = 0.7, position = [0, -1.5, 0] }) {
  const { scene } = useGLTF("./desktop_pc/scene.gltf"); // Replace with the correct path
  return <primitive object={scene} scale={scale} position={position} />;
}

// Main Computer component
function Computer() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />

        {/* 3D Computer Model */}
        <Suspense
          fallback={
            <Html>
              <div>Loading...</div>
            </Html>
          }
        >
          <ComputerModel />
        </Suspense>

        {/* Controls to rotate the model without zooming */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

export default Computer;
