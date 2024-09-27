import { LitElement  } from 'lit-element';
import { customElement } from 'lit/decorators.js'
import config from '../../twind.config'
import install from '@twind/with-web-components'
import { html } from 'lit';
import "./nav-element"
import "./footer-element"

@customElement('layout-element')
@install(config)
export class LayoutElement extends LitElement {

	render() {
		return html`
		<nav-element></nav-element>
			<slot></slot>
			<footer-element></footer-element>

			`
	}
	
}
declare global {
  interface HTMLElementTagNameMap {
    'layout-element': LayoutElement
  }
}
