import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import "@dile/ui/components/nav/nav.js";
import "@dile/ui/components/menu-hamburger/menu-hamburger.js";

import "../layouts/auth-layout.js";
import { authMixin } from "../mixins/authMixin";

export class HomePage extends authMixin(LitElement) {
  static styles = [
    css`
      :host {
        width: 100%;
        --dile-nav-background-color: var(--primary-color, #464444);
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      p {
        color: #000;
      }

      button {
        width: 100%;
        padding: 8px;
        background: #2b211f;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #000;
      }

      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh; 
        font-size: 4rem; 
        color: #000;
        text-align: center; 
        opacity: 0;
        transform: translateY(50px); 
        animation: fadeInUp 1.5s ease-out forwards;
      }

      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(50px); 
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      dile-nav {
        background: #2c2626;
      }
    `,
  ];

  handleLogout() {
    const token = "neoToken";
    this.logout(token);
    Router.go("/");
  }

  render() {
    return html`
      <auth-layout>
        <dile-nav slot="header" menu="right">
          <h2 slot="title">Home page</h2>
          <button slot="actions" @click=${this.handleLogout}>Logout</button>
        </dile-nav>
        <h1 slot="main">Bienvenid@s</h1>
        <p slot="footer">Todos los derechos reservados a NEORIS S.A</p>
      </auth-layout>
    `;
  }
}
customElements.define("home-page", HomePage);
