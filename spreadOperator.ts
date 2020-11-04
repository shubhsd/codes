let object1 = { firstName: 'Shubham', lastName: 'Sood', gender: 'male' }
let object2 = { ...object1, testing: 'false', lastName: 'sharma' }
// ...object1 means object1 ki saari properties ho aur additional testing name se bhi ek property ho, aur object1 ki property lastName bhi update ho jaye.

console.log(object2)

// Spread operator in case of array => 

let array1 = [1, 2, 3, 4];
let array2 = [1, 5, 6, 7];
// let array3 = [...array1, array2, 9, 10];
let array3 = [...array1, 1, 5, 6, 7, 9, 10, object1];
console.log(array3);

// In case of arrays value append ho jati hai , overwrite nhi hoti as in case of objects.