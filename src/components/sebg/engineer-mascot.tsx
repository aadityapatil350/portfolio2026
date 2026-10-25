"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import { sound } from "@/lib/sound-effects";

interface MascotProps {
  currentSection?: string;
}

export function EngineerMascot({ currentSection }: MascotProps) {
  const pathname = usePathname();
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [bubbleText, setBubbleText] = useState<string>("Hi, I'm Aditya. Scroll down and I'll show you around.");
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const characterGroupRef = useRef<THREE.Group | null>(null);
  const headGroupRef = useRef<THREE.Group | null>(null);
  const leftPupilRef = useRef<THREE.Mesh | null>(null);
  const rightPupilRef = useRef<THREE.Mesh | null>(null);
  const leftEyelidRef = useRef<THREE.Mesh | null>(null);
  const rightEyelidRef = useRef<THREE.Mesh | null>(null);
  const rightArmRef = useRef<THREE.Group | null>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);
  const blinkState = useRef({ isBlinking: false, nextBlink: Date.now() + 2500, progress: 0 });
  const waveState = useRef({ active: true, progress: 0 });
  const spinState = useRef({ active: false, start: 0, duration: 1100 });

  // Update bubble text dynamically based on route and section
  useEffect(() => {
    if (isSpinning) {
      setBubbleText("360° operational flip! 🚀");
      setBubbleVisible(true);
      return;
    }

    if (pathname === "/work" || pathname.startsWith("/work/")) {
      setBubbleText("These are real production systems managing 3,400+ MW.");
    } else if (pathname === "/about") {
      setBubbleText("Self-taught engineer. I build software that survives 24/7 ops.");
    } else if (pathname === "/services" || pathname.startsWith("/services/")) {
      setBubbleText("Fixed scope, guaranteed delivery date, zero hourly games.");
    } else if (pathname === "/industries" || pathname.startsWith("/industries/")) {
      setBubbleText("Horizontal offer across 5 high-stakes operational sectors.");
    } else if (pathname === "/blog" || pathname.startsWith("/blog/")) {
      setBubbleText("Engineering notes on reporting pipelines, telemetry & AI.");
    } else {
      switch (currentSection) {
        case "tour":
          setBubbleText("Inspect systems in 3D perspective — live metrics & telemetry!");
          break;
        case "work":
          setBubbleText("33+ plants automated daily with zero human hours.");
          break;
        case "contact":
          setBubbleText("Got an operational bottleneck? Let's talk!");
          break;
        default:
          setBubbleText("Hi, I'm Aditya. Scroll down and I'll show you around.");
      }
    }

    setBubbleVisible(true);
  }, [pathname, currentSection, isSpinning]);

  const triggerTrick = useCallback(() => {
    if (isSpinning) return;
    setIsSpinning(true);
    spinState.current = {
      active: true,
      start: performance.now(),
      duration: 1100,
    };
    sound.playTrick?.();

    setTimeout(() => {
      setIsSpinning(false);
      spinState.current.active = false;
      if (characterGroupRef.current) {
        characterGroupRef.current.rotation.y = 0;
        characterGroupRef.current.position.y = 0;
      }
    }, 1150);
  }, [isSpinning]);

  // Mouse move listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleTrickEvent = () => {
      triggerTrick();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mascot:trick", handleTrickEvent);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mascot:trick", handleTrickEvent);
    };
  }, [triggerTrick]);

  // Initialize Three.js 3D character
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 140;
    const height = container.clientHeight || 140;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.35, 3.7);
    camera.lookAt(0, 0.18, 0);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff7ed, 1.8);
    dirLight.position.set(3, 4, 4);
    scene.add(dirLight);

    const blueRimLight = new THREE.DirectionalLight(0x2261e9, 1.8);
    blueRimLight.position.set(-3, 2, -2);
    scene.add(blueRimLight);

    // 4. Character Model Construction
    const characterGroup = new THREE.Group();
    characterGroupRef.current = characterGroup;
    scene.add(characterGroup);

    // Friendly, High-Craft Materials
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xfce3d2 });
    const hairMat = new THREE.MeshLambertMaterial({ color: 0x241812 });
    const sweaterMat = new THREE.MeshLambertMaterial({ color: 0x1e293b });
    const collarMat = new THREE.MeshLambertMaterial({ color: 0x0f172a });
    const glassesMat = new THREE.MeshLambertMaterial({ color: 0x0b0b0c });
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    const catchlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const headphoneMat = new THREE.MeshLambertMaterial({ color: 0x2261e9 });

    // Torso / Navy Crewneck Sweater
    const torsoGeo = new THREE.BoxGeometry(1.25, 1.05, 0.75);
    const torso = new THREE.Mesh(torsoGeo, sweaterMat);
    torso.position.set(0, -0.68, 0);
    characterGroup.add(torso);

    // Crewneck Collar
    const collarGeo = new THREE.CylinderGeometry(0.33, 0.36, 0.12, 16);
    const collar = new THREE.Mesh(collarGeo, collarMat);
    collar.position.set(0, -0.12, 0);
    characterGroup.add(collar);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.24, 0.26, 0.2, 16);
    const neck = new THREE.Mesh(neckGeo, skinMat);
    neck.position.set(0, -0.04, 0);
    characterGroup.add(neck);

    // Head Group (tilts to follow cursor)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.42, 0);
    headGroupRef.current = headGroup;
    characterGroup.add(headGroup);

    // Head base (curved box geometry)
    const headGeo = new THREE.BoxGeometry(0.88, 0.98, 0.88);
    const head = new THREE.Mesh(headGeo, skinMat);
    headGroup.add(head);

    // Hair Top
    const hairTopGeo = new THREE.BoxGeometry(0.96, 0.38, 0.96);
    const hairTop = new THREE.Mesh(hairTopGeo, hairMat);
    hairTop.position.set(0, 0.44, 0);
    headGroup.add(hairTop);

    // Hair Back
    const hairBackGeo = new THREE.BoxGeometry(0.96, 0.72, 0.22);
    const hairBack = new THREE.Mesh(hairBackGeo, hairMat);
    hairBack.position.set(0, 0.15, -0.42);
    headGroup.add(hairBack);

    // Hair Fringe / Front lock
    const hairFrontGeo = new THREE.BoxGeometry(0.92, 0.2, 0.22);
    const hairFront = new THREE.Mesh(hairFrontGeo, hairMat);
    hairFront.position.set(0, 0.44, 0.42);
    headGroup.add(hairFront);

    // Sleek Architectural Glasses Rims
    const glassRimGeo = new THREE.BoxGeometry(0.28, 0.23, 0.04);
    const leftGlass = new THREE.Mesh(glassRimGeo, glassesMat);
    leftGlass.position.set(-0.22, 0.05, 0.48);
    headGroup.add(leftGlass);

    const rightGlass = new THREE.Mesh(glassRimGeo, glassesMat);
    rightGlass.position.set(0.22, 0.05, 0.48);
    headGroup.add(rightGlass);

    // Glasses bridge
    const bridgeGeo = new THREE.BoxGeometry(0.18, 0.03, 0.04);
    const bridge = new THREE.Mesh(bridgeGeo, glassesMat);
    bridge.position.set(0, 0.08, 0.48);
    headGroup.add(bridge);

    // 3D Eyes (Whites)
    const eyeWhiteGeo = new THREE.BoxGeometry(0.22, 0.17, 0.02);
    const leftEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    leftEyeWhite.position.set(-0.22, 0.05, 0.46);
    headGroup.add(leftEyeWhite);

    const rightEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    rightEyeWhite.position.set(0.22, 0.05, 0.46);
    headGroup.add(rightEyeWhite);

    // 3D Pupils (rotate and shift to track cursor)
    const pupilGeo = new THREE.BoxGeometry(0.1, 0.1, 0.025);
    const leftPupil = new THREE.Mesh(pupilGeo, pupilMat);
    leftPupil.position.set(-0.22, 0.05, 0.47);
    headGroup.add(leftPupil);
    leftPupilRef.current = leftPupil;

    const rightPupil = new THREE.Mesh(pupilGeo, pupilMat);
    rightPupil.position.set(0.22, 0.05, 0.47);
    headGroup.add(rightPupil);
    rightPupilRef.current = rightPupil;

    // Pupil catchlight specular reflection
    const catchlightGeo = new THREE.BoxGeometry(0.035, 0.035, 0.026);
    const leftCatch = new THREE.Mesh(catchlightGeo, catchlightMat);
    leftCatch.position.set(-0.24, 0.07, 0.48);
    headGroup.add(leftCatch);

    const rightCatch = new THREE.Mesh(catchlightGeo, catchlightMat);
    rightCatch.position.set(0.2, 0.07, 0.48);
    headGroup.add(rightCatch);

    // Eyelids for natural blinking
    const eyelidGeo = new THREE.BoxGeometry(0.24, 0.17, 0.03);
    const leftEyelid = new THREE.Mesh(eyelidGeo, skinMat);
    leftEyelid.position.set(-0.22, 0.15, 0.475);
    headGroup.add(leftEyelid);
    leftEyelidRef.current = leftEyelid;

    const rightEyelid = new THREE.Mesh(eyelidGeo, skinMat);
    rightEyelid.position.set(0.22, 0.15, 0.475);
    headGroup.add(rightEyelid);
    rightEyelidRef.current = rightEyelid;

    // Warm Smile
    const smileGeo = new THREE.BoxGeometry(0.24, 0.045, 0.02);
    const smileMat = new THREE.MeshBasicMaterial({ color: 0x8a4b38 });
    const smile = new THREE.Mesh(smileGeo, smileMat);
    smile.position.set(0, -0.22, 0.46);
    headGroup.add(smile);

    // Studio Headphones Band
    const bandGeo = new THREE.TorusGeometry(0.52, 0.055, 8, 24, Math.PI);
    const band = new THREE.Mesh(bandGeo, headphoneMat);
    band.position.set(0, 0.47, 0);
    band.rotation.z = Math.PI;
    headGroup.add(band);

    // Headphone Ear Cushions
    const earPadGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.13, 16);
    const leftPad = new THREE.Mesh(earPadGeo, headphoneMat);
    leftPad.position.set(-0.5, 0.06, 0);
    leftPad.rotation.z = Math.PI / 2;
    headGroup.add(leftPad);

    const rightPad = new THREE.Mesh(earPadGeo, headphoneMat);
    rightPad.position.set(0.5, 0.06, 0);
    rightPad.rotation.z = Math.PI / 2;
    headGroup.add(rightPad);

    // Waving Right Arm
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.72, -0.3, 0);
    rightArmRef.current = rightArmGroup;
    characterGroup.add(rightArmGroup);

    const armGeo = new THREE.BoxGeometry(0.22, 0.5, 0.22);
    const arm = new THREE.Mesh(armGeo, sweaterMat);
    arm.position.set(0, -0.2, 0);
    rightArmGroup.add(arm);

    const handGeo = new THREE.BoxGeometry(0.18, 0.18, 0.18);
    const hand = new THREE.Mesh(handGeo, skinMat);
    hand.position.set(0, -0.5, 0);
    rightArmGroup.add(hand);

    // 5. Main 60fps Animation Loop
    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Idle breathing sway
      const breath = Math.sin(time * 0.002) * 0.02;
      characterGroup.position.y = breath;

      // 3D Head Tracking (smooth slerp towards mouse cursor)
      if (headGroupRef.current && !spinState.current.active) {
        const targetRotY = mousePos.current.x * 0.42;
        const targetRotX = -mousePos.current.y * 0.28;

        headGroupRef.current.rotation.y += (targetRotY - headGroupRef.current.rotation.y) * 0.08;
        headGroupRef.current.rotation.x += (targetRotX - headGroupRef.current.rotation.x) * 0.08;

        // Pupils shift within eye sockets
        const pupilTargetX = mousePos.current.x * 0.04;
        const pupilTargetY = mousePos.current.y * 0.03;

        if (leftPupilRef.current) {
          leftPupilRef.current.position.x = -0.22 + pupilTargetX;
          leftPupilRef.current.position.y = 0.05 + pupilTargetY;
        }
        if (rightPupilRef.current) {
          rightPupilRef.current.position.x = 0.22 + pupilTargetX;
          rightPupilRef.current.position.y = 0.05 + pupilTargetY;
        }
      }

      // Blinking physics
      const now = Date.now();
      if (!blinkState.current.isBlinking && now > blinkState.current.nextBlink) {
        blinkState.current.isBlinking = true;
        blinkState.current.progress = 0;
      }
      if (blinkState.current.isBlinking) {
        blinkState.current.progress += dt * 7;
        const blinkFactor = Math.sin(blinkState.current.progress * Math.PI);
        const eyelidY = 0.15 - blinkFactor * 0.1;

        if (leftEyelidRef.current) leftEyelidRef.current.position.y = eyelidY;
        if (rightEyelidRef.current) rightEyelidRef.current.position.y = eyelidY;

        if (blinkState.current.progress >= 1) {
          blinkState.current.isBlinking = false;
          blinkState.current.nextBlink = now + 2400 + Math.random() * 3000;
        }
      }

      // Waving gesture physics
      if (waveState.current.active && rightArmRef.current && !spinState.current.active) {
        waveState.current.progress += dt * 4;
        const waveAngle = Math.sin(waveState.current.progress) * 0.28;
        rightArmRef.current.rotation.z = -1.2 + waveAngle;
        rightArmRef.current.rotation.x = -0.3;
      }

      // 360° Spin Trick Animation
      if (spinState.current.active && characterGroupRef.current) {
        const elapsed = time - spinState.current.start;
        const progress = Math.min(elapsed / spinState.current.duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        characterGroupRef.current.rotation.y = ease * Math.PI * 4;
        characterGroup.position.y = Math.sin(progress * Math.PI) * 0.45;
      }

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      renderer.dispose();
      if (container) container.innerHTML = "";
    };
  }, []);

  const handleAvatarClick = () => {
    sound.playClick?.();
    triggerTrick();
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start select-none pointer-events-auto md:bottom-6 md:left-6">
      {/* Speech Hint Bubble (Positioned ABOVE the mascot so it never clips off-screen) */}
      <div
        className={`mb-3 max-w-[260px] rounded-2xl border border-neutral-300/80 bg-[#fbfbf8]/95 px-4 py-2.5 text-xs font-medium text-[#0b0b0c] shadow-2xl backdrop-blur-md transition-all duration-300 dark:border-neutral-700/80 dark:bg-[#121214]/95 dark:text-[#fbfbf8] sm:max-w-[300px] ${
          bubbleVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <p className="leading-snug">{bubbleText}</p>
        <div className="mt-1.5 flex items-center justify-between text-[10px] text-neutral-400">
          <span className="font-mono uppercase tracking-wider text-[#2261e9]">● 3D Mascot</span>
          <button
            type="button"
            onClick={triggerTrick}
            className="hover:underline text-neutral-600 dark:text-neutral-300 font-mono font-medium"
          >
            spin ↺
          </button>
        </div>
      </div>

      {/* 3D Mascot Circular Badge (sebg.ch style size-28 to size-36) */}
      <div
        onClick={handleAvatarClick}
        title="3D Engineer Avatar — Click to do a trick!"
        className="group relative h-24 w-24 cursor-pointer rounded-full border-4 border-white bg-gradient-to-b from-[#2261e9] to-[#0a2239] shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 md:h-32 md:w-32 dark:border-neutral-800"
      >
        <div
          ref={mountRef}
          className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-sky-400/20 to-transparent"
        />

        {/* Live Operational Status Dot */}
        <span className="absolute bottom-1 right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-neutral-900"></span>
        </span>
      </div>
    </div>
  );
}
