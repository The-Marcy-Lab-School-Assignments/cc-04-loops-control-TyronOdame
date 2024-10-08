//Write your solutions in this file, don't forget to test your functions.

//Q1

const countFromOne = (num) => {
    for (let i = 1; i <= num; i++){
        console.log(i)
    }
}

countFromOne(5)

//Q2

const countEveryOdd = (num) => {
    for (let i = 1; i <= num; i+=2) {
        console.log(i)
    }
}

countEveryOdd(5)

//Q3

const isNegative = (num) => {
    if (num > 1){
        return true
    } else {
        return false
    }
}

console.log(isNegative(5))

//Q4

function betweenFiveAndTwenty (num) {
    if (num >= 5 && num <= 20) {
        return true
    } else {
        return false
    }
}

console.log(betweenFiveAndTwenty(21))

//Q5

const sumOfThreeOrFive = () => {
    let sum = 0
    
    for (let i = 0; i < 1000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum +=i

        }
    }
    return sum
}

console.log(sumOfThreeOrFive())

//Q6

const isAllLowerCase = (a) => {
    if (a === a.toLowerCase()) {
        return true
    } else {
        return false
    }
    
    
    // a = a.split('')

    // a.forEach((Element) => {
    //     if(Element === Element.toLowerCase()) {
    //         console.log(true)
    //     } else {
    //         console.log(false)
    //     }
    // })
    

}

console.log(isAllLowerCase('Tyron'))

//Bouns

const countMultiplesOfFive = (arr) => {
    let count = 0

    // arr.forEach((Element) => {
    //     let count = 0
        
    //     if (arr[Element] % 5 == 0) {
    //         count++
    //     }
    //     console.log(count)
    // })

    //return count

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0) {
            count ++
        }
    }
    return count
}

console.log(countMultiplesOfFive([1,2,3,4,5,6,7,8,9,10]))