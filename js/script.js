let index;
let acontecimento;
let score = 0;
let eventosConst = [
    {
        "titulo": "A queda do Muro de Berlim",
        "descricao": "Evento histórico que simbolizou o fim da Guerra Fria e o início da dissolução da União Soviética.",
        "ano": 1989,
        "tolerancia": 10,
        "foto": "./assets/imgs/quedaBerlim.jpeg"
    },
    {
        "titulo": "Queda do Império Romano do Ocidente",
        "descricao": "Marca o colapso do Império Romano do Ocidente e o início da Idade Média na Europa.",
        "ano": 476,
        "tolerancia": 100,
        "foto": "./assets/imgs/imperioOcidente.jpeg"
    },
    {
        "titulo": "Invasão muçulmana da Península Ibérica",
        "descricao": "Início da conquista muçulmana na Península Ibérica, que durou até o final da Reconquista.",
        "ano": 711,
        "tolerancia": 100,
        "foto": "./assets/imgs/invasaoMulcumano.jpeg"
    },
    {
        "titulo": "Queda de Constantinopla",
        "descricao": "A conquista de Constantinopla pelos turcos otomanos, marcando o fim do Império Bizantino.",
        "ano": 1453,
        "tolerancia": 100,
        "foto": "./assets/imgs/quedaConstantinopla.jpeg"
    },
    {
        "titulo": "Descobrimento da América",
        "descricao": "A chegada de Cristóvão Colombo às Américas, um marco na era das descobertas e no contato entre o Velho e o Novo Mundo.",
        "ano": 1492,
        "tolerancia": 10,
        "foto": "./assets/imgs/descobrimentoAmerica.jpeg"
    },
    {
        "titulo": "Revolução Francesa",
        "descricao": "Revolução que derrubou a monarquia absolutista e estabeleceu a República Francesa.",
        "ano": 1789,
        "tolerancia": 20,
        "foto": "./assets/imgs/revolucaoFrancesa.jpeg"
    },
    {
        "titulo": "Independência dos Estados Unidos",
        "descricao": "Declaração de independência das treze colônias americanas do domínio britânico.",
        "ano": 1776,
        "tolerancia": 20,
        "foto": "./assets/imgs/independenciaEUA.jpeg"
    },
    {
        "titulo": "Início da Primeira Guerra Mundial",
        "descricao": "O conflito global que começou com o assassinato do arquiduque Francisco Ferdinando e envolveu as principais potências mundiais.",
        "ano": 1914,
        "tolerancia": 5,
        "foto": "./assets/imgs/inicioPrimeiraGuerra.jpeg"
    },
    {
        "titulo": "Fim da Primeira Guerra Mundial",
        "descricao": "O término da Primeira Guerra Mundial com o Tratado de Versalhes e o estabelecimento de novas fronteiras na Europa.",
        "ano": 1918,
        "tolerancia": 5,
        "foto": "./assets/imgs/fimPrimeiraGuerra.jpeg"
    },
    {
        "titulo": "Revolução Russa",
        "descricao": "Revolução que resultou na derrubada do Império Russo e na formação da União Soviética.",
        "ano": 1917,
        "tolerancia": 20,
        "foto": "./assets/imgs/revolucaoRussa.jpeg"
    },
    {
        "titulo": "Início da Segunda Guerra Mundial",
        "descricao": "A eclosão do segundo conflito global, iniciado com a invasão da Polônia pela Alemanha nazista.",
        "ano": 1939,
        "tolerancia": 3,
        "foto": "./assets/imgs/inicioSegundaGuerra.jpeg"
    },
    {
        "titulo": "Fim da Segunda Guerra Mundial",
        "descricao": "O término da Segunda Guerra Mundial com a rendição incondicional das potências do Eixo.",
        "ano": 1945,
        "tolerancia": 3,
        "foto": "./assets/imgs/fimSegundaGuerra.jpeg"
    },
    {
        "titulo": "Início da Guerra Fria",
        "descricao": "O período de tensão política e militar entre os blocos liderados pelos Estados Unidos e pela União Soviética.",
        "ano": 1947,
        "tolerancia": 5,
        "foto": "./assets/imgs/inicioGuerraFria.jpeg"
    },
    {
        "titulo": "Fim da Guerra Fria",
        "descricao": "O colapso do bloco soviético e o fim das tensões entre os superpoderes ocidental e oriental.",
        "ano": 1991,
        "tolerancia": 5,
        "foto": "./assets/imgs/fimGuerraFria.jpeg"
    },
    {
        "titulo": "Chegada do Homem à Lua",
        "descricao": "A missão Apollo 11 da NASA que levou os primeiros humanos à superfície lunar.",
        "ano": 1969,
        "tolerancia": 5,
        "foto": "./assets/imgs/homemLua.jpeg"
    },
    {
        "titulo": "Descobrimento do Brasil",
        "descricao": "A chegada de Pedro Álvares Cabral ao território que viria a ser o Brasil.",
        "ano": 1500,
        "tolerancia": 3,
        "foto": "./assets/imgs/descobrimentoBrasil.jpeg"
    },
    {
        "titulo": "Inconfidência Mineira",
        "descricao": "Movimento separatista que buscava a independência de Minas Gerais do domínio português.",
        "ano": 1789,
        "tolerancia": 30,
        "foto": "./assets/imgs/inconfidenciaMineira.jpeg"
    },
    {
        "titulo": "Independência do Brasil",
        "descricao": "A declaração de independência do Brasil do domínio português, liderada por Dom Pedro I.",
        "ano": 1822,
        "tolerancia": 30,
        "foto": "./assets/imgs/independenicaBrasil.jpeg"
    },
    {
        "titulo": "Abdicação de Dom Pedro I",
        "descricao": "Renúncia de Dom Pedro I ao trono do Brasil em favor de seu filho, Dom Pedro II.",
        "ano": 1831,
        "tolerancia": 30,
        "foto": "./assets/imgs/abdicacaoDPedro.jpeg"
    },
    {
        "titulo": "Início da Guerra do Paraguai",
        "descricao": "O início do conflito entre o Brasil, Argentina e Uruguai contra o Paraguai.",
        "ano": 1864,
        "tolerancia": 30,
        "foto": "./assets/imgs/inicioGuerraParaguai.jpeg"
    },
    {
        "titulo": "Fim da Guerra do Paraguai",
        "descricao": "O término do conflito com a assinatura do Tratado de Assunção.",
        "ano": 1870,
        "tolerancia": 30,
        "foto": "./assets/imgs/fimGuerraParaguai.jpeg"
    },
    {
        "titulo": "Proclamação da República",
        "descricao": "O evento que marcou o fim do Império e a instalação da República no Brasil.",
        "ano": 1889,
        "tolerancia": 15,
        "foto": "./assets/imgs/proclamacaoRepublica.jpeg"
    },
    {
        "titulo": "Início da Era Vargas",
        "descricao": "A ascensão de Getúlio Vargas ao poder e o início de seu governo com a implementação do Estado Novo.",
        "ano": 1930,
        "tolerancia": 10,
        "foto": "./assets/imgs/inicioEraVargas.jpeg"
    },
    {
        "titulo": "Fim da Era Vargas",
        "descricao": "O término do governo de Getúlio Vargas e a transição para a nova república.",
        "ano": 1945,
        "tolerancia": 10,
        "foto": "./assets/imgs/fimEraVargas.jpeg"
    },
    {
        "titulo": "Início da Ditadura Militar",
        "descricao": "O início do regime militar no Brasil.",
        "ano": 1964,
        "tolerancia": 5,
        "foto": "./assets/imgs/inicioDitadura.jpeg"
    },
    {
        "titulo": "Fim da Ditadura Militar",
        "descricao": "A transição para a democracia e o fim do regime militar no Brasil.",
        "ano": 1985,
        "tolerancia": 10,
        "foto": "./assets/imgs/redemocratizacaoBrasil.jpeg"
    },
    {
        "titulo": "Redemocratização do Brasil",
        "descricao": "O processo de retorno à democracia após o fim da ditadura militar e a implementação de novas instituições democráticas.",
        "ano": 1985,
        "tolerancia": 10,
        "foto": "./assets/imgs/redemocratizacaoBrasil.jpeg"
    }
]
let eventos = [...eventosConst]

function paginaCarregada() {
    index = Math.floor(Math.random() * 27);
    acontecimento = eventos[index];
    document.getElementById("img").src = acontecimento.foto;
    document.getElementById("description").innerText = acontecimento.descricao;
    document.getElementById("title").innerText = acontecimento.titulo;
    document.getElementById("resposta").value = "";
    document.getElementById("score-point").innerText = score;
    document.getElementById("score-point-2").innerText = score;
}
function verificar() {
    const closeButton = document.querySelector("dialog button");
    const modal = document.querySelector("dialog");
    const titleModal = document.querySelector("dialog h1");
    const textModal = document.querySelector("dialog p");
    const imgModal = document.querySelector("dialog img");

    resposta = parseInt(document.getElementById("resposta").value);
    if (isNaN(resposta)) {
        imgModal.src = "./assets/gifs/warning.gif";
        titleModal.innerText = "Valor Inválido!";
        textModal.innerText = "";
        closeButton.innerText = "Tente Novamente";
        modal.showModal();
    } else {
        diferenca = resposta - acontecimento.ano;
        diferenca = Math.abs(diferenca);
        if (diferenca <= acontecimento.tolerancia && diferenca > 0) {
            imgModal.src = "./assets/gifs/almost.gif";
            titleModal.innerText = "Você Quase Acertou!";
            deletar(acontecimento);
            textModal.innerText = `A resposta certa é ${acontecimento.ano}, mas você pode continuar o jogo.`;
            closeButton.innerText = "Continuar";
            modal.showModal();
            score += 5;
            paginaCarregada();
        } else if (diferenca == 0) {
            imgModal.src = "./assets/gifs/win.gif";
            titleModal.innerText = "Você Acertou a Data Exata!";
            textModal.innerText = "";
            deletar(acontecimento);
            closeButton.innerText = "Continuar";
            modal.showModal();
            score += 10;
            paginaCarregada();
        } else if (diferenca > acontecimento.tolerancia) {
            imgModal.src = "./assets/gifs/fail.gif";
            titleModal.innerText = "Você Errou!";
            textModal.innerText = "";
            closeButton.innerText = "Tente Novamente";
            modal.showModal();
            eventos = [...eventosConst]
            console.log(eventos);
            score = 0;
            paginaCarregada();
        }
    }
    closeButton.onclick = function() {
        modal.close();
    };
}
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        verificar();
    }
});

function deletar(acontecimento) {
    const index = eventos.indexOf(acontecimento);
    eventos.splice(index, 1);
    console.log(eventos);
}