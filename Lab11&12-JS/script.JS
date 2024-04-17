// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
{
  const compareObjects = (objOne, objTwo) => {
    const keysOne = Object.keys(objOne);
    const keysTwo = Object.keys(objTwo);

    if (keysOne.length !== keysTwo.length) {
      return false;
    }
    for (let key of keysOne) {
      if (objOne[key] !== objTwo[key]) {
        return false;
      }
    }
    return true;
  };

  const objOne = { a: 1, b: 2 };
  const objTwo = { a: 1, b: 2, c: 3 };
  console.log(compareObjects(objOne, objTwo));
}

// 2. Write a JavaScript program to copy a string to the clipboard.
{
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  copyToClipboard("Hello, world!");
}

// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
{
  const csvToArray = (csv) => {
    rows = csv.trim().split("\n");
    return rows.map((row) => {
      return row.split(",");
    });
  };

  const csv = `ID,Name,Age
1,John,30
2,Jane,25
3,Bob,35`;
  console.log(csvToArray(csv));
}

// 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
{
  const csvTo2DArrayOfObjects = (csv) => {
    const rows = csv.trim().split("\n");
    const titles = rows[0].split(",");
    const result = rows.slice(1).map((row) => {
      const values = row.split(",");
      return titles.reduce((obj, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
    });
    return result;
  };

  const csv = `ID,Name,Age
1,John,30
2,Jane,25
3,Bob,35`;
  console.log(csvTo2DArrayOfObjects(csv));
}

// 5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.
{
  const arrayToColCsv = (array, columns) => {
    const titleRow = columns.join(",") + "\n";
    const csvContent = array
      .flatMap((obj) => columns.map((col) => obj[col] || "").join(","))
      .map((row) => row.replace(/,$/, ""))
      .join("\n");

    const csvString = titleRow + csvContent;

    return csvString;
  };

  const array = [
    { ID: 1, Name: "John", Age: 30 },
    { ID: 2, Name: "Jane", Age: 25 },
    { ID: 3, Name: "Bob" },
  ];
  const columns = ["ID", "Name", "Age"];
  console.log(arrayToColCsv(array, columns));
}

// 6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.
{
  const getTargetValue = (object, targetKey) => {
    return targetKey in object
      ? object[targetKey]
      : Object.values(object).reduce((acc, val) => {
          if (acc !== undefined) return acc;
          if (typeof val === "object") return getTargetValue(val, targetKey);
        }, undefined);
  };

  const object = {
    a: {
      b: {
        c: 1,
        d: 2,
      },
      e: {
        f: 3,
      },
    },
    g: {
      h: {
        i: 4,
      },
    },
  };
  const targetKey = "d";
  console.log(getTargetValue(object, targetKey));
}

// 7. Write a JavaScript program to convert a specified number into an array of digits.
{
  const numberToDigits = (number) => {
    return Array.from(number.toString());
  };

  const number = 1234;
  console.log(numberToDigits(number));
}

// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
{
  const filterArr = (array, ...args) => {
    const filtered = array.filter((a) => {
      return !args.includes(a);
    });
    return filtered;
  };

  const array = ["a", "b", "c", "a", "b", "c"];
  console.log(filterArr(array, "a", "c"));
}

// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
{
  const arrayCombinations = (array) => {
    return array.reduce((a, b) => a.concat(a.map((r) => [b, ...r])), [[]]);
  };

  const array = [1, 2];
  console.log(arrayCombinations(array));
}

// 10. Write a JavaScript program to extract values at specified indexes from a specified array.
{
  const filterArrWithIndex = (array, indices) => {
    const filtered = array.filter((a, index) => indices.includes(index));
    return filtered;
  };

  const array = ["a", "b", "c", "a", "b", "c"];
  console.log(filterArrWithIndex(array, [1, 5]));
}

// 11. Write a JavaScript program to generate a random hexadecimal color code.
{
  const createHexadecimalColorCode = () => {
    hexString = (Math.random() * 0xffffff).toString(16).toUpperCase();
    return "#" + hexString.slice(0, 6);
  };

  console.log(createHexadecimalColorCode());
}

// 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.
{
  const removeNonPrintableAscii = (string) => {
    return string.replace(/[^\x20-\x7F]/g, "");
  };

  console.log(removeNonPrintableAscii("äÄITIúÚ"));
}

// 13. Write a JavaScript program to convert a given string's length to bytes.
{
  const lengthToByteSize = (string) => {
    return new Blob([string]).size;
  };

  console.log(lengthToByteSize("äÄITIúÚ"));
}

// 14. Write a JavaScript program to replace multiple object keys' names with the values provided.
{
  const replaceKey = (object, keyObject) => {
    return Object.keys(object).reduce(
      (acc, key) => ({
        ...acc,
        [keyObject[key] || key]: object[key],
      }),
      {}
    );
  };

  const object = { a: 1, b: 2, c: 3 };
  const keyObject = { a: "alpha", b: "beta" };
  console.log(replaceKey(object, keyObject));
}

// 15. Write a JavaScript program to return the minimum-maximum value of an array, after applying the provided function to set a comparing rule.
{
  const getMinAndMax = (array, comparator) => {
    return {
      min: array.reduce((a, b) => (comparator(a, b) < 0 ? a : b)),
      max: array.reduce((a, b) => (comparator(a, b) > 0 ? a : b)),
    };
  };

  const array = [5, 2, 9, 3, 7, 1];
  const comparator = (a, b) => a > b;
  console.log(getMinAndMax(array, comparator));
}

// 16. Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
{
  const checkElements = (array, comparator) => {
    return array.every(comparator);
  };

  const array = [5, 2, 9, 3, 7];
  const comparator = (a) => a > 1;
  console.log(checkElements(array, comparator));
}

// 17. Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
{
  const splittedArrays = (arrayOne, arrayTwo) => {
    let i = 0;
    const falseArray = [];
    const trueArray = arrayOne.filter((element) =>
      arrayTwo[i++] ? true : falseArray.push(element) && false
    );
    return { trueArray, falseArray };
  };

  const arrayOne = [1, 2, 3, 4];
  const arrayTwo = [true, true, false, true];
  console.log(splittedArrays(arrayOne, arrayTwo));
}

// 18. Write a JavaScript program to remove specified elements from the left of a given array of elements.
{
  const removeElementFromLeft = (array, element) => {
    return array.slice(element);
  };

  const array = [1, 2, 3, 4];
  console.log(removeElementFromLeft(array, 2));
}

// 19. Write a JavaScript program to remove specified elements from the right of a given array of elements.
{
  const removeElementFromLeft = (array, element) => {
    return array.slice(0, -element);
  };

  const array = [1, 2, 3, 4];
  console.log(removeElementFromLeft(array, 1));
}

// 20. Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
{
  const extendColorCode = (string) => {
    return (
      "#" +
      Array.from(string.slice(1))
        .map((char) => char + char)
        .join("")
    );
  };

  colorCode = "#05a";
  console.log(extendColorCode(colorCode));
}

// 21. Write a JavaScript program to get every nth element in a given array.
{
  const every_nth = (arr, nth) => arr.filter((e) => e % nth === 0);

  console.log(every_nth([1, 2, 3, 4, 5, 6], 2));
  console.log(every_nth([1, 2, 3, 4, 5, 6], 3));
}

// 22. Write a JavaScript program to filter out non-unique values in an array.
{
  const filterNonUniqueValues = (arr) => {
    return arr.filter((value, index, array) => array.indexOf(value) === index);
  };

  const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
  console.log(filterNonUniqueValues(array));
}

// 23. Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.
{
  const filterNonUniqueValuesWithComparator = (arr, comparator) => {
    return arr.filter((v, i) =>
      arr.every((x, j) => (i === j) === comparator(v, x, i, j))
    );
  };

  console.log(
    filterNonUniqueValuesWithComparator(
      [
        { id: 0, value: "a" },
        { id: 1, value: "b" },
        { id: 2, value: "c" },
        { id: 1, value: "d" },
        { id: 0, value: "e" },
      ],
      (a, b) => a.id == b.id
    )
  );
}

// 24. Write a JavaScript program to dcapitalize the first letter of a string.
{
  const decapitalizeFirstLetter = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
  };

  const decapitalizedString = decapitalizeFirstLetter("Hello World");
  console.log(decapitalizedString);
}

// 25. Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.
{
  const createPairs = (a, b) =>
    a.reduce((acc, x) => acc.concat(b.map((y) => [x, y])), []);

  console.log(createPairs([1, 2], ["a", "b"]));
}

// 26. Write a JavaScript program that returns true if the string is y/yes or false if the string is n/no.
{
  function checkYesOrNo(str) {
    return /^(y|yes)$/i.test(str);
  }

  const userInput = "Yes";
  const result = checkYesOrNo(userInput) ? true : false;
  console.log(result);
}

// 27. Write a JavaScript program to find every element in any of the two given arrays at once, using the provided comparator function.
{
  const findCommonElements = (a, b, comparator) =>
    Array.from(
      new Set([
        ...a,
        ...b.filter((x) => a.findIndex((y) => comparator(x, y)) === -1),
      ])
    );

  console.log(
    findCommonElements(
      [1, 2, 3],
      [3, 4, 5],
      (a, b) => Math.round(a) === Math.round(b)
    )
  );
}

// 28. Write a JavaScript program to measure the time a function to execute.
{
  const time_taken = (callback) => {
    const result = callback();
    return result;
  };

  console.log("Time taken: " + time_taken(() => Math.sqrt(225)) + " ms");
}

// 29. Write a JavaScript program to convert a value to a safe integer.
{
  const toSafeInteger = (num) =>
    Math.round(
      Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
    );

  console.log(toSafeInteger("5.52"));
}

// 30. Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.
{
  const filterArrayByValues = (arr, ...args) =>
    arr.filter((v) => !args.includes(v));

  console.log(filterArrayByValues([2, 1, 2, 3], 1, 2));
}

// 31. Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.
{
  const getArrayExceptFirst = (arr) => {
    if (arr.length === 1) {
      return arr;
    } else {
      return arr.slice(1);
    }
  };

  const array = [1, 2, 3, 4, 5];
  console.log(getArrayExceptFirst(array));
}

// 32. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.
{
  const sumWithMapping = (arr, mappingFunc) => {
    return arr.map(mappingFunc).reduce((acc, val) => acc + val, 0);
  };

  const array = [1, 2, 3, 4, 5];
  const mappingFunction = (num) => num * 2;
  console.log(sumWithMapping(array, mappingFunction));
}

// 33. Write a JavaScript program to generate a random number in the specified range.
{
  const getRandomNumberInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  console.log(getRandomNumberInRange(10, 20));
}

// 34. Write a JavaScript program to generate a random integer in the specified range.
{
  const getRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log(getRandomIntegerInRange(10, 20));
}

// 35. Write a JavaScript program to get an array of given n random integers in the specified range.
{
  const getRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomIntegers = (n, min, max) => {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(getRandomIntegerInRange(min, max));
    }
    return result;
  };

  console.log(getRandomIntegers(5, 10, 20));
}

// 36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.
{
  const invokeFunctions = (...funcs) => {
    return funcs.map((func) => func());
  };

  const add = (a, b) => {
    return a + b;
  };

  const subtract = (a, b) => {
    return a - b;
  };

  const result = invokeFunctions(
    () => add(3, 5),
    () => subtract(10, 7)
  );
  console.log(result);
}

