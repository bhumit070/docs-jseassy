export const localstorage = [
  {
    name: 'set',
    description: [
      'This method sets value to the localstorage with given key and value',
      "You don't need to stringify data it will do automatically for you",
      'Usage:',
      'ls.set(key,value)',
      'example: ls.set("name","John Doe")',
    ],
  },
  {
    name: 'get',
    description: [
      'This method get value from the localstorage with given key.',
      "It will parse the data into json and returns it so you don't need to do it",
      'If data does not found in localstorage it will return null',
      'Usage:',
      'ls.get(key)',
      'example: ls.get(key)',
    ],
  },
  {
    name: 'remove',
    description: [
      'This method removes item from localstorage.',
      'Usage:',
      'ls.remove(key)',
      'example: ls.remove(key)',
      'If you do not provide any key it will clear whole localstorage',
    ],
  },
]
