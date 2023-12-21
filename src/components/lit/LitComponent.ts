import { LitElement, html } from 'lit'

export class LitComponent extends LitElement {
	render() {
		return html`<div>Lit Component</div>`
	}
}

customElements.define('lit-component', LitComponent)