import React from 'react';
import './App.css';
import './QRCodeGenerator.css';
import './QRCodeImageReader.css';
import QRCodeGenerator from './QRCodeGenerator';
import QRCodeImageReader from './QRCodeImageReader';

function App() {
  return (
    <div>
      <QRCodeGenerator />
      <QRCodeImageReader />
    </div>
  );
}

export default App;
