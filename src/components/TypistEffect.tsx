import React, { useState, useEffect, useCallback } from 'react';
import './TypistEffect.css';

interface TypistEffectProps {
  /** The sequence of text completions to show */
  textSequence: string[];
  /** Speed of typing animation in milliseconds */
  typingSpeed?: number;
  /** Pause between each completion in milliseconds */
  pauseDuration?: number;
  /** Whether to loop the animation */
  loop?: boolean;
  /** Custom className for styling */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Whether to show the typing cursor */
  showCursor?: boolean;
  /** Custom cursor character */
  cursorChar?: string;
}

export const TypistEffect: React.FC<TypistEffectProps> = ({
  textSequence,
  typingSpeed = 100,
  pauseDuration = 1500,
  loop = true,
  className = '',
  onComplete,
  showCursor = true,
  cursorChar = '|'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  const typeText = useCallback(async (text: string) => {
    // Clear previous text
    setDisplayText('');
    
    // Type out each character
    for (let i = 0; i <= text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, typingSpeed));
      setDisplayText(text.slice(0, i));
    }
    
    // Pause before next text
    await new Promise(resolve => setTimeout(resolve, pauseDuration));
  }, [typingSpeed, pauseDuration]);

  useEffect(() => {
    if (textSequence.length === 0) return;

    const animateSequence = async () => {
      const text = textSequence[currentIndex];
      await typeText(text);
      
      if (currentIndex === textSequence.length - 1) {
        if (loop) {
          setCurrentIndex(0);
        } else {
          onComplete?.();
        }
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    };

    animateSequence();
  }, [currentIndex, textSequence, typeText, loop, onComplete]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const interval = setInterval(() => {
      setShowCursorBlink(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [showCursor]);

  const renderCursor = () => {
    if (!showCursor) return null;
    
    return (
      <span 
        className={`typist-cursor ${showCursorBlink ? 'visible' : 'hidden'}`}
        style={{
          opacity: showCursorBlink ? 1 : 0,
          transition: 'opacity 0.1s ease-in-out'
        }}
      >
        {cursorChar}
      </span>
    );
  };

  return (
    <div className={`typist-effect ${className}`}>
      <span className="typist-text">{displayText}</span>
      {renderCursor()}
    </div>
  );
};

export default TypistEffect;