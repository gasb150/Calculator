/* eslint-disable no-unused-vars */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculator from '../logic/calculate';

const result = '0';
const App = () => (
  <div className="ui content">
    <Display result={result} />
    <ButtonPanel />

  </div>
);

export default App;
