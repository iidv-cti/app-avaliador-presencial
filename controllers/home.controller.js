(function(){
  
  $("#login").on("click", function(){
    let cpf = $("#userCPF").val();
    let password = $("#userPassword").val();

    let data = {
      cpf: cpf,
      senha: password
    }

    endpoints.pdvagro2019.userAuth
    .post(data)
    .then(function(res){
      core.setAuth();
      core.setView("painel");
    })
  });

})()