import { createRoot } from 'react-dom/client';
import { TypistEffect } from './components/TypistEffect';
import { IPhoneTypistEffect } from './components/iPhoneTypistEffect';
import './components/TypistEffect.css';

// Export components for Figma
export { TypistEffect, IPhoneTypistEffect };

// Figma plugin integration
declare global {
  interface Window {
    TypistEffect: typeof TypistEffect;
    IPhoneTypistEffect: typeof IPhoneTypistEffect;
    renderTypistEffect: (container: HTMLElement, props: any) => void;
    renderIPhoneTypistEffect: (container: HTMLElement, props: any) => void;
  }
}

// Make components available globally for Figma
window.TypistEffect = TypistEffect;
window.IPhoneTypistEffect = IPhoneTypistEffect;

// Helper functions for Figma
window.renderTypistEffect = (container: HTMLElement, props: any) => {
  const root = createRoot(container);
  root.render(<TypistEffect {...props} className="figma-export" />);
};

window.renderIPhoneTypistEffect = (container: HTMLElement, props: any) => {
  const root = createRoot(container);
  root.render(<IPhoneTypistEffect {...props} className="figma-export" />);
};

// Default export for module usage
export default {
  TypistEffect,
  IPhoneTypistEffect,
  renderTypistEffect: window.renderTypistEffect,
  renderIPhoneTypistEffect: window.renderIPhoneTypistEffect
};