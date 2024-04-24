import React, { useEffect } from "react";
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

  return (
    <>
      <div className="app">
        <div>
          <img src="/dog.png" alt="Cute puppy" />
          <h1>Is Anna a dog? 🐶</h1>
          <h1>Anna có phải là chó không? 🐶</h1>
        </div>
        <div>
          <button onClick={() => navigate("/choanna")}>👍🏻 Yes 👍🏻</button>
          <button onClick={() => navigate("/choanna")}>
            👍🏻 A BIG YES!!! 👍🏻
          </button>
          <button className="dodger" onMouseEnter={dodge}>
            ❌ No ❌
          </button>
        </div>
      </div>
      <footer>
        <p>All rights reserved by Thao Nguyen</p>{" "}
        <p>❤️ From Wilson with Love ❤️</p>
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

  return (
    <div className="result-container">
      <h1 className="result-heading">Happy Birthday! 🎂</h1>
      <p className="result-text">🙀 Chúc mừng sinh nhật chó Anna 🙀</p>
      <p className="result-text">🐶🐶 Chó là Anna không phải tôi 🐶🐶</p>
      <p className="result-text">
        🎉 Wishing you all the joy and happiness in the world! 🎉
      </p>
      <p className="result-text">
        Chúc cô ấy tuổi 20 bớt xamloz và yêu thảo và quỳnh nhiều hơn 😅
      </p>
      <img src="/annacho.jpeg" alt="Anna 1" className="result-image" />
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
