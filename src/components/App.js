import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleClick = (buttonName) => {
      const result = calculate(this.state, buttonName);
      this.setState({ ...result });
    };
    const { next, total } = this.state;

    return (
      <div className="ui grid container">
        <div className="sixteen wide mobile eight wide tablet ten wide computer column">
          <Display result={(next && next.toString()) || (total && total.toString())} />
          <ButtonPanel clickHandler={(e) => handleClick(e)} />
        </div>
        <footer className="footer container center aligned inverted ui header segment">
          {'Created by '}
          <a href="https://gasb150.me" className="ui header teal">
            Gustavo Sanmartin
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
