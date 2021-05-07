import React, { Fragment } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const result = '0';
const App = () => (
  <>
    <Display result={result} />
    <ButtonPanel />

  </>
);

export default App;
