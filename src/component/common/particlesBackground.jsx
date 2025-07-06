import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function TestParticles() {
  const particlesInit = async (main) => {
    console.log("Particles init"); // ✅ should see this in console
    await loadFull(main);
  };

  return (
    <div style={{ position: "relative", height: "100vh", backgroundColor: "#000" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80 },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value: 4 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              color: "#00ffff",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
          },
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, color: "#fff", padding: "50px", textAlign: "center" }}>
        <h1>Particles Background Test</h1>
      </div>
    </div>
  );
}
