function nameConvention(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(nameConvention("aDhIl MohAmmEd"))


// This can also written as
// In this we are creating a variable and assigning the function and also using a arrow ..
const nameConvention = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(nameConvention("laSFHkDjaljghh"))

// We can reduce this code even smaller
const nameConvention = (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
console.log(nameConvention("aDhIl"))
