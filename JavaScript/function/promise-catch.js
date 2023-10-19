let success = false;

function getUser(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(success){
        resolve([
          {username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com'}
        ])
      }else{
        reject('failed to the user list');
      }
    },1000)
  })
}
getUser().catch((error) => {
  console.log(error) // failed to the user list
});
//Only shows when there is error
//or esle  the output will not be shown
