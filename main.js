// 51-misol

// function middleNumber(params) {
//     let arr = [...params]
//     let number1 = 0
//     let number2 = 0
//     let number3 = 0
//     if(arr.length % 2 == 0){
//         number2 = (arr.length / 2)
//         number3 = (arr.length / 2) - 1
//         number1 = (arr[number2] + arr[number3]) / 2
//         return number1
//     }else{
//         number1 = (arr.length / 2) - 0.5
//         return (arr[number1]);
//     }
// }
// console.log(middleNumber([1,2,3,4,5]));











// 52-misol 

// let arr = []
// let gatjet = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];
// for(let i = 0; i < gatjet.length; i++){
//     if(gatjet[i].id !== 4){
//         arr.push(gatjet[i])
//     }
// }
// console.log(arr);












// 54-misol 

// let  animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let obj = {}
// animals.forEach(item =>{
//     if(obj[item]){
//         obj[item]++
//     }else{
//         obj[item] = 1
//     }
// })
// console.log(obj)












// 55-misol 

// function item (str){
//    return str.split(" ").map(word => word.length);  
// }
// let input_str = "Hello world";
// let output = item(input_str)
// console.log(output);










// 56-misol 

// function item (input){
//     return input.includes(" ")
// }
// const input = "salom dunyo"
// console.log(item(input));












// 57-misol 

// function item(obj) {
//     let arr = Object.entries(obj);
//     let box = arr.map(([key, value]) => `${key}${value}`);
    
//     return box;
// }

// console.log(item({a: 2, b: 5, c: 7}));














// 58-misol 

// const list = [
//     { name: "Elbek", protcent: 95 },
//     { name: "Zafar", protcent: 78 },
//     { name: "Aziz", protcent: 83 },
//     { name: "Jasur", protcent: 88 },
//     { name: "Bobur", protcent: 66 },
//     { name: "Kamron", protcent: 75 }
//   ];
  
//   const examResult = list.reduce((acc, pupil) => {
//     if (pupil.protcent >= 80) {
//       acc.passed++;
//     } else {
//       acc.failed++;
//     }
//     return acc;
//   }, { passed: 0, failed: 0 });
//   console.log("Topshira olganlar soni:", examResult.passed);
//   console.log("Topshira olmaganlar soni:", examResult.failed);
  












// 59-misol  

// let numbers1 = [1,2];
// let numbers2 = [3,4];
// let arr = [...numbers1,...numbers2];
// function middleNumber(params) {
//         let arr = [...params]
//         let number1 = 0
//         let number2 = 0
//         let number3 = 0
//         if(arr.length % 2 == 0){
//             number2 = (arr.length / 2)
//             number3 = (arr.length / 2) - 1
//             number1 = (arr[number2] + arr[number3]) / 2
//             return number1
//         }else{
//             number1 = (arr.length / 2) - 0.5
//             return (arr[number1]);
//         }
//     }
//     console.log(middleNumber(arr));