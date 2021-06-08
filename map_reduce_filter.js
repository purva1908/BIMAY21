var arr=[1,2,3,4,5,6]
// var prod=1
// arr.forEach(num=>{
//     prod=prod*num
// })
// console.log(prod) // 720

// function findprod(a,b){
//     console.log(a + " X "+ b)
//     return a*b
// }
// var prod=arr.reduce(findprod)
// console.log(prod)
// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i]
// }
// console.log(arr) 

// function sqr(num){
//     return num*num
// }
// console.log(arr.map(sqr))
// arr.forEach(num=>{
//     if(num%2==0){
//         console.log(num)
//     }
// })
 function isEven(num){
     let name = "Miodhar"
    if(num%2==0){
        console.log(name)
        return true
    }else{
        console.log(name)
        return false
    }
    console.log(name)
 }
 console.log(arr.filter(isEven))


 //var let const
 