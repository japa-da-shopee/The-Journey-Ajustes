const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Depois de brilhar no torneio regional juvenil, Alex recebe duas propostas. Qual clube Alex escolhe para começar sua carreira profissional?",
        alternativas: [
            {
                texto: "PSG, um grande clube europeu que oferece fama e visibilidade imediata.",
                afirmacao: [
                    "Alex Hunter iniciou sua carreira no PSG, com grande fama e visibilidade.",
                    ""
                ]
            },
            {
                texto: "Aston Villa, um clube tradicional inglês de base sólida, onde poderá se desenvolver com calma.",
                afirmacao: [
                    "Alex Hunter iniciou sua carreira no Aston Villa, onde desenvolveu com calma seu futebol.",
                    ""
                ]
            }
        ]
    },
    {
        enunciado: "Alex começa a treinar com o time profissional. Seu desempenho o coloca no radar da comissão técnica. Alex aceita ser reserva em jogos importantes ou exige ser titular?",
        alternativas: [
            {
                texto: "Exige a titularidade, mesmo arriscando desagradar a equipe.",
                afirmacao: ["Com um início conturbado, consegue a titularidade na equipe.",
                    ""
                ]

            },
            {
                texto: "Aceita o banco com humildade, prometendo provar seu valor com trabalho.",
                afirmacao: ["Mostra seu valor e humildade, evoluindo através do trabalho.",
                ""
            ]
            }
        ]
    },
    {
        enunciado: "Após alguns meses, Alex recebe uma proposta para se transferir para o Barcelona, um grande clube da elite. Alex aceita a transferência ou permanece para terminar a temporada?",
        alternativas: [
            {
                texto: "Aceita a proposta e se transfere, buscando subir rápido.",
                afirmacao: ["Se transfere para o Barcelona, evoluindo cada vez mais.",
                ""
            ]
            },
            {
                texto: "Fica no clube atual por lealdade e para amadurecer.",
                afirmacao: ["Mostra lealdade ao seu clube, buscando sempre amadurecer.",
                ""
            ]
            }
        ]
    },   
    {
        enunciado: "Alex é convocado para defender sua seleção nacional em amistosos. Ele aceita a convocação, mesmo perdendo jogos no clube, ou recusa para focar na temporada?",
        alternativas: [
            {
                texto: "Vai para a seleção, sonhando com uma Copa do Mundo.",
                afirmacao: ["Vai para a seleção, onde disputa sua primeira copa do mundo.",
                ""
            ]
            },
            {
                texto: "Recusa para focar na titularidade no clube.",
                afirmacao: ["Prefere ficar no clube, mesmo no período de copa do mundo, para firmar sua titularidade.",
                ""
            ]
            }
        ]
    },
          
    {
        enunciado: "Com a fama chegando, Alex é procurado por marcas e influenciadores. Ele escolhe virar um símbolo midiático ou manter uma imagem discreta?",
        alternativas: [
            {
                texto: "Torna-se influenciador",
                afirmacao: ["No final da carreira, torna-se influenciador, onde alcança fama e visibilidade.",
                ""
            ]
            },
            {
                texto: "Se mantém discreto, focando no futebol e na família.",
                afirmacao: ["Recusa o convite de grandes marcas e segue focado no futebol e em sua família.",
                ""
            ]
            }
        ]
    },   
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2047...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();








