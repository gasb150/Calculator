import Operate from './operate'

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  if (buttonName === "+/-") {
    [total, next] = [total * -1, next * -1];
  }
  if (buttonName === "AC"){
    total=null;
    next=null;
    operation=null;
  }
  if (buttonName === "%"){
    total= total/100
    next = next/100
  }
}

exppor default calculate;