function getUser(callback){
  setTimeout(() => {
    callback([
      {name : 'Adhil', email : 'Adilkkii@123.com'},
      {name : 'Faris', email : 'farsikki1221@123.com'};
  ]), 1000});
}

function findUser(username, callback){
  getUser((users) => {
    let user = users.find((user) => user.name === username);
  });
  callback(user);
}
findUser('Faris', console.log)
          
