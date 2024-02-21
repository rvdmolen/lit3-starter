/* eslint-disable no-undef */
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './components/feat-child-1.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('app-lit3-starter')
export class AppLit3Starter extends LitElement {

  @property({ type: String })
  accessor header = 'World';

  @property({ type: String })
  accessor userName = 'RVDMOLEN';

  @property({ type: Boolean })
  accessor clicked = false;

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--background-color, white);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.header}</h1>

        <p>Edit <code>src/AppTest.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples2
        </a>

        <feat-child-1 _counter="10" titleText="It is monday" .userName="${this.userName}"  titlerrrrrrtext="blabla" showWelcomeMessage></feat-child-1>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
