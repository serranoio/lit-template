import { LitElement } from 'lit-element';
import { customElement, property, state, query} from 'lit/decorators.js'
import config from '../../twind.config'
import install from '@twind/with-web-components'
import { html, css } from 'lit';
import "./nav-items-element"
import { companyItems, navSize, productItems } from '../../model/meta';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/components/drawer/drawer.js';

@customElement('nav-element')
@install(config)
export class NavElement extends LitElement {
	@state()
	sizeAdder = -5; 

	@query('#mobile-menu')
	drawer!: SLDrawer;

	constructor() {
		super();
	}

	showDrawer() {
		this.drawer.show();
	}

	hideDrawer() {
		this.drawer.hide();
	}

	logo() {
			return html`<img src="/android/android-launchericon-192-192.png" class="h-[${navSize + this.sizeAdder}px] w-[${navSize + this.sizeAdder}px]"/>`
	}

	render() {
		return html`
		<nav class="h-[${navSize}px] sm:px-4 px-2 py-2.5">
			<div class='h-full bg-gray-100 backdrop-blur-lg opacity-80 flex items-center justify-between sm:px-8 rounded-full px-4'>
				<a class="h3 text-gray-800 flex gap-2 items-center" href="/">
					${this.logo()}
					<h3>
						Bookera
					</h3>
				</a>
				

				
				<div class="hidden sm:block">
					<nav-items-element
					.navItems=${companyItems}></nav-items-element>	
				</div>
				<div class="hidden sm:block">
					<nav-items-element
						.navItems=${productItems}></nav-items-element>	
					</div>
					
					<div class="sm:hidden">
						<sl-button @click=${() => this.showDrawer()} label="Menu" size="medium" circle class="flex justify-center items-center">
							<sl-icon name="list"></sl-icon>
						</sl-button>
					</div>
					
				</div>
			</nav>
			
			<sl-drawer --size="100px" label="Menu" placement="start" id="mobile-menu">
				<div @click=${() => this.hideDrawer()}>
					<nav-items-element
					vertical
					.navItems=${companyItems}></nav-items-element>	
					<nav-items-element
					vertical
					.navItems=${productItems}></nav-items-element>	
				</div>
					<sl-button slot="footer" variant="primary">Close</sl-button>
	</sl-drawer>
			`
	}

	static styles = css`
	
	.luminate {
  position: absolute;
  z-index: -1;
  left: -5%;
  top: 0%;
}
svg {
  display: block;
}

svg ellipse {
  /* display: block; */
  /* filter: drop-shadow(2px 2px 10px hsl(var(--primary))); */
}

@keyframes sun {
  from {
    transform: rotate(3deg);
  }

  50% {
    left: 100%;
    transform: rotate(30deg) translateY(30%);
  }

  to {
    left: 100%;
    transform: rotate(30deg) translateY(30%);
  }
}

.luminate g path {
	z-index: -1;
	opacity: .5;
  animation:

    svg 20s infinite,
    step 20s ease-in infinite;
  /* stroke: hsl(var(--primary)); */
  stroke-width: 6;
  stroke-linecap: round;
  width: 100%;
} 
 
@keyframes svg {
  from {
    stroke-dasharray: 20 17;
  }

  to {
    stroke-dasharray: 60 30;
  }
}

	`;
	
}


declare global {
  interface HTMLElementTagNameMap {
    'nav-element': NavElement
  }
}
