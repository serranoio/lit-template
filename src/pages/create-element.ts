import { LitElement  } from 'lit-element';
import { customElement } from 'lit/decorators.js'
import config from '../twind.config'
import install from '@twind/with-web-components'
import { html } from 'lit';
import "../components/create/create-side-panel-element"

@customElement('create-element')
@install(config)
export class createElement extends LitElement {

	handleClick(e: any) {
		const button = e.target.closest('button')

		console.log(button.id)
	}

	render() {
		return html`
			<section class="h-[100vh] grid grid-cols-6 ">
				<create-side-panel-element class="bg-gray-200"></create-side-panel-element>
				<div class="col-span-4 bg-gray-50">
					<p class="p italic text-center text-gray-400 mb-24">Making publication accessible to all</p>
					<h2 class="h2 text-center text-gray-800">Choose your medium</h2>
					<p class="p text-center text-gray-700 mb-4">Get the proper toolset to create your publication!</p>
					<div class="grid grid-cols-3 gap-4 px-2 items-start">
						<button class="p-0 w-[100%]" id="short-form" @click=${this.handleClick}>
							<sl-card class="card-header relative shadow w-full">
								<div slot="header" class="px-4 py-2">
									<h3 class="h4 mb-2">
										Short form
									</h3>
									<i>A tweet, caption, etc.</i>
								</div>
								<ul class="list-disc ml-2 h-[100%]">
									<li class="px-4"><p>Basic toolset</p></li>
								</ul>
							</sl-card>
						</button>
						<button class="p-0 w-[100%]" id="long-form" @click=${this.handleClick}>
							<sl-card class="card-header relative shadow [box-shadow:0px_0px_1px_1px_var(--primary)] w-full">
								<div slot="header" class="px-4 py-2">
									<h3 class="h4 mb-2">
										Long form
									</h3>
									<i>Ebooks, audio trascriptions</i>
								</div>
								<p class="px-4">
									Use our emedia creation tool to create your media with ease!
								</p>
							</sl-card>
						</button>
						<button class="p-0 w-[100%]" id="medium-form" @click=${this.handleClick}>
							<sl-card class="card-header relative shadow w-full">
								<div slot="header" class="px-4 py-2">
									<h3 class="h4 mb-2">
										Medium-length
									</h3>
									<i>Articles, blogs</i>
								</div>
								<p class="px-4">
									Use our emedia creation tool to create your media with ease!
								</p>
							</sl-card>
						</button>
							
      </div>


					</div>
				</div>
				<create-side-panel-element class="bg-gray-200"></create-side-panel-element>
			</section>
			`
	}
	
}
declare global {
  interface HTMLElementTagNameMap {
    'create-element': createElement
  }
}
