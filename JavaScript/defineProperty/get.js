const myName = {
  first : 'Adhil',
  last : 'Mohammed'
}

Object.defineProperty(myName, 'fulllname', {
  get: function(){
    return this.first +" "+ this.last;
  }
})
console.log(myName.fullname);
