class SearchModal extends HTMLElement{
  connectedCallback(){
    this.dialog=this.querySelector('.search-modal__dialog');
    this.input=this.querySelector('#Search-Modal-Input');
    document.querySelectorAll('[data-search-modal-open]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();this.open(btn)}));
    this.querySelectorAll('[data-search-modal-close]').forEach(el=>el.addEventListener('click',()=>this.close()));
    document.addEventListener('keyup',e=>{if(e.code==='Escape'&&!this.hasAttribute('hidden'))this.close()});
  }
  open(opener){this.opener=opener;this.removeAttribute('hidden');document.body.classList.add('overflow-hidden');this.input?.focus()}
  close(){this.setAttribute('hidden','');document.body.classList.remove('overflow-hidden');this.querySelector('predictive-search')?.close?.();this.opener?.focus()}
}
customElements.define('search-modal',SearchModal);
