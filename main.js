// DO NOT CHANGE THIS

var print = console.log
var separator = '\n---\n\n'

function areEqualArrays (listA, listB) {
  if (listA.length !== listB.length) return false
  for (var i = 0; i < listA.length; i++) {
    if (Array.isArray(listA[i]) && Array.isArray(listA[i])) {
      return areEqualArrays(listA[i], listB[i])
    }
    if (listB.indexOf(listA[i]) === -1) return false
  }
  return true
}

function test (got, expected) {
  var prefix = ''
  var smiley = ''

  if (Array.isArray(got) && Array.isArray(expected) && areEqualArrays(got, expected)) {
    prefix = '\u{2714} '
    smiley = ' \u{1F600}'
  } else if (got === expected) {
    prefix = '\u{2714} '
    smiley = ' \u{1F600}'
  } else {
    prefix = '\u{2716} '
    smiley = ' \u{1F61E}'
  }
  print(prefix + 'got: ' + got + ', expected: ' + expected + smiley)
}

// --------------------------

// Basic algorithmic scripting
print('Basic Algorithmic Scripting part II')
// Ex 0

/*
    Falsy Bouncer
    Remove all falsy values from an array.
    Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/
function bouncer (arr) {
    // // Method I
  var cleanArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== false && arr[i] != null && arr[i] !== 0 && arr[i] !== '' && arr[i] !== undefined && arr[i] === arr[i]) {
      cleanArr.push(arr[i])
    }
  }
  return cleanArr

  // // Method II
  // var cleanArr = [];
  //   cleanArr = arr.filter(function(x) {
  //       return x;
  //   });
  // console.log(cleanArr);
  // return cleanArr;
}

print('bouncer')
test(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9])
test(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'])
test(bouncer([false, null, 0, NaN, undefined, '']), [])
test(bouncer([1, null, NaN, 2, undefined]), [1, 2])
print(separator)

// Ex 1

/*  Seek and Destroy
    You will be provided with an initial array (the first argument in the
    destroyer function), followed by one or more arguments.

    Remove all elements from the initial array that are of the same value as
    these arguments.
*/
function destroyer (arr) {
  // // Method I

  // let excludedList = Array.from(arguments).slice(1);

  // function test(el){
  //   // return excludedList.indexOf(el) == -1;
  //   return !excludedList.includes(el);
  // }

  // return arr.filter(test);

  // Method II

  let excludedList = Array.from(arguments).slice(1)
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    let found = false
    for (let j = 0; j < excludedList.length; j++) {
      if (arr[i] === excludedList[j]) {
        found = true
      }
    }
    if (!found) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

print('factorialize')
test(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1])
test(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1])
test(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1])
test(destroyer([2, 3, 2, 3], 2, 3), [])
test(destroyer(['tree', 'hamburger', 53], 'tree', 53), ['hamburger'])
print(separator)

 // Ex 2

/*  Where do I belong
    Return the lowest index at which a value (second argument) should be
    inserted into an array (first argument) once it has been sorted.
    The returned value should be a number.
    For example, getIndexToIns([1,2,3,4], 1.5) should return 1
    because it is greater than 1 (index 0), but less than 2 (index 1).
    Likewise, getIndexToIns([20,3,5], 19) should return 2
    because once the array has been sorted it will look like [3,5,20]
    and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
function getIndexToIns (arr, num) {
  let myArr = arr.sort(function (a, b) {
    return a - b
  })
  let numIndex
  for (let i = 0; i < myArr.length; i++) {
    if (num === myArr[i]) {
      numIndex = i
    } else if (myArr[i] < num) {
      numIndex = i + 1
    }
  }
  return numIndex
}

print('getIndexToIns')
test(getIndexToIns([10, 20, 30, 40, 50], 35), 3)
test(getIndexToIns([10, 20, 30, 40, 50], 30), 2)
test(getIndexToIns([40, 60], 50), 1)
test(getIndexToIns([3, 10, 5], 3), 0)
test(getIndexToIns([5, 3, 20, 3], 5), 2)
test(getIndexToIns([2, 20, 10], 19), 2)
test(getIndexToIns([2, 5, 10], 15), 3)
print(separator)

// Ex 3

/*  Sum All Numbers in a Range
    We'll pass you an array of two numbers. Return the sum of those two numbers
    and all numbers between them.
*/
function sumAll (arr) {
  let first, second
  let count = 0
  if (arr[0] < arr[1]) {
    first = arr[0]
    second = arr[1]
  } else if (arr[0] > arr[1]) {
    first = arr[1]
    second = arr[0]
  }
  for (let i = first; i <= second; i++) {
    count += i
  }
  return count
}