// 37. Write a JavaScript program to get a sorted array of objects ordered by properties and orders.
{
  const sortByProperty = (arr, prop, order = "asc") => {
    const sortOrder = order === "asc" ? 1 : -1;
    return arr.sort((a, b) => (a[prop] - b[prop]) * sortOrder);
  };

  const data = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 20 },
  ];

  const sortedData = sortByProperty(data, "age", "asc");
  console.log(sortedData);
}

// 38. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.
{
  const padString = (str, length, char = " ") => {
    if (str.length >= length) return str;
    const paddingLength = length - str.length;
    const padding = char
      .repeat(Math.ceil(paddingLength / char.length))
      .substring(0, paddingLength);
    return padding + str + padding;
  };

  const paddedStr = padString("hello", 10, "*");
  console.log(paddedStr);
}

// 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
{
  const removeKeys = (obj, keys) => {
    const newObj = { ...obj };
    keys.forEach((key) => delete newObj[key]);
    return newObj;
  };

  const obj = { a: 1, b: 2, c: 3 };
  const updatedObj = removeKeys(obj, ["a", "c"]);
  console.log(updatedObj);
}

// 40. Write a JavaScript program to create an array of key-value pair arrays from a given object.
{
  const keyValuePairsToArray = (obj) => {
    return Object.entries(obj);
  };

  const obj = { a: 1, b: 2, c: 3 };
  const keyValueArray = keyValuePairsToArray(obj);
  console.log(keyValueArray);
}

// 41. Write a JavaScript program to create an object from the given key-value pairs.
{
  const createObjectFromPairs = (pairs) => {
    return Object.fromEntries(pairs);
  };

  const pairs = [
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ];
  const newObj = createObjectFromPairs(pairs);
  console.log(newObj);
}

// 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.
{
  const coalesce = (validateFn, ...args) => {
    return args.find((arg) => validateFn(arg));
  };

  const isValid = (val) => val !== undefined && val !== null;
  const result = coalesce(isValid, null, undefined, 0, "", "hello");
  console.log(result);
}

// 43. Write a JavaScript program to change a function that accepts an array into a variadic function.
{
  const variadicFunction = (fn) => {
    return (...args) => {
      return fn(args);
    };
  };

  const sum = (nums) => nums.reduce((acc, val) => acc + val, 0);
  const variadicSum = variadicFunction(sum);
  console.log(variadicSum(1, 2, 3, 4));
}

// 44. Write a JavaScript program to remove false values from a given array.
{
  const removeFalseValues = (arr) => {
    return arr.filter(Boolean);
  };

  const data = [0, 1, false, true, "", "hello", null, undefined];
  const filteredData = removeFalseValues(data);
  console.log(filteredData);
}

// 45. Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
{
  const splitIntoGroups = (arr, filterFn) => {
    return arr.reduce(
      (result, current) => {
        result[filterFn(current) ? 0 : 1].push(current);
        return result;
      },
      [[], []]
    );
  };

  const data = [1, 2, 3, 4, 5, 6];
  const isEven = (num) => num % 2 === 0;
  const groupedData = splitIntoGroups(data, isEven);
  console.log(groupedData);
}

// 46. Write a JavaScript program to curry (curries) a function.
{
  const curry = (fn) => {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return function (...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  };

  const add = (a, b, c) => a + b + c;
  const curriedAdd = curry(add);
  console.log(curriedAdd(1)(2)(3));
}

// 47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.
{
  const deepCompare = (a, b) => {
    if (a === b) return true;
    if (
      typeof a !== "object" ||
      typeof b !== "object" ||
      a === null ||
      b === null
    )
      return false;

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
      if (!keysB.includes(key) || !deepCompare(a[key], b[key])) return false;
    }

    return true;
  };

  const obj1 = { a: { b: 1 } };
  const obj2 = { a: { b: 1 } };
  console.log(deepCompare(obj1, obj2));
}

// 48. Write a JavaScript program to get an array of function property names from the own (and optionally inherited) enumerable properties of an object.
{
  const getFunctionPropertyNames = (obj, includeInherited = false) => {
    const propNames = [];
    for (let key in obj) {
      if (typeof obj[key] === "function") {
        propNames.push(key);
      }
    }
    if (includeInherited) {
      const proto = Object.getPrototypeOf(obj);
      if (proto !== null) {
        propNames.push(...getFunctionPropertyNames(proto, true));
      }
    }
    return propNames;
  };

  const obj = {
    method1() {},
    method2() {},
    prop1: 10,
  };
  const functionProps = getFunctionPropertyNames(obj, true);
  console.log(functionProps);
}

// 49. Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.
{
  const getPropertiesBySelectors = (obj, selectors) => {
    const result = {};
    selectors.forEach((selector) => {
      if (obj.hasOwnProperty(selector)) {
        result[selector] = obj[selector];
      }
    });
    return result;
  };

  const obj = { a: 1, b: 2, c: 3, d: 4 };
  const selectors = ["a", "c", "e"];
  const selectedProps = getPropertiesBySelectors(obj, selectors);
  console.log(selectedProps);
}

// 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.
{
  const integerToSuffixedString = (num) => {
    const suffix = num >= 12 ? "pm" : "am";
    const hour = num > 12 ? num - 12 : num;
    return `${hour}${suffix}`;
  };

  console.log(integerToSuffixedString(10));
  console.log(integerToSuffixedString(15));
}

// 51. Write a JavaScript program to get an object containing the current URL parameters.
{
  const getCurrentURLParameters = () => {
    const params = new URLSearchParams(window.location.search);
    const paramsObj = {};
    for (const [key, value] of params) {
      paramsObj[key] = value;
    }
    return paramsObj;
  };

  console.log(getCurrentURLParameters());
}

// 52. Write a JavaScript program to group the elements of a given array based on the given function.
{
  const groupArrayElements = (arr, fn) => {
    const result = {};
    arr.forEach((item) => {
      const key = fn(item);
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    });
    return result;
  };

  const data = [1, 2, 3, 4, 5, 6];
  const groupedData = groupArrayElements(data, (item) =>
    item % 2 === 0 ? "even" : "odd"
  );
  console.log(groupedData);
}

// 53. Write a JavaScript program to initialize a two-dimensional array of given size and value.
{
  const initialize2DArray = (rows, cols, value) => {
    return Array.from({ length: rows }, () => Array(cols).fill(value));
  };

  console.log(initialize2DArray(3, 3, 0));
}

// 54. Write a JavaScript program to initialize an array containing numbers in the specified range. Start and end are inclusive of their common point of difference.
{
  const initializeArrayWithRange = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  console.log(initializeArrayWithRange(1, 5));
}

// 55. Write a JavaScript program to join all given URL segments together, then normalize the resulting URL.
{
  const joinAndNormalizeURL = (...segments) => {
    const joinedURL = segments.join("/");
    const url = new URL(joinedURL, "https://example.com");
    return url.href;
  };

  console.log(joinAndNormalizeURL("path", "to", "resource"));
}

// 56. Write a JavaScript program to check whether all elements in a given array are equal or not.
{
  const areAllElementsEqual = (arr) => {
    return arr.every((val) => val === arr[0]);
  };

  console.log(areAllElementsEqual([1, 1, 1, 1]));
  console.log(areAllElementsEqual([1, 2, 3, 4]));
}

// 57. Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.
{
  const computeAverage = (arr, mapFn) => {
    const mappedValues = arr.map(mapFn);
    const sum = mappedValues.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  };

  const data = [1, 2, 3, 4, 5];
  const average = computeAverage(data, (num) => num * 2);
  console.log(average);
}

// 58. Write a JavaScript program to split values into two groups according to a predicate function. This specifies which group an element in the input collection belongs to.
{
  const splitValuesByPredicate = (arr, predicateFn) => {
    return arr.reduce(
      (result, current) => {
        result[predicateFn(current) ? 0 : 1].push(current);
        return result;
      },
      [[], []]
    );
  };

  const data = [1, 2, 3, 4, 5];
  const isEven = (num) => num % 2 === 0;
  const groupedData = splitValuesByPredicate(data, isEven);
  console.log(groupedData);
}

// 59. Write a JavaScript program to create a function that invokes fn in a given context. Optionally add any additional variables to the arguments beginning.
{
  const invokeWithContext = (fn, context, ...args) => {
    return fn.apply(context, args);
  };

  const context = { value: 10 };

  function addValue(num) {
    return this.value + num;
  }

  const result = invokeWithContext(addValue, context, 5);
  console.log(result);
}

// 60. Write a JavaScript program to create a function that invokes the method at a given key of an object. Optionally, add any parameters that are supplied to the beginning of the arguments.
{
  const invokeMethodByKey = (obj, key, ...args) => {
    const method = obj[key];
    if (typeof method === "function") {
      return method.apply(obj, args);
    } else {
      throw new Error(`${key} is not a function in the object.`);
    }
  };

  const person = {
    name: "John",
    greet(greeting) {
      return `${greeting}, ${this.name}!`;
    },
  };

  const result = invokeMethodByKey(person, "greet", "Hello");
  console.log(result);
}

// 61. Write a JavaScript program to cast the provided value as an array if it's not one.
{
  const castToArray = (value) => {
    return Array.isArray(value) ? value : [value];
  };

  const arr1 = castToArray("hello");
  const arr2 = castToArray([1, 2, 3]);

  console.log(arr1);
  console.log(arr2);
}

// 62. Write a JavaScript program to chain asynchronous functions.
{
  const chainAsyncFunctions = (...fns) => {
    return (initialValue) => {
      return fns.reduce(async (acc, fn) => {
        return fn(await acc);
      }, initialValue);
    };
  };

  const asyncAddOne = async (num) => num + 1;
  const asyncMultiplyByTwo = async (num) => num * 2;

  const chainedAsyncFunctions = chainAsyncFunctions(
    asyncAddOne,
    asyncMultiplyByTwo
  );
  chainedAsyncFunctions(3).then((result) => {
    console.log(result);
  });
}

// 63. Write a JavaScript program to clone a given regular expression.
{
  const cloneRegExp = (regexp) => {
    const flags = regexp.flags;
    return new RegExp(regexp.source, flags);
  };

  const regex1 = /test/gi;
  const regex2 = cloneRegExp(regex1);

  console.log(regex2);
}

// 64. Write a JavaScript program to get the first non-null / undefined argument.
{
  const firstNonNullArgument = (...args) => {
    return args.find((arg) => arg !== null && arg !== undefined);
  };

  const result = firstNonNullArgument(null, undefined, 0, "", "hello");
  console.log(result);
}

// 65. Write a JavaScript program to add special characters to text to print in color on the console (combined with console.log()).
{
  const colorizeText = (text, colorCode) => {
    return `\x1b[${colorCode}m${text}\x1b[0m`;
  };

  console.log(colorizeText("Hello, world!", 32));
}

// 66. Write a JavaScript program to perform right-to-left function composition.
{
  const composeRight = (...fns) => {
    return (initialValue) => {
      return fns.reduceRight((acc, fn) => {
        return fn(acc);
      }, initialValue);
    };
  };

  const addOne = (num) => num + 1;
  const multiplyByTwo = (num) => num * 2;
  const composedFn = composeRight(multiplyByTwo, addOne);

  console.log(composedFn(3));
}

// 67. Write a JavaScript program to perform left-to-right function composition.
{
  const composeLeft = (...fns) => {
    return (initialValue) => {
      return fns.reduce((acc, fn) => {
        return fn(acc);
      }, initialValue);
    };
  };

  const addOne = (num) => num + 1;
  const multiplyByTwo = (num) => num * 2;
  const composedFn = composeLeft(addOne, multiplyByTwo);

  console.log(composedFn(3));
}

