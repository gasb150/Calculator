/* eslint-disable no-unused-vars, react/no-unused-state */

import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(data, buttonName);
    setData({ ...result });
  };

  const result = '0';
  return (
    <div className="ui content">
      <Display result={result} />
      <ButtonPanel clickHandler={(e) => handleClick(e)} />

    </div>
  );
};

export default App;
