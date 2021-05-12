import Calculate from '../../logic/calculate'

const firstObject = {total:null, next:null, operation:null}
const secondObject = {total:'6', next:null, operation:null}
describe('Calculate methods', () =>{
  it('Should be a function', () =>{
    expect(typeof Calculate).toEqual('function')
  })
  it('Should not be an object', () => {
    expect(typeof Calculate).not.toEqual('object')
  })
  it('Should return an object', ()=>{
    const result=Calculate(firstObject, 9)
    expect(typeof result).toEqual('object')
  })
  it('Should return null object', ()=>{
    const result = Calculate(firstObject, 'AC');
    expect(result).toStrictEqual({"next": null, "operation": null, "total": null})
  })
  it('Should return a decimal value', ()=>{
    const result = Calculate(firstObject, '.');
    expect(result).toStrictEqual({"next": null, "operation": null, "total":'0.' })
  })
  it('Should return a negative value', ()=>{
    const result = Calculate(secondObject, '+/-');
    expect(result).toStrictEqual({"next": -0, "operation": null, "total": -6})
  })
  it('Should return a percent value', ()=>{
    const result = Calculate(secondObject, '%');
    expect(result).toStrictEqual({"next": 0, "operation": null, "total": 0.06})
  })
})