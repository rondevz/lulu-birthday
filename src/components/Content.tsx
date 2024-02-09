import confetti from "canvas-confetti";
import { useState } from "react";
import "../css/gradient.css";

export function Content() {
  const [pressed, setPressed] = useState(false);

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const happyBirthday = () => {
    setPressed(true);

    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { y: 0.6 },
    // });
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <main className="flex justify-center flex-col h-full w-full items-center transition-all">
      <canvas id="canvas" className="fixed top-0 left-0 w-full h-full"></canvas>
      <button
        onClick={happyBirthday}
        className="z-10 select-none rounded-full border-2 border-red-600 shadow-lg shadow-red-600 active:border-red-400 size-52"
      >
        <span className="text-[120px]">{pressed ? "🎂" : "🙈"}</span>
      </button>
      <div className="mt-12 mx-auto text-6xl">
        {pressed && (
          <>
            <p
              className={`text-center text-gray-100 font-bold ${
                pressed && "gradient-text"
              }`}
            >
              Happy Birthday Lucia
            </p>
            <p className="text-center mt-1">🥰🥳</p>
          </>
        )}
      </div>
    </main>
  );
}
