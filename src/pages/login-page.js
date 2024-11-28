import { LitElement, html, css, nothing } from 'lit';
import { Router } from '@vaadin/router';
import '../components/login-component.js';
import '../components/alert-component.js';
import '../layouts/public-layout.js';


export class LoginPage extends LitElement {
    
    constructor() {
        super();
        this.alertType = '';
        this.alertMessage = '';
    }      
    
    static get properties() {
        return {
            alertType: { type: String },
            alertMessage: { type: String }
        };
    }

    handleLoginSuccess(event){
        this.alertType = 'success';
        this.alertMessage = 'Inicio de sesion exitoso!';

        setTimeout(() => {
            Router.go('/home');
        }, 300);
     }

    handleLoginError(event){
        this.alertType = 'error';
        this.alertMessage = 'Error al iniciar sesion.';
    }

    //Observador de eventos
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('login-success', this.handleLoginSuccess.bind(this));
        this.addEventListener('login-error', this.handleLoginError.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('login-success', this.handleLoginSuccess.bind(this));
        this.removeEventListener('login-error', this.handleLoginError.bind(this));
        super.disconnectedCallback();
    }
    
    
    static styles = [
        css`
            :host {
                display: flex;
                width: 100vw;
                justify-content: center;
                align-items: center;
                flex-direction: column; 
                font-family: Arial, sans-serif;
                text-align: center;
            }

            * {
                padding: 0;
                margin: 0;
            }
        `
    ];

    render() {
        return html` 
        <public-layout>
            <login-component></login-component>
            ${this.alertType 
                ? html`<alert-component .type=${this.alertType} .message=${this.alertMessage}></alert-component>` 
                : nothing 
            }
        </public-layout>
        `;
    }
}
customElements.define('login-page', LoginPage);
