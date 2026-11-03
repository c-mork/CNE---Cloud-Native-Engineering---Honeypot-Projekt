
import Particles from "@tsparticles/react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// Main blue accent color used by the particle network.
const PARTICLE_BLUE = "#1E90FF";

// Initialize the lightweight tsParticles engine
const initParticles = async (engine) => {
  await loadSlim(engine);
};

export default function ParticleBackground() {
  return (
      // Provides the initialized particle engine to the component
    <ParticlesProvider init={initParticles}>
      <Particles
  id="network-background"
  particlesLoaded={(container) => {
  console.log("PARTICLES LOADED", container);
}}
  options={{
     // Make the particle background cover the entire viewport
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
    // Limit rendering performance to 60 frames per second
          fpsLimit: 60,


 // Configure how particles react to user interaction
interactivity: {
  events: {
    onHover: {
      enable: true,
      mode: "repulse",
    },
  },
  modes: {
    repulse: {
      distance: 220,
      duration: 0.8,
      factor: 2,
    },
  },
},

    // Configure the appearance and movement of particles
          particles: {
            number: {
              value: 200,
            },
            color: {
              value: PARTICLE_BLUE,
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.4,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 1,
              outModes: {
                default: "out",
              },
            },

             // Draw connecting lines between nearby particles
            links: {
              enable: true,
              distance: 150,
              color: PARTICLE_BLUE,
              opacity: 0.4,
              width: 1,
            },
          },

    // Adjust particle rendering for high-density displays
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
