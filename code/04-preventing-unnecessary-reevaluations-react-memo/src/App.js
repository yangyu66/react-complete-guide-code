import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowTog, setAllowTog] = useState(false);

  console.log('APP RUNNING');

  // variable allowTog outside of closure, so need to add to dep list 
  const toggleParagraphHandler = useCallback(() => {
    if (allowTog) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowTog]);
 
  const allowtoggleParagraphHandler = useCallback(() => {
    // setAllowTog((p) => !p);
    setAllowTog(true)
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* even though prop never changes, 
      each time App() re-evaluated, (as state change by button)
      DemoOutput and Button re-run 
      
      use 
      export default React.memo(DemoOutput);
      to prevent DemoOutput re-run
      */}

      <DemoOutput show={showParagraph} />
      <Button onClick={allowtoggleParagraphHandler}>Allow Toggle !</Button>

      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
