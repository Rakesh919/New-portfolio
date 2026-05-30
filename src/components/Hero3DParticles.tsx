"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DParticles() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.offsetWidth;
    const H = el.offsetHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
    camera.position.set(0, 0, 7);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf472b6, 1.8);
    dirLight2.position.set(-5, -3, 2);
    scene.add(dirLight2);

    const dirLight3 = new THREE.DirectionalLight(0x818cf8, 1.5);
    dirLight3.position.set(0, 5, -5);
    scene.add(dirLight3);

    const pointLight = new THREE.PointLight(0x38bdf8, 3, 12);
    pointLight.position.set(3, 2, 3);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    const torus1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.4, 0.04, 16, 120),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.4,
      })
    );
    torus1.rotation.x = Math.PI * 0.3;
    group.add(torus1);

    const torus2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.03, 16, 100),
      new THREE.MeshStandardMaterial({
        color: 0x818cf8,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x818cf8,
        emissiveIntensity: 0.3,
      })
    );
    torus2.rotation.x = Math.PI * 0.5;
    torus2.rotation.y = Math.PI * 0.2;
    group.add(torus2);

    const torus3 = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.025, 16, 140),
      new THREE.MeshStandardMaterial({
        color: 0xf472b6,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0xf472b6,
        emissiveIntensity: 0.25,
      })
    );
    torus3.rotation.y = Math.PI * 0.4;
    torus3.rotation.z = Math.PI * 0.15;
    group.add(torus3);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.7, 4),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.0,
        metalness: 1.0,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.15,
      })
    );
    group.add(core);

    interface ParticleData {
      mesh: THREE.Mesh;
      baseR: number;
      phi: number;
      theta: number;
      speed: number;
      offset: number;
    }

    const particleColors = [0x38bdf8, 0x818cf8, 0xf472b6, 0xffffff];
    const sphereGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const particles: ParticleData[] = [];
    const NPARTICLES = 220;

    for (let i = 0; i < NPARTICLES; i++) {
      const phi = Math.acos(-1 + (2 * i) / NPARTICLES);
      const theta = Math.sqrt(NPARTICLES * Math.PI) * phi;
      const r = 2.2 + (Math.random() - 0.5) * 0.5;
      const c = particleColors[Math.floor(Math.random() * particleColors.length)];
      const mesh = new THREE.Mesh(
        sphereGeo,
        new THREE.MeshStandardMaterial({
          color: c,
          roughness: 0.2,
          metalness: 0.6,
          emissive: c,
          emissiveIntensity: 0.4,
        })
      );
      mesh.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      group.add(mesh);
      particles.push({ mesh, baseR: r, phi, theta, speed: 0.0003 + Math.random() * 0.0004, offset: Math.random() * Math.PI * 2 });
    }

    const wireMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.05, 1),
      new THREE.MeshBasicMaterial({ color: 0x1a2a3a, wireframe: true, transparent: true, opacity: 0.4 })
    );
    group.add(wireMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetRX = 0;
    let targetRY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let t = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;

      targetRY += (mouseX * 0.5 - targetRY) * 0.06;
      targetRX += (mouseY * 0.3 - targetRX) * 0.06;

      group.rotation.y = targetRY + t * 0.12;
      group.rotation.x = targetRX + Math.sin(t * 0.3) * 0.1;

      torus1.rotation.z += 0.003;
      torus2.rotation.x += 0.005;
      torus3.rotation.y += 0.004;
      wireMesh.rotation.y -= 0.002;

      core.rotation.y += 0.008;
      core.rotation.x += 0.005;
      const s = 0.95 + Math.sin(t * 1.2) * 0.05;
      core.scale.setScalar(s);

      particles.forEach((p) => {
        p.theta += p.speed;
        const r = p.baseR + Math.sin(t * 0.8 + p.offset) * 0.12;
        p.mesh.position.set(
          r * Math.sin(p.phi) * Math.cos(p.theta),
          r * Math.sin(p.phi) * Math.sin(p.theta),
          r * Math.cos(p.phi)
        );
      });

      pointLight.position.x = Math.sin(t * 0.7) * 4 + 2;
      pointLight.position.y = Math.cos(t * 0.5) * 3;
      dirLight1.intensity = 2.0 + Math.sin(t * 0.9) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
    />
  );
}