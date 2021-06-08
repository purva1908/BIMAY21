// function greet(name){
//     name = name + " OK"
//     console.log(name)
//     console.log(arguments)
// }
// var a={
//     0:"Midhat"
// }
// console.log(a)
// greet("Midhat")
// // greet()
// greet("aefv", 235, true,[1,2,3])
// console.log(arguments)
// {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: Module {
//         id: '.',
//         path: '/home/rahul/Desktop/BIMAY21',
//         exports: {},
//         parent: null,
//         filename: '/home/rahul/Desktop/BIMAY21/core1.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       },
//       extensions: [Object: null prototype] {
//         '.js': [Function (anonymous)],
//         '.json': [Function (anonymous)],
//         '.node': [Function (anonymous)]
//       },
//       cache: [Object: null prototype] {
//         '/home/rahul/Desktop/BIMAY21/core1.js': [Module]
//       }
//     },
//     '2': Module {
//       id: '.',
//       path: '/home/rahul/Desktop/BIMAY21',
//       exports: {},
//       parent: null,
//       filename: '/home/rahul/Desktop/BIMAY21/core1.js',
//       loaded: false,
//       children: [],
//       paths: [
//         '/home/rahul/Desktop/BIMAY21/node_modules',
//         '/home/rahul/Desktop/node_modules',
//         '/home/rahul/node_modules',
//         '/home/node_modules',
//         '/node_modules'
//       ]
//     },
//     '3': '/home/rahul/Desktop/BIMAY21/core1.js',
//     '4': '/home/rahul/Desktop/BIMAY21'
//   }
//folder - repository - directory
// IIFE (Imedietly Invovked function expression)
// (function(exports, require, module, __filepath, __dirname){
    //    console.log(arguments)
//     return exports
// }()
// )


exports.name="Midhat"
module.exports.age=200
// console.log(arguments[0]) //{ name: 'Midhat' }
console.log("hey..I am in core1.js")
// console.log(arguments)
exports.printName=function hi(){
    console.log("Faraz")
}
//can't overwrite exports like this
// exports=function (){
//     console.log("helllo")
// }
module.exports = {
    one:()=>{
        console.log("One-1")
    },
    two:()=>{
        console.log("Two-2")
    }
}
module.exports=function (){
    console.log("helllo")
}