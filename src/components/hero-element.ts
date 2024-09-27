import { LitElement } from 'lit-element';
import config from '../twind.config'
import { customElement } from 'lit/decorators.js'
import install from '@twind/with-web-components'
import { html, css } from 'lit';
import {navSize} from '../model/meta'
import {msg} from '@lit/localize';

@customElement('hero-element')
@install(config)
export class HeroElement extends LitElement {

  static _styles = [css`
  :host{
    z-index: 1;

  }`]

	render() {
		return html`
    <main>Hello, World</main>
		
		`;
	}
	
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-element': HeroElement
  }
}
