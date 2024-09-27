import { LitElement  } from 'lit-element';
import { customElement } from 'lit/decorators.js'
import config from '../../twind.config'
import install from '@twind/with-web-components'
import { html } from 'lit';

@customElement('create-side-panel-element')
@install(config)
export class createElement extends LitElement {

	render() {
		return html`
			<section class="h-[100vh]">
			</section>
			`
	}
	
}
declare global {
  interface HTMLElementTagNameMap {
    'create-side-panel-element': createElement
  }
}
