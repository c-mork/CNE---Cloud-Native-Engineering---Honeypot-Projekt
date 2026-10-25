
import Particles from "@tsparticles/react";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initParticles = async (engine) => {
  await loadSlim(engine);
};

export default function ParticleBackground() {
  return (
    <ParticlesProvider init={initParticles}>
      <Particles
  id="network-background"
  particlesLoaded={(container) => {
  console.log("PARTICLES LOADED", container);
}}
  options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          fpsLimit: 60,

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

          particles: {
            number: {
              value: 200,
            },
            color: {
              value: "#1E90FF",
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
            links: {
              enable: true,
              distance: 150,
              color: "#1E90FF",
              opacity: 0.4,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </ParticlesProvider>
  );
}
