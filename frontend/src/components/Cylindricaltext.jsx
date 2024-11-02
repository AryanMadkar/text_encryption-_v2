import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CylindricalText = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas to fill the viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const CENTERX = canvas.width / 2;
    const CENTERY = canvas.height / 2;
    const radius = 250; // Larger radius for a bigger cylinder effect
    const text = "PAGE NOT FOUND";
    const fontSize = 50; // Larger font size
    const textSpacing = 12; // Adjusted spacing for readability

    ctx.font = `${fontSize}px poppins, sans-serif`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    // Enhanced drawTextCylinder function with dynamic scaling and color
    const drawTextCylinder = (rotation) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < textSpacing * text.length; i += textSpacing) {
        const angle = (i / text.length) * Math.PI * 2 + rotation;

        // Calculate x, y, and depth scale for 3D effect
        const x = CENTERX + Math.cos(angle) * radius;
        const y = CENTERY + Math.sin(angle) * radius;
        const scale = 0.6 + 0.4 * Math.sin(angle); // Emphasize depth more

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // Color gradient for realistic depth
        const gradient = ctx.createLinearGradient(
          0,
          -fontSize / 2,
          0,
          fontSize / 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.2 + 0.8 * scale})`);
        gradient.addColorStop(1, `rgba(200, 200, 255, ${0.2 + 0.8 * scale})`);
        ctx.fillStyle = gradient;

        ctx.fillText(text, 0, 0);
        ctx.restore();
      }
    };

    // Use GSAP's timeline for better control over the animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 8, ease: "linear" },
    });
    tl.to(
      { rotation: 0 },
      {
        rotation: Math.PI * 2,
        onUpdate: function () {
          drawTextCylinder(this.targets()[0].rotation);
        },
      }
    );

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawTextCylinder(0);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      tl.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: "transparent",
        display: "block",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default CylindricalText;