// 68. Write a JavaScript program that accepts a converging function and a list of branching functions. It returns a function that applies each branching function to the arguments. The results of the branching functions are passed as arguments to the converging function.
{
  const converge = (convergingFn, ...branchingFns) => {
    return (...args) => {
      const results = branchingFns.map((fn) => fn(...args));
      return convergingFn(...results);
    };
  };

  const sum = (...nums) => nums.reduce((acc, val) => acc + val, 0);
  const multiply = (a, b) => a * b;
  const subtract = (a, b) => a - b;

  const convergingFn = converge(sum, multiply, subtract);
  console.log(convergingFn(2, 3));
}

// 69. Write a JavaScript program to group array elements based on the given function. It return the count of elements in each group.
{
  const groupByCount = (arr, fn) => {
    return arr.reduce((acc, val) => {
      const key = fn(val);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  };

  const data = [1, 2, 3, 4, 5];
  const groupCount = groupByCount(data, (num) =>
    num % 2 === 0 ? "even" : "odd"
  );
  console.log(groupCount);
}

// 70. Write a JavaScript program to count a value in an array.
{
  const countValueInArray = (arr, value) => {
    return arr.filter((item) => item === value).length;
  };

  const data = [1, 2, 3, 1, 4, 1, 5];
  const count = countValueInArray(data, 1);
  console.log(count);
}

// 71. Write a JavaScript program to create a deep clone of an object.
{
  const deepCloneObject = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };

  const originalObject = { a: 1, b: { c: 2 } };
  const clonedObject = deepCloneObject(originalObject);

  console.log(clonedObject);
}

// 72. Write a JavaScript program to detect whether the website is opened on a mobile device or a desktop/laptop.
{
  const detectDeviceType = () => {
    const userAgent = navigator.userAgent;
    if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(userAgent)) {
      return "Mobile Device";
    } else {
      return "Desktop/Laptop";
    }
  };

  console.log(detectDeviceType());
}

// 73. Write a JavaScript program to return the difference between two arrays, after applying the provided function to each array element of both.
{
  const differenceWith = (arr1, arr2, fn) => {
    const set = new Set(arr2.map(fn));
    return arr1.filter((item) => !set.has(fn(item)));
  };

  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 4, 6];
  const result = differenceWith(arr1, arr2, (x) => x * 2);
  console.log(result);
}

// 74. Write a JavaScript program to filter out all values from an array for which the comparator function does not return true.
{
  const filterByComparator = (arr, comparatorFn) => {
    return arr.filter(comparatorFn);
  };

  const data = [1, 2, 3, 4, 5];
  const filteredData = filterByComparator(data, (num) => num % 2 === 0);
  console.log(filteredData);
}

// 75. Write a JavaScript program to compute the updated ratings between two or more opponents using the Elo rating system. It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from top to bottom (winner -> loser).
{
  const computeEloRatings = (preRatings, kFactor = 32, ...results) => {
    const newRatings = [];
    for (let i = 0; i < preRatings.length; i++) {
      const actualScore = results[i] ? 1 : 0;
      const expectedScore =
        1 / (1 + 10 ** ((preRatings[i] - preRatings[i ? 0 : 1]) / 400));
      const newRating = preRatings[i] + kFactor * (actualScore - expectedScore);
      newRatings.push(Math.round(newRating));
    }
    return newRatings;
  };

  const ratings = [1200, 1300];
  const updatedRatings = computeEloRatings(ratings, 32, true, false);
  console.log(updatedRatings);
}

// 76. Write a JavaScript program to execute a provided function once for each array element, starting with the array's last element.
{
  const forEachRight = (arr, callback) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      callback(arr[i], i, arr);
    }
  };

  const numbers = [1, 2, 3, 4, 5];
  forEachRight(numbers, (num) => console.log(num * 2));
}

// 77. Write a JavaScript program to iterate over all the properties of an object, running a callback for each one.
{
  const iterateObjectProperties = (obj, callback) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        callback(key, obj[key]);
      }
    }
  };

  const person = { name: "John", age: 30, city: "New York" };
  iterateObjectProperties(person, (key, value) =>
    console.log(`${key}: ${value}`)
  );
}

// 78. Write a JavaScript program to invert the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.
{
  const invertObject = (obj, transformFn = (val) => val) => {
    const invertedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = transformFn(key);
        invertedObj[obj[key]] = invertedObj[obj[key]]
          ? invertedObj[obj[key]].concat(value)
          : [value];
      }
    }
    return invertedObj;
  };

  const data = { a: 1, b: 2, c: 1 };
  const invertedData = invertObject(data, (key) => key.toUpperCase());
  console.log(invertedData);
}

// 79. Write a JavaScript program to take any number of iterable objects or objects with a length property and return the longest one.
{
  const longestIterable = (...args) => {
    return args.reduce((acc, val) => (val.length > acc.length ? val : acc), []);
  };

  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6, 7];
  const longest = longestIterable(arr1, arr2, "hello", [8, 9]);
  console.log(longest);
}

// 80. Write a JavaScript program to implement the Luhn Algorithm used to validate identification numbers. For example, credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
{
  const luhnAlgorithm = (num) => {
    const digits = `${num}`.split("").map(Number);
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
      if (digits[i] > 9) digits[i] -= 9;
    }
    const sum = digits.reduce((acc, val) => acc + val, 0);
    return sum % 10 === 0;
  };

  const creditCardNumber = 4111111111111111;
  console.log(luhnAlgorithm(creditCardNumber));
}

// 81. Write a JavaScript program to create an object with keys generated by running the provided function for each key. The object will have the same values as the provided object.
{
  const createObjectWithKeys = (keysFn, obj) => {
    const newObj = {};
    for (let key of keysFn(Object.keys(obj))) {
      newObj[key] = obj[key];
    }
    return newObj;
  };

  const keysFn = (keys) => keys.map((key) => key.toUpperCase());
  const originalObject = { a: 1, b: 2, c: 3 };
  const newObj = createObjectWithKeys(keysFn, originalObject);
  console.log(newObj);
}

// 82. Write a JavaScript program to map array values to an object using a function. The key-value pairs consist of the original value as the key and the mapped value.
{
  const mapArrayToObj = (arr, mappingFn) => {
    const obj = {};
    arr.forEach((item) => (obj[item] = mappingFn(item)));
    return obj;
  };

  const numbers = [1, 2, 3, 4];
  const mappedObj = mapArrayToObj(numbers, (num) => num * num);
  console.log(mappedObj);
}

// 83. Write a JavaScript program to create an updated string with the results of calling a provided function on every character in the called string.
{
  const updateStringWithFunction = (str, updateFn) => {
    return str.split("").map(updateFn).join("");
  };

  const originalStr = "hello";
  const updatedStr = updateStringWithFunction(originalStr, (char) =>
    char.toUpperCase()
  );
  console.log(updatedStr);
}

// 84. Write a JavaScript program to create an object with the same keys as the provided object. It will also generate values generated by running the provided function for each value.
{
  const createObjectWithFunctionValues = (obj, func) => {
    const newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = func(obj[key]);
      }
    }
    return newObj;
  };

  const data = { a: 1, b: 2, c: 3 };
  const updatedData = createObjectWithFunctionValues(data, (val) => val * 2);
  console.log(updatedData);
}

// 85. Write a JavaScript program to replace all but the last number of characters with the specified mask character.
{
  const maskString = (str, numCharsToKeep, maskChar = "*") => {
    return (
      str.slice(0, -numCharsToKeep).replace(/./g, maskChar) +
      str.slice(-numCharsToKeep)
    );
  };

  const originalStr = "1234567890";
  const maskedStr = maskString(originalStr, 4, "#");
  console.log(maskedStr);
}

// 86. Write a JavaScript program to get the maximum value of an array, after mapping each element to a value using the provided function.
{
  const maxAfterMapping = (arr, mapFn) => {
    return Math.max(...arr.map(mapFn));
  };

  const numbers = [1, 2, 3, 4, 5];
  const maxSquared = maxAfterMapping(numbers, (num) => num ** 2);
  console.log(maxSquared);
}

// 87. Write a JavaScript program to get the n maximum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in descending order).
{
  const getNMaxElements = (arr, n) => {
    if (n >= arr.length) {
      return arr.sort((a, b) => b - a);
    }
    return arr.sort((a, b) => b - a).slice(0, n);
  };

  const numbers = [10, 30, 50, 20, 40];
  const nMax = getNMaxElements(numbers, 2);
  console.log(nMax);
}

// 88. Write a JavaScript program to get the median of an array of numbers.
{
  const getMedian = (arr) => {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
      return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
    } else {
      return sortedArr[middleIndex];
    }
  };

  const numbers = [5, 3, 8, 2, 9];
  const median = getMedian(numbers);
  console.log(median);
}

// 89. Write a JavaScript program to negates a predicate function.
{
  const negatePredicate = (predicateFn) => {
    return (...args) => !predicateFn(...args);
  };

  const isEven = (num) => num % 2 === 0;
  const isOdd = negatePredicate(isEven);
  console.log(isOdd(5));
  console.log(isOdd(6));
}

// 90. Write a JavaScript program to nest a given flat array of objects linked to one another recursively.
{
  const nestObjects = (
    flatArr,
    parentId = null,
    idKey = "id",
    parentIdKey = "parentId"
  ) => {
    const nestedObj = {};
    flatArr.forEach((item) => {
      if (item[parentIdKey] === parentId) {
        const children = nestObjects(flatArr, item[idKey], idKey, parentIdKey);
        if (Object.keys(children).length) {
          item.children = children;
        }
        nestedObj[item[idKey]] = item;
      }
    });
    return nestedObj;
  };

  const flatData = [
    { id: 1, name: "Parent 1" },
    { id: 2, name: "Child 1", parentId: 1 },
    { id: 3, name: "Child 2", parentId: 1 },
    { id: 4, name: "Parent 2" },
  ];
  const nestedData = nestObjects(flatData);
  console.log(JSON.stringify(nestedData, null, 2));
}

// 91. Write a JavaScript program that returns true if the provided predicate function returns false for all elements in a collection, false otherwise.
{
  const allFalse = (arr, predicateFn) => {
    return arr.every((item) => !predicateFn(item));
  };

  const numbers = [1, 2, 3, 4, 5];
  const isNegative = (num) => num < 0;
  console.log(allFalse(numbers, isNegative));
}

// 92. Write a JavaScript program to create a function that gets the argument at index n. If n is negative, the nth argument from the end is returned.
{
  const getArgumentAtIndex = (index, ...args) => {
    const adjustedIndex = index < 0 ? args.length + index : index;
    return args[adjustedIndex];
  };

  console.log(getArgumentAtIndex(-1, 1, 2, 3));
  console.log(getArgumentAtIndex(1, "a", "b", "c"));
}

// 93. Write a JavaScript program to remove an event listener from an element.
{
  const removeEventListener = (element, eventName, handler) => {
    element.removeEventListener(eventName, handler);
  };

  const button = document.getElementById("myButton");
  const handleClick = () => {
    console.log("Button clicked");
  };
  button.addEventListener("click", handleClick);

  removeEventListener(button, "click", handleClick);
}

// 94. Write a JavaScript program to move the specified amount of elements to the end of the array.
{
  const moveElementsToEnd = (arr, numElements) => {
    const movedElements = arr.splice(0, numElements);
    arr.push(...movedElements);
    return arr;
  };

  const array = [1, 2, 3, 4, 5];
  const resultArray = moveElementsToEnd(array, 2);
  console.log(resultArray);
}

