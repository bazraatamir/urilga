import { useRef } from 'react';
import confetti from 'canvas-confetti';

const ConfettiButton = () => {
  const canvasRef = useRef(null);

  const handleButtonClick = () => {
    const canvas = canvasRef.current;
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      console.error('Canvas element not found or invalid.');
      return;
    }

    const confettiInstance = confetti.create(canvas, {
      resize: true, // Will fit the screen size
    });

    confettiInstance({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="text-[#A87526] p-[5px] border border-solid border-[#A87526] "
      >
        Зөвшөөрөх
      </button>
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />
    </div>
  );
};

export default ConfettiButton;
