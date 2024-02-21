import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('feat-child-1')
export class FeatChild1 extends LitElement {

  // @property({type: String})
  // title;

  constructor() {
    super();
    this._counter = 1;
  }  

  static properties = {
      titleText: {
        type: String
      },
      userName: {
        type: String
      },
      _counter: {
        type: Number,
        attribute: false,
        state: true
      },
      showWelcomeMessage: {
        type: Boolean
      }
   }


  static styles = css`
    :host {
      color: blue;
    }
  `;

  render() {
    return html`
      <h2>Welcome to my child component </h2>
      <h3>${ this.titleText }</h3>
      <h3>${ this.generateWelcomeMessage() }</h3>
      <h3>${ this.generateWelcomeMessage2() }</h3>
      <h3>${ this.generateCounterMessage() }</h3>
      <button @click="${this.updateCounter}">UPDATE</button>
    `
  }

  updateCounter() {
    this._counter += 1;
  }

  generateWelcomeMessage2() {
    return html`<p>${this.userName ?? nothing}</p>`;
  }

  generateWelcomeMessage() {
    return this.showWelcomeMessage
      ? html`Welcome`
      : html`Nothing to say`;
  }

  generateCounterMessage() {
    return html`<strong>${this._counter}</strong> `
  }
}

