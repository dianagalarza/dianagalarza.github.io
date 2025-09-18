import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const messages = ["y'all means all", 'love is love', 'be kind'];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);
  return (
    <>
      <div className="header">
        <div>🌀</div>
        <div className="nav">
          <a target="_blank" href="https://www.linkedin.com/in/dianamgalarza/">
            linkedin
          </a>
        </div>
      </div>
      <div className="message">
        <p>{messages[currentMessageIndex]}</p>
      </div>
    </>
  );
}

export default App;
