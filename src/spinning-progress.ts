import styles from './styles'

type ATTRIBUTES_DICTIONARY = { [index: string] : string}

const COLORS : ATTRIBUTES_DICTIONARY = {
  _name: 'color',
  _default: 'gray',
  white: 'white',
  gray: 'gray',
  black: 'black',
}

const SIZES : ATTRIBUTES_DICTIONARY = {
  _name: 'size',
  _default: 'medium',
  medium: '',
  large: 'large',
}

export class SpinningProgressElement extends HTMLElement {
  static get observedAttributes() { return ['size', 'color'] }

  spinnerRoot : HTMLDivElement

  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = styles

    this.spinnerRoot = document.createElement('div')
    this.spinnerRoot.classList.add('s', 'a')
    this.spinnerRoot.innerHTML = '<i class=b></i>'.repeat(12)
    shadowRoot.appendChild(this.spinnerRoot)
  }

  connectedCallback() {
    this.spinnerRoot.setAttribute(COLORS._name, this.extractValueFor(COLORS))
    this.spinnerRoot.setAttribute(SIZES._name, this.extractValueFor(SIZES))
  }

  extractValueFor(attributeInfo : ATTRIBUTES_DICTIONARY) {
    const index : string = this.getAttribute(attributeInfo._name) || attributeInfo._default
    return attributeInfo[index]
  }
}

customElements.define('spinning-progress', SpinningProgressElement)
