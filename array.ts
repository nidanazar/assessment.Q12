//Q#1  (creat an array)
const fruits = ['apple','banana','mango','orange'];
console.log(fruits);

//Q#2 (declear an array of number)

let nameArray:string[] = ["saba","farah","nida"];
let numberArray:number[] = [10,20,30,40,50,60,70,80,90,100];
let arrayU:(string|number)[] = ['10','20','30','40'];
console.log(arrayU);

//Q#3  (access an third array)

let fruitsArray:string[] = ["apple", "banana","mango","orange"];
console.log(fruitsArray[3])

//Q#4 (change the second array of 25)

let changeNumber:number[]=[21,23,27,29];
changeNumber[2]= 25
console.log(changeNumber)

//Q#5 (add the array of last .push)

let addArray:string[] = ["Apple", "Banana","Mango","Orange",];
addArray.push('Grapes')
console.log(addArray);

//Q#6 (remove the last element .pop)

let removeArray:string[] = ["Apple", "Banana","Mango","Orange","grpaes"];
removeArray.pop()
console.log(removeArray);

//Q#7 (remove the first element .shift)

let firstArray:string[] = ["Apple", "Banana","Mango","Orange","grpaes"];
firstArray.shift()
console.log(firstArray)

//Q#8  (add the bigning element .unshift)

let begningArray:string[] = ["Apple", "Banana","Mango","Orange","grpaes"];
begningArray.unshift("kiwi")
console.log(begningArray);

//Q#9 (remove 2 ele.. strting)

let startArray:string[] = ["Apple", "Banana","Mango","Orange","grpaes"];
console.log(startArray)
   console.log(startArray[1])

   //Q#10  (incert the 2 elmnt)

let incertArray:string[] = ["Apple", "Banana","Mango","Orange","grpaes"];
incertArray [2] = "pineapple"
incertArray [3] = "pear"
console.log(incertArray);

//Q11 (creat a new array)

let creatArray:string[] = ["Apple", "Banana","Mango","Orange"];
creatArray.unshift('grapes','pear')
console.log('creatArray:', creatArray);

//Q12  (creat new array in last)

let lastArray:string[] = ["Apple", "Banana","Mango","Orange","grpaes"];
lastArray.push('papaya', 'strawberry')
console.log('lastArray:', lastArray);
