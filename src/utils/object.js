export const object = [
  {
    name: 'clone',
    description: [
      'This method returns clone of the object',
      'Usage:',
      'obj.clone(obj)',
      'It will return a clone of an object not a reference to it',
    ],
  },
  {
    name: 'length',
    description: [
      'This method returns length of the object',
      'Usage:',
      'obj.length(obj)',
      'you pas => obj.length({',
      'name: "test"',
      'age: "30"',
      '})',
      'you get 2 in return which is length of object',
    ],
  },
  {
    name: 'freeze',
    description: [
      'This method returns an objects whose values can not be changes',
      'suppose if we create const person = { name: "test"  } still we can change person.name = "another" ',
      'but this method returns an object whose values can not be changed',
      'Usage:',
      'obj.length(obj)',
      'you pas => obj.length({',
      'name: "test"',
      'age: "30"',
      '})',
      'you get 2 in return which is length of object',
    ],
  },
]
