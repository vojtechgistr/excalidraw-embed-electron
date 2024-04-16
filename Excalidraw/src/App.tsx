import { Excalidraw, THEME } from "@excalidraw/excalidraw";
import { useState, useEffect } from "react"
import "./App.css"


function App() {
  const [mode, setMode] = useState(THEME.LIGHT);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode(THEME.DARK);
    } else {
      setMode(THEME.LIGHT);
    }
    
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? THEME.DARK : THEME.LIGHT;
        setMode(colorScheme);
      });
  }, []);

  return (
    <div>
        <div style={{ height: "100vh", width: "100vw" }}>
        <Excalidraw theme={mode} />
      </div>
    </div>
        
  );
}

export default App;