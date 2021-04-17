

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

const getMin = function(arrayOfNumbers){
  let calcMin = Math.min.apply(null,arrayOfNumbers)
  return calcMin
}
const getMax = function(arrayOfNumbers){
  let calcMax = Math.max.apply(null, arrayOfNumbers)
  return calcMax
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
  this.date = new Date();
  this.count = arrayOfNumbers.length
  this.average = getAverage(arrayOfNumbers)
  this.standardDeviation = getStandardDeviation(arrayOfNumbers, this.average)
  this.histogram = getHistogram(arrayOfNumbers)
  return this
}

calculator.toString = function () {
  let outputString = `=====Array Statistics========  
  Date of calc = ${this.date.toLocaleString()}
  Array had ${this.count} members
  min= ${this.min} max= ${this.max} avg = ${this.average} stdDev=${this.standardDeviation} ` //added max value to be printed

  for (const [key, value] of this.histogram.entries()) {
    outputString += `\n\t ${key} occurs ${value} times`
  }

  return outputString;
}

calculator.doStatistics([1, 1, 1, 1, 2, 3.3, 3.5])
console.log(calculator.toString())
