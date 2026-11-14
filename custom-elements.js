// <x-center>: wraps its innerHTML in a div with inline style
class XCenter extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `<div style="text-align: center;">${this.innerHTML}</div>`;
  }
}
customElements.define("x-center", XCenter);

// <x-year>: fills itself with the current year
class XYear extends HTMLElement {
  connectedCallback() {
    this.innerHTML = new Date().getFullYear();
  }
}
customElements.define("x-year", XYear);