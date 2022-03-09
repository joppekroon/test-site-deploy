import {html, css, LitElement} from 'lit';

export class AnotherElement extends LitElement {
  static styles = css`p { color: red }`;

  static properties = {
    yell: {type: String},
  };

  constructor() {
    super();
    this.yell = 'Fadaladaladala';
  }

  render() {
    return html`<p>Scream it, <b>${this.yell}!</b></p>`;
  }
}
customElements.define('another-element', AnotherElement);