const taxRate = () => 0.2;

const getAmount = (amount , tax = amount*taxRate()) =>{
  return amount + tax;
}

console.log(getAmount(100)); //120
