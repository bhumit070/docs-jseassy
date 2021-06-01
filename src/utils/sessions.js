export const sessions = [
  {
    name: 'set',
    description: [
      'This method sets value to the session storage with given key and value',
      "You don't need to stringify data it will do automatically for you",
      'Usage:',
      'ssn.set(key,value)',
      'example: ssn.set("name","John Doe")',
    ],
  },
  {
    name: 'get',
    description: [
      'This method get value from the session storage with given key.',
      "It will parse the data into json and returns it so you don't need to do it",
      'If data does not found in session storage it will return false',
      'Usage:',
      'ssn.get(key)',
      'example: ssn.get(key)',
    ],
  },
  {
    name: 'remove',
    description: [
      'This method removes item from session storage.',
      'Usage:',
      'ssn.remove(key)',
      'example: ssn.remove(key)',
      'If you do not provide any key it will clear whole session storage',
    ],
  },
]
