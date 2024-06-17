// Script JavaScript externo para lidar com modais e formulários

// Função para exibir modal de entrar ao clicar no botão Entrar
$('#modalEntrarBtn').click(function() {
    $('#modalEntrar').modal('show');
  });
  
  // Função para exibir modal de cadastrar ao clicar no botão Cadastrar
  $('#modalCadastrarBtn').click(function() {
    $('#modalCadastrar').modal('show');
  });
  
  // Evento de envio do formulário de entrar
  $('#formEntrar').submit(function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Aqui você pode adicionar a lógica para validar o login
    var email = $('#inputEmail').val();
    var senha = $('#inputSenha').val();
  
    // Exemplo simples de validação (simulado)
    if (email === 'usuario@example.com' && senha === 'senha123') {
      alert('Login realizado com sucesso!');
      $('#modalEntrar').modal('hide'); // Fecha o modal de entrar
      $('#inputEmail').val(''); // Limpa o campo email
      $('#inputSenha').val(''); // Limpa o campo senha
    } else {
      alert('Email ou senha incorretos. Tente novamente.');
    }
  });
  
  // Evento de envio do formulário de cadastrar
  $('#formCadastrar').submit(function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Aqui você pode adicionar a lógica para cadastrar o usuário
    var nome = $('#inputNome').val();
    var email = $('#inputEmailCadastro').val();
    var senha = $('#inputSenhaCadastro').val();
  
    // Exemplo simples de cadastro (simulado)
    alert('Cadastro realizado com sucesso!');
    $('#modalCadastrar').modal('hide'); // Fecha o modal de cadastrar
    $('#inputNome').val(''); // Limpa o campo nome
    $('#inputEmailCadastro').val(''); // Limpa o campo email
    $('#inputSenhaCadastro').val(''); // Limpa o campo senha
  });
  
  // Evento de envio do formulário de suporte
  $('#formSuporte').submit(function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Aqui você pode adicionar a lógica para enviar o email ao suporte
    var email = $('#inputSuporteEmail').val();
    var mensagem = $('#inputSuporteMensagem').val();
  
    // Exemplo simples de envio de email (simulado)
    alert('Email enviado com sucesso!');
    $('#modalSuporte').modal('hide'); // Fecha o modal de suporte
    $('#inputSuporteEmail').val(''); // Limpa o campo email
    $('#inputSuporteMensagem').val(''); // Limpa o campo mensagem
  });
  