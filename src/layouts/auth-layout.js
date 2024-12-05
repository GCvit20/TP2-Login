import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: grid;
                grid-template-rows: auto 1fr auto;
                max-width: 100vw;
                max-height: 100vh;
            }

            header {
                width: 100vw;
                height: 13vh;
                background-color: #ccc;
            }

            footer{
                width: 100vw;
                height: 10vh;
                background-color: #ccc;
                text-align: center;
            }

            main {
                display: flex;
                align-items: center;
                justify-content: center; 
                width: 100vw;
                height: 77vh;
                background-color: #fff;
                padding: 0; 
                margin: 0;
                
            }

        `
    ];

    render() {
        return html`
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot name="main"></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        `;
    }
}
customElements.define('auth-layout', AuthLayout);
