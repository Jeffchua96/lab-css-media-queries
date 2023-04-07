let getOddNumbersUpToX = (x) => {
    let numbers = [];
        for (let i = 0; i < x; i++) {
        if (i % 2 !== 0) {
        numbers.push(i)
        }
    }
return numbers;
}

// Test:
console.log(getOddNumbersUpToX(16))

let reverseString = (string) => {
let newString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
return newString;
}

// Test:
console.log(reverseString("Nachos"))

let filterForNumbers = (array) => {
    return array.filter(item => {
    return typeof item === "number"
    })
}

// Test:
console.log(filterForNumbers([1, 2, "three", "4", 5, 6, "seven"]))