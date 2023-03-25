import {
  addElem,
  getElemsByIdFromShadow,
} from '../helpers'

import {
  style,
  template,
} from '../templates'

import { converterElemNames } from '../configs'

import {
  converterInputCallback,
  selectOnChangeCallback,
} from '../callbacks'

class Converter extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })

    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'converter-section',
      innerHTML: template,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: style,
    })

    this.getElemsById = getElemsByIdFromShadow.bind(this)
    this.metrics = require('../../metrics.json')
  }

  connectedCallback () {
    this.elems = this.getElemsById(converterElemNames)

    this.elems['input-from'].oninput = converterInputCallback.bind(this)

    this.elems['select-from'].onchange = selectOnChangeCallback.bind(this)
    this.elems['select-to'].onchange = selectOnChangeCallback.bind(this)
  }
}

customElements.define('converter-component', Converter)

export const converter = document.createElement('converter-component')
