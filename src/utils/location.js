export const location = [
  {
    name: 'getCurrentLocation',
    description: [
      'This method provides current location of the user',
      'If the location permission is not given first time it will prompt for it',
      'This method returns a promise so we can use either async/await or then catch to get the location',
      'Usage: lcn.getCurrentLocation()',
      'In the method you can pass 3 parameters',
      'First is either you want to enable high accuracy or not you can pass either true of false default is false',
      'Second parameter is timeout at which time you want function to return error if the location is not found default is 3 seconds',
      "And third paramter is age, it will decide for how much time location result should be cached default is 0 it means it won't cache the result ",
      'Note the timeout/cache-timeout must be provided in seconds not in milliseconds',
    ],
  },
]
