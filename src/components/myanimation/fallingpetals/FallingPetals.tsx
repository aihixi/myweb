import { useEffect, useRef } from "react";
import petal from "../../../assets/image/petal.png";

const TOTAL = 100;

const FallingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const petalImg = new Image();
    petalImg.src = petal;

    const petalArray: Petal[] = [];

    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal(canvas, petalImg));
      }
      render();
    };

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((p) => p.animate(ctx));
      requestAnimationFrame(render);
    }

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none", // 防止阻挡点击
      }}
    />
  );
};

class Petal {
  x: number;
  y: number;
  w: number;
  h: number;
  opacity: number;
  flip: number;
  xSpeed: number;
  ySpeed: number;
  flipSpeed: number;
  canvas: HTMLCanvasElement;
  img: HTMLImageElement;

  constructor(canvas: HTMLCanvasElement, img: HTMLImageElement) {
    this.canvas = canvas;
    this.img = img;
    this.x = Math.random() * canvas.width;
    this.y = (Math.random() * canvas.height * 2) - canvas.height;
    this.w = 25 + Math.random() * 15;
    this.h = 20 + Math.random() * 10;
    this.opacity = this.w / 40;
    this.flip = Math.random();
    this.xSpeed = 0.5 + Math.random() * 1;
    this.ySpeed = 0.3 + Math.random() * 0.5;
    this.flipSpeed = Math.random() * 0.03;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.y > this.canvas.height || this.x > this.canvas.width) {
      this.x = -this.img.width;
      this.y = (Math.random() * this.canvas.height * 2) - this.canvas.height;
      this.xSpeed = 0.5 + Math.random() * 1;
      this.ySpeed = 0.3 + Math.random() * 0.5;
      this.flip = Math.random();
    }

    ctx.globalAlpha = this.opacity;
    ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
      this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
    );
  }

  animate(ctx: CanvasRenderingContext2D) {
    this.x += this.xSpeed + 0.1;
    this.y += this.ySpeed + 0.05;
    this.flip += this.flipSpeed;
    this.draw(ctx);
  }
}

export default FallingPetals;
