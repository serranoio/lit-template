import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import {provide} from '@lit/context';
import config from './twind.config'
import install from '@twind/with-web-components'
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/components/badge/badge.js';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/components/card/card.js';
import "./pages/main-element"
import "./components/layout/layout-element"
import { Router } from '@lit-labs/router';
import { routes } from './model/meta';
// @ts-ignore
globalThis.URLPattern = URLPattern
// activate twind - must be called at least once
/**
 * An example element.
*
* @slot - This element has a slot
* @csspart button - The button
*/
@customElement('setup-element')
@install(config)
export class SetupElement extends LitElement {
  private _routes = new Router(this, [
    ...routes.map((item) => {
      let element = html``;

      return {pattern: new URLPattern({pathname: `/${item}`}), render: () => html`${element}`}
  }),
  {pattern: new URLPattern({pathname: `/`}), render: () => html`<main-element></main-element>`},
  ]);
  
  
  render() {

    return html`
    <layout-element> 
      ${this._routes.outlet()}
      </layout-element>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'setup-element': SetupElement
  }
}

