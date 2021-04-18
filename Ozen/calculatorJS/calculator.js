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
  
  
  const getMode = function (array) {
    var frequency = {}; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];
  
    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
  
      if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
      }
    }
  
    for (var k in frequency) {
      if (frequency[k] == maxFreq) {
        modes.push(k);
      }
    }
  
    return modes;
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
    this.date = new Date();
    this.min = Math.min.apply( Math, arrayOfNumbers )
    this.max = Math.max.apply( Math, arrayOfNumbers )
    this.count = arrayOfNumbers.length
    this.average = getAverage(arrayOfNumbers)
    this.standardDeviation = getStandardDeviation(arrayOfNumbers, this.average)
    this.histogram = getHistogram(arrayOfNumbers)
    this.mode = getMode(arrayOfNumbers)
    return this
    //calculator.doStatistics([2]).
  }
  
  calculator.toString = function () {
    let outputString = `=====Array Statistics========  
    Date of calc = ${this.date.toLocaleString()}
    Array had ${this.count} members
    min= ${this.min} max= ${this.max} avg = ${this.average} stdDev=${this.standardDeviation}
    mode = ${this.mode}`
  
  
    for (const [key, value] of this.histogram.entries()) {
      outputString += `\n\t ${key} occurs ${value} times`
    }
  
    return outputString;
  }
  
  // try {
  //   //test handling a null pass to our method
  //   calculator.doStatistics(null)
  // } catch (err) {
  //   console.log(err)
  // }
  calculator.doStatistics([1, 1, 1, 2, 2, 2, 3.3, 3.5])
  
  console.log(calculator.toString())