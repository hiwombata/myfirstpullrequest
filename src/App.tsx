import { TypistEffect } from './components/TypistEffect';
import { IPhoneTypistEffect } from './components/iPhoneTypistEffect';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Typist Effect Components</h1>
        <p>Interactive typing animations ready for Figma integration</p>
      </header>

      <main className="app-main">
        <section className="demo-section">
          <h2>iPhone Keyboard Style</h2>
          <p>Complete iPhone keyboard interface with progressive text suggestions</p>
          <div className="demo-container iphone-demo">
            <IPhoneTypistEffect
              baseText="I want"
              suggestions={["", " to", " to go", " to go to LA"]}
              typingSpeed={120}
              pauseDuration={2000}
              loop={true}
            />
          </div>
        </section>

        <section className="demo-section">
          <h2>Basic Typist Effect</h2>
          <p>Customizable typing animation with various text sequences</p>
          
          <div className="demo-container basic-demo">
            <div className="demo-item">
              <h3>Simple Text Sequence</h3>
              <TypistEffect
                textSequence={[
                  "Hello World!",
                  "Welcome to our app",
                  "Start typing...",
                  "Create something amazing"
                ]}
                typingSpeed={80}
                pauseDuration={1500}
                loop={true}
                showCursor={true}
              />
            </div>

            <div className="demo-item">
              <h3>Programming Code</h3>
              <TypistEffect
                textSequence={[
                  "const hello = 'world';",
                  "function greet() { return 'Hi!'; }",
                  "console.log('Hello, Figma!');"
                ]}
                typingSpeed={60}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                className="code-style"
              />
            </div>

            <div className="demo-item">
              <h3>Marketing Copy</h3>
              <TypistEffect
                textSequence={[
                  "Build faster",
                  "Ship smarter", 
                  "Scale better",
                  "Dream bigger"
                ]}
                typingSpeed={100}
                pauseDuration={1200}
                loop={true}
                showCursor={true}
                className="marketing-style"
              />
            </div>
          </div>
        </section>

        <section className="usage-section">
          <h2>Usage Instructions</h2>
          <div className="usage-container">
            <div className="usage-step">
              <h3>1. Build for Figma</h3>
              <pre><code>npm run build:figma</code></pre>
            </div>
            <div className="usage-step">
              <h3>2. Include in Figma</h3>
              <pre><code>{'<script src="./dist/typist-effect.umd.js"></script>'}</code></pre>
            </div>
            <div className="usage-step">
              <h3>3. Use Components</h3>
              <pre><code>{`// iPhone Style
window.renderiPhoneTypistEffect(container, {
  baseText: "I want",
  suggestions: ["", " to", " to go", " to go to LA"]
});

// Basic Style  
window.renderTypistEffect(container, {
  textSequence: ["Hello", "World"],
  typingSpeed: 80
});`}</code></pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Ready to use in your Figma designs! 🎨</p>
      </footer>
    </div>
  );
}

export default App;