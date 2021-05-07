import Operate from './operate'

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  if (buttonName === "+/-") {
    total = total * -1
    next = next * -1;
    return data
  }
  if (buttonName === "AC") {
    total = null;
    next = null;
    operation = null;
    return data
  }
  if (buttonName === "%") {
    if (!total) total / 100
    else next / 100
    return data
  }

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
    if (!operation) {
      if (!total) {
        total = buttonName;
      } else if (typeof total === 'number') {
        total = btnName;
      } else {
        total += btnName;
      }
    } else if (!next) {
      next = btnName;
    } else {
      next += btnName;
    }
    return data

  }
  if (buttonName = '.') {
    if (!total) return '0.'
    if (total && operation) {
      total += '.'
    }
    if (total && operation && next) {
      next += '.'
    }
    if (total && operation && !next) {
      next += '0.'
    }
    return data
  }

  if (['+', 'x', '/', '-'].includes(buttonName)) {
    if (!total) total = 0;
    if (total && !next) {
      operation = buttonName
    }
    if (total && next && operation) {
      total = Operate(total, next, operation)
    }
    operation = buttonName
    return data
  }

  if (buttonName === "=") {
    if (!total && !next) return 0;
    if (total && !next) return 0;
    if (!operation) Operate(total, next, operation)
    if (total && next) {
      Operate(total, next, operation);
      next = null;
      operation = buttonName
    }
  }
  return data
}

export default calculate;