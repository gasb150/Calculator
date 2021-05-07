import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const result = '0';
const App = () => (
  <div className="ui content">
    <Display result={result} />
    <ButtonPanel />

  </div>
);

export default App;
