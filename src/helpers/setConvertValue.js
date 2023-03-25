import { inputObject } from '../configs'
import { convert } from './convert'

export function setConvertValue (value) {
  Object.assign(inputObject, {
    distance: {
      unit: this.elems['select-from'].value,
      value,
    },
    convertTo: this.elems['select-to'].value,
  })

  const result = convert(value, this.metrics[this.elems['select-from'].value], this.metrics[this.elems['select-to'].value])

  this.elems['input-to'].value = result.value
}
