export const arrays = [
  {
    name: 'sum',
    description: [
      'This method returns sum of element of arrays',
      'Usage:',
      'arr.sum(arr)',
      'example: you pass arr.sum([1,2,3]) => you get => 6',
    ],
  },
  {
    name: 'sortAsc',
    description: [
      'This method sorted array in ascending order',
      'Usage:',
      'arr.sortAsc(arr)',
      'example: you pass arr.sortAsc([4,2,3]) => you get => [2,3,4]',
    ],
  },
  {
    name: 'sortDesc',
    description: [
      'This method sorted array in descending order',
      'Usage:',
      'arr.sortDesc(arr)',
      'example: you pass arr.sortAsc([4,2,3]) => you get => [4,3,2]',
    ],
  },
  {
    name: 'sortAscByKey',
    description: [
      'Using this method you can sort array of objects in ascending by providing  key of object',
      'Usage:',
      'arr.sortAscByKey(array, )',
      `const data = [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 6,
          name: 'alley',
        },
        {
          id: 15,
          name: 'sam',
        },
        {
          id: 2,
          name: 'spiderman',
        },
        {
          id: 23,
          name: 'ironman',
        },
      ]`,
      'And you want to sort data based on id',
      'so you pass arr.sortAscByKey(data,"id") and you will get',
      `[
        { id: 1, name: 'John' },
        { id: 2, name: 'spiderman' },
        { id: 6, name: 'alley' },
        { id: 15, name: 'sam' },
        { id: 23, name: 'ironman' }
      ]`,
      'Note: First Argument must be array and second must be string ',
    ],
  },
  {
    name: 'sortDescByKey',
    description: [
      'Using this method you can sort array of objects in descending by providing  key of object',
      'Usage:',
      'arr.sortDescByKey(array,id)',
      'suppose you have array of object like this',
      `const data = [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 6,
          name: 'alley',
        },
        {
          id: 15,
          name: 'sam',
        },
        {
          id: 2,
          name: 'spiderman',
        },
        {
          id: 23,
          name: 'ironman',
        },
      ]`,
      'And you want to sort them in descending order by id',
      'so you pass arr.sortDescByKey(data,"id") and you will get',
      `[
        { id: 23, name: 'ironman' },
        { id: 15, name: 'sam' },
        { id: 6, name: 'alley' },
        { id: 2, name: 'spiderman' },
        { id: 1, name: 'John' }
      ]`,
      'Note: First Argument must be array and second must be string ',
    ],
  },
  {
    name: 'clone',
    description: [
      'This method returns cloned array of provided array not reference to that array',
      'Usage:',
      'arr.clone(arr)',
      'example: you pass arr.clone([4,2,3]) => you get => [4,3,2](cloned version)',
    ],
  },
  {
    name: 'remove',
    description: [
      'This method removes the provided value from array',
      'Usage:',
      'arr.remove(arr,value)',
      'example: you pass arr.remove([1,2,3],2) => you get => [1,3]',
      'It users arr.filter method behind the scenes',
    ],
  },
  {
    name: 'removeByKey',
    description: [
      'This method removes the object from array of objects and with provided key,value',
      'Usage:',
      'arr.removeByKey(array,key,value)',
      'where array is array , key is key of object , and value is the value which you want to remove',
      'suppose you have array like this',
      `const array = [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 6,
          name: 'alley',
        },
        {
          id: 15,
          name: 'sam',
        },
        {
          id: 2,
          name: 'spiderman',
        },
        {
          id: 23,
          name: 'ironman',
        },
      ]`,
      `example: you pass arr.remove(array,"id",23) => you get =>  [
        {
          id: 1,
          name: 'John',
        },
        {
          id: 6,
          name: 'alley',
        },
        {
          id: 15,
          name: 'sam',
        },
        {
          id: 2,
          name: 'spiderman',
        },
      ]`,
      'It users arr.filter method behind the scenes',
    ],
  },
]
