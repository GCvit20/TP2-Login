import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {

    static get properties() {
        return {
            type: { type: String },
            message: { type: String }
        };
    }

    static styles = [
        css`
            :host {
                display: block;
                padding: 8px;
                margin: 8px 0px;
                border-radius: 4px;
            }

            .alert {
                padding: 8px;
                border-radius: 4px;
                color: #fff;
                background-color: var(--color-primary, blue);
                text-align: center;
            }

            .error {
                background-color: var(--background-color-error, white);
                color: var(--color-error, red);
            }

            .success {
                background-color: var(--background-color-success, white);
                color: var(--color-success, green);
            }


        `
    ];

    render() {
        return html`
        
        <div class="alert ${this.type}">
            ${this.message}
        </div>
        
        `;
    }
}
customElements.define('alert-component', AlertComponent);
