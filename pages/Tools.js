import React from 'react';
import GenerateNumber from '../components/GenerateNumber';
import JsonFormat from '../components/JsonFormat';
import { useState } from 'react';
import Timestmap from '../components/Timestamp';
import Gemini from '../components/Gemini';

function Tools() {
  const [activeTool, setActiveTool] = useState('number');
  const handleToolChange = (toolName) => {
    setActiveTool(toolName);
  };

  return (
    <div>
      <h1>Tools Page</h1>
      <nav>
        <button onClick={() => handleToolChange('number')}>Remember number</button>
        <button onClick={() => handleToolChange('json')}>JSON Formatter</button>
        <button onClick={() => handleToolChange('timestamp')}>Timestamp</button>
        <button onClick={() => handleToolChange('gemini')}>Gemini</button>
      </nav>
      <hr />

      {activeTool === 'number' && <GenerateNumber />}
      {activeTool === 'json' && <JsonFormat />}
      {activeTool === 'timestamp' && <Timestmap />}
      {activeTool === 'gemini' && <Gemini />}
    </div>
  );
}

export default Tools;
