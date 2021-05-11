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
  const { next, total } = data;
  return (
    <div className="ui grid container">
      {/* <div className="content"> */}
      <div className="sixteen wide mobile eight wide tablet ten wide computer column">
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel clickHandler={(e) => handleClick(e)} />
      </div>
      {/* </div> */}
    </div>
  );
};

export default App;
