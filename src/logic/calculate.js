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
    if (!total)  total/100
    else next/100
  }
  if (buttonName === "="){
    if(!total && !next) return 0;
    if(total && !next) return 0;
    if(!operation) operate(total, next, operation)
    if(total && next){
      operate(total, next, operation);
      next= null;
      operation = buttonName
    }
  }
}

export default calculate;