// 95. Write a JavaScript program to add an event listener to an element with the ability to use event delegation.
{
  const addEventListenerWithDelegation = (
    container,
    eventName,
    selector,
    handler
  ) => {
    container.addEventListener(eventName, (event) => {
      if (event.target.matches(selector)) {
        handler(event);
      }
    });
  };

  const list = document.getElementById("myList");
  addEventListenerWithDelegation(list, "click", "li", (event) => {
    console.log("Clicked on", event.target.textContent);
  });
}

// 96. Write a JavaScript program to pick the key-value pairs corresponding to the given keys from an object.
{
  const pickKeyValuePairs = (obj, keys) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => keys.includes(key))
    );
  };

  const data = { a: 1, b: 2, c: 3, d: 4 };
  const keysToPick = ["a", "c"];
  const pickedData = pickKeyValuePairs(data, keysToPick);
  console.log(pickedData);
}

// 97. Write a JavaScript program to create an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).
{
  const createObjectBasedOnFunction = (obj, func) => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => func(value, key))
    );
  };

  const data = { a: 1, b: 0, c: 3, d: 4 };
  const newObj = createObjectBasedOnFunction(data, (value) => value % 2 === 0);
  console.log(newObj);
}

// 98. Write a JavaScript program to filter an array of objects based on a condition while also filtering out unspecified keys.
{
  const filterArrayObjects = (arr, conditionFn, keys) => {
    return arr.map((obj) =>
      keys.reduce((acc, key) => {
        if (conditionFn(obj[key])) {
          acc[key] = obj[key];
        }
        return acc;
      }, {})
    );
  };

  const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 },
  ];
  const filteredData = filterArrayObjects(data, (age) => age > 30, ["name"]);
  console.log(filteredData);
}

// 99. Write a JavaScript program to hash a given input string into a whole number.
{
  const hashStringToNumber = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
    }
    return Math.abs(hash);
  };

  const inputString = "hello world";
  const hashedNumber = hashStringToNumber(inputString);
  console.log(hashedNumber);
}

// 100. Write a JavaScript program to create an array of elements, grouped based on the position in the original arrays. Use function as the last value to specify how grouped values should be combined.
{
  const groupByPosition = (...arrays) => {
    const maxLength = Math.max(...arrays.map((arr) => arr.length));
    const result = [];
    for (let i = 0; i < maxLength; i++) {
      result.push(arrays.map((arr) => arr[i]).filter(Boolean));
    }
    return result;
  };

  const array1 = [1, 2, 3];
  const array2 = ["a", "b"];
  const combinedArray = groupByPosition(array1, array2, (a, b) => a + b);
  console.log(combinedArray);
}

// 101. Write a JavaScript program to return the object associating the properties to the values of a given array of valid property identifiers and an array of values.
{
  const createObjectFromArrays = (keys, values) => {
    return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  };

  const propertyNames = ["name", "age", "gender"];
  const propertyValues = ["John Doe", 30, "Male"];
  const obj = createObjectFromArrays(propertyNames, propertyValues);
  console.log(obj);
}

// 102. Write a JavaScript program to create an array of elements, grouped based on the position in the original array.
{
  const groupByPosition = (...arrays) => {
    const maxLength = Math.max(...arrays.map((arr) => arr.length));
    const result = [];
    for (let i = 0; i < maxLength; i++) {
      result.push(arrays.map((arr) => arr[i]));
    }
    return result;
  };

  const array1 = [1, 2, 3];
  const array2 = ["a", "b", "c"];
  const combinedArray = groupByPosition(array1, array2);
  console.log(combinedArray);
}

// 103. Write a JavaScript program to convert a given string into an array of words.
{
  const stringToArrayOfWords = (str) => {
    return str.split(/\s+/).filter(Boolean);
  };

  const sentence = "Hello world, how are you?";
  const wordsArray = stringToArrayOfWords(sentence);
  console.log(wordsArray);
}

// 104. Write a JavaScript program to test a value, x, against a predicate function. If true, return fn(x). Else, return x.
{
  const testValueWithPredicate = (value, predicateFn, fn) => {
    return predicateFn(value) ? fn(value) : value;
  };

  const value = 5;
  const isEven = (num) => num % 2 === 0;
  const result = testValueWithPredicate(value, isEven, (num) => num * 2);
  console.log(result);
}

// 105. Write a JavaScript program that returns true if the given value is a number, false otherwise.
{
  const isNumber = (value) => typeof value === "number" && !isNaN(value);

  console.log(isNumber(5));
  console.log(isNumber("hello"));
}

// 106. Write a JavaScript program to create an array of elements, ungrouping the elements in an array produced by zip and applying the provided function.
{
  const ungroupAndApply = (arr, fn) => {
    return arr.flatMap((subArr) => subArr.map(fn));
  };

  const groupedArray = [[1, 2], [3, 4, 5], [6]];
  const ungroupedArray = ungroupAndApply(groupedArray, (num) => num * 2);
  console.log(ungroupedArray);
}

// 107. Write a JavaScript program to get all distinct values (from the right side of the array) of an array, based on a provided comparator function.
{
  const distinctValuesFromRight = (arr, comparatorFn) => {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!result.some((item) => comparatorFn(item, arr[i]))) {
        result.unshift(arr[i]);
      }
    }
    return result;
  };

  const array = [1, 2, 3, 2, 4, 5, 3];
  const distinctArray = distinctValuesFromRight(array, (a, b) => a === b);
  console.log(distinctArray);
}

// 108. Write a JavaScript program to get all unique values of an array, based on a provided comparator function.
{
  const getUniqueValuesWithComparator = (arr, comparatorFn) => {
    return arr.filter((value, index, self) => {
      return self.findIndex((item) => comparatorFn(item, value)) === index;
    });
  };

  const numbers = [1, 2, 3, 4, 5, 6];
  const uniqueNumbers = getUniqueValuesWithComparator(
    numbers,
    (a, b) => a % 2 === b % 2
  );
  console.log(uniqueNumbers);
}

// 109. Write a JavaScript program to get the nth element of a given array.
{
  const getNthElement = (arr, n) => {
    return n >= 0 ? arr[n] : arr[arr.length + n];
  };

  const numbers = [10, 20, 30, 40, 50];
  console.log(getNthElement(numbers, 2));
  console.log(getNthElement(numbers, -1));
}

// 110. Write a JavaScript program to get every element in any of the two arrays at once.
{
  const getElementsFromTwoArrays = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
  };

  const arr1 = [1, 2, 3];
  const arr2 = [3, 4, 5];
  console.log(getElementsFromTwoArrays(arr1, arr2));
}

// 111. Write a JavaScript program to build an array, using an iterator function and an initial seed value.
{
  const buildArray = (iteratorFn, seedValue, size) => {
    const result = [];
    let current = seedValue;
    for (let i = 0; i < size; i++) {
      result.push(current);
      current = iteratorFn(current);
    }
    return result;
  };

  const multiplyByTwo = (num) => num * 2;
  console.log(buildArray(multiplyByTwo, 1, 5));
}

// 112. Write a JavaScript program to unflatten an object with the paths for keys.
{
  const unflattenObject = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const keys = key.split(".");
      let nested = acc;
      for (let i = 0; i < keys.length - 1; i++) {
        const currentKey = keys[i];
        nested[currentKey] = nested[currentKey] || {};
        nested = nested[currentKey];
      }
      nested[keys[keys.length - 1]] = value;
      return acc;
    }, {});
  };

  const flattenedObject = {
    "a.b.c": 1,
    "a.d.e": 2,
    f: 3,
  };
  console.log(unflattenObject(flattenedObject));
}

// 113. Write a JavaScript program to unescape escaped HTML characters.
{
  const unescapeHTML = (str) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
  };

  const escapedString = "&lt;p&gt;Hello &amp; world!&lt;/p&gt;";
  console.log(unescapeHTML(escapedString));
}

// 114. Write a JavaScript program to uncurry a function up to depth n.
{
  const uncurry = (fn, depth = 1) => {
    return (...args) => {
      let currentFn = fn;
      for (let i = 0; i < depth; i++) {
        currentFn = currentFn(args[i]);
      }
      return currentFn;
    };
  };

  const add = (a) => (b) => (c) => a + b + c;
  const uncurriedAdd = uncurry(add, 3);
  console.log(uncurriedAdd(1, 2, 3));
}

// 115. Write a JavaScript program to create a function that accepts up to one argument, ignoring any additional arguments.
{
  const createFunctionIgnoringArgs = (fn) => {
    return (...args) => fn(args[0]);
  };

  const printFirstArg = (arg) => {
    console.log(arg);
  };
  const printFirst = createFunctionIgnoringArgs(printFirstArg);
  printFirst(1, 2, 3);
}

// 116. Write a JavaScript program to check if the predicate (second argument) is truthy on all elements of a collection (first argument).
{
  const checkPredicateForAllElements = (collection, predicate) => {
    return collection.every(predicate);
  };

  const numbers = [2, 4, 6, 8, 10];
  const isEven = (num) => num % 2 === 0;
  console.log(checkPredicateForAllElements(numbers, isEven));
}

// 117. Write a JavaScript program to truncate a string up to a specified length.
{
  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  const longString = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
  console.log(truncateString(longString, 20));
}

// 118. Write a JavaScript program to apply a function against an accumulator and each key in the object (from left to right).
{
  const applyFunctionToObjectKeys = (obj, fn, accumulator) => {
    for (let key in obj) {
      accumulator = fn(accumulator, obj[key], key);
    }
    return accumulator;
  };

  const sumValues = (acc, value) => acc + value;
  const numbers = { a: 1, b: 2, c: 3 };
  console.log(applyFunctionToObjectKeys(numbers, sumValues, 0));
}

// 119. Write a JavaScript program to create tomorrow's date in a string representation.
{
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toDateString();
  };

  console.log(getTomorrowDate());
}

// 120. Write a JavaScript program to convert a string to snake case.
{
  const convertToSnakeCase = (str) => {
    return str.replace(/\s+/g, "_").toLowerCase();
  };

  const sentence = "Convert This String To Snake Case";
  console.log(convertToSnakeCase(sentence));
}

// 121. Write a JavaScript program to convert a value to a safe integer.
{
  const convertToSafeInteger = (num) => {
    return Math.round(
      Math.max(
        Math.min(Number(num), Number.MAX_SAFE_INTEGER),
        Number.MIN_SAFE_INTEGER
      )
    );
  };

  console.log(convertToSafeInteger("123"));
  console.log(convertToSafeInteger("12345678901234567890"));
}

// 122. Write a JavaScript program to add an ordinal suffix to a number.
{
  const addOrdinalSuffix = (num) => {
    if (num % 100 >= 11 && num % 100 <= 13) {
      return num + "th";
    }
    switch (num % 10) {
      case 1:
        return num + "st";
      case 2:
        return num + "nd";
      case 3:
        return num + "rd";
      default:
        return num + "th";
    }
  };

  console.log(addOrdinalSuffix(1));
  console.log(addOrdinalSuffix(22));
  console.log(addOrdinalSuffix(33));
  console.log(addOrdinalSuffix(100));
}

// 123. Write a JavaScript program to convert a string to kebab case.
{
  const convertToKebabCase = (str) => {
    return str.replace(/\s+/g, "-").toLowerCase();
  };

  const sentence = "Convert This String To Kebab Case";
  console.log(convertToKebabCase(sentence));
}

