import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

export class RouterApp extends LitElement {
    
    firstUpdated() {
        const router = new Router(this.shadowRoot.querySelector('#outlet'));

        // Verifica si el usuario está autenticado
        const isAuthenticated = () => !!localStorage.getItem('neoToken');

        // Guardia de rutas para manejar redirecciones según autenticación
        const authGuard = (context, commands) => {
            const userLoggedIn = isAuthenticated();
            const targetPath = context.pathname;

            if (userLoggedIn && targetPath === '/') {
                // Usuario logueado tratando de acceder a /login -> redirigir a /home
                return commands.redirect('/home');
            }

            if (!userLoggedIn && targetPath === '/home') {
                // Usuario no logueado tratando de acceder a /home -> redirigir a /login
                return commands.redirect('/');
            }

            // Permitir la navegación a la ruta solicitada
            return undefined;
        };

        router.setRoutes([
            { path: '/home', component: 'home-page', action: authGuard },
            { path: '/', component: 'login-page', action: authGuard },
        ]);
    }

    static styles = [
        css`
            :host {
                width: 100%;
            }
        `
    ];

    render() {
        return html`
            <div id="outlet"></div> <!-- Contenedor para los componentes de las rutas -->
        `;
    }
}

customElements.define('router-app', RouterApp);

