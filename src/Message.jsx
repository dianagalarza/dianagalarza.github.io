import { useState, useEffect } from 'react';

export default function Message() {
  const messages = ["y'all means all", 'love is love', 'be kind'];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="message">
      <h2>{messages[currentMessageIndex]}</h2>
    </div>
  );
}
