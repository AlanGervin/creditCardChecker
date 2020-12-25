var startDigit;
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

test= [3,7,9,0,5,8]

// Add your functions below:
function validateCred(array) {
    const checkDigit = array.pop()
    console.log(checkDigit);
    //console.log(array)
    const oddNumbers = GrabEveryOddNumberFromRight(array);
    //console.log(oddNumbers);


    const realValues = calculateActualValue(oddNumbers);
    console.log('real values');
    console.log(realValues)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let total = realValues.reduce(reducer);
    console.log('Total of odd values')
    console.log(total)

    const evenNumbers = GrabEveryEvenNumberFromRight(array)
    console.log('Even Numbers:')
    console.log(evenNumbers);
    total += evenNumbers.reduce(reducer);
    console.log(total);

    let result = (total * 9) %10
  

    if (result == checkDigit) {
        return true
    }
    return false
}


function GrabEveryOddNumberFromRight(array) {
    const numbers = [];
    startDigit = array.length-1;


    while (startDigit >= 0) {
        if (array[startDigit] !== undefined) {
            numbers.push(array[startDigit]); 
            //console.log('startDigit '+array[startDigit]);
        }
        startDigit-=2;
    }

    return numbers
}

function GrabEveryEvenNumberFromRight(array) {
    const numbers1 = [];
    console.log(array);
    startDigit = array.length-2;


    while (startDigit >= 0) {
        if (array[startDigit] !== undefined) {
            numbers1.push(array[startDigit]); 
            //console.log('startDigit '+array[startDigit]);
        }
        startDigit-=2;
    }

    return numbers1
}

function calculateActualValue(array) {
    const actualValue = [];

    array.forEach(value => {
        let part = value * 2
        if (part > 9) {
            part -=9
        }
        actualValue.push(part)
    })
    return actualValue
}



function findInvalidCards(nestedArray) {
    const invalidCard = [];
    nestedArray.forEach(card => {
        let result = validateCred(card);
        if (result === false) {
            invalidCard.push(card)
        }
    });
    return invalidCard

}

function identifyCompany(array) {
    const significantBit = array[0];

    switch(significantBit) {
        case 3:
            return 'Amex (American Express)';
        case 4:
            return 'Visa';
        case 5:
            return 'Mastercard';
        case 6:
            return 'Discover';
        default:
            console.log('Company not found');
    }

}

function idInvalidCardCompanies(nestedArray) {
    const invalidCardCompanies = [];

    nestedArray.forEach(card => {
        company = identifyCompany(card);
        if (invalidCardCompanies.indexOf(company) == -1) {
            invalidCardCompanies.push(company);
        }
    })

    return invalidCardCompanies

}

console.log('Last Digit:')
console.log(validateCred(invalid1));

const finalList = idInvalidCardCompanies(batch)

console.log(finalList)




