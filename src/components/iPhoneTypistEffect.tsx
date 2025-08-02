import React, { useState, useEffect } from 'react';
import './iPhoneTypistEffect.css';

interface IPhoneTypistEffectProps {
  /** The base phrase being typed */
  baseText?: string;
  /** Array of progressive completions */
  suggestions: string[];
  /** Speed of typing in milliseconds */
  typingSpeed?: number;
  /** Pause between suggestions */
  pauseDuration?: number;
  /** Whether to loop */
  loop?: boolean;
  /** Custom styling */
  className?: string;
}

const IPhoneTypistEffect: React.FC<IPhoneTypistEffectProps> = ({
  baseText = "I want",
  suggestions = ["", " to", " to go", " to go to LA"],
  typingSpeed = 80,
  pauseDuration = 1200,
  loop = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(baseText);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const animateTyping = async () => {
      const targetText = baseText + suggestions[currentIndex];
      
      if (displayText.length > targetText.length) {
        // Backspace to shorter text
        setIsTyping(true);
        for (let i = displayText.length; i >= targetText.length; i--) {
          await new Promise(resolve => setTimeout(resolve, typingSpeed / 2));
          setDisplayText(displayText.slice(0, i));
        }
      }
      
      // Type forward to target text
      setIsTyping(true);
      for (let i = displayText.length; i <= targetText.length; i++) {
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
        setDisplayText(targetText.slice(0, i));
      }
      
      setIsTyping(false);
      
      // Pause before next suggestion
      await new Promise(resolve => setTimeout(resolve, pauseDuration));
      
      // Move to next suggestion
      if (currentIndex === suggestions.length - 1) {
        if (loop) {
          setCurrentIndex(0);
        }
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    };

    animateTyping();
  }, [currentIndex, baseText, suggestions, typingSpeed, pauseDuration, loop, displayText.length]);

  // Get suggested completion text (the grayed out part)
  const getSuggestionText = () => {
    const currentSuggestion = baseText + suggestions[currentIndex];
    if (displayText.length < currentSuggestion.length) {
      return currentSuggestion.slice(displayText.length);
    }
    return '';
  };

  return (
    <div className={`iphone-typist-container ${className}`}>
      <div className="iphone-keyboard-mockup">
        <div className="iphone-status-bar">
          <span className="time">9:41</span>
          <div className="status-icons">
            <span className="signal">●●●○</span>
            <span className="wifi">📶</span>
            <span className="battery">🔋</span>
          </div>
        </div>
        
        <div className="iphone-content">
          <div className="text-input-area">
            <p className="prompt">What's on your mind?</p>
            
            <div className="typing-area">
              <div className="text-bubble">
                <span className="typed-text">{displayText}</span>
                <span className="suggestion-text">{getSuggestionText()}</span>
                <span className={`cursor ${isTyping ? 'typing' : 'blinking'}`}>|</span>
              </div>
            </div>
          </div>
          
          <div className="keyboard-suggestions">
            <div className="suggestion-pills">
              <span className="suggestion-pill">"The"</span>
              <span className="suggestion-pill">the</span>
              <span className="suggestion-pill">to</span>
            </div>
          </div>
          
          <div className="keyboard-layout">
            <div className="keyboard-row">
              <span className="key">q</span>
              <span className="key">w</span>
              <span className="key">e</span>
              <span className="key">r</span>
              <span className="key">t</span>
              <span className="key">y</span>
              <span className="key">u</span>
              <span className="key">i</span>
              <span className="key">o</span>
              <span className="key">p</span>
            </div>
            <div className="keyboard-row">
              <span className="key">a</span>
              <span className="key">s</span>
              <span className="key">d</span>
              <span className="key">f</span>
              <span className="key">g</span>
              <span className="key">h</span>
              <span className="key">j</span>
              <span className="key">k</span>
              <span className="key">l</span>
            </div>
            <div className="keyboard-row">
              <span className="key shift">⇧</span>
              <span className="key">z</span>
              <span className="key">x</span>
              <span className="key">c</span>
              <span className="key">v</span>
              <span className="key">b</span>
              <span className="key">n</span>
              <span className="key">m</span>
              <span className="key backspace">⌫</span>
            </div>
            <div className="keyboard-row bottom-row">
              <span className="key wide">ABC</span>
              <span className="key emoji">😊</span>
              <span className="key spacebar"> </span>
              <span className="key return">↵</span>
              <span className="key mic">🎤</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { IPhoneTypistEffect };
export default IPhoneTypistEffect;