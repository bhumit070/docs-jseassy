export const cookies = [
  {
    name: 'set',
    description: [
      'This method sets value to the cookie with given key and value',
      'Usage:',
      'ck.set(key,value)',
      'example: ck.set("name","John Doe")',
      'The key and value must be string',
    ],
  },
  {
    name: 'get',
    description: [
      'This method get value from the cookie with given key.',
      'If data does not found in cookie it will return false',
      'Usage:',
      'ck.get(key)',
      'example: ck.get(key)',
      'The key must be string',
    ],
  },
  {
    name: 'remove',
    description: [
      'This method removes item from cookie.',
      'Usage:',
      'ck.remove(key)',
      'example: ck.remove(key)',
      'If you do not provide any key it will clear whole cookie storage',
      'The key must be string',
    ],
  },
]
