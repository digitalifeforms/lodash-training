/* * * * * * * * * *

Codecademy Pro Intensive: Intro to Programming in JavaScript
Unit 7: Capstone Project: Lodash

Cohort: apr-30-2019

Student username: e_moji

Project started: 2019-06-21
Project completed: 2019-06-29

This file functions first and foremost as a learning opportunity, and
secondarily as a JavaScript library. Some methods are implemented more than once
and commented out rather than deleted, which is intentional as the comments
serve to remind me of alternative ways to approach these problems that I
learned as I worked through the project.

All methods are tested to pass the provided test files, but most of the methods
are admittedly less robust than their lodash counterparts. Further development
would be necessary to cover a wider range of functionality and edge cases.

* * * * * * * * * */


const _ = {
  // My original clamp() implementation relies entirely on control flow,
  // but the same output can be achieved more succintly with the Math object
  /*
  clamp(number, secondArg, thirdArg) {
    let lowerBound, upperBound;
    if (thirdArg) {
      lowerBound = secondArg;
      upperBound = thirdArg;
      if (number >= lowerBound && number <= upperBound) {
        return number;
      } else if (number < lowerBound) {
        return lowerBound;
      } else {
        return upperBound;
      }
    } else {
      upperBound = secondArg;
      if (number <= upperBound) {
        return number;
      } else {
        return upperBound;
      }
    }
  },
  */
  clamp(number, secondArg, thirdArg) {
    let lowerBound, upperBound;
    if (thirdArg) {
      lowerBound = secondArg;
      upperBound = thirdArg;
      return Math.min(Math.max(number, lowerBound), upperBound);
    } else {
      upperBound = secondArg;
      return Math.min(number, upperBound);
    }
  },
  inRange(number, secondArg, thirdArg) {
    let start, end;
    if (thirdArg) {
      start = Math.min(secondArg, thirdArg);
      end = Math.max(secondArg, thirdArg);
    } else {
      start = 0;
      end = secondArg;
    }
    return (number >= start && number < end);
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (string.length >= length) {
      return string;
    } else {
      const extraLength = length - string.length;
      const padCountBefore = Math.floor(extraLength / 2);
      const padCountAfter = Math.ceil(extraLength / 2);
      return ' '.repeat(padCountBefore) + string + ' '.repeat(padCountAfter);
    }
  },
  has(object, key) {
    return object[key] !== undefined;
  },
  // has() could also be implemented with built-in method to achieve same result
  /*
  has(object, key) {
    return object.hasOwnProperty(key);
  },
  */
  invert(object) {
    const invertedObject = {};
    for (propertyName in object) {
      invertedObject[object[propertyName]] = propertyName;
    }
    return invertedObject;
  },
  // My findKey() implementation seems to be much simpler than instructed, yet passes;
  // not sure why, but my guesses are:
    // 1. I'm allowing undefined to be returned implicitly rather than returning it explicitly
    // 2. I forewent the use of variables to contain property values and predicate output
  // I wonder if these two items lower the readability or reliability of my code?
  findKey(object, predicateFunc) {
    for (propertyName in object) {
      if (predicateFunc(object[propertyName])) {
        return propertyName;
      }
    }
  },
  drop(array, number) {
    if (!number) {
      number = 1;
    }
    return array.slice(number, array.length);
  },
  // My original dropWhile() implmentation,
  // before I realized that I could use an array iterator method
  /*
  dropWhile(array, predicateFunc) {
    let i = 0;
    let newArray = array;
    while (predicateFunc(array[i], array.indexOf(array[i]), array)) {
      newArray = array.slice(i + 1, array.length);
      i++;
    }
    return newArray;
  },
  */
  dropWhile(array, predicateFunc) {
    // array arg is available to predicate even if 3rd param is not declared;
    // I'm including 3rd param to remind myself that findIndex() takes 3 args
    const indexNumber = array.findIndex((element, index, array) => {
      return !predicateFunc(element, index, array);
    });
    const newArray = this.drop(array, indexNumber);
    return newArray;
  },
  // My original chunk() implementation,
  // which is inefficient as I wrote unnecessary code to implement functionality
  // that the for loop and the slice() method already offered
  /*
  chunk(array, size) {
    if (!size) {
      size = 1;
    }
    const newArray = [];
    const numberOfChunks = Math.floor(array.length / size);
    let chunkedElements = 0;
    let partialChunkSize;
    if (array.length % size > 0) {
      partialChunkSize = array.length % size;
    }
    for (let i = 0; i < numberOfChunks; i++) {
      newArray.push(array.slice(chunkedElements, chunkedElements + size));
      chunkedElements += size;
    }
    if (partialChunkSize) {
      newArray.push(array.slice(chunkedElements, chunkedElements + partialChunkSize));
    }
    return newArray;
  }
  */
  chunk(array, size) {
    if (!size) {
      size = 1;
    }
    const newArray = [];
    for (let i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size));
    }
    return newArray;
  }
};


// Do not write or modify code below this line.
module.exports = _;
