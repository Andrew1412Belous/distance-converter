export const inputObject = localStorage.getItem('inputObject')
  ? JSON.parse(localStorage.getItem('inputObject'))
  : {
    distance: {
      unit: null,
      value: null,
    },
    convertTo: null,
  }
