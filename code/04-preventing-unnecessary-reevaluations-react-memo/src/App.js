import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
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

      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
