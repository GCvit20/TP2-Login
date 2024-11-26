import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                width: 100%;
                height: 100vh;
                justify-content: center;
                align-items: center;
                padding: 16px;
            }
        `
    ];

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}
customElements.define('public-layout', PublicLayout);
