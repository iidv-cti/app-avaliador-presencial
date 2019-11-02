let core = {};

core.init = function(){
}


core.setView = function(viewIdentifier){
  core.loadView(core.routes[viewIdentifier].viewName, core.routes[viewIdentifier].controller)
} 

core.loadView = function(viewName, controller){

  $( "#rootFrame" )
  .attr( 'src', './views/'+viewName+'.view.html' )
  
  setTimeout(function(){
    $("#root").html(localStorage.getItem("html_global"));
    
    $("#controllerScript")
    .attr('src', './controllers/'+controller+'.controller.js');  
  }, 200);
}

core.setAuth = function(){
  localStorage.setItem('auth', true);
}

core.setupEndpoint = function(src){
  return {
    post: (data) => {
      return new Promise((success, error) => {
        $.post(src, data, (res) => {
          success(res);
        });
      })
    },
    
    get: (data) => {
      return new Promise((success, error) => {
        $.get(src, data, (res) => {
          success(res);
        });
      })
    }
  }
}
