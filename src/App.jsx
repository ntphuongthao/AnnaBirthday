import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import confetti from "canvas-confetti";

function Home() {
  const navigate = useNavigate();
  const yesButtonRef = useRef(null);

  const dodge = (e) => {
    const dodgeDistance = 120; // max distance to dodge in pixels
    const randomHorizontal =
      Math.random() * (window.innerWidth - dodgeDistance);
    const randomVertical = Math.random() * (window.innerHeight - dodgeDistance);

    // Get the button and move it to the new random position
    const button = e.currentTarget;
    button.style.position = "fixed"; // Use fixed to position relative to the viewport
    button.style.top = `${randomVertical}px`;
    button.style.left = `${randomHorizontal}px`;
  };

  const handleYesClick = () => {
    playDogSound();

    if (yesButtonRef.current) {
      yesButtonRef.current.classList.add("shake");
      setTimeout(() => yesButtonRef.current?.classList.remove("shake"), 500);
    }

    navigate("/choanna");
  };

  const playDogSound = () => {
    const audio = new Audio("/dog-barking.mp3");
    audio.loop = true; // Keep playing in loop
    audio.play();

    // Stop after 10 seconds
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0; // Reset
    }, 10000);
  };

  const stopDogSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleYesHover = () => {
    playDogSound();
  };

  const handleYesLeave = () => {
    stopDogSound();
  };

  return (
    <>
      <div className="app">
        <div>
          <img src="/dog.png" alt="Cute puppy" />
          <h1>Anna có phải là chó không? 🐶</h1>
        </div>
        <div>
          <button
            ref={yesButtonRef}
            onClick={handleYesClick}
            onMouseEnter={handleYesHover}
            onMouseLeave={handleYesLeave}
          >
            👍🏻 Yes 👍🏻
          </button>
          <button
            ref={yesButtonRef}
            onClick={handleYesClick}
            onMouseEnter={handleYesHover}
            onMouseLeave={handleYesLeave}
          >
            👍🏻 A BIG YES!!! 👍🏻
          </button>
          <button
            className="dodger"
            onMouseEnter={dodge} // For desktop
            onTouchStart={dodge} // For mobile
          >
            ❌ No ❌
          </button>
        </div>
      </div>
      <footer>
        <p>All rights reserved by Thao Nguyen</p>{" "}
        <p>❤️ From Thao Nguyen with Love ❤️</p>
      </footer>
    </>
  );
}

function Result() {
  useEffect(() => {
    // Trigger confetti on mount
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x: 0.2, y: 0.4 },
    });
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x: 0.8, y: 0.4 },
    });
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x: 0.2, y: 0.8 },
    });
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x: 0.8, y: 0.8 },
    });
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x: 1, y: 1 },
    });
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { x: 0, y: 1 },
    });
  }, []);

  const emojiConfig = [
    { emoji: "🎂", count: 2 },
    { emoji: "🐶", count: 15 },
    { emoji: "❤️", count: 2 },
    { emoji: "💚", count: 2 },
    { emoji: "💙", count: 2 },
    { emoji: "💛", count: 2 },
    { emoji: "💜", count: 2 },
    { emoji: "💖", count: 2 },
    { emoji: "💝", count: 2 },
    { emoji: "💘", count: 2 },

    { emoji: "🧑🏼‍💻", count: 2 },
  ];

  return (
    <div className="result-container">
      <h1 className="result-heading">HAPPY BORK-DAY ANNA! 🐶🎉</h1>
      <p className="result-text">🙀 Chúc mừng sinh nhật tuổi 21 của Anna 🙀</p>
      <p className="result-text">
        🎉 Wishing you all the joy and happiness in the world! 🎉
      </p>
      <p className="result-text">
        🎈 May your birthday be as legendary as your trễ hẹn skills 😅 Wishing
        you more cake, less stress, and fewer alarms ignored 🕒💤 Nói vậy thôi
        chứ chúc em đạt được nhiều điều tuyệt vời nhất nha! Mục tiêu cá nhân và
        công việc đều thành công nhé!
      </p>
      <img src="/annacho.jpeg" alt="Anna 1" className="result-image" />
      {emojiConfig.flatMap(({ emoji, count }) =>
        [...Array(count)].map((_, i) => (
          <span
            key={`${emoji}-${i}`}
            className="meme-icon"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${2 + Math.random() * 2}rem`,
            }}
          >
            {emoji}
          </span>
        ))
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choanna" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
