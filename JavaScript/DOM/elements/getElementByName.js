let btn = document.getElementById('btn');
let message = document.getElementById('message');

btn.addEventListener('click', () => {
  let rates = document.getElementsByName('rate');
  rates.forEach((rate) => {
    if(rate.checked){
    message.innerText = `You selected ${rate.value}`;
    }
  })
})
