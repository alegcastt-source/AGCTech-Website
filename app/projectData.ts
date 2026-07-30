export const projects = [
  {
    slug: "so101-robot-bean-sorter",
    label: "TELEOPERATION",
    title: "SO101 Robot Bean Sorter",
    metric: "Vision sorting",
    detail: "A robotic sorting system that identifies, separates, and routes beans with AI-assisted perception.",
    description:
      "SO101 Robot Bean Sorter combines computer vision, motion control, and mechanical sorting into a compact automation prototype. The project focuses on recognizing objects, making rapid sorting decisions, and demonstrating how robotics can reduce repetitive manual work in a practical production setting.",
    gallery: [
      { type: "image", src: "/project-media/so101-robot-follower.jpg", alt: "SO101 robot follower hardware build" },
      { type: "image", src: "/agc-robot-head-4k.png", alt: "AGC TECH teleoperation robot visual" },
      { type: "image", src: "/agc-robot-hero-upper.png", alt: "SO101 robot arm reference" },
    ],
  },
  {
    slug: "mcdonalds-sim",
    label: "SIMULATION",
    title: "McDonalds Sim",
    metric: "Workflow model",
    detail: "A restaurant operations simulation built to study timing, order flow, and bottlenecks.",
    description:
      "McDonalds Sim models a fast-paced service environment where orders, stations, and timing constraints all interact. The goal is to test process changes, visualize delays, and show how simulation can improve decision-making before changes are made in the real world.",
    gallery: [
      { type: "image", src: "/project-media/mcdonalds-humanoid-grill-front.png", alt: "McDonalds Sim humanoid standing in front of the grill" },
      { type: "image", src: "/project-media/mcdonalds-humanoid-grill-line.png", alt: "McDonalds Sim humanoid line beside the grill station" },
      { type: "video", src: "/project-media/img-6951.mov", alt: "McDonalds Sim humanoid crowd simulation video" },
      { type: "image", src: "/project-media/mcdonalds-grill-close-sim.png", alt: "McDonalds Sim close-up of the grill and patty tray" },
      { type: "image", src: "/project-media/mcdonalds-patty-cabinet-sim.png", alt: "McDonalds Sim patty cabinet and grill model" },
      { type: "image", src: "/project-media/mcdonalds-kitchen-layout-sim.png", alt: "McDonalds Sim kitchen layout view" },
      { type: "image", src: "/project-media/mcdonalds-real-patty-tray.png", alt: "Real patty tray reference for McDonalds Sim" },
      { type: "image", src: "/project-media/mcdonalds-real-grill-station.png", alt: "Real grill station reference for McDonalds Sim" },
      { type: "image", src: "/project-media/mcdonalds-real-kitchen-equipment.png", alt: "Real kitchen equipment reference for McDonalds Sim" },
    ],
  },
  {
    slug: "rtr-combat-robot",
    label: "COMBAT BOT",
    title: "RTR Combat Robot",
    metric: "Impact ready",
    detail: "A combat robotics build focused on durability, drive control, and mechanical resilience.",
    description:
      "RTR Combat Robot is designed around aggressive motion, protected electronics, and a frame that can survive repeated impacts. The project demonstrates mechanical design choices, repairability, drivetrain behavior, and practical testing under high-stress conditions.",
    gallery: [
      { type: "image", src: "/project-media/rtr-v2-torpedo.jpg", alt: "RTR v2.0 torpedo combat robot build" },
      { type: "video", src: "/project-media/rtr-demo.mov", alt: "RTR combat robot completed product demonstration video" },
      { type: "image", src: "/project-media/rtr-assembly-overview.jpg", alt: "RTR combat robot final assembly and electronics overview" },
      { type: "image", src: "/project-media/rtr-final-soldering-step.jpg", alt: "RTR combat robot final soldering step" },
      { type: "image", src: "/project-media/rtr-weapon-prototypes.jpg", alt: "RTR weapon prototype comparison" },
      { type: "image", src: "/project-media/rtr-bambu-slicing.jpg", alt: "RTR combat robot Bambu slicing and print preparation" },
      { type: "image", src: "/project-media/rtr-prefinal-cad.jpg", alt: "RTR combat robot prefinal CAD design" },
      { type: "image", src: "/project-media/rtr-original-concept.jpg", alt: "RTR combat robot original concept design sketch" },
    ],
  },
  {
    slug: "robotic-actuator",
    label: "ACTUATION",
    title: "Robotic Actuator",
    tag: "Beta",
    metric: "Motion core",
    detail: "A controlled actuator module for translating software commands into precise mechanical movement.",
    description:
      "Robotic Actuator explores how control signals become reliable movement. The project focuses on torque, range of motion, feedback, and repeatability so the actuator can serve as a building block for larger robotic systems.",
    gallery: [
      { type: "image", src: "/agc-robot-hero-upper.png", alt: "Chrome actuator body reference" },
      { type: "image", src: "/agc-robot-head-4k.png", alt: "Precision actuator robotics reference" },
      { type: "image", src: "/agc-robot.png", alt: "Actuator robotics environment reference" },
    ],
  },
  {
    slug: "dasai-mochi-robot",
    label: "COMPANION",
    title: "Dasai Mochi Robot",
    metric: "Expressive UX",
    detail: "A character-driven robotics concept blending motion, personality, and interactive behavior.",
    description:
      "Dasai Mochi Robot is a playful companion robot concept focused on expressive motion and approachable interaction. It demonstrates how hardware, software, and personality design can work together to make robotics feel more natural and engaging.",
    gallery: [
      { type: "image", src: "/project-media/dasai-mochi.jpg", alt: "Dasai Mochi robot OLED face prototype" },
      { type: "image", src: "/project-media/dasai-mochi-2.jpg", alt: "Dasai Mochi robot glowing OLED face close-up" },
      { type: "video", src: "/project-media/img-5666.mov", alt: "Dasai Mochi OLED face demonstration video" },
    ],
  },
];

export const galleryImages = [
  { type: "image", src: "/agc-robot-head-4k.png", alt: "AGC TECH robot hero visual" },
  { type: "image", src: "/agc-robot-hero-upper.png", alt: "Chrome robot upper-body reference" },
  { type: "image", src: "/agc-robot.png", alt: "Purple robotics environment reference" },
];
