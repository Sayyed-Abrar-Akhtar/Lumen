class StickyAddToCart extends HTMLElement{
  connectedCallback(){
    this.submitBtn=this.querySelector('[data-sticky-atc-submit]');
    this.variantSelect=this.querySelector('[data-sticky-atc-variant]');
    this.submitBtn?.addEventListener('click',()=>this.add());
    this.variantSelect?.addEventListener('change',()=>{const main=document.querySelector('form[data-type="add-to-cart-form"] [name="id"]');if(main){main.value=this.variantSelect.value;main.dispatchEvent(new Event('change',{bubbles:true}))}});
    this.trigger=document.querySelector(this.dataset.triggerSelector||'.product-form__submit');
    window.addEventListener('scroll',()=>this.update(),{passive:true});
    this.update();
  }
  update(){if(!this.trigger)return;const show=this.trigger.getBoundingClientRect().bottom<0;this.classList.toggle('is-visible',show);if(show)this.removeAttribute('hidden')}
  add(){
    const main=document.querySelector('form[data-type="add-to-cart-form"] [name="id"]');
    const id=this.variantSelect?.value||main?.value;if(!id)return;
    this.submitBtn.disabled=true;
    fetch(`${routes.cart_add_url}.js`,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({id:Number(String(id).replace(/\D/g,''))||id,quantity:1,sections:['cart-drawer','cart-icon-bubble'],sections_url:location.pathname})})
      .then(r=>r.json()).then(res=>{const d=document.querySelector('cart-drawer');if(d)d.renderContents(res);else location=routes.cart_url}).catch(console.error).finally(()=>{this.submitBtn.disabled=false});
  }
}
customElements.define('sticky-add-to-cart',StickyAddToCart);
