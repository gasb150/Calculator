import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    const result = calculate(value, buttonName);
    setValue({ ...result });
  };
  const { next, total } = value;

  return (
    <div className="main-calculator">
      <div className="section-calculator">
        <Display result={(next && next.toString()) || (total && total.toString())} />
        <ButtonPanel clickHandler={(e) => handleClick(e)} />
      </div>
      <div className="heloo">
        <div>
          <h1>{"Let's do some maths "}</h1>
        </div>
        <div>
          {'Created by '}
          <a href="https://gasb150.me" className="ui header teal">
            Gustavo Sanmartin
          </a>
        </div>
      </div>
    </div>
  );
};
// }

export default App;
