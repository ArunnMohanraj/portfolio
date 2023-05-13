import React from 'react';
import Particles from "react-tsparticles";
import "../styles.css";

function Particle (){
    return (
    <Particles
    options={{
      background: {
        color: {
          value: "#000"
        }
      },
      //fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 130,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#fff"
        },
        links: {
          color: "#fff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 60
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "square"
        },
        size: {
          random: true,
          value: 3
        }
      },
      detectRetina: true
    }}
  />
    )
}

export default Particle;