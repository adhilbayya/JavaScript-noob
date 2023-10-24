let btn = document.getElementById('btn');
let message = document.getElementById('message');

btn.addEventListener('click', () => {
  let rates = document.getElementByName('rate');
  rates.forEach((rate) => {
    message.innerText = `You selected ${rate.value}`;
  })
})
