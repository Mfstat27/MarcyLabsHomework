function runningTotal(arr) {
    let accumulator = 0;
    return arr.map(element => (accumulator+=element))
}


function showMultiplicativeAverage(arr) {
    return (arr.reduce((accumulator, currentValue) => accumulator * currentValue)/arr.length).toFixed(3)
}

function union(arr1, arr2) {
    let newArray = arr1.concat(arr2)
    return newArray.filter((element, index) => {
        return (newArray.indexOf(element) === index)
    })
   
}

function multiplyList(arr1,arr2) {
    return arr1.map((element, index) => element * arr2[index])
}
console.log(runningTotal([14, 11, 7, 15, 20]))
console.log(multiplyList([5, 10, 15, 20], [1, 2, 3, 4]))
console.log(union([2, 2, 2, 2], [10, 5, 2]))
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));