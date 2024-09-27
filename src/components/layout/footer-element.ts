import { LitElement  } from 'lit-element';
import { customElement } from 'lit/decorators.js'
import config from '../../twind.config'
import install from '@twind/with-web-components'
import { html } from 'lit';
import "./nav-items-element"
import { items, navSize } from '../../model/meta';

@customElement('footer-element')
@install(config)
export class FooterElement extends LitElement {

	render() {
		return html`
		<footer class="px-4 sm:py-8 bg-gray-100 relative">
				<div class="flex flex-col gap-4">
			</div>
	</footer>
			`
	}
	
}
declare global {
  interface HTMLElementTagNameMap {
    'footer-element': FooterElement
  }
}
