import { LitElement } from 'lit-element';
import { customElement, property, state, query} from 'lit/decorators.js'
import config from '../../twind.config'
import install from '@twind/with-web-components'
import { html, css } from 'lit';
import "./nav-items-element"
import { navSize } from '../../model/meta';
import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/components/drawer/drawer.js';

@customElement('nav-element')
@install(config)
export class NavElement extends LitElement {
	@state()
	sizeAdder = -5; 

	@query('#mobile-menu')
	drawer!: any;

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
			return html`<p>hello</p>`
	}

	render() {
		return html`
		<nav class="h-[${navSize}px] sm:px-4 px-2 py-2.5">
		<p>${this.logo()}</p>
			</nav>
			
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
