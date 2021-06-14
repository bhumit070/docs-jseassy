export const formdata = [
  {
    name: 'make',
    description: [
      'This method takes an array or object as paramter and returns a formdata object',
      'if you provide array then key of formdata will be index of the value',
      'suppose you pass arr=["john","doe"] then it will work like this fd.append(0,"john")',
      'Usage: fd.make(arr || object)',
    ],
  },
  {
    name: 'obj',
    description: [
      'This method returns an object made from provided form data',
      'Usage: fd.obj(formdata)',
    ],
  },
  {
    name: 'arr',
    description: [
      'This method returns an array made from provided form data',
      'Usage: fd.arr(formdata)',
    ],
  },
  {
    name: 'keys',
    description: [
      'This method returns an array containing keys of formdata',
      'Usage: fd.keys(formdata)',
    ],
  },
  {
    name: 'values',
    description: [
      'This method returns an array containing values of formdata',
      'Usage: fd.values(formdata)',
    ],
  },
]
