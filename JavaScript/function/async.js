function getUser(userID){
  return new Promise((resolve, reject) => {
    console.log('Getting the user details from the database');
    setTimeout(() => {
      resolve({
        name : 'Adhil',
        userId : 123
      })
    }, 1000)
  })
function getServices(user){
  return new Promise((resolve, reject) => {
    console.log(`Checking the services opted by the ${user.name}`);
    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN'])
    }, 1000)
  })
function geServicePrice(services){
  return new Promise((resolve, reject) => {
    console.log(`The products are : ${services}`);
    setTimeout(() => {
      resolve(services.length * 34.5)
    }, 1000)
  })

  async function getTotal(){
    let user = getUser(100);
    let service = getServices(user);
    let total = getServicePrice(service);
    console.log(total);
  }
  getTotal();
