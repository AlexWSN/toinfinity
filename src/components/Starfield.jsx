import React, { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);
  const starCount = 2000;
  let stars = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = document.documentElement.scrollWidth);
    let height = (canvas.height = document.documentElement.scrollHeight);

    const centerX = width / 2;
    const centerY = height / 2;

    const resize = () => {
      width = canvas.width = document.documentElement.scrollWidth;
      height = canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener("resize", resize);

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = (Math.random() - 0.5) * width;
        this.y = (Math.random() - 0.5) * height;
        this.z = Math.random() * width;
        this.pz = this.z;
      }

      update() {
        this.z -= 0.5;
        if (this.z < 1) this.reset();
      }

      draw() {
        const sx = (this.x / this.z) * centerX + centerX;
        const sy = (this.y / this.z) * centerY + centerY;

        const px = (this.x / this.pz) * centerX + centerX;
        const py = (this.y / this.pz) * centerY + centerY;

        this.pz = this.z;

        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(173, 216, 230, ${1 - this.z / width})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    stars = Array.from({ length: starCount }, () => new Star());

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fillRect(0, 0, width, height);

      for (let star of stars) {
        star.update();
        star.draw();
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", // <-- schimbat din "absolute"
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
      }}
    />
  );
}
