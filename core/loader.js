
$(function(){
  core.init();
  let atualLocation = 1 in window.location.hash.split('#') ? window.location.hash.split('#')[1] : '';
  if(!core.routes[atualLocation]) console.error("[FSM] Erro ao carregar tela.");
  else core.loadView(core.routes[atualLocation].viewName,core.routes[atualLocation].controller);
});