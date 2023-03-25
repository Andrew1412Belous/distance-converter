import { setConvertValue } from '../helpers'

export function selectOnChangeCallback () {
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(this.elems['input-from'].value) && this.elems['input-from'].value) {
    setConvertValue.bind(this)(this.elems['input-from'].value)
  }
}
