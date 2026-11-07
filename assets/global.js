function getFocusableElements(container){
  return Array.from(container.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), input:not([type=hidden]):enabled, select:enabled, textarea:enabled"));
}
const trapFocusHandlers={};
function trapFocus(container, elementToFocus=container){
  var elements=getFocusableElements(container);
  var first=elements[0], last=elements[elements.length-1];
  removeTrapFocus();
  trapFocusHandlers.focusin=(event)=>{
    if(event.target!==container&&event.target!==last&&event.target!==first) return;
    document.addEventListener('keydown',trapFocusHandlers.keydown);
  };
  trapFocusHandlers.focusout=function(){document.removeEventListener('keydown',trapFocusHandlers.keydown)};
  trapFocusHandlers.keydown=function(event){
    if(event.code.toUpperCase()!=='TAB') return;
    if(event.target===last&&!event.shiftKey){event.preventDefault();first.focus()}
    if((event.target===container||event.target===first)&&event.shiftKey){event.preventDefault();last.focus()}
  };
  document.addEventListener('focusout',trapFocusHandlers.focusout);
  document.addEventListener('focusin',trapFocusHandlers.focusin);
  elementToFocus.focus();
}
function removeTrapFocus(elementToFocus=null){
  document.removeEventListener('focusin',trapFocusHandlers.focusin);
  document.removeEventListener('focusout',trapFocusHandlers.focusout);
  document.removeEventListener('keydown',trapFocusHandlers.keydown);
  if(elementToFocus) elementToFocus.focus();
}
document.addEventListener('keyup',function(event){
  if(event.code.toUpperCase()!=='ESCAPE') return;
  const openDetails=event.target.closest('details[open]');
  if(!openDetails) return;
  const summary=openDetails.querySelector('summary');
  openDetails.removeAttribute('open');
  summary?.setAttribute('aria-expanded','false');
  summary?.focus();
});
window.Shopify=window.Shopify||{};
window.Shopify.routes=window.Shopify.routes||{};
window.Shopify.routes.root=window.routes?.root||'/';