// 124. Write a JavaScript program to reduce a given Array-like into a value hash (keyed data store).
{
  const reduceArrayLikeToObject = (arrayLike, reducerFn, initialValue) => {
    return [...arrayLike].reduce(reducerFn, initialValue);
  };

  const nodeList = document.querySelectorAll("div");
  const result = reduceArrayLikeToObject(
    nodeList,
    (acc, el) => {
      acc[el.id] = el.className;
      return acc;
    },
    {}
  );
  console.log(result);
}

// 125. Write a JavaScript program that converts float-point arithmetic to decimal form, and creates a comma separated string from a number.
{
  const convertFloatToDecimal = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const number = 1234567890.12345;
  console.log(convertFloatToDecimal(number));
}

// 126. Write a JavaScript program to create a specified currency format from a given number.
{
  const formatCurrency = (number, currencySymbol) => {
    return (
      currencySymbol + number.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    );
  };

  console.log(formatCurrency(123456.789, "$"));
}

// 127. Write a JavaScript program to Iterate over a callback n times.
{
  const iterateCallbackNTimes = (callback, n) => {
    for (let i = 0; i < n; i++) {
      callback();
    }
  };

  iterateCallbackNTimes(() => console.log("Hello"), 3);
}

// 128. Write a JavaScript program to get removed elements of a given array until the passed function returns true.
{
  const getRemovedElementsUntil = (arr, predicate) => {
    const removed = [];
    let index = 0;
    while (index < arr.length && !predicate(arr[index])) {
      removed.push(arr.splice(index, 1)[0]);
    }
    return removed;
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const isEven = (num) => num % 2 === 0;
  console.log(getRemovedElementsUntil(numbers, isEven));
  console.log(numbers);
}

// 129. Write a JavaScript program to get removed elements from the end of a given array until the passed function returns true.
{
  const removeElementsUntil = (arr, predicateFn) => {
    while (!predicateFn(arr[arr.length - 1])) {
      arr.pop();
    }
    return arr;
  };

  const numbers = [1, 2, 3, 4, 5];
  const isEven = (num) => num % 2 === 0;
  console.log(removeElementsUntil(numbers, isEven));
}

// 130. Write a JavaScript program to remove n elements from the end of a given array.
{
  const removeNElementsFromEnd = (arr, n) => {
    return arr.slice(0, -n);
  };

  const numbers = [1, 2, 3, 4, 5];
  console.log(removeNElementsFromEnd(numbers, 2));
}

// 131. Write a JavaScript program to get an array with n elements removed from the beginning from a given array
{
  const removeNElementsFromBeginning = (arr, n) => {
    return arr.slice(n);
  };

  const numbers = [1, 2, 3, 4, 5];
  console.log(removeNElementsFromBeginning(numbers, 2));
}

// 132. Write a JavaScript program to get the symmetric difference between two given arrays, using a provided function as a comparator.
{
  const getSymmetricDifferenceWithComparator = (arr1, arr2, comparatorFn) => {
    const symmetricDifference = [];
    arr1.forEach((item1) => {
      if (!arr2.some((item2) => comparatorFn(item1, item2))) {
        symmetricDifference.push(item1);
      }
    });
    arr2.forEach((item2) => {
      if (!arr1.some((item1) => comparatorFn(item1, item2))) {
        symmetricDifference.push(item2);
      }
    });
    return symmetricDifference;
  };

  const numbers1 = [1, 2, 3, 4];
  const numbers2 = [3, 4, 5, 6];
  const isEven = (num1, num2) => num1 % 2 === num2 % 2;
  console.log(getSymmetricDifferenceWithComparator(numbers1, numbers2, isEven));
}

// 133. Write a JavaScript program to get the symmetric difference between two given arrays, after applying the provided function to each array element of both.
{
  const getSymmetricDifferenceWithFunction = (arr1, arr2, func) => {
    const symmetricDifference = [];
    arr1.forEach((item1) => {
      if (!arr2.some((item2) => func(item1) === func(item2))) {
        symmetricDifference.push(item1);
      }
    });
    arr2.forEach((item2) => {
      if (!arr1.some((item1) => func(item1) === func(item2))) {
        symmetricDifference.push(item2);
      }
    });
    return symmetricDifference;
  };

  const numbers1 = [1, 2, 3, 4];
  const numbers2 = [3, 4, 5, 6];
  const square = (num) => num * num;
  console.log(getSymmetricDifferenceWithFunction(numbers1, numbers2, square));
}

// 134. Write a JavaScript program to get the symmetric difference between two given arrays.
{
  const getSymmetricDifference = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const difference = new Set(
      [...set1]
        .filter((x) => !set2.has(x))
        .concat([...set2].filter((x) => !set1.has(x)))
    );
    return Array.from(difference);
  };

  const numbers1 = [1, 2, 3, 4];
  const numbers2 = [3, 4, 5, 6];
  console.log(getSymmetricDifference(numbers1, numbers2));
}

// 135. Write a JavaScript program to get the sum of the powers of all the numbers from start to end (both inclusive).
{
  const getSumOfPowers = (start, end, power) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += Math.pow(i, power);
    }
    return sum;
  };

  console.log(getSumOfPowers(1, 3, 2));
}

// 136. Write a JavaScript program to generate all permutations of a string (contains duplicates).
{
  const generatePermutations = (str) => {
    if (str.length <= 1) return [str];
    const permutations = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const remainingChars = str.slice(0, i) + str.slice(i + 1);
      const innerPermutations = generatePermutations(remainingChars);
      for (let perm of innerPermutations) {
        permutations.push(char + perm);
      }
    }
    return permutations;
  };

  console.log(generatePermutations("abc"));
}

// 137. Write a JavaScript program to perform stable sorting of an array, preserving the initial indexes of items when their values are the same. Returns a new array instead of mutating the original array.
{
  const stableSort = (arr, comparator) => {
    const indexedArr = arr.map((value, index) => [value, index]);
    indexedArr.sort((a, b) => {
      const result = comparator(a[0], b[0]);
      return result !== 0 ? result : a[1] - b[1];
    });
    return indexedArr.map((item) => item[0]);
  };

  const arr = [{ value: 3 }, { value: 1 }, { value: 2 }];
  const sortedArr = stableSort(arr, (a, b) => a.value - b.value);
  console.log(sortedArr);
}

// 138. Write a JavaScript program that takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.
{
  const mapToFunctionInputs = (fn) => {
    return (args) => fn(...args);
  };

  const add = (a, b) => a + b;
  const mappedAdd = mapToFunctionInputs(add);
  console.log(mappedAdd([1, 2]));
}

// 139. Write a JavaScript program to split a multiline string into an array of lines.
{
  const splitMultilineString = (str) => {
    return str.split(/\r?\n/);
  };

  const multilineStr = `Line 1
  Line 2
  Line 3`;
  console.log(splitMultilineString(multilineStr));
}

// 140. Write a JavaScript program to get the highest index at which value should be inserted into an array in order to maintain its sort order. This is based on a provided iterator function.
{
  const sortedLastIndexBy = (arr, n, fn) => {
    const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
    const val = fn(n);
    const index = arr
      .map(fn)
      .reverse()
      .findIndex((el) => (isDescending ? val <= el : val >= el));
    return index === -1 ? 0 : arr.length - index;
  };

  console.log(sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, (o) => o.x));
}

// 141. Write a JavaScript program to get the highest index at which value should be inserted into an array in order to maintain its sort order.
{
  const findHighestIndex = (arr, val) => {
    let index = arr.findIndex((element) => element > val);
    return index === -1 ? arr.length : index;
  };

  const arr = [10, 20, 30, 40, 50];
  const value = 35;
  console.log(findHighestIndex(arr, value));
}

// 142. Write a JavaScript program to get the lowest index at which values should be inserted into an array in order to maintain its sorting order.
{
  const findLowestIndex = (arr, val) => {
    let index = arr.findIndex((element) => element >= val);
    return index === -1 ? arr.length : index;
  };

  const arr = [10, 20, 30, 40, 50];
  const value = 35;
  console.log(findLowestIndex(arr, value));
}

// 143. Write a JavaScript program to sort the characters of a string Alphabetically.
{
  const sortAlphabetically = (str) => str.split("").sort().join("");

  const inputStr = "javascript";
  console.log(sortAlphabetically(inputStr));
}

// 144. Write a JavaScript program to get an array of elements that appear in both arrays.
{
  const getCommonElements = (arr1, arr2) =>
    arr1.filter((element) => arr2.includes(element));

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  console.log(getCommonElements(array1, array2));
}

// 145. Write a JavaScript program to randomize the order of array values, returning an updated array.
{
  const randomizeArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const originalArray = [1, 2, 3, 4, 5];
  const randomizedArray = randomizeArray(originalArray);
  console.log(randomizedArray);
}

// 146. Write a JavaScript program to create a shallow clone of an object.
{
  const shallowClone = (obj) => {
    return { ...obj };
  };

  const originalObj = { name: "John", age: 30 };
  const clonedObj = shallowClone(originalObj);
  console.log(clonedObj);
}

// 147. Write a JavaScript program to serialize a cookie name-value pair into a Set-Cookie header string.
{
  const serializeCookie = (name, value) =>
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  const cookieName = "username";
  const cookieValue = "john_doe";
  console.log(serializeCookie(cookieName, cookieValue));
}

// 148. Write a JavaScript program to hash the input string into a whole number.
{
  const hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash &= hash;
    }
    return Math.abs(hash);
  };

  console.log(hashString("hello"));
}

// 149. Write a JavaScript program to get a random element from an array.
{
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const arrayToPickFrom = [10, 20, 30, 40, 50];
  console.log(getRandomElement(arrayToPickFrom));
}

// 150. Write a JavaScript program to run a given array of promises in series.
{
  const runPromisesInSeries = (promises) => {
    return promises.reduce((promiseChain, currentPromise) => {
      return promiseChain.then((chainResults) =>
        currentPromise().then((currentResult) => [
          ...chainResults,
          currentResult,
        ])
      );
    }, Promise.resolve([]));
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const promisesToRun = [
    () => delay(1000).then(() => "One"),
    () => delay(2000).then(() => "Two"),
    () => delay(3000).then(() => "Three"),
  ];

  runPromisesInSeries(promisesToRun).then((results) => {
    console.log(results);
  });
}

// 51. Write a JavaScript program to run a function in a separate thread using a Web Worker. This allows long running functions to not block the UI.
{
  const runAsync = (fn) => {
    const worker = new Worker(
      URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
        type: "application/javascript; charset=utf-8",
      })
    );
    return new Promise((res, rej) => {
      worker.onmessage = ({ data }) => {
        res(data), worker.terminate();
      };
      worker.onerror = (err) => {
        rej(err), worker.terminate();
      };
    });
  };

  const longRunningFunction = () => {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 700; j++) {
        for (let k = 0; k < 300; k++) {
          result = result + i + j + k;
        }
      }
    }
    return result;
  };

  runAsync(longRunningFunction).then(console.log);
  runAsync(() => 10 ** 3).then(console.log);
  let outsideVariable = 50;
  runAsync(() => typeof outsideVariable).then(console.log);
}

// 152. Write a JavaScript program to round a number to a specified amount of digits.
{
  const roundToDigits = (num, digits) => Number(num.toFixed(digits));

  console.log(roundToDigits(3.14159, 2));
}

// 153. Write a JavaScript program to reverse the order of characters in the string.
{
  const reverseString = (str) => str.split("").reverse().join("");

  console.log(reverseString("hello"));
}

