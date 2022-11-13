import React, { useRef, useEffect } from "react";

const NoiseCanvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    function noise(context) {
      const w = context.canvas.width,
        h = context.canvas.height,
        iData = context.createImageData(w, h),
        buffer32 = new Uint32Array(iData.data.buffer),
        len = buffer32.length;
      let i = 0;

      for (; i < len; i++) if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

      context.putImageData(iData, 0, 0);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }

    (function loop() {
      noise(context);
      requestAnimationFrame(loop);
    })();

    canvas.width = canvas.height = 128;

    resize();
    window.onresize = resize;

    //Our first draw
    context.fillStyle = "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default NoiseCanvas;
