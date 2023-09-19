function confirmarEntrada() {
    const nome = document.getElementById('nome').value;
    if (nome.trim() !== '') {
      // Armazena o nome na sessão
      sessionStorage.setItem('nomeJogador', nome);
  
      // Exibe a tela de confirmação
      document.getElementById('tela1').style.display = 'none';
      document.getElementById('tela2').style.display = 'block';
      document.getElementById('mensagemBoasVindas').innerText = `Bem-vindo, ${nome}!`;
    } else {
      alert('Por favor, insira um nome válido.');
    }
  }
  
  function iniciarJogo() {
    // Aqui você pode adicionar a lógica para iniciar o jogo
    const nomeJogador = sessionStorage.getItem('nomeJogador');
    alert(`O jogo está prestes a começar para ${nomeJogador}!`);
    // Adicione a lógica para iniciar o jogo conforme necessário
  }
  