// 154. Write a JavaScript program to create an object composed of the properties the given function returns false for. The function is invoked with two arguments: (value and key).
{
  const omitBy = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => !fn(value, key))
    );

  const obj = { a: 1, b: 2, c: 3 };
  const newObj = omitBy(obj, (val) => val > 1);
  console.log(newObj);
}

// 155. Write a JavaScript program that takes a predicate and an array, like Array.filter(), but only keeps x if pred(x) returns false.
{
  const reject = (arr, predicate) => arr.filter((x) => !predicate(x));

  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = reject(numbers, (x) => x % 2 === 0);
  console.log(newNumbers);
}

// 156. Write a JavaScript program to apply a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.
{
  const reduceSuccessively = (arr, fn, initial) =>
    arr.reduce(
      (acc, val) => [
        ...acc,
        acc.length ? fn(acc.slice(-1)[0], val) : fn(initial, val),
      ],
      []
    );

  const numbers = [1, 2, 3, 4, 5];
  const sumArray = reduceSuccessively(numbers, (acc, val) => acc + val, 0);
  console.log(sumArray);
}

// 157. Write a JavaScript program to redirect to a specified URL.
{
  const redirectToURL = (url) => (window.location.href = url);

  //redirectToURL("https://www.example.com");
}

// 158. Write a JavaScript program to create a function that invokes the provided function with its arguments arranged according to the specified indexes.
{
  const rearg =
    (fn, indexes) =>
    (...args) =>
      fn(...indexes.map((index) => args[index]));

  const rearrangedFn = rearg((a, b, c) => [a, b, c], [2, 0, 1]);
  console.log(rearrangedFn(1, 2, 3));
}

// 159. Write a JavaScript program to get an array of lines from the specified file.
{
  const getLinesFromFile = async (filePath) => {
    const response = await fetch(filePath);
    const text = await response.text();
    return text.split("\n");
  };
}

// 160. Write a JavaScript program to mutate the original array to filter out the values specified, based on a given iterator function.
{
  const filterMutate = (arr, fn) => {
    const indexesToRemove = [];
    arr.forEach((item, index) => {
      if (fn(item, index)) {
        indexesToRemove.push(index);
      }
    });
    indexesToRemove.reverse().forEach((index) => arr.splice(index, 1));
    return arr;
  };

  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = filterMutate(numbers, (x) => x % 2 === 0);
  console.log(filteredNumbers);
}

// 161. Write a JavaScript program to mutate the original array to filter out the values specified. Returns the removed elements.
{
  const filterOutAndGetRemoved = (arr, predicate) => {
    const removed = [];
    const filtered = arr.filter((item, index) => {
      if (predicate(item)) {
        removed.push(item);
        return false;
      }
      return true;
    });
    return removed;
  };

  const numbers = [1, 2, 3, 4, 5];
  console.log(filterOutAndGetRemoved(numbers, (x) => x % 2 === 0));
}

// 162. Write a JavaScript program to convert an asynchronous function to return a promise.
{
  const asyncToPromise =
    (fn) =>
    (...args) =>
      new Promise((resolve, reject) => {
        fn(...args, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });

  const asyncFn = (x, callback) => {
    setTimeout(() => {
      callback(null, x * 2);
    }, 1000);
  };

  const promiseFn = asyncToPromise(asyncFn);
  promiseFn(5).then((result) => console.log(result));
}

// 163. Write a JavaScript program to convert a number in bytes to a human-readable string.
{
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
    );
  };

  console.log(formatBytes(123456789));
}

// 164. Write a JavaScript program that returns the singular or plural form of the word based on the input number.
{
  const pluralize = (word, number) => (number === 1 ? word : word + "s");

  console.log(pluralize("apple", 1));
  console.log(pluralize("apple", 3));
}

// 165. Write a JavaScript program to perform left-to-right function composition.
{
  const compose =
    (...fns) =>
    (x) =>
      fns.reduce((acc, fn) => fn(acc), x);

  const add = (x) => (y) => x + y;
  const multiply = (x) => (y) => x * y;

  const addThenMultiply = compose(multiply(3), add(2));
  console.log(addThenMultiply(5));
}

// 166. Write a JavaScript program to perform left-to-right function composition for asynchronous functions.
{
  const composeAsync =
    (...fns) =>
    (arg) =>
      fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

  const sum = composeAsync(
    (x) => x + 1,
    (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),
    (x) => x + 3,
    async (x) => (await x) + 4
  );
  (async () => {
    console.log(await sum(5));
  })();
}

// 167. Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value. This is done using the percentile formula.
{
  const countNumbersLessThanOrEqualTo = (arr, num) =>
    (arr.filter((item) => item <= num).length / arr.length) * 100;

  const numbers = [10, 20, 30, 40, 50];
  console.log(countNumbersLessThanOrEqualTo(numbers, 30));
}

// 168. Write a JavaScript program to group the elements into two arrays, depending on the provided function's truthiness for each element.
{
  const groupBy = (array, predicate) => {
    return array.reduce(
      (acc, value) => {
        const group = predicate(value) ? 0 : 1;
        acc[group].push(value);
        return acc;
      },
      [[], []]
    );
  };

  const numbers = [1, 2, 3, 4, 5];
  const isEven = (num) => num % 2 === 0;
  console.log(groupBy(numbers, isEven));
}

// 169. Write a JavaScript program to create a function that invokes fn with partials appended to the arguments it receives.
{
  const partialRight =
    (fn, ...partials) =>
    (...args) =>
      fn(...args, ...partials);

  const greet = (greeting, name) => `${greeting}, ${name}!`;
  const greetMorning = partialRight(greet, "Good morning");
  console.log(greetMorning("Malak"));
}

// 170. Write a JavaScript program to create a function that invokes fn with partials prepended to the arguments it receives.
{
  const partialLeft =
    (fn, ...partials) =>
    (...args) =>
      fn(...partials, ...args);

  const greet = (greeting, name) => `${greeting}, ${name}!`;
  const greetEnthusiastically = partialLeft(greet, "Hello");
  console.log(greetEnthusiastically("Malak"));
}

// 171. Write a JavaScript program to parse an HTTP Cookie header string and return an object of all cookie name-value pairs.
{
  const parseCookie = (cookieHeader) => {
    return cookieHeader
      .split(";")
      .map((pair) => pair.trim().split("="))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  };

  const cookieHeader = "name=John; age=30; city=New York";
  console.log(parseCookie(cookieHeader));
}

// 172. Write a JavaScript program to create a function that invokes the provided function with its arguments transformed.
{
  const transformArguments =
    (fn, transform) =>
    (...args) =>
      fn(...args.map(transform));

  const add = (a, b) => a + b;
  const addTriple = transformArguments(add, (x) => 3 * x);
  console.log(addTriple(2, 4));
}

// 173. Write a JavaScript program to get the nth element of a given array of elements.
{
  const getNthElement = (arr, n) => (n >= 0 ? arr[n] : arr[arr.length + n]);

  const array = [1, 2, 3, 4, 5];
  console.log(getNthElement(array, 2));
  console.log(getNthElement(array, -1));
}

// 174. Write a JavaScript program to convert a NodeList into an array.
{
  const nodeListToArray = (nodeList) => Array.from(nodeList);

  const nodeList = document.querySelectorAll("h1");
  console.log(nodeListToArray(nodeList));
}

// 175. Write a JavaScript program to get the index of the function in an array of functions which executed the fastest.
{
  const getFastestFunctionIndex = (functionsArray) => {
    let times = functionsArray.map((func) => {
      let start = performance.now();
      func();
      let end = performance.now();
      return end - start;
    });

    return times.indexOf(Math.min(...times));
  };

  let functionsArray = [
    () => {
      for (let i = 0; i < 1000000; i++) {}
    },
    () => {
      for (let i = 0; i < 5000000; i++) {}
    },
    () => {
      for (let i = 0; i < 3000000; i++) {}
    },
  ];

  console.log(getFastestFunctionIndex(functionsArray));
}

// 176. Write a JavaScript program to get the n minimum elements from the provided array. If n is greater than or equal to the provided array's length, return the original array (sorted in ascending order).
{
  const getNMinimumElements = (arr, n) => {
    if (n >= arr.length) {
      return arr.sort((a, b) => a - b);
    } else {
      return arr
        .slice()
        .sort((a, b) => a - b)
        .slice(0, n);
    }
  };

  let array = [5, 2, 8, 1, 9];
  console.log(getNMinimumElements(array, 2));
}

// 177. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.
{
  const getMinValueAfterMapping = (arr, mapFunc) => {
    let mappedArray = arr.map(mapFunc);
    return Math.min(...mappedArray);
  };

  let numbers = [1, 2, 3, 4];
  let mapFunction = (x) => x * x;
  console.log(getMinValueAfterMapping(numbers, mapFunction));
}

// 178. Write a JavaScript program to create a new object from the combination of two or more objects.
{
  const combineObjects = (...objects) => Object.assign({}, ...objects);

  let obj1 = { a: 1, b: 2 };
  let obj2 = { c: 3 };
  console.log(combineObjects(obj1, obj2));
}

// 179. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one. This is based on a provided function.
{
  const compareObjects = (obj1, obj2, comparator) => {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }
    return keys1.every((key) => comparator(obj1[key], obj2[key]));
  };

  let object1 = { a: 1, b: 2 };
  let object2 = { a: 1, b: 3 };
  console.log(compareObjects(object1, object2, (a, b) => a === b));
}

// 180. Write a JavaScript program to create an object from the specified object, where all keys are in lowercase.
{
  const keysToLowerCase = (obj) =>
    Object.keys(obj).reduce((acc, key) => {
      acc[key.toLowerCase()] = obj[key];
      return acc;
    }, {});

  let originalObj = { Name: "John", Age: 30 };
  let newObj = keysToLowerCase(originalObj);
  console.log(newObj);
}

// 181. Write a JavaScript program to get the last element from an given array.
{
  const getLastElement = (arr) => arr[arr.length - 1];

  let array = [1, 2, 3, 4, 5];
  console.log(getLastElement(array));
}

// 182. Write a JavaScript program to join all elements of an array into a string and return this string. Use a separator and an end separator.
{
  const joinArrayElements = (arr, separator, endSeparator) =>
    arr.join(separator) + endSeparator;

  let array = ["Hello", "World"];
  console.log(joinArrayElements(array, " ", "!"));
}

// 183. Write a JavaScript program to check if the provided argument is valid JSON.
{
  const isValidJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  };

  let jsonString = '{"name": "John", "age": 30}';
  console.log(isValidJSON(jsonString));
}

// 184. Write a JavaScript program to check if a given string is upper case or not.
{
  const isUpperCase = (str) => str === str.toUpperCase();

  let uppercaseStr = "HELLO";
  console.log(isUpperCase(uppercaseStr));
}

// 185. Write a JavaScript program that returns true if the specified value is undefined, false otherwise.
{
  const isUndefined = (value) => {
    return typeof value === "undefined";
  };

  let x;
  console.log(isUndefined(x));
}

// 186. Write a JavaScript program to check if the given argument is a symbol.
{
  const isSymbol = (value) => typeof value === "symbol";

  console.log(isSymbol(Symbol()));
}

// 187. Write a JavaScript program to check if the given argument is a string.
{
  const isString = (arg) => typeof arg === "string";

  console.log(isString("hello"));
}

