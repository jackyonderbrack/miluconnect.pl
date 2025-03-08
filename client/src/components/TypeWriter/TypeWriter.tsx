import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // time in ms between each character
  pause?: number; // pause time after finishing the text before restarting
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(type, speed);
      } else {
        timeoutId = setTimeout(() => {
          currentIndex = 0;
          type();
        }, pause);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [text, speed, pause]);

  return <p className='h-10'>{displayedText}</p>;
};

export default Typewriter;
