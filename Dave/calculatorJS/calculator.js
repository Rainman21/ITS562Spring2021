

//calculator will determine statiscs for an array of numbers

//helper functions
const isFiniteNumericalArray = function (objectToTest) {
  if (objectToTest === null)
    return false;
  if (!Array.isArray(objectToTest))
    return false;
  if (objectToTest.length <= 0) {
    return false;
  }
  objectToTest.forEach(element => {
    if (!Number.isFinite(element))
      return false;
  })
  return true;
}

const getAverage = function (arrayOfNumber) {
  let average;
  let sum = 0;
  let count = 0;
  arrayOfNumber.forEach(element => {
    count += 1
    sum += element;
  })
  average = sum / count;
  return average;
}

const getMin = function (arrayOfNumber){
  let min =Number.MAX_SAFE_INTEGER;

  arrayOfNumber.forEach(element => {
    if(element<min){
      min=element;
    }
  })
    return min;
}

const getMax = function (arrayOfNumber){
  let max =Number.MIN_SAFE_INTEGER;

  arrayOfNumber.forEach(element => {
    if(element>max){
      max=element;
    }
  })
    return max;
}




const getStandardDeviation = function (arrayOfNumbers, average) {
  let sumOfSquares = 0.0
  arrayOfNumbers.forEach(element => {
    let diff = Math.pow(average - element, 2)
    sumOfSquares += diff
  })
  return Math.sqrt(sumOfSquares / arrayOfNumbers.length)
}

//Histogram will return the count of each item in an array

const getHistogram = function (arrayOfNumbers) {
  let returnMap = new Map()

  arrayOfNumbers.forEach(element => {
    const val = returnMap.get(element)
    if (val !== undefined) {
      returnMap.set(element, val + 1)
    } else {
      returnMap.set(element, 1)
    }
  })

  return returnMap;
}


var calculator = {}
calculator.data = []
calculator.average = 0.0
calculator.min = 0.0
calculator.max = 0.0
calculator.mode=undefined
calculator.count = 0
calculator.date = null
calculator.standardDeviation = 0.0
calculator.uniqueItems = null
calculator.histogram = null
calculator.doStatistics = function (arrayOfNumbers) {
  if (arrayOfNumbers === null) {
    throw new Error('Cannot perform statistics if data is null')
  }
  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error('Cannot perform statistics if data is not an array')
  }
  if (!isFiniteNumericalArray(arrayOfNumbers)) {
    throw new Error('Cannot perform statistics if data is not an array of numbers')
  }
  this.min=getMin(arrayOfNumbers)
  this.max=getMax(arrayOfNumbers)
  //this.mode =getMode(arrayOfNumbers)
  this.date = new Date();
  this.count = arrayOfNumbers.length
  this.average = getAverage(arrayOfNumbers)
  this.standardDeviation = getStandardDeviation(arrayOfNumbers, this.average)
  this.histogram = getHistogram(arrayOfNumbers)
  return this
  //calculator.doStatistics([2]).
}

calculator.toString = function () {
  let mode =0
  let keyVal=0
  let outputString = `=====Array Statistics========  
  Date of calc = ${this.date.toLocaleString()}
  Array had ${this.count} members
  min= ${this.min}  max= ${this.max} avg = ${this.average} stdDev=${this.standardDeviation}`

  for (const [key, value] of this.histogram.entries()) {
    outputString += `\n\t ${key} occurs ${value} times`
if(value>mode){
  mode=value
  keyVal=key
}

  }
  outputString+=`\n\tThe mode is ${keyVal}`
  return outputString;
}

// try {
//   //test handling a null pass to our method
//   calculator.doStatistics(null)
// } catch (err) {
//   console.log(err)
// }
//calculator.doStatistics([-1, 1, 1, 1, 1, 2, 3.3, 3.5])
calculator.doStatistics([6, 3, 9, 6, 6, 5, 9, 3])
console.log(calculator.toString())