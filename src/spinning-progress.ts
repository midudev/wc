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

  spinner : HTMLDivElement

  constructor () {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = styles

    this.spinner = document.createElement('div')
    this.spinner.classList.add('a') // a for animation
    this.spinner.innerHTML = '<i></i>'.repeat(12)
    shadowRoot.appendChild(this.spinner)
  }

  connectedCallback() {
    this.spinner.setAttribute(COLORS._name, this.extractValueFor(COLORS))
    this.spinner.setAttribute(SIZES._name, this.extractValueFor(SIZES))
  }

  extractValueFor(attributeInfo : ATTRIBUTES_DICTIONARY) : string {
    const index : string = this.getAttribute(attributeInfo._name) || attributeInfo._default
    return attributeInfo[index]
  }
}

customElements.define('spinning-progress', SpinningProgressElement)
