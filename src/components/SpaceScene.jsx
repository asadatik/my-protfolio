import { useEffect, useRef } from "react";
import * as THREE from "three";

const SpaceScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Scene, Camera, Renderer তৈরি করা
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // একটি গোলক (sphere) তৈরি করা (ব্যাকগ্রাউন্ড হিসাবে)
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); // ভিতরের দিকে রেন্ডার করার জন্য গোলকটিকে বিপরীত করা

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space-blue.jpg"
    );
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // ক্যামেরা পজিশন
    camera.position.set(0, 0, 0.1);

    // উইন্ডো রিসাইজ ইভেন্ট হ্যান্ডলিং
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize, false);

    // এনিমেশন লুপ
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default SpaceScene;