// 188. Write a JavaScript program that returns 1 if the array is sorted in ascending order. It returns -1 if it is sorted in descending order or 0 if it is not sorted.
{
  const checkSortOrder = (arr) => {
    let ascSorted = arr.slice().sort((a, b) => a - b);
    let descSorted = arr.slice().sort((a, b) => b - a);

    if (JSON.stringify(arr) === JSON.stringify(ascSorted)) {
      return 1;
    } else if (JSON.stringify(arr) === JSON.stringify(descSorted)) {
      return -1;
    } else {
      return 0;
    }
  };

  console.log(checkSortOrder([1, 2, 3]));
  console.log(checkSortOrder([3, 2, 1]));
  console.log(checkSortOrder([2, 1, 3]));
}

// 189. Write a JavaScript program that returns true if an object looks like a Promise, false otherwise.
{
  const isPromiseLike = (obj) => obj && typeof obj.then === "function";

  console.log(isPromiseLike({ then: function () {} }));
}

// 190. Write a JavaScript program to return a boolean determining if the passed value is primitive or not.
{
  const isPrimitive = (value) => value !== Object(value);

  console.log(isPrimitive("hello"));
  console.log(isPrimitive({}));
}

// 191. Write a JavaScript program to check if the provided integer is a prime number or is not.
{
  const isPrime = (num) => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return num >= 2;
  };

  console.log(isPrime(11));
}

// 192. Write a JavaScript program to check if the provided value is an object created by the Object constructor.
{
  const isObjectFromObjectConstructor = (value) =>
    value instanceof Object && value.constructor === Object;

  console.log(isObjectFromObjectConstructor(new Object()));
}

// 193. Write a JavaScript program to check if a value is object-like. Check if the provided value is not null and its typeof is equal to 'object'.
{
  const isObjectLike = (value) => value !== null && typeof value === "object";

  console.log(isObjectLike({}));
}

// 194. Write a JavaScript program to get a boolean determining if the passed value is an object or not.
{
  const isObject = (value) => value !== null && typeof value === "object";

  console.log(isObject({}));
}

// 195. Write a JavaScript program to check if a given argument is a number.
{
  const isNumber = (value) => typeof value === "number" && !isNaN(value);

  console.log(isNumber(42));
}

// 196. Write a JavaScript program that will return true if the specified value is null, false otherwise.
{
  const isNull = (value) => value === null;

  console.log(isNull(null));
}

// 197. Write a JavaScript program to check if a string is lower case or not.
{
  const isLowerCase = (str) => str === str.toLowerCase();

  console.log(isLowerCase("hello"));
}

// 198. Write a JavaScript program to check if the given argument is a function.
{
  const isFunction = (value) => typeof value === "function";

  console.log(isFunction(() => {}));
}

// 199. Write a JavaScript program that returns true if the given number is even, false otherwise.
{
  const isEven = (number) => number % 2 === 0;

  console.log(isEven(10));
}

// 200. Write a JavaScript program that returns true if a value is an empty object, collection, map or set. It has no enumerable properties or is of any type not considered a collection.
{
  const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;

  console.log(isEmpty({}));
  console.log(isEmpty([]));
  console.log(isEmpty(new Map()));
  console.log(isEmpty(new Set()));
  console.log(isEmpty({ key: "value" }));
}

// 201. Write a JavaScript program to check if the first numerical argument is divisible by the second one.
{
  const isDivisible = (num, divisor) => num % divisor === 0;

  console.log(isDivisible(12, 3));
}

// 202. Write a JavaScript program to check if a given number is even or not.
{
  const checkEvenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

  console.log(checkEvenOrOdd(7));
}

// 203. Write a JavaScript program to determine if the current runtime environment is a browser. This is so that front-end modules can run on the server (Node) without errors.
{
  const isBrowserEnvironment = () =>
    typeof window !== "undefined" && typeof document !== "undefined";

  console.log(isBrowserEnvironment());
}

// 204. Write a JavaScript program that checks if the given argument is a native Boolean element.
{
  const isNativeBoolean = (value) => typeof value === "boolean";

  console.log(isNativeBoolean(true));
}

// 205. Write a JavaScript program to check if the provided argument is an array (i.e. iterable).
{
  const isArray = (value) => Array.isArray(value);

  console.log(isArray([1, 2, 3]));
}

// 206. Write a JavaScript program to check if a given string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).
{
  const isAnagram = (str1, str2) => {
    const cleanString = (str) => str.replace(/[^\w]/g, "").toLowerCase();
    return cleanString(str1) === cleanString(str2);
  };

  console.log(isAnagram("s ilent", "Silent"));
}

// 207. Write a JavaScript program that returns true if the given string is an absolute URL, false otherwise.
{
  const isAbsoluteURL = (url) => {
    const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return regex.test(url);
  };

  const urlString = "https://www.example.com/path/to/resource";
  console.log(isAbsoluteURL(urlString));
}

// 208. Write a JavaScript program to check if the provided value is of the specified type.
{
  const checkType = (value, type) => typeof value === type;

  console.log(checkType(42, "number"));
}

// 209. Write a JavaScript program to get a list of elements in both arrays, using a provided comparator function.
{
  const getCommonElements = (arr1, arr2, comparator) => {
    return arr1.filter((item1) =>
      arr2.some((item2) => comparator(item1, item2))
    );
  };

  const commonElements = getCommonElements(
    [1, 2, 3],
    [3, 4, 5],
    (a, b) => a === b
  );
  console.log(commonElements);
}

// 210. Write a JavaScript program to get a list of elements in both arrays, after applying the provided function to each array element of both.
{
  const applyFunction = (arr, func) => arr.map(func);
  const getCommonElements = (arr1, arr2) =>
    arr1.filter((value) => arr2.includes(value));

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];

  const modifiedArray1 = applyFunction(array1, (element) => element * 2);
  const modifiedArray2 = applyFunction(array2, (element) => element + 1);

  const commonElements = getCommonElements(modifiedArray1, modifiedArray2);

  console.log(commonElements);
}

// 211. Write a JavaScript program to get a list of elements that exist in both arrays.
{
  function getCommonElements(arr1, arr2) {
    return arr1.filter((value) => arr2.includes(value));
  }

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const commonElements = getCommonElements(array1, array2);
  console.log(commonElements);
}

// 212. Write a JavaScript program to create a n-dimensional array with a given value.
{
  const initializeNDArray = (val, ...args) =>
    args.length === 0
      ? val
      : Array.from({ length: args[0] }).map(() =>
          initializeNDArray(val, ...args.slice(1))
        );

  console.log(initializeNDArray(1, 3));
}

// 213. Write a JavaScript program to initialize and fill an array with the specified values.
{
  const initializeArray = (length, value) => {
    return new Array(length).fill(value);
  };

  const initializedArray = initializeArray(5, 2);
  console.log(initializedArray);
}

// 214. Write a JavaScript program to initialize an array containing the numbers in the specified range (in reverse) where start and end are inclusive of their common difference step.
{
  const initializeArrayWithRange = (end, start = 0, step = 1) =>
    Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
      (v, i, arr) => (arr.length - i - 1) * step + start
    );

  const initializedArray = initializeArrayWithRange(10, 0, 2);
  console.log(initializedArray);
}

// 215. Write a JavaScript program to get all the elements of an array except the last one.
{
  const initial = (arr) => arr.slice(0, -1);

  console.log(initial([1, 2, 3]));
}

// 216. Write a JavaScript program to get all val indices in an array. If val never occurs, return [].
{
  const indexOfAll = (arr, val) =>
    arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

  console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
}

// 217. Write a JavaScript program to check if the given number falls within the given range.
{
  const isNumberInRange = (number, start, end) => {
    return number >= start && number <= end;
  };

  const isInRange = isNumberInRange(5, 1, 10);
  console.log(isInRange);
}

// 218. Write a JavaScript program to get the number of times a function executed per second. HZ is the unit for hertz, the unit of frequency defined as one cycle per second.
{
  const hz = (fn, iterations = 100) => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return (1000 * iterations) / (performance.now() - before);
  };
  const numbers = Array(10000)
    .fill()
    .map((_, i) => i);

  const sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);
  const sumForLoop = () => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    return sum;
  };

  console.log(Math.round(hz(sumReduce)));
  console.log(Math.round(hz(sumForLoop)));
}

// 219. Write a JavaScript program to calculate the Hamming distance between two values.
{
  const hammingDistance = (num1, num2) =>
    ((num1 ^ num2).toString(2).match(/1/g) || "").length;

  console.log(hammingDistance(5, 3));
}

// 220. Write a JavaScript program to get the native type of a value. Returns the lowercased constructor name of value, "undefined" or "null" if value is undefined or null.
{
  const getNativeType = (value) => {
    return value === undefined
      ? "undefined"
      : value === null
      ? "null"
      : typeof value === "object"
      ? value.constructor.name.toLowerCase()
      : typeof value;
  };

  console.log(getNativeType(5));
  console.log(getNativeType(null));
}

// 221. Write a JavaScript program to get a string like HH:MM:SS from a Date object.
{
  const getColonTimeFromDate = (date) => date.toTimeString().slice(0, 8);

  console.log(getColonTimeFromDate(new Date()));
}

// 222. Write a JavaScript program that initializes an array containing the numbers in the specified range. This is where start and end are inclusive and the ratio between the two terms is step. Returns an error if step equals 1.
{
  const geometricProgression = (end, start = 1, step = 2) =>
    Array.from({
      length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
    }).map((v, i) => start * step ** i);

  console.log(geometricProgression(256, 1, 4));
}

// 223. Write a JavaScript program to calculate the greatest common divisor between two or more numbers/arrays.
{
  const gcd = (...arr) => {
    const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return [...arr].reduce((a, b) => _gcd(a, b));
  };

  console.log(gcd(8, 36));
}

// 224. Write a JavaScript program to remove HTML/XML tags from strings.
{
  const removeHtmlTags = (inputString) => {
    return inputString.replace(/<[^>]*>/g, "");
  };

  const stringWithTags =
    '<p>This is <b>bold</b> text with <a href="#">links</a>.</p>';
  const stringWithoutTags = removeHtmlTags(stringWithTags);
  console.log(stringWithoutTags);
}

// 225. Write a JavaScript program to get the standard deviation of an array of numbers.
{
  const calculateStandardDeviation = (numbers) => {
    const mean = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
    const averageSquaredDiff =
      squaredDifferences.reduce((acc, val) => acc + val, 0) / numbers.length;
    const standardDeviation = Math.sqrt(averageSquaredDiff);

    return standardDeviation;
  };

  const numbers = [1, 2, 3, 4, 5];
  const stdDeviation = calculateStandardDeviation(numbers);
  console.log(stdDeviation);
}

// 226. Write a JavaScript program to get n random elements with unique keys from an array up to the size of the array.
{
  const getRandomElements = (array, n) => {
    const result = [];
    const arrayCopy = [...array];

    for (let i = 0; i < n && arrayCopy.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const randomElement = arrayCopy.splice(randomIndex, 1)[0];
      result.push(randomElement);
    }
    return result;
  };

  const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const randomElements = getRandomElements(originalArray, 5);
  console.log(randomElements);
}

