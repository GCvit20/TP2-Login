export const authMixin = (SuperClass) => class extends SuperClass {

    constructor() {
        super();
        this.usuarioAutenticado = false; 
    }
    
    checkAuthStatus() {
        const token = localStorage.getItem('neoToken');
        if (token) {
            this.usuarioAutenticado = true;
        } else {
            this.usuarioAutenticado = false;
        }
    }
    
    
    login(email, password) {
        
        if (email === 'admin@gmail.com' && password === 'admin') {
            const token = 'neoToken'; 
            localStorage.setItem('neoToken', token);
            this.usuarioAutenticado = true;
            this.dispatchCustomEvent('login-success', { message: 'Inicio de sesión exitoso' });
        } else {
            this.dispatchCustomEvent('login-error', { message: 'Credenciales incorrectas' });
        }
    }

    logout() {
        localStorage.removeItem('neoToken');
        this.usuarioAutenticado = false;
    }
s
    dispatchCustomEvent(eventName, detail) {
        const event = new CustomEvent(eventName, {
            detail,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }

};