print('findLongestWord')
test(sumAll([1, 4]), 10)
test(sumAll([4, 1]), 10)
test(sumAll([5, 10]), 45)
test(sumAll([10, 5]), 45)
print(separator)

// Ex 4

/*  Diff Two Arrays
    Compare two arrays and return a new array with any items only found in one
    of the two given arrays, but not both.
    In other words, return the symmetric difference of the two arrays.
*/
function diffArray (arrA, arrB) {
  let newArr1 = arrA.filter(function test (el) {
    return arrB.indexOf(el) < 0
  })
  let newArr2 = arrB.filter(function test (el) {
    return arrA.indexOf(el) < 0
  })
  let newArr = newArr1.concat(newArr2)
  return newArr
}

print('diffArray')
test(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4])
test(diffArray(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['pink wool'])
test(diffArray(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['diorite', 'pink wool'])
test(diffArray(['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']), [])
test(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), ['piglet', 4])
test(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']),
    ['snuffleupagus', 'cookie monster', 'elmo'])
test(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']),
    [1, 'calf', 3, 'piglet', 7, 'filly'])
print(separator)

// Ex 5

/*  Roman Numeral Converter
    Convert the given number into a roman numeral.
    All roman numerals answers should be provided in upper-case.
*/
function convertToRoman (num) {
  var newArr = []
  var objsArr = []
  var str = '' + num
  var arr = str.split('').reverse()

  function createObj (el, s1, s2, s3, v) {
    return myObj = {
      firstSymbol: s1,
      fiveSymbol: s2,
      nextSymbol: s3,
      value: parseInt(el)
    }
  }

  var unit = createObj(arr[0], 'I', 'V', 'X')
  var tens = createObj(arr[1], 'X', 'L', 'C')
  var hundreds = createObj(arr[2], 'C', 'D', 'M')
  var thousands = createObj(arr[3], 'M', '', '')

  objsArr.push(unit, tens, hundreds, thousands)

  // console.log(objsArr)

  function numToSymbol (el) {
    switch (el.value) {
      case 0:
        result = ''
        break
      case 1:
        result = el.firstSymbol
        break
      case 2:
        result = el.firstSymbol.repeat(2)
        break
      case 3:
        result = el.firstSymbol.repeat(3)
        break
      case 4:
        result = el.firstSymbol + el.fiveSymbol
        break
      case 5:
        result = el.fiveSymbol
        break
      case 6:
        result = el.fiveSymbol + el.firstSymbol
        break
      case 7:
        result = el.fiveSymbol + el.firstSymbol.repeat(2)
        break
      case 8:
        result = el.fiveSymbol + el.firstSymbol.repeat(3)
        break
      case 9:
        result = el.firstSymbol + el.nextSymbol
        break
      default:
        result = ''
        break
    }
    return result
  }

  var n4 = numToSymbol(objsArr[3])
  var n3 = numToSymbol(objsArr[2])
  var n2 = numToSymbol(objsArr[1])
  var n1 = numToSymbol(objsArr[0])
  var roman = n4 + n3 + n2 + n1
  return roman
}

print('convertToRoman')
test(convertToRoman(2), 'II')
test(convertToRoman(3), 'III')
test(convertToRoman(4), 'IV')
test(convertToRoman(5), 'V')
test(convertToRoman(9), 'IX')
test(convertToRoman(12), 'XII')
test(convertToRoman(16), 'XVI')
test(convertToRoman(29), 'XXIX')
test(convertToRoman(44), 'XLIV')
test(convertToRoman(45), 'XLV')
test(convertToRoman(99), 'XCIX')
test(convertToRoman(500), 'D')
test(convertToRoman(501), 'DI')
test(convertToRoman(649), 'DCXLIX')
test(convertToRoman(798), 'DCCXCVIII')
test(convertToRoman(891), 'DCCCXCI')
test(convertToRoman(1000), 'M')
test(convertToRoman(1004), 'MIV')
test(convertToRoman(1006), 'MVI')
test(convertToRoman(1023), 'MXXIII')
test(convertToRoman(2014), 'MMXIV')
test(convertToRoman(3999), 'MMMCMXCIX')
print(separator)

// Ex 6

/*  Confirm the Ending
    Check if a string (first argument, str) ends with the given target string
    (second argument, target).
    This challenge can be solved with the .endsWith() method,
    which was introduced in ES2015. But for the purpose of this challenge,
    we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding (str, target) {
  let indexOfTarget = str.slice(str.length - target.length)
  return indexOfTarget === target
}

print('confirmEnding')
test(confirmEnding('Bastian', 'n'), true)
test(confirmEnding('Connor', 'n'), false)
test(confirmEnding('He has to give me a new name', 'name'), true)
test(confirmEnding('Walking on water and developing software from a\
specification are easy if both are frozen', 'specification'), false)
test(confirmEnding('Open sesame', 'pen'), false)
test(confirmEnding('If you want to save our world, you must hurry.\
 We dont know how much longer we can withstand the nothing', 'mountain'), false)
print(separator)

// Ex 7

/*  Repeat a string repeat a string
    Repeat a given string (first argument) num times (second argument).
    Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes (str, num) {
  let result = ''
  if (num <= 0) {
    result = ''
  } else {
    for (let i = 0; i < num; i++) {
      result += str
    }
  }
  return result
}

print('repeatStringNumTimes')
test(repeatStringNumTimes('*', 3), '***')
test(repeatStringNumTimes('*', 8), '********')
test(repeatStringNumTimes('abc', 3), 'abcabcabc')
test(repeatStringNumTimes('abc', -3), '')
print(separator)

// Ex 8

/*  Truncate a string
    Truncate a string (first argument) if it is longer than the given maximum
    string length (second argument).
    Return the truncated string with a ... ending.
    Note that inserting the three dots to the end will add to the string length.
    However, if the given maximum string length num is less than or equal to 3,
    then the addition of the three dots does not add to the string length
    in determining the truncated string.
*/
function truncateString (str, num) {
  if (num > 3) {
    if (str.length > num) {
      return str.slice(0, num - 3) + '...'
    } else {
      return str
    }
  } else if (num <= 3) {
    return str.slice(0, num) + '...'
  }
}

print('truncateString')
test(truncateString('A-tisket a-tasket A green and yellow basket', 11),
    'A-tisket...')
test(truncateString('Peter Piper picked a peck of pickled peppers', 14),
    'Peter Piper...')
test(truncateString('A-', 1), 'A...')
test(truncateString('Absolutely Longer', 2), 'Ab...')
test(truncateString('A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2),
    'A-tisket a-tasket A green and yellow basket')
test(truncateString('A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length),
    'A-tisket a-tasket A green and yellow basket')
print(separator)

// Ex 9

/*  Chunky Monkey
    Write a function that splits an array (first argument)
    into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups (arr, size) {
  let newArr = []
  for (let i = 0; i < arr.length; i += size) {
    let minArr = arr.slice(i, size + i)
    newArr.push(minArr)
  }
  console.log(newArr)
  return newArr
}

print('chunkArrayInGroups')
test(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]])
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]])
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]])
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]])
test(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]])
print(separator)

// Ex 10

/*  Slasher Flick
    Return the remaining elements of an array after chopping off n elements from the head.
    The head means the beginning of the array, or the zeroth index.
*/
function slasher (arr, howMany) {
  return arr.splice(howMany)
}

print('slasher')
test(slasher([1, 2, 3], 2), [3])
test(slasher([1, 2, 3], 0), [1, 2, 3])
test(slasher(['burgers', 'fries', 'shake'], 1), ['fries', 'shake'])
test(slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5), ['cheese', 4])
print(separator)

// Ex 11

/*  Mutations
    Return true if the string in the first element of the array contains all of the letters of the
    string in the second element of the array.
    For example, ["hello", "Hello"], should return true because all of the letters in the second
    string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string "hello"
    does not contain a "y".
    Lastly, ["Alien", "line"], should return true because all of the letters in "line"
    are present in "Alien".
*/
function mutation (arr) {
  var str0 = arr[0]
  var str1 = arr[1]
  var str0 = str0.toLowerCase()
  var str1 = str1.toLowerCase()
  for (var i = 0; i < str1.length; i++) {
    if (str0.indexOf(str1[i]) === -1) {
      return false
    }
  }
  return true
}

print('mutation')
test(mutation(['hello', 'hey']), false)
test(mutation(['hello', 'Hello']), true)
test(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']), true)
test(mutation(['Mary', 'Army']), true)
test(mutation(['hello', 'neo']), false)
test(mutation(['voodoo', 'no']), false)
print(separator)