// 227. Write a JavaScript program to remove elements from an array for which the given function returns false.
{
  const removeElements = (arr, callback) => {
    return arr.filter(callback);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filteredNumbers = removeElements(numbers, (num) => num % 2 === 0);
  console.log(filteredNumbers);
}

// 228. Write a JavaScript program to log the name of a function.
{
  function sampleFunction() {}

  console.log(sampleFunction.name);
}

// 229. Write a JavaScript program to convert a string from camelcase.
{
  const convertCamelCase = (inputString) => {
    const wordsArray = inputString.split(/(?=[A-Z])/);
    const convertedString = wordsArray.join(" ").toLowerCase();
    return convertedString;
  };

  const camelCaseString = "camelCaseStringExample";
  const convertedString = convertCamelCase(camelCaseString);
  console.log(convertedString);
}

// 230. Write a JavaScript program to generate the human-readable format in the given number of milliseconds.
{
  const formatMilliseconds = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const remainingSeconds = totalSeconds % 60;
    const remainingMinutes = totalMinutes % 60;
    const remainingHours = totalHours % 24;
    const remainingMilliseconds = milliseconds % 1000;

    return {
      days: totalDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
      milliseconds: remainingMilliseconds,
    };
  };

  const milliseconds = 123456789;
  const formattedTime = formatMilliseconds(milliseconds);
  console.log(formattedTime);
}

// 231. Write a JavaScript program to iterate over all the properties of an object in reverse, running a callback for each one.
{
  const iterateObjectReverse = (obj, callback) => {
    const keys = Object.keys(obj);
    for (let i = keys.length - 1; i >= 0; i--) {
      const key = keys[i];
      callback(key, obj[key]);
    }
  };

  const myObject = {
    name: "John",
    age: 30,
    city: "New York",
  };
  const printKeyValue = (key, value) => {
    console.log(`${key}: ${value}`);
  };
  iterateObjectReverse(myObject, printKeyValue);
}

// 232. Write a JavaScript program that takes a function as an argument, then makes the first argument the last.
{
  const makeFirstArgLast = (func) => {
    return (...args) => {
      const [firstArg, ...restArgs] = args;
      return func(...restArgs, firstArg);
    };
  };

  const addThreeNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3;
  };
  const newFunction = makeFirstArgLast(addThreeNumbers);
  console.log(newFunction(1, 2, 3));
}

// 233. Write a JavaScript program to flatten an object with the paths for keys.
{
  const flattenObject = (obj, parentKey = "", result = {}) => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
          flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    return result;
  };

  const obj = { a: { b: 1 }, c: { d: { e: 5, f: 6 } }, g: 7 };
  const flattenedObj = flattenObject(obj);
  console.log(flattenedObj);
}

// 234. Write a JavaScript program to flatten a given array to the specified depth.
{
  const flatten = (array, depth = 1) => {
    return array.flat(depth);
  };

  const array = [1, [2, 3], [4, [5, 6]], 7];
  console.log(flatten(array, 2));
}

// 235. Write a JavaScript program to get the last key that satisfies the provided testing function, otherwise undefined is returned.
{
  const findKey = (obj, func) =>
    Object.keys(obj).findLast((key) => func(obj[key]));

  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const key = findKey(obj, (value) => value % 2 === 0);
  console.log(key);
}

// 236. Write a JavaScript program to get the first key that satisfies the provided testing function. Otherwise return undefined.
{
  const findKey = (obj, func) => Object.keys(obj).find((key) => func(obj[key]));

  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const key = findKey(obj, (value) => value % 2 === 0);
  console.log(key);
}

// 237. Write a JavaScript program to generate an array containing the Fibonacci sequence, up to the nth term.
{
  const fibonacciSequence = (n) => {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return n === 1 ? [0] : sequence.slice(0, n);
  };

  console.log(fibonacciSequence(7));
}

// 238. Write a JavaScript program to calculate the factorial of a number.
{
  const factorial = (number) => {
    return number < 0
      ? console.log("Negative numbers are not allowed!")
      : number <= 1
      ? 1
      : number * factorial(number - 1);
  };

  console.log(factorial(5));
}

// 239. Write a JavaScript program to escape a string to use in a regular expression.
{
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const inputString = "Escape this string. ^[.*+?^${}()|[]\\]";
  const escapedString = escapeRegExp(inputString);
  console.log(escapedString);
}

// 240. Write a JavaScript program that returns true if the parent element contains the child element, false otherwise.
{
  const hasChild = (parentEl, childEl) => {
    parent = document.querySelector(parentEl);
    child = document.querySelector(childEl);
    return parent !== child && parent.contains(child) ? true : false;
  };

  console.log(hasChild("body", "h1"));
}

// 241. Write a JavaScript program to remove elements from an array until the passed function returns true. Returns the remaining elements in the array.
{
  const dropFromLeft = (array, func) => {
    while (array.length > 0 && !func(array[0])) {
      array.shift();
    }
    return array;
  };

  console.log(dropFromLeft([7, 5, 3, 2, 1], (n) => n % 2 === 0));
}

// 242. Write a JavaScript program to remove elements from the end of an array until the passed function returns true. Returns the remaining elements of the array.
{
  const dropFromRight = (array, func) => {
    while (array.length > 0 && !func(array[array.length - 1])) {
      array.pop();
    }
    return array;
  };

  console.log(dropFromRight([1, 2, 3, 5, 7], (n) => n % 2 === 0));
}

// 243. Write a JavaScript program to get the distance between two given points.
{
  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.hypot(Math.abs(x1 - x2), Math.abs(y1 - y2));
  };

  console.log(calculateDistance(1, 2, 4, 8));
}

// 244. Write a JavaScript program to get the difference between two given arrays.
{
  const arrayDifference = (arrayOne, arrayTwo) => {
    const output = [];
    output.push(...arrayOne.filter((element) => !arrayTwo.includes(element)));
    output.push(...arrayTwo.filter((element) => !arrayOne.includes(element)));
    return output;
  };

  const arrayA = [1, 2, 3, 4, 5];
  const arrayB = [3, 4, 5, 6, 7];
  const difference = arrayDifference(arrayA, arrayB);
  console.log(difference);
}

// 245. Write a JavaScript program that invokes the provided function after a few milliseconds.
{
  const InvokeAfterTime = (func, period) => {
    return setTimeout(func, period);
  };

  console.log(InvokeAfterTime(console.log("Hello World"), 3000));
}

// 246. Write a JavaScript program to convert angles from degrees to radians.
{
  const degreeToRadian = (angle) => {
    return (angle * Math.PI) / 180.0;
  };

  console.log(degreeToRadian(90.0));
}

// 247. Write a JavaScript program that assigns default values to all undefined properties in an object.
{
  const assignDefaultValues = (obj, defaults) => {
    Object.keys(defaults).forEach((key) => {
      if (obj[key] === undefined) {
        obj[key] = defaults[key];
      }
    });
    return obj;
  };

  const normalSettings = {
    a: 1,
    b: undefined,
  };

  const defaultSettings = {
    a: 2,
    b: true,
    c: false,
  };

  const updatedSettings = assignDefaultValues(normalSettings, defaultSettings);
  console.log(updatedSettings);
}

// 248. Write a JavaScript program to deep flatten an array.
{
  const deepFlatten = (array) => {
    return array.flat(Infinity);
  };

  const array = [1, [2, 3], [4, [5, 6]], 7];
  console.log(deepFlatten(array));
}

// 249. Write a JavaScript program to get the current URL.
{
  const currentUrl = window.location.href;
  console.log(currentUrl);
}

// 250. Write a JavaScript program to create an element from a string (without appending it to the document).
{
  function createElement(string) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = string;
    return tempDiv.firstChild;
  }

  const element = createElement("<span>Simple Example</span>");
  console.log(element);
}

// 251. Write a JavaScript program to write a JSON object to a file.
{
  const fs = require("fs");
  const JSONToFile = (obj, filename) =>
    fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
  JSONToFile({ test: "is passed" }, "testJsonFile");
}

// 252. Write a JavaScript program to convert the values of RGB components to a color code.
{
  const RGBToHex = (r, g, b) =>
    ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");

  const red = 255;
  const green = 128;
  const blue = 0;
  console.log(RGBToHex(red, green, blue));
}

// 253. Write a JavaScript program to generate a UUID in a browser.
{
  const UUIDGeneratorBrowser = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );

  console.log(UUIDGeneratorBrowser());
}

// 254. Write a JavaScript program to generate a UUID in Node.JS. Use crypto API to generate a UUID, compliant with RFC4122 version 4.
{
  const crypto = require("crypto");
  const UUIDGeneratorNode = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
    );
  console.log(UUIDGeneratorNode());
}

// 255. Write a JavaScript program that returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.
{
  const checkAny = (array, check) => {
    return array.some(check);
  };

  const array = [1, 2, 3, 4, 5];
  const even = (element) => element % 2 === 0;
  console.log(checkAny(array, even));
}

// 256. Write a JavaScript program to check if two given numbers are approximately equal to each other.
{
  const equals = (numOne, numTwo, limit = 0.0001) => {
    return Math.abs(numOne - numTwo) < limit;
  };

  console.log(equals(4.9999, 5));
}

// 257. Write a JavaScript program to convert a 2D array to a comma-separated value (CSV) string.
{
  const CSV = (array) => {
    array.join(",");
  };

  const elements = ["Fire", "Air", "Water"];
  console.log(elements.join());
}

// 258. Write a JavaScript program to create a function that accepts up to n arguments, ignoring any additional arguments.
{
  const processArguments = (...args) => {
    const n = 3;
    const processedArgs = args.slice(0, n);

    console.log(processedArgs);
  };

  processArguments(1, 2, 3, 4, 5);
}

// 259. Write a JavaScript program to decode a string of data encoded using base-64 encoding.
{
  const str = "SGVsbG8=";
  console.log(atob(str));
}

// 260. Write a JavaScript program to evaluate the binomial coefficients of two integers n and k.
{
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };

  const binomialCoefficient = (n, k) => {
    if (k < 0 || k > n) {
      return 0;
    } else {
      return factorial(n) / (factorial(k) * factorial(n - k));
    }
  };

  const n = 5;
  const k = 2;
  console.log(binomialCoefficient(n, k));
}

// 261. Write a JavaScript program that returns true if the page bottom is visible, false otherwise.
{
  function isBottomVisible() {
    const documentHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    return scrollPosition + windowHeight >= documentHeight;
  }

  window.addEventListener("scroll", function () {
    if (isBottomVisible()) {
      console.log("Bottom of the page is visible");
    } else {
      console.log("Bottom of the page is not visible");
    }
  });
}

// 262. Write a JavaScript program to create a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.
{
  const str = "Hello";
  console.log(btoa(str));
}

// 263. Write a JavaScript program to capitalize the first letter of a string.
{
  const stringCapitalize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };

  const string = "hello";
  console.log(stringCapitalize(string));
}

// 264. Write a JavaScript program to capitalize the first letter of every word in a string.
{
  const stringCapitalizeEach = (str) => {
    return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
  };

  const string = "information technology institute";
  console.log(stringCapitalizeEach(string));
}

// 265. Write a JavaScript program to chunk an array into smaller arrays of a specified size.
{
  const arrayChunk = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  };

  const array = [1, 2, 3, 4, 5];
  console.log(arrayChunk(array, 3));
}

// 266. Write a JavaScript program to clamp a number within the inclusive range specified by the given boundary values a and b.
{
  const clamp = (number, a, b) => {
    return Math.max(Math.min(number, Math.max(a, b)), Math.min(a, b));
  };

  const number = 8;
  const a = 3;
  const b = 10;
  console.log(clamp(number, a, b));
}

// 267. Write a JavaScript program to calculate the midpoint between two pairs of points.
{
  const midPoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];

  console.log(midPoint([2, 2], [3, 3]));
}

// 268. Write a JavaScript program to find the index of an array item in a for loop.
{
  const printArrayWithIndex = (array) => {
    for (let [index, item] of array.entries()) {
      console.log(`${index}: ${item}`);
    }
  };

  const array = ["Red", "Green", "Black", "White"];
  printArrayWithIndex(array);
}
