import { LitElement, html, css } from 'lit';
import { authMixin } from '../mixins/auth-mixin';
import { Router } from '@vaadin/router';

export class LoginComponent extends authMixin(LitElement) {
    
    constructor() {
        super();
        this.initProperties();
        this.checkAuthStatus(); //Verifica si el usuario ya está autenticado al cargar el componente
    }
    
    static get properties() {
        return {
            email: { type: String },
            password: { type: String }
        };
    }
    
    static styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                gap: 16px;
                align-items: center;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 8px;
                width: 400px; 
                max-width: 100%;
                border: 1px solid #ccc;
                border-radius: 8px;
                box-shadow: 0 0 8px rgba(0,0,0,0.1);
                padding: 16px;
                align-items: center;
            }

            form h2 {
                text-align: center;
                color: #fff;
                margin-bottom: 20px;
            }

            .form-group {
                margin-bottom: 15px;
            }

            .form-group label {
                display: block;
                font-size: 14px;
                font-weight: bold;
                color: #fff;
                margin-bottom: 5px;
                text-align: left; 
            }

            .form-group input {
                width: 100%;
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ddd;
                border-radius: 5px;
                outline: none;
                transition: border-color 0.3s;
            }

            input[type="email"],
            input[type="password"] {
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }

            button {
                width: 80%;
                padding: 8px;
                background-color: #4C90FF;
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s;
            }

            button:hover {
                background-color: #3a7cc3;
            }
        `
    ];

    handleSubmit(event) {
        event.preventDefault();
        const email = this.shadowRoot.getElementById('email').value;
        const password = this.shadowRoot.getElementById('password').value;

        this.login(email, password);
        this.initProperties();
    }

    initProperties() {
        this.email = '';
        this.password = '';
    }

    dispatchCustomEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true, //Asciende a lo largo del DOM
            composed: true //Puede salir del shadow DOM
        });

        this.dispatchEvent(event); //Lanzamos el evento
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this[name] = value; //Actualiza el valor dependiendo del input al que se le este apuntando 
        
    }

    render() {
        return html`
        <form @submit=${this.handleSubmit}> 
                <h2>Iniciar Sesión</h2>
                <div class="form-group">
                    <input type="email" id="email" name="email" .value=${this.email} @input=${this.handleInputChange} required placeholder="Ingresa tu email">
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" .value=${this.password} @input=${this.handleInputChange} required placeholder="Ingresa tu contraseña">
                </div>
                <button type="submit">Login</button>
        </form>
        `;
    }
}
customElements.define('login-component', LoginComponent);
