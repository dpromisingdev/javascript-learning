/** 
 * @Title: Add new elements
*/

// inserting at the end - array.prototype.push() method
const numberList1 = ['1', '2', '3', '4', '5'];
const numberList2 = ['6', '7', '8', '9', '10'];
// before es6 Array.prototype.push.appy() was used to merge array into one another.
Array.prototype.push.apply(numberList1, numberList2);
// console.log(numberList1);

// Merging two arrays into a new array using javascript speread operatior
// const numberList = [...numberList1, ...numberList2];

// inserting at the begining - array.prototype.unshift() method

// inserting value at the given index - array.prototype.splice() method
// This method changes the contents of an array by removing or replacing existing elements or adding new elements.
// Parameters: (start[, deletecount,[item1, [item2 ...]]])
// If we don't want to remove any element then 0 or negative value is given.
const arr1 = [1, 2, 3, 5];
// now we will add 4 between 3 and 5. 
arr1.splice(3, 0, 4);
// console.log(arr1);

/** 
 * @Title: Updating Array Elements
*/
const friendsName = [
    { id: 1, name: "Shawon Chowdhury" },
    { id: 2, name: "Omed" },
    { id: 3, name: "Preeti" }
]
const givenId = 2;
const updateName = "Omed Hasan Efu";
for( i=0; i<friendsName.length; i++ ) {
    if(givenId === friendsName[i].id) {
        friendsName[i].name = updateName;
        break;
    }
}
// console.log(friendsName);

/** 
 * @Title: Removing array elements
*/

// array.prototype.pop() - removing the last element of the array. 
// array.prototype.shift() - removing the first element of the arrray. 
// array.prototype.splice() - removing elements using index number and value.
// Removing elements using the value
const lastNames = ["Das", "Saha", "Chowdhury", "Khan", "Banik"];
const removeLastName = "Khan";
for ( i=0; i < lastNames.length; i++) {
    if(removeLastName === lastNames[i]) {
        lastNames.splice(i, 1);
    }
}
// console.log(lastNames);
// Removing elements using array.prototype.filter()
let numbers = [ 1, 2, 3, 4, 5, 6];
numbers = numbers.filter(number => number !== 6)
// console.log(numbers);

// delete operator removes a given property from an object.
const employeeNames = {
    employeee1: {
        name: "Shakib"
    },
    employee2: {
        name: "Rakib"
    },
    employee3: {
        name: "Nokib"
    }
}

delete employeeNames.employee3;
// console.log(employeeNames);

/** 
 * @Title: Concatenating arrays 
*/

// 2 way: i) array.prototype.concat() method
//        ii) Es6 speard operator