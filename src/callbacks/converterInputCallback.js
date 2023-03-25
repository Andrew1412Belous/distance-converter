import { setConvertValue } from '../helpers'

export function converterInputCallback (event) {
  const value = event.target.value

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(value)) {
    this.elems['input-to'].value = 'Incorrect input'
  } else if (!value) {
    this.elems['input-to'].value = ''
  } else {
    setConvertValue.bind(this)(value)
  }
}
