import { converter } from '../../components'

export function DOMContentLoadedCallback () {
  document.body.appendChild(converter)
}
