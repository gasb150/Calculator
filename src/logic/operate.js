import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  num1 = Big(numberOne);
  num2 = Big(numberTwo)

  if (operation === '/') {
    return num1 / num2
  } else if (operation === 'X') {
    return num1 * num2
  } else if (operation === '+') {
    return num1 + num2
  } else if (operation === '-') {
    return num1 - num2
  } else {
    return 'not valid operation'
  }
}

export default operate