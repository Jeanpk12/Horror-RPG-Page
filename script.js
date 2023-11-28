let nomeUsuario = "";

  function checkEnter(event) {
    if (event.key === "Enter") {
      submitName();
    }
  }

  function submitName() {
    const inputNome = document.getElementById("nome-usuario");
    nomeUsuario = inputNome.value;

    // Esconder input e botão
    inputNome.classList.add("hidden");
    inputNome.value = "";
    document.querySelector('input[type="button"]').classList.add("hidden");

    // Atualizar h1 com saudação personalizada e cor vermelha
    const dialog = document.getElementById("dialog");
    dialog.innerHTML = `Olá, <span style="color: red;">${nomeUsuario}</span>. Posso ler a sua mão?`;

    // Exibir opções
    document.getElementById("option1").classList.remove("hidden");
    document.getElementById("option2").classList.remove("hidden");
  }

  function chooseOption(option) {
    // Esconder opções
    document.getElementById("option1").classList.add("hidden");
    document.getElementById("option2").classList.add("hidden");

    // Selecionar o elemento h1
    const dialog = document.getElementById("dialog");

    // Definir mensagens
    const messagesOption1 = [
      `Ah, ${nomeUsuario}, vejo corvos negros sobrevoando sua jornada. Cuidado com as penas que caem, pois cada uma carrega um fardo do seu destino.`,

      `Sinto a presença de sombras antigas ao seu redor, ${nomeUsuario}. Seu futuro é um livro antigo, com páginas desgastadas e palavras que sussurram segredos esquecidos.`,

      `Nas linhas da sua mão, ${nomeUsuario}, leio uma dança macabra. Cada movimento é uma dança com o desconhecido, e o destino aplaude em silêncio.`,

      `O eco dos suspiros do passado ressoa em sua aura, ${nomeUsuario}. Seu caminho é tecido com fios do tempo, e cada passo deixa uma marca na tapeçaria da sua existência.`,

      `Ah, ${nomeUsuario}, vejo uma lua oculta em sua sombra. Nas noites mais escuras, sua verdadeira natureza será revelada, e os lobos do destino uivarão em seu nome.`,

      `Nas chamas do destino, vislumbro reflexos distorcidos, ${nomeUsuario}. Cuidado com as chamas que dançam ao seu redor, pois o calor revela verdades que preferiríamos ignorar.`,

      `Seus olhos carregam o peso de muitas vidas, ${nomeUsuario}. Vejo reflexos de vidas passadas em seus sonhos, como espectros que clamam por redenção.`,

      `O vento sussurra segredos ao meu ouvido, ${nomeUsuario}. Seu destino é uma sinfonia de tempestades iminentes, e cada nota é uma escolha que ecoará na eternidade.`,

      `Em sua sombra, ${nomeUsuario}, vejo as marcas de escolhas não feitas. Cuidado com os fantasmas do que poderia ter sido, pois eles seguem seus passos como sombras famintas.`,

      `Sinto o pulsar de uma energia antiga ao seu redor, ${nomeUsuario}. Seu futuro é um enigma, uma linguagem esquecida que só os destemidos podem decifrar. Que os deuses tenham piedade da sua jornada.`
      // ... (outras mensagens opcionais 1)
    ];

    const messagesOption2 = [
      `${nomeUsuario}, tua insolência despertou entidades sombrias que se alimentarão do teu tormento eterno.`,
      `${nomeUsuario}, a arrogância te tece uma mortalha de agonia, onde cada suspiro será um gemido ecoando no vazio da tua alma.`,
      `${nomeUsuario}, tua soberba atraiu espectros famintos que devorarão teus sonhos, deixando apenas pesadelos macabros.`,
      `${nomeUsuario}, a maldição da tua altivez abrirá portas para abismos insondáveis, onde criaturas indizíveis te aguardam.`,
      `${nomeUsuario}, teu desprezo acendeu uma chama negra que consumirá tua luz, mergulhando-te em uma escuridão eterna.`,
      `${nomeUsuario}, a arrogância plantou sementes de desespero que germinarão em horrores grotescos, alimentando-se da tua angústia.`,
      `${nomeUsuario}, tua presunção selou um pacto sinistro, onde teu destino se entrelaça com sombras que não têm piedade.`,
      `${nomeUsuario}, a maldição da tua altivez ecoará em cada grito teu, enquanto as sombras dançam ao redor do teu desespero.`,
      `${nomeUsuario}, a sombra da tua soberba será um fardo insuportável, um espectro que te assombrará até o último suspiro.`,
      `${nomeUsuario}, tua vaidade desencadeou uma tempestade de desgraças, onde o clamor dos teus lamentos será a trilha sonora da tua eterna agonia.`
      // ... (outras mensagens opcionais 2)
    ];

    // Limpar o conteúdo atual do h1
    dialog.textContent = "";

    // Escolher aleatoriamente uma mensagem do array correspondente à opção selecionada
    const messages = option === 1 ? messagesOption1 : messagesOption2;
    typeWriter(messages[Math.floor(Math.random() * messages.length)], dialog, 0);

    // Alterar a imagem se a opção for 2
    if (option === 2) {
      const thunderAudio = document.getElementById("thunder");
      thunderAudio.play();
      containerRpg.classList.add("thunder");
      mysticImage.classList.add("liquid-transition");
      document.getElementById("mysticImage").src = "ilustracao2.png";
      
    setTimeout(() => {
      mysticImage.classList.remove("liquid-transition");
    }, 500); 
    setTimeout(() => {
      containerRpg.classList.remove("thunder");
    }, 500); 
    }
  }
  

  function typeWriter(text, element, index) {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(() => typeWriter(text, element, index), 50);
    }
  }

  function startAudio() {
    const audio = document.getElementById('backgroundAudio');
    audio.play();
    document.body.removeEventListener('click', startAudio);
  }

  document.body.addEventListener('click', startAudio);