export const providedObjects = [
  {
    for: 'Home',
    provide: '',
    to: '/',
  },
  {
    for: 'Strings',
    provide: 'str',
    to: '/strings',
    component: 'Strings',
  },
  {
    for: 'Localstorage',
    provide: 'ls',
    to: '/localstorage',
    component: 'LocalStorage',
  },
  {
    for: 'Arrays',
    provide: 'arr',
    to: '/arrays',
    component: 'Array',
  },
  {
    for: 'Objects',
    provide: 'obj',
    to: '/objects',
    component: 'Object',
  },
  {
    for: 'Session Storage',
    provide: 'ssn',
    to: '/sessions',
    component: 'Sessions',
  },
]
