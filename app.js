var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

const availableColor = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink']

//Trial 1: Add ___ chocolates of ____ color
const addChocolates = (chocolates, color, count) => {
    if (!(availableColor.includes(color))) return 'Chocolate color is not available!!';
    if (count <= 0) return 'Number cannot be zero/negative';

    while(count !== 0) {
        chocolates.unshift(color);
        count--;
    }
}

addChocolates(chocolates, 'green', 10);

//Trial 2: Remove ___ chocolates from the top the dispenser
const removeChocolates = (numbers, chocolates) => {
    if (numbers > chocolates.length) return 'Insufficient chocolates in the dispenser';
    if (numbers <= 0) return 'Number cannot be zero/negative';

    while(numbers !== 0) {
        chocolates.shift();
        numbers--;
    }
    return chocolates;
}

removeChocolates(10, chocolates);

//Trial 3: Dispense ___ chocolates
const dispenseChocolate = (numbers, chocolates) => {
    if (numbers <= 0) return 'Number cannot be zero/negative';
    if (numbers > chocolates.length) return 'Insufficient chocolates in the dispenser';

    while(numbers !== 0) {
        chocolates.pop();
        numbers--;
    }
}

dispenseChocolate(10, chocolates)
//Trial 4: Dispense ___ chocolates of ____ color
const dispenseChocolateOfColor = (chocolates, numbers, color) => {
    let count = 0;
    if (numbers <= 0) return 'Number cannot be zero/negative';
    if (numbers > chocolates.length) return 'Insufficient chocolates in the dispenser';
    const len = chocolates.length - 1;

    for(let i=len; i>= 0;i--) {
        if(color === chocolates[i]) {
            chocolates.splice(i, 1);
            count++;
        }
        if(count === numbers) {
            break;
        }
    }
    if (count !== numbers) {
        return 'Insufficient chocolates in the dispenser in this color!!'
    }
}

dispenseChocolateOfColor(chocolates, 2, 'pink');
//Trial 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
const noOfChocolates = () => {
    let count = {}
    let chocolatesColorCount = [];
    chocolates.forEach((x) => count[x] = (count[x] || 0) + 1);
    for(let chocolate in count) {
        chocolatesColorCount.push([chocolate, count[chocolate]])
    }
    return chocolatesColorCount;
}

noOfChocolates();
//Trial 6: Sort chocolates based on count in each color. Return array of colors
const sortBasedOnColor = () => {
    const chocolateCount = noOfChocolates();
    chocolateCount.sort(function(a, b) {
        return b[1] - a[1];
    })
    return chocolateCount;
}

const sortChocolateBasedOnCount = () => {
    let sortedArray = sortBasedOnColor();
    chocolates = [];
    for(let i=0; i< sortedArray.length; i++) {
        let len = sortedArray[i][1];
        while(len !== 0) {
            chocolates.push(sortedArray[i][0]);
            len--;
        }
    }
}
sortChocolateBasedOnCount();

//Trial 7: Change ___ chocolates of ____ color to ____ color
const changeChocolateColor = (chocolates, number, color, finalColor) => {
    let count = 0;
    if (number <= 0) return 'Number cannot be zero/negative';
    if(color === finalColor) return chocolates;

    for(let i=0; i<chocolates.length; i++) {
        if (chocolates[i] === color) {
            chocolates[i] = finalColor;
            count++;
        }
        if(count === number) {
            break;
        }
    }
}

changeChocolateColor(chocolates, 3, 'pink', 'silver')
//Trial 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
const changeChocolateColorAllOfXCount = (chocolates, color, finalColor) => {
    if(color === finalColor) return chocolates;

    for(let i=0; i<chocolates.length; i++) {
        if (chocolates[i] === color) {
            chocolates[i] = finalColor;
        }
    }
}

changeChocolateColorAllOfXCount(chocolates, 'green', 'pink')
//Challenge 1: Remove one chocolate of ____ color from the top
const removeChocolateOfColor = (color) => {
    for(let i=0; i<chocolates.length; i++) {
        if (chocolates[i] === color) {
            chocolates.splice(i, 1);
            break;
        }
    }
}

removeChocolateOfColor('red');
//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
const dispenseRainbowChocolates = (number) => {
    const noOfColoredChocolates  = sortBasedOnColor();
    let noOfRainbowColoredChocolate = 0;
    noOfColoredChocolates.forEach((coloredChocolate) => {
        noOfRainbowColoredChocolate += coloredChocolate[1]/3;
    })

    return noOfRainbowColoredChocolate;
}

console.log("Number Of rainbow chocolates: ",dispenseRainbowChocolates(5));
console.log(chocolates);