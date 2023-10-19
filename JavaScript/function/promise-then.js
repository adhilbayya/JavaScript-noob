function getUser(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {name : 'Adhil', email : 'adhilbayya54@gmail.com'},
        {name : 'Faris', email : 'farisraju4@gmail.com'}
        ]);
    }, 1000)
  });
}

let user = getUser();
user.then((users) => {
  console.log(users);
}
                     
