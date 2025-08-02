// This plugin creates frames that can contain the typist effects

figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = msg => {
  if (msg.type === 'create-typist-frame') {
    // Create a new frame
    const frame = figma.createFrame();
    frame.name = msg.frameType === 'iphone' ? 'iPhone Typist Effect' : 'Basic Typist Effect';
    
    // Set frame size based on type
    if (msg.frameType === 'iphone') {
      frame.resize(375, 812); // iPhone dimensions
      frame.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}]; // Black background
    } else {
      frame.resize(400, 100); // Basic typist dimensions
      frame.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}]; // White background
    }
    
    // Add instructional text
    const text = figma.createText();
    text.fontName = { family: "Inter", style: "Regular" };
    text.characters = msg.frameType === 'iphone' 
      ? 'iPhone Typist Effect\nReplace with embed URL:\n' + msg.embedUrl
      : 'Basic Typist Effect\nReplace with embed URL:\n' + msg.embedUrl;
    text.fontSize = 12;
    text.fills = [{type: 'SOLID', color: {r: 0.5, g: 0.5, b: 0.5}}];
    
    // Position text
    text.x = 20;
    text.y = 20;
    
    // Add text to frame
    frame.appendChild(text);
    
    // Center the frame in the viewport
    figma.viewport.scrollAndZoomIntoView([frame]);
    
    figma.closePlugin('Created ' + frame.name + ' frame!');
  }
  
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};