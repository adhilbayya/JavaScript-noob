function display(message){
  let el = document.createElement('div');
  el.innerText = message;
  document.body.appendChild(el);
}

export {display};
