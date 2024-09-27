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
		
		<section class="h-[calc(100vh-${navSize}px)] flex justify-center items-center">
      <div>
        <h1 class="text-center h1 relative">Bookera
          <span class="text-yellow-500 opacity-[.2] absolute top-0 translate-y-[-120%] left-0 text-7xl">Work In Progress</span>

        </h1>
        <p class="text-center p mb-2">Digital media reimagined in the next-gen library.</p>
        <div class="flex justify-center gap-2 mb-4">
          <sl-badge variant="neutral" >${msg("verified")}</sl-badge>
          <sl-badge variant="neutral">next-gen</sl-badge>
          <sl-badge variant="neutral">hip</sl-badge>
          <sl-badge variant="neutral">books</sl-badge>
        </div>
        <div class="flex justify-center">
          <sl-button variant="primary" size="large">View Catalog</sl-button>
        </div>
      </div>
    </section>
    <section class="max-w-[80rem] mx-auto mb-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        <sl-card class="card-header relative shadow">
          <div slot="header" class="px-4">
            <h3 class="h4">
              Social media for books
            </h3>
          </div>
          <p class="px-4">
            Have online book clubs, create threads over what you thought was interesting, and share with others!
          </p>
          <div class="bg-gray-100 h-full absolute w-[30px] left-0 top-0"></div>
        </sl-card>
        
        <sl-card class="card-header relative shadow">
          <div slot="header" class="px-4">
            <h3 class="h4">
              Becoming an author has never been easier
            </h3>
          </div>
          <p class="px-4">
            Use our emedia creation tool to create your media with ease!
          </p>
          <div class="bg-gray-100 h-full absolute w-[30px] left-0 top-0"></div>
        </sl-card>
      </div>
      <sl-card class="card-header">
        <div slot="header" class="flex justify-center">
          <img src="/ios/180.png" class="h-[${navSize + 10}px] w-[${navSize + 10}px]"/>
        </div>
        Hey y'all 👋, I'm David, the creator of Bookera. Bookera came about because I wanted to publish a book, more specifically a collection of poems about programming. I felt that a poetic book about programming should include tech in it, should be made from tech, but at the same time should embrace the phsysical world, so I dreamt of this 💭. I genuinely hope you enjoy 🥂
      </sl-card>
    </section>
		`;
	}
	
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-element': HeroElement
  }
}
