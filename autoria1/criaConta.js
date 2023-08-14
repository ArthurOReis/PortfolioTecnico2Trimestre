function validarNome(nome) {
    return /^[a-zA-Z]{3,}$/.test(nome); // Verifica se o nome tem três ou mais caracteres e não contém caracteres especiais ou numéricos
  }
  
  function validarSenha(senha) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(senha); // Verifica se a senha tem no oito caracteres, um caractere especial e um número
  }
  
  function criarConta(nome, senha) {
    const nomeValido = validarNome(nome);
    const senhaValida = validarSenha(senha);
  
    if (nomeValido && senhaValida) {
      return "Conta registrada com sucesso!";
    } else if (!nome && !senha) {
      return "Favor colocar nome e senha válidos.";
    } else {
      return "Nome ou Senha incorreta";
    }
  }
  
  // Exemplos de usuários:
  console.log(criarConta("Usuario", "Senha@123"));  // Deve imprimir "Conta registrada com sucesso!"
  console.log(criarConta("Usu", "Senha123"));       // Deve imprimir "Nome ou Senha incorreta"
  console.log(criarConta("Usuario", "Senha123"));   // Deve imprimir "Nome ou Senha incorreta"
  console.log(criarConta("Usuario", "Senha@"));     // Deve imprimir "Nome ou Senha incorreta"
  console.log(criarConta("", ""));                 // Deve imprimir "Favor colocar nome e senha válidos